"use client";

import { motion } from "framer-motion";
import { Key, Zap, Shield, ArrowRight, Globe, Lock, Users } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

export default function LandingPage() {
  const { data: session } = useSession() || { data: null };

  return (
    <div className="min-h-screen bg-dashboard-slate text-white selection:bg-unlimited-green/30">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="bg-accelerator-blue p-2 rounded-lg">
            <Key className="w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight">Too Many Keys</span>
        </div>
        <div className="flex items-center space-x-6">
          {session ? (
            <Link
              href="/dashboard"
              className="bg-accelerator-blue hover:bg-accelerator-dark px-6 py-2 rounded-full font-medium transition-colors"
            >
              Dashboard
            </Link>
          ) : (
            <button
              onClick={() => signIn()}
              className="bg-accelerator-blue hover:bg-accelerator-dark px-6 py-2 rounded-full font-medium transition-colors"
            >
              Get Started
            </button>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-accelerator-blue/10 border border-accelerator-blue/20 px-3 py-1 rounded-full text-accelerator-blue text-xs font-bold uppercase tracking-widest mb-6">
              <Zap className="w-3 h-3" />
              <span>Powered by OmniRoute</span>
            </div>
            <h1 className="text-6xl font-extrabold leading-tight mb-6">
              One Key, <br />
              <span className="text-unlimited-green italic">Zero Pit Stops.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-lg leading-relaxed">
              Don't let rate limits kill your momentum. Aggregate your free-tier keys into a single
              <strong> Universal Master Key</strong>. Powered by the OmniRoute engine for
              unbeatable fallback and throughput.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => signIn()}
                className="flex items-center justify-center space-x-2 bg-accelerator-blue hover:bg-accelerator-dark px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105"
              >
                <span>Deploy Universal Key</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 px-8 py-4 rounded-xl font-bold text-lg transition-all">
                <Globe className="w-5 h-5 text-slate-400" />
                <span>Join Community Pool</span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-accelerator-blue to-unlimited-green rounded-3xl blur opacity-25"></div>
            <div className="relative bg-dashboard-card p-10 rounded-3xl border border-slate-700/50 shadow-2xl">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-widest text-slate-500">Distance vs. Speed vs. Cooldown</span>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Standard Free Key (Speed Cap)</span>
                    <span className="text-red-400 text-sm font-bold">STALLED</span>
                  </div>
                  <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "20%" }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                      className="bg-red-500 h-full"
                    />
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="h-10 w-[2px] bg-slate-800"></div>
                </div>

                <div className="p-6 bg-slate-800/50 rounded-2xl border border-accelerator-blue/30 shadow-[0_0_20px_rgba(0,112,243,0.1)]">
                  <div className="flex justify-between mb-4">
                    <span className="text-sm font-bold text-accelerator-blue">Universal Key (Unlimited Relay)</span>
                    <span className="text-unlimited-green text-sm font-bold">100% THROTTLE</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 h-2 mb-4">
                    {[0.9, 0.7, 0.95, 0.8].map((v, i) => (
                      <div key={i} className="bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${v * 100}%` }}
                          transition={{ duration: 1, delay: i * 0.2, repeat: Infinity, repeatType: "mirror" }}
                          className="bg-unlimited-green h-full"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-slate-500 italic">"When one key hits a cooldown pit stop, OmniRoute seamlessly switches to the next car in the relay."</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Narrative Features */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Hierarchical Governance",
              desc: "G1, G2 keys converge into Provider Master Keys. All M-keys fuel your single MU.",
              icon: <Key className="w-8 h-8 text-accelerator-blue" />
            },
            {
              title: "Bitcoin-Grade Security",
              desc: "AES-256-GCM encryption and TLS fingerprint spoofing protect your assets.",
              icon: <Lock className="w-8 h-8 text-unlimited-green" />
            },
            {
              title: "Community Pool",
              desc: "Donate unused distance to the reserve and earn 'High-Throughput' status.",
              icon: <Users className="w-8 h-8 text-purple-500" />
            }
          ].map((f, i) => (
            <motion.div
              key={i}
              className="p-8 bg-dashboard-card rounded-2xl border border-slate-800"
            >
              <div className="mb-6">{f.icon}</div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-slate-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
