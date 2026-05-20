"use client";

import { motion } from "framer-motion";
import { Zap, Key, ArrowUpRight, Activity, TrendingUp, Clock, AlertCircle, Globe, ShieldCheck } from "lucide-react";
import { ConsolidationVisualizer } from "@/components/animations/ConsolidationVisualizer";

export default function DashboardHub() {
  const stats = [
    { label: "Aggregated Quota Remaining", value: "18.4km", sub: "of 20km total", color: "text-unlimited-green", icon: TrendingUp },
    { label: "Current Throughput", value: "125 req/m", sub: "High Performance", color: "text-accelerator-blue", icon: Zap },
    { label: "Community Pool Share", value: "4.2%", sub: "+0.8% donated", color: "text-purple-500", icon: Globe },
    { label: "Security Status", value: "AES-256", sub: "Bitcoin-Grade", color: "text-unlimited-green", icon: ShieldCheck },
  ];

  return (
    <div className="max-w-6xl mx-auto pb-20">
      <header className="mb-12">
        <h1 className="text-3xl font-bold mb-2">Governance Hub</h1>
        <p className="text-slate-400 text-sm">Monitoring your Universal Master Key ($) relay system.</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-dashboard-card p-6 rounded-2xl border border-slate-800"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg bg-slate-800 ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-sm font-medium text-slate-500 mb-1">{stat.label}</h3>
            <p className="text-2xl font-bold tracking-tight mb-1">{stat.value}</p>
            <p className="text-xs text-slate-500">{stat.sub}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-dashboard-card rounded-2xl border border-slate-800 p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Activity className="w-5 h-5 text-accelerator-blue" />
                Aggregated Speed vs. Provider Limits
              </h2>
            </div>

            <ConsolidationVisualizer />

            <div className="mt-12 flex flex-wrap gap-6 border-t border-slate-800 pt-8">
              <div className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
                 <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Dashboard Mirror:</div>
                 <div className="flex items-center gap-2 text-xs font-bold text-red-400">
                    <span>Raw: 10 RPM</span>
                 </div>
                 <div className="w-4 h-[1px] bg-slate-700"></div>
                 <div className="flex items-center gap-2 text-xs font-bold text-unlimited-green">
                    <span>Aggregated: 150 RPM</span>
                 </div>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <div className="bg-dashboard-card rounded-2xl border border-slate-800 p-6">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-purple-500" />
              Community Pool (V2)
            </h3>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              You are currently donating <strong>1.5M tokens/day</strong> of unused Gemini quota to the reserve.
            </p>
            <button className="w-full bg-slate-800 hover:bg-slate-700 py-3 rounded-xl text-sm font-bold border border-slate-700">
              Manage Donation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
