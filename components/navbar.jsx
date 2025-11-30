"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShoppingBag, Search, Menu, X, Trash2, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useShop } from "@/context/shop-context";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navbar() {
  const { isCartOpen, setIsCartOpen, cartCount } = useShop();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter();

  const closeMenu = () => setIsMobileMenuOpen(false);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setIsSearchOpen(false);
      setIsMobileMenuOpen(false); // Close mobile menu if open
      router.push(`/search?q=${e.target.value}`);
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-40 bg-[#FDFBF7]/80 backdrop-blur-md border-b border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Left: Menu & Search */}
          <div className="flex items-center gap-1 sm:gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 hover:bg-black/5 rounded-full transition-colors group"
              aria-label="Open Menu"
            >
              <Menu className="h-5 w-5 group-hover:text-zinc-600" />
            </button>

            {/* FIXED: Removed 'hidden sm:block' so it shows on mobile now */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-black/5 rounded-full transition-colors group"
              aria-label="Search"
            >
              <Search className="h-5 w-5 group-hover:text-zinc-600" />
            </button>
          </div>

          {/* Center: Brand */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tighter uppercase z-50"
          >
            Atelier.
          </Link>

          {/* Right: Cart */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-black/5 rounded-full transition-colors group"
              aria-label="Open Cart"
            >
              <ShoppingBag className="h-5 w-5 group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] font-bold text-white animate-in zoom-in">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search Bar Expansion (Dropdown) */}
        <div
          className={`absolute top-full left-0 w-full border-b border-black/5 bg-[#FDFBF7] px-4 overflow-hidden transition-all duration-300 ease-in-out ${
            isSearchOpen
              ? "max-h-24 py-4 opacity-100"
              : "max-h-0 py-0 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-2xl relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Search collections..."
              onKeyDown={handleSearch}
              className="w-full bg-black/5 rounded-xl py-3 pl-10 pr-4 outline-none focus:ring-1 focus:ring-black/10"
            />
          </div>
        </div>
      </nav>

      {/* --- CART DRAWER --- */}
      <div
        className={`fixed inset-0 z-50 bg-black/20 backdrop-blur-sm transition-opacity duration-500 ${
          isCartOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsCartOpen(false)}
      />
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full sm:w-[400px] bg-[#FDFBF7] shadow-2xl transform transition-transform duration-500 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <CartDrawerContent />
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div
        className={`fixed inset-0 z-50 bg-[#FDFBF7] transform transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <span className="text-2xl font-bold tracking-tighter uppercase">
              Atelier.
            </span>
            <button
              onClick={closeMenu}
              className="p-2 hover:bg-black/5 rounded-full"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* NEW: Mobile Menu Search Bar (For easier access) */}
          <div className="mb-8 relative">
            <Search className="absolute left-3 top-3.5 h-5 w-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Search..."
              onKeyDown={handleSearch}
              className="w-full bg-black/5 rounded-xl py-3.5 pl-10 pr-4 outline-none focus:ring-1 focus:ring-black/10 text-lg"
            />
          </div>

          {/* Links */}
          <div className="flex flex-col gap-6 text-3xl md:text-5xl font-bold tracking-tight">
            <Link
              href="/shop"
              onClick={closeMenu}
              className="hover:text-zinc-500 transition-colors"
            >
              Shop All
            </Link>
            <div className="h-[1px] w-full bg-black/5 my-2"></div>
            <Link
              href="/collections/furniture"
              onClick={closeMenu}
              className="hover:text-zinc-500 transition-colors"
            >
              Furniture
            </Link>
            <Link
              href="/collections/decor"
              onClick={closeMenu}
              className="hover:text-zinc-500 transition-colors"
            >
              Decor
            </Link>
            <Link
              href="/collections/accessories"
              onClick={closeMenu}
              className="hover:text-zinc-500 transition-colors"
            >
              Accessories
            </Link>
            <div className="h-[1px] w-full bg-black/5 my-2"></div>
            <Link
              href="/about"
              onClick={closeMenu}
              className="hover:text-zinc-500 transition-colors"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

// Cart Logic (Unchanged)
// Cart Logic
function CartDrawerContent() {
  const { setIsCartOpen, cart, removeFromCart, cartTotal } = useShop();

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-black/5 px-6 py-4">
        <h2 className="text-lg font-bold">Shopping Bag</h2>
        <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-black/5 rounded-full">
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Items */}
      <div className="flex-1 overflow-y-auto p-6">
        {cart.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center text-center space-y-4">
            <ShoppingBag className="h-12 w-12 text-zinc-300" />
            <p className="text-zinc-500">Your bag is empty.</p>
            <Button variant="outline" onClick={() => setIsCartOpen(false)}>
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {cart.map((item, idx) => (
              <div key={`${item.id}-${item.color}-${idx}`} className="flex gap-4">
                
                {/* 1. IMAGE CONTAINER (Fixed Width) */}
                <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md bg-[#E5E5E5]">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>

                {/* 2. TEXT CONTAINER (Flex Grow) */}
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-medium leading-tight pr-4 line-clamp-2">{item.title}</h3>
                      <p className="text-sm font-bold whitespace-nowrap">${item.price * item.quantity}</p>
                    </div>
                    <p className="mt-1 text-xs text-zinc-500 capitalize">
                      {item.color} <span className="mx-1">•</span> Qty {item.quantity}
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.id, item.color)}
                    className="flex items-center gap-1 text-xs text-zinc-400 hover:text-red-500 transition-colors w-fit"
                  >
                    <Trash2 className="h-3 w-3" /> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      {cart.length > 0 && (
        <div className="border-t border-black/5 bg-[#FDFBF7] p-6">
          <div className="flex justify-between text-base font-medium text-black mb-4">
            <p>Subtotal</p>
            <p>${cartTotal.toLocaleString()}</p>
          </div>
          <p className="mt-0.5 text-xs text-zinc-500 mb-6">
            Shipping and taxes calculated at checkout.
          </p>
          
          <Link href="/checkout" onClick={() => setIsCartOpen(false)}>
            <Button className="w-full h-12 bg-black hover:bg-zinc-800 text-white text-base">
              Checkout <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}