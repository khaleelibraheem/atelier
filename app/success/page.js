"use client";

import { Navbar } from "@/components/navbar";
import { Check, ArrowRight, Printer } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  // Generate a random order number on mount so it feels real
 const [orderId] = useState(() => 
    `ATL-${Math.floor(100000 + Math.random() * 900000)}`
  );

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      
      <main className="mx-auto max-w-3xl px-6 py-12 md:py-24">
        
        {/* Success Header */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-6">
            <Check className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Order Confirmed.</h1>
          <p className="text-zinc-500 max-w-md mx-auto">
            Thank you for your purchase. We have received your order and will notify you once it ships.
          </p>
        </div>

        {/* THE RECEIPT CARD */}
        <div className="bg-white border border-black/5 shadow-2xl shadow-black/5 rounded-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
          
          {/* Receipt Top */}
          <div className="bg-zinc-50 border-b border-black/5 p-6 flex justify-between items-center">
             <div>
               <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Order Number</span>
               <p className="font-mono text-lg font-bold text-black mt-1">{orderId || "Loading..."}</p>
             </div>
             <button className="text-zinc-400 hover:text-black transition-colors" title="Print Receipt">
               <Printer className="h-5 w-5" />
             </button>
          </div>

          {/* Receipt Details */}
          <div className="p-8 space-y-8">
             
             {/* Dates */}
             <div className="grid grid-cols-2 gap-8">
               <div>
                 <span className="text-xs text-zinc-500 block mb-1">Order Date</span>
                 <span className="text-sm font-medium">Oct 24, 2024</span>
               </div>
               <div>
                 <span className="text-xs text-zinc-500 block mb-1">Estimated Delivery</span>
                 <span className="text-sm font-medium">Oct 28 - Oct 30</span>
               </div>
             </div>

             {/* Address */}
             <div className="flex flex-col sm:flex-row gap-8 sm:gap-24 border-t border-dashed border-black/10 pt-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3 block">Shipping To</span>
                  <address className="not-italic text-sm text-zinc-600 leading-relaxed">
                    Alex Doe<br/>
                    124 Design Avenue<br/>
                    Floor 4, Apt 4B<br/>
                    New York, NY 10012
                  </address>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3 block">Payment Method</span>
                  <div className="flex items-center gap-2 text-sm text-zinc-600">
                    <div className="h-2 w-2 rounded-full bg-black"></div>
                    Visa ending in 4242
                  </div>
                </div>
             </div>

             {/* Summary */}
             <div className="bg-zinc-50 rounded-xl p-6 space-y-3">
               <div className="flex justify-between text-sm">
                 <span className="text-zinc-500">Subtotal</span>
                 <span className="font-medium">$1,200.00</span>
               </div>
               <div className="flex justify-between text-sm">
                 <span className="text-zinc-500">Shipping</span>
                 <span className="font-medium">Free</span>
               </div>
               <div className="flex justify-between text-sm border-t border-black/5 pt-3 mt-3">
                 <span className="font-bold text-black">Total</span>
                 <span className="font-bold text-black">$1,200.00</span>
               </div>
             </div>

          </div>

          {/* Receipt Footer */}
          <div className="p-6 border-t border-black/5 text-center bg-zinc-50">
             <p className="text-xs text-zinc-400">
               Need help? <Link href="/about" className="underline text-zinc-600 hover:text-black">Contact Support</Link>
             </p>
          </div>

        </div>

        {/* Actions */}
        <div className="mt-12 text-center">
          <Link href="/shop">
            <button className="group inline-flex items-center gap-2 text-sm font-bold border-b border-black pb-0.5 hover:text-zinc-600 hover:border-zinc-400 transition-all">
              <ArrowRight className="h-4 w-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
              Continue Shopping
            </button>
          </Link>
        </div>

      </main>
    </div>
  );
}