import { Instagram, Twitter, Facebook } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white pt-16 pb-12 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* 
            GRID LAYOUT SYSTEM:
            Mobile:  grid-cols-2 (Compact)
            Desktop: grid-cols-12 (Spacious & Asymmetric)
        */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-y-12 gap-x-8 mb-16">
          
          {/* 1. BRAND SECTION 
              Mobile: Full width (col-span-2)
              Desktop: 1/3 width (col-span-4) 
          */}
          <div className="col-span-2 lg:col-span-4">
            <Link href="/" className="text-2xl font-bold tracking-tighter uppercase block mb-6">Atelier.</Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
              Curated minimalist furniture and objects for the modern home. Designed to last a lifetime.
            </p>
          </div>

          {/* DESKTOP SPACER (Takes up 2 columns to push links right) */}
          <div className="hidden lg:block lg:col-span-2"></div>
          
          {/* 2. SHOP LINKS 
              Mobile: Half width (col-span-1)
              Desktop: Small column (col-span-2)
          */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="font-bold mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><Link href="/collections/furniture" className="hover:text-black">Furniture</Link></li>
              <li><Link href="/collections/decor" className="hover:text-black">Decor</Link></li>
              <li><Link href="/collections/accessories" className="hover:text-black">Accessories</Link></li>
              <li><Link href="/shop" className="hover:text-black">All Products</Link></li>
            </ul>
          </div>

          {/* 3. SUPPORT LINKS 
              Mobile: Half width (col-span-1)
              Desktop: Small column (col-span-2)
          */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><Link href="/track-order" className="hover:text-black">Track Order</Link></li>
              <li><Link href="/returns" className="hover:text-black">Returns</Link></li>
              <li><Link href="/shipping" className="hover:text-black">Shipping</Link></li>
              <li><Link href="/about" className="hover:text-black">About Us</Link></li>
            </ul>
          </div>

          {/* 4. SOCIAL LINKS 
              Mobile: Full width (col-span-2) for easy tapping
              Desktop: Small column (col-span-2)
          */}
          <div className="col-span-2 lg:col-span-2">
            <h4 className="font-bold mb-6">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-black/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-400">
          <p>© 2024 Atelier Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-black">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-black">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}