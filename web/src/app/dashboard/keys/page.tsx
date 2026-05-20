"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Key, ChevronRight, MoreVertical, Trash2, Edit2, Zap, LayoutGrid, List, Lock, Globe } from "lucide-react";

export default function KeyManagement() {
  const [activeTab, setActiveTab] = useState<"master" | "universal">("master");

  const providerKeys = [
    {
      id: "1",
      provider: "Gemini",
      name: "Google Free Tier Bundle",
      isActive: true,
      priority: 1,
      rawSpeed: "15 RPM",
      rawDistance: "1.5M/day",
      apiKeys: [
        { id: "g1", name: "Gemini Pro 1.5 - Personal", isActive: true, inPool: true },
        { id: "g2", name: "Gemini Flash - Project A", isActive: true, inPool: false },
      ]
    },
    {
      id: "2",
      provider: "Anthropic",
      name: "Claude Individual Keys",
      isActive: true,
      priority: 2,
      rawSpeed: "5 RPM",
      rawDistance: "100k/day",
      apiKeys: [
        { id: "a1", name: "Claude 3.5 Sonnet", isActive: true, inPool: false },
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto pb-20">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-3xl font-bold mb-2">Governance Center</h1>
          <p className="text-slate-400 text-sm">Manage your M-Key Hierarchy and Community Pool contributions.</p>
        </div>

        <div className="flex bg-dashboard-card p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab("master")}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === "master" ? "bg-slate-800 text-white shadow-lg" : "text-slate-500 hover:text-slate-300"}`}
          >
            M-Key Mapping
          </button>
          <button
            onClick={() => setActiveTab("universal")}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === "universal" ? "bg-slate-800 text-white shadow-lg" : "text-slate-500 hover:text-slate-300"}`}
          >
            Universal Key ($M_U$)
          </button>
        </div>
      </header>

      {activeTab === "master" ? (
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {providerKeys.map((pk) => (
              <motion.div
                layout
                key={pk.id}
                className="bg-dashboard-card rounded-2xl border border-slate-800 p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700 text-xl font-bold text-accelerator-blue">
                      {pk.provider[0]}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{pk.provider} (M_{pk.provider[0]})</h3>
                      <div className="flex gap-2 mt-1">
                        <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-400 font-bold uppercase tracking-tighter">Speed: {pk.rawSpeed}</span>
                        <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-400 font-bold uppercase tracking-tighter">Cap: {pk.rawDistance}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-unlimited-green/10 text-unlimited-green px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest">Optimal</div>
                </div>

                <div className="space-y-3">
                  {pk.apiKeys.map((ak) => (
                    <div key={ak.id} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                      <div className="flex items-center space-x-3">
                        <Lock className="w-4 h-4 text-slate-500" />
                        <div>
                          <p className="text-sm font-medium">{ak.name}</p>
                          {ak.inPool && (
                            <span className="text-[9px] text-purple-400 font-bold uppercase flex items-center gap-1">
                              <Globe className="w-2.5 h-2.5" /> Pool Contributor
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                         <div className="w-8 h-4 bg-slate-700 rounded-full relative cursor-pointer">
                            <div className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all ${ak.isActive ? "right-0.5" : "left-0.5"}`}></div>
                         </div>
                      </div>
                    </div>
                  ))}
                  <button className="w-full py-4 border border-dashed border-slate-700 rounded-xl text-slate-500 hover:text-slate-300 text-xs font-bold transition-all">
                    + Append Encrypted Key to M_{pk.provider[0]}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      ) : (
        <section className="max-w-2xl mx-auto">
           <div className="bg-gradient-to-br from-accelerator-blue/10 to-dashboard-card rounded-3xl border border-accelerator-blue/20 p-10 shadow-2xl">
              <div className="flex items-center space-x-4 mb-10">
                <div className="bg-accelerator-blue p-3 rounded-2xl shadow-lg shadow-accelerator-blue/20">
                  <Key className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">The Universal Key ($M_U$)</h2>
                  <p className="text-xs text-slate-500 font-medium">Fueled by 18 Aggregated Free-Tier Assets</p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">MU Token (Encrypted with AES-256-GCM)</label>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-slate-900 p-4 rounded-xl font-mono text-sm border border-slate-700 text-slate-300">
                      tmk_live_4829...x92k
                    </div>
                    <button className="bg-slate-800 hover:bg-slate-700 px-6 rounded-xl font-bold border border-slate-700 transition-all">
                      Copy
                    </button>
                  </div>
                </div>

                <div className="p-6 bg-slate-800/30 rounded-2xl border border-slate-700">
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-accelerator-blue" />
                    "Steroid" Export Engine
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl text-xs font-bold border border-slate-700 flex flex-col items-center gap-2 transition-all">
                      <span>Open Router Schema</span>
                      <span className="text-[9px] text-slate-500">mapping.json</span>
                    </button>
                    <button className="bg-slate-800 hover:bg-slate-700 p-4 rounded-xl text-xs font-bold border border-slate-700 flex flex-col items-center gap-2 transition-all">
                      <span>OmniRoute / LiteLLM</span>
                      <span className="text-[9px] text-slate-500">config.yaml</span>
                    </button>
                  </div>
                </div>
              </div>
           </div>
        </section>
      )}
    </div>
  );
}
