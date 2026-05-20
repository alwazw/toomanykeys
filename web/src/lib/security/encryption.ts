import crypto from "crypto";

const ALGORITHM = "aes-256-gcm";
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || "your-32-character-secret-key-here-!!!"; // Must be 32 chars

export function encryptKey(text: string) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(ALGORITHM, Buffer.from(ENCRYPTION_KEY), iv);

  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");

  const authTag = cipher.getAuthTag().toString("hex");

  return {
    encryptedKey: encrypted,
    iv: iv.toString("hex"),
    authTag: authTag
  };
}

export function decryptKey(encryptedData: { encryptedKey: string; iv: string; authTag: string }) {
  const decipher = crypto.createDecipheriv(
    ALGORITHM,
    Buffer.from(ENCRYPTION_KEY),
    Buffer.from(encryptedData.iv, "hex")
  );

  decipher.setAuthTag(Buffer.from(encryptedData.authTag, "hex"));

  let decrypted = decipher.update(encryptedData.encryptedKey, "hex", "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
}
