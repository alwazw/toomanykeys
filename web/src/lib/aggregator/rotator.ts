import { prisma } from "../prisma";
import { decryptKey } from "../security/encryption";

export class KeyRotator {
  private userId: string;

  constructor(userId: string) {
    this.userId = userId;
  }

  async getNextKey(provider?: string): Promise<{ key: string; provider: string } | null> {
    const universalKey = await prisma.universalMasterKey.findUnique({
      where: { userId: this.userId },
      include: {
        providerKeys: {
          where: { isActive: true },
          orderBy: { priority: "asc" },
          include: {
            apiKeys: {
              where: { isActive: true },
              orderBy: { lastUsedAt: "asc" },
            }
          }
        }
      }
    });

    if (!universalKey || universalKey.providerKeys.length === 0) return null;

    let providerKeys = universalKey.providerKeys;
    if (provider) {
      providerKeys = providerKeys.filter((pk: any) => pk.provider.toLowerCase() === provider.toLowerCase());
    }

    for (const pk of providerKeys) {
      const availableKey = pk.apiKeys.find((ak: any) => {
        if (!ak.rateLimitedUntil) return true;
        return new Date() > ak.rateLimitedUntil;
      });

      if (availableKey) {
        // Decrypt key for use (Bitcoin-grade security with AES-256-GCM)
        const decryptedKey = decryptKey({
          encryptedKey: availableKey.encryptedKey,
          iv: availableKey.keyIv,
          authTag: availableKey.keyAuthTag
        });

        await prisma.apiKey.update({
          where: { id: availableKey.id },
          data: { lastUsedAt: new Date() }
        });

        return {
          key: decryptedKey,
          provider: pk.provider
        };
      }
    }

    return null;
  }
}
