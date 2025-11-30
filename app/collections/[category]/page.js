"use client";

import { use } from "react";
import { Navbar } from "@/components/navbar";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CollectionPage({ params }) {
  const { category } = use(params);

  // Normalize category string for comparison
  const filteredProducts = products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );

  // Capitalize for display
  const title = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      
      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        
        {/* Breadcrumb / Back */}
        <Link href="/shop" className="inline-flex items-center text-sm text-zinc-500 hover:text-black mb-8 transition-colors">
           <ArrowLeft className="h-4 w-4 mr-2" /> Back to Shop
        </Link>

        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 block">Collection</span>
          <h1 className="text-4xl font-bold tracking-tight mb-4">{title}</h1>
          <p className="text-zinc-500">
             {filteredProducts.length} items available
          </p>
        </div>

        {/* Grid - Updated for 2 Columns on Mobile */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 lg:gap-x-6">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.slug}`} className="block">
                  <ProductCard 
                    title={product.title} 
                    price={`$${product.price}`} 
                    img={product.images[0]}
                    className="w-full" // Forces fluid width
                  />
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border rounded-2xl border-dashed border-black/10">
            <p className="text-zinc-400">No products found in this collection.</p>
            <Link href="/shop" className="text-black underline mt-2 block">View all products</Link>
          </div>
        )}
      </main>
    </div>
  );
}