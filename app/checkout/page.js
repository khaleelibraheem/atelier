"use client";

import { useShop } from "@/context/shop-context";
import Link from "next/link";
import { ArrowLeft, Lock, Loader2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useShop();
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const handlePayment = () => {
    setIsProcessing(true);
    
    // Simulate Stripe processing delay (2 seconds)
    setTimeout(() => {
      clearCart(); // Empty the bag
      router.push("/success"); // Go to receipt
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] grid lg:grid-cols-2">
      
      {/* LEFT: Information Form */}
      <div className="p-6 lg:p-20 lg:border-r border-black/5">
        <Link href="/" className="text-2xl font-bold tracking-tighter uppercase block mb-8">Atelier.</Link>
        
        <div className="flex items-center gap-2 mb-8 text-sm text-zinc-500">
           <Link href="/shop" className="hover:text-black">Cart</Link> <span>/</span> <span className="text-black font-medium">Information</span> <span>/</span> <span>Payment</span>
        </div>

        <h2 className="text-lg font-bold mb-6">Contact Information</h2>
        <div className="space-y-4 max-w-lg">
           <input type="email" placeholder="Email address" className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 outline-none focus:border-black transition-colors" />
           
           <h2 className="text-lg font-bold mt-8 mb-2">Shipping Address</h2>
           <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First name" className="bg-white border border-black/10 rounded-lg px-4 py-3 outline-none focus:border-black transition-colors" />
              <input type="text" placeholder="Last name" className="bg-white border border-black/10 rounded-lg px-4 py-3 outline-none focus:border-black transition-colors" />
           </div>
           <input type="text" placeholder="Address" className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 outline-none focus:border-black transition-colors" />
           <div className="grid grid-cols-3 gap-4">
              <input type="text" placeholder="City" className="col-span-1 bg-white border border-black/10 rounded-lg px-4 py-3 outline-none focus:border-black transition-colors" />
              <input type="text" placeholder="State" className="col-span-1 bg-white border border-black/10 rounded-lg px-4 py-3 outline-none focus:border-black transition-colors" />
              <input type="text" placeholder="ZIP" className="col-span-1 bg-white border border-black/10 rounded-lg px-4 py-3 outline-none focus:border-black transition-colors" />
           </div>
           
           {/* FUNCTIONAL PAY BUTTON */}
           <button 
             onClick={handlePayment}
             disabled={isProcessing || cart.length === 0}
             className="w-full mt-8 bg-black text-white h-14 rounded-lg font-bold hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
           >
              {isProcessing ? (
                <>Processing <Loader2 className="h-4 w-4 animate-spin" /></>
              ) : (
                "Pay Now"
              )}
           </button>
           
           <Link href="/shop" className="block text-center text-sm text-zinc-500 mt-4 hover:text-black flex items-center justify-center gap-2">
             <ArrowLeft className="h-4 w-4" /> Return to store
           </Link>
        </div>
      </div>

      {/* RIGHT: Cart Summary (Sticky) */}
      <div className="bg-[#F5F5F0] p-6 lg:p-20 hidden lg:block">
        <div className="max-w-md mx-auto sticky top-20">
           <div className="space-y-6 mb-8 border-b border-black/5 pb-8">
              {cart.map((item, i) => (
                <div key={i} className="flex gap-4 items-center">
                   <div className="relative h-16 w-16 rounded-md border border-black/5 overflow-hidden bg-white">
                      <img src={item.image} className="h-full w-full object-cover" alt={item.title} />
                      <span className="absolute top-0 right-0 -mr-2 -mt-2 bg-black text-white text-xs h-5 w-5 flex items-center justify-center rounded-full z-10">
                        {item.quantity}
                      </span>
                   </div>
                   <div className="flex-1">
                      <h3 className="font-medium text-sm">{item.title}</h3>
                      <p className="text-xs text-zinc-500 capitalize">{item.color}</p>
                   </div>
                   <p className="font-medium text-sm">${item.price * item.quantity}</p>
                </div>
              ))}
           </div>
           
           <div className="space-y-3 text-sm text-zinc-600 mb-8 border-b border-black/5 pb-8">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${cartTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Calculated at next step</span>
              </div>
           </div>

           <div className="flex justify-between items-center">
              <span className="text-lg font-bold">Total</span>
              <div className="flex items-end gap-2">
                <span className="text-xs text-zinc-500 mb-1">USD</span>
                <span className="text-2xl font-bold tracking-tight">${cartTotal.toLocaleString()}</span>
              </div>
           </div>
           
           <div className="mt-8 flex items-center justify-center gap-2 text-xs text-zinc-400">
             <Lock className="h-3 w-3" /> Secure SSL Encryption
           </div>
        </div>
      </div>
    </div>
  );
}