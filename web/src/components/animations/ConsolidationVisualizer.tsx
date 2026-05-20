"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Key, Shield, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export const ConsolidationVisualizer = () => {
  const [activeKeys, setActiveKeys] = useState<{ id: number; x: number; y: number; color: string }[]>([]);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const newKey = {
        id: Date.now(),
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
        color: ["#0070f3", "#22c55e", "#a855f7"][Math.floor(Math.random() * 3)]
      };
      setActiveKeys(prev => [...prev.slice(-10), newKey]);

      setTimeout(() => setPulse(true), 1000);
      setTimeout(() => setPulse(false), 1200);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-80 flex items-center justify-center overflow-hidden bg-slate-900/50 rounded-3xl border border-slate-800">
      <motion.div
        animate={{
          scale: pulse ? 1.1 : 1,
          boxShadow: pulse ? "0 0 40px rgba(0, 112, 243, 0.4)" : "0 0 20px rgba(0, 112, 243, 0.1)"
        }}
        className="relative z-10 w-20 h-20 bg-accelerator-blue rounded-2xl flex items-center justify-center shadow-2xl border border-white/20"
      >
        <Shield className="w-10 h-10 text-white fill-white/10" />
        <div className="absolute -bottom-8 whitespace-nowrap text-[10px] font-bold text-accelerator-blue tracking-tighter uppercase">Universal Master Key ($M_U$)</div>
      </motion.div>

      <AnimatePresence>
        {activeKeys.map((k) => (
          <motion.div
            key={k.id}
            initial={{ opacity: 0, x: k.x, y: k.y, scale: 0.5 }}
            animate={{ opacity: [0, 1, 0.5, 0], x: 0, y: 0, scale: [0.5, 0.8, 0.3, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeIn" }}
            className="absolute p-2 rounded-lg border shadow-lg"
            style={{ backgroundColor: `${k.color}20`, borderColor: `${k.color}40` }}
          >
            <Key className="w-4 h-4" style={{ color: k.color }} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
