"use client";

import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";
import Link from "next/link";
import { Suspense } from "react";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  const results = products.filter(product => 
    product.title.toLowerCase().includes(query) || 
    product.category.toLowerCase().includes(query)
  );

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
      <div className="mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 block">Search Results</span>
        <h1 className="text-4xl font-bold tracking-tight mb-4">&quot;{query}&quot;</h1>
        <p className="text-zinc-500">
           Found {results.length} items
        </p>
      </div>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {results.map((product) => (
            <Link key={product.id} href={`/product/${product.slug}`}>
                <ProductCard 
                  title={product.title} 
                  price={`$${product.price}`} 
                  img={product.images[0]} 
                />
            </Link>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center border border-dashed border-black/10 rounded-2xl">
          <p className="text-zinc-400">No products found matching &quot;{query}&quot;.</p>
          <Link href="/shop" className="text-black underline mt-2 block">View all products</Link>
        </div>
      )}
    </main>
  );
}

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      <Suspense fallback={<div className="p-20 text-center">Loading...</div>}>
        <SearchContent />
      </Suspense>
    </div>
  );
}