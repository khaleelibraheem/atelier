"use client";

import { Navbar } from "@/components/navbar";
import { useState } from "react";
import { ArrowRight, Package } from "lucide-react";

export default function TrackOrderPage() {
  const [status, setStatus] = useState("idle"); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1500); // Fake delay
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      
      <main className="mx-auto max-w-xl px-6 py-24">
        <div className="text-center mb-12">
          <Package className="mx-auto h-12 w-12 text-zinc-300 mb-6" />
          <h1 className="text-4xl font-bold tracking-tight mb-4">Track Order</h1>
          <p className="text-zinc-500">
            Enter your order number and email to see the current status of your shipment.
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-white p-8 rounded-2xl border border-black/5 animate-in fade-in slide-in-from-bottom-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
              <span className="font-bold text-lg">In Transit</span>
            </div>
            <div className="space-y-4 border-l border-black/10 pl-6 ml-1.5">
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-black border-2 border-white" />
                <p className="text-sm font-bold">Arrived at Sort Facility</p>
                <p className="text-xs text-zinc-500">Copenhagen, DK • Today, 9:41 AM</p>
              </div>
              <div className="relative opacity-50">
                <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-zinc-300 border-2 border-white" />
                <p className="text-sm font-bold">Shipped</p>
                <p className="text-xs text-zinc-500">Warehouse A • Yesterday</p>
              </div>
            </div>
            <button 
              onClick={() => setStatus("idle")}
              className="mt-8 w-full py-3 text-sm font-medium text-zinc-500 hover:text-black"
            >
              Track another order
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-zinc-500 mb-2">Order Number</label>
                <input 
                  required
                  type="text" 
                  placeholder="#ATL-10293" 
                  className="w-full bg-zinc-50 border border-transparent rounded-lg px-4 py-3 focus:bg-white focus:border-black/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-zinc-500 mb-2">Email Address</label>
                <input 
                  required
                  type="email" 
                  placeholder="you@email.com" 
                  className="w-full bg-zinc-50 border border-transparent rounded-lg px-4 py-3 focus:bg-white focus:border-black/20 outline-none transition-all"
                />
              </div>
              <button 
                disabled={status === "loading"}
                className="w-full bg-black text-white rounded-lg py-4 font-bold hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
              >
                {status === "loading" ? "Locating..." : <>Track Shipment <ArrowRight className="h-4 w-4" /></>}
              </button>
            </div>
          </form>
        )}
      </main>
    </div>
  );
}