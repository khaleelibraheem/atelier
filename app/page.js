import { Navbar } from "@/components/navbar";
import { ProductCard } from "@/components/product-card";
import { ArrowUpRight, MoveRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Import Image
import { products } from "@/lib/products";

export default function Storefront() {
  const featuredProduct = products.find(p => p.id === "lounge-chair-01");
  const trendingProducts = products.filter(p => p.id !== "lounge-chair-01");

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      
      <main>
        
        {/* 1. HERO SECTION */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-6">
          <section className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[600px]">
            <Link href={`/product/${featuredProduct.slug}`} className="contents">
              <div className="relative md:col-span-8 bg-[#E5E5E5] rounded-2xl overflow-hidden group h-[500px] md:h-auto cursor-pointer">
                {/* HERO IMAGE: Added 'priority' */}
                <Image 
                  src={featuredProduct.images[0]} 
                  alt={featuredProduct.title} 
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white/90 backdrop-blur px-6 py-4 rounded-xl z-10">
                  <h2 className="text-xl md:text-2xl font-bold tracking-tight">{featuredProduct.title}</h2>
                  <p className="text-sm text-zinc-500 mt-1">Designed in Copenhagen</p>
                </div>
              </div>
            </Link>

            {/* Right Column */}
            <div className="md:col-span-4 flex flex-col gap-4">
              <Link href="/shop" className="contents">
                <div className="flex-1 rounded-2xl bg-black text-white p-8 flex flex-col justify-between group cursor-pointer hover:bg-zinc-900 transition-colors">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">New Arrival</span>
                    <ArrowUpRight className="h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-medium leading-tight mb-2">Autumn Collection &apos;24</h3>
                    <p className="text-zinc-400 text-sm">Minimalist objects for the modern workspace.</p>
                  </div>
                </div>
              </Link>

              <div className="h-[250px] relative rounded-2xl overflow-hidden bg-[#E5E5E5] group">
                <Image 
                 src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                 alt="Decor" 
                 fill
                 className="object-cover transition-transform duration-700 group-hover:scale-110"
                 sizes="(max-width: 768px) 100vw, 33vw"
               />
               <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
               <span className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold rounded-full uppercase z-20">
                 Best Seller
               </span>
              </div>
            </div>
          </section>
        </div>

        {/* 2. INFINITE MARQUEE (Unchanged) */}
        <div className="w-full overflow-hidden border-y border-black/5 bg-white py-4 mt-20">
          <div className="animate-marquee inline-block">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="mx-8 text-sm font-bold uppercase tracking-widest text-zinc-400">
                • Designed in Copenhagen • Built to Last • Sustainable Materials
              </span>
            ))}
          </div>
        </div>

{/* =========================================
            3. TRENDING OBJECTS (The Editorial Grid + Optimized Images)
           ========================================= */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-32">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* Left Column: Sticky Narrative */}
            <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 block">
                Weekly Edit
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] mb-6">
                Trending <br/> <span className="text-zinc-400">Objects.</span>
              </h2>
              <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                A curation of our most sought-after pieces. From hand-thrown ceramics to vegetable-tanned leathers, these are the items defining our current aesthetic.
              </p>
              <Link href="/shop">
                <button className="group flex items-center gap-3 text-sm font-medium border-b border-black pb-1 hover:text-zinc-600 hover:border-zinc-400 transition-all">
                  Shop All Favorites 
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>

            {/* Right Column: The 2x2 Grid with Next/Image */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12">
                {trendingProducts.map((product) => (
                  <Link key={product.id} href={`/product/${product.slug}`} className="group block">
                    
                    {/* Image Container */}
                    <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#E5E5E5] mb-5">
                       {/* OPTIMIZED IMAGE */}
                       <Image 
                         src={product.images[0]} 
                         alt={product.title} 
                         fill
                         className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                         sizes="(max-width: 768px) 100vw, 33vw"
                       />
                       
                       {/* Subtle Overlay on Hover */}
                       <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 z-10" />
                    </div>
                    
                    {/* Minimal Info */}
                    <div className="flex justify-between items-start">
                       <div>
                         <h3 className="text-lg font-bold text-[#1A1A1A] group-hover:underline decoration-1 underline-offset-4 decoration-zinc-300 transition-all">
                           {product.title}
                         </h3>
                         <p className="text-sm text-zinc-500 mt-1">{product.category}</p>
                       </div>
                       <span className="text-base font-medium">${product.price}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 4. THE PHILOSOPHY (Feature Strip) */}
        <section className="py-20 border-t border-black/5 mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="pr-0 lg:pr-12">
                 <div className="flex items-center gap-3 mb-6">
                    <span className="h-[1px] w-8 bg-black"></span>
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">The Studio</span>
                 </div>
                 <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] mb-6">
                   Less, but <span className="text-zinc-300">better.</span>
                 </h2>
                 <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                   We reject the temporary. We prioritize honest materials, functional design, 
                   and craftsmanship that improves with age.
                 </p>
                 <div className="grid grid-cols-3 gap-6 border-t border-black/5 pt-6">
                    <div><span className="block text-2xl font-bold text-black">10yr</span><span className="text-xs text-zinc-500 uppercase tracking-wide">Warranty</span></div>
                    <div><span className="block text-2xl font-bold text-black">100%</span><span className="text-xs text-zinc-500 uppercase tracking-wide">Sustainable</span></div>
                    <div><span className="block text-2xl font-bold text-black">Hand</span><span className="text-xs text-zinc-500 uppercase tracking-wide">Finished</span></div>
                 </div>
              </div>

              <Link href="/about">
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl bg-[#E5E5E5] group cursor-pointer">
                    <Image 
                      src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2000&auto=format&fit=crop"
                      alt="Studio"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* 5. CURATED COLLECTIONS */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-20 mb-20">
          <h2 className="text-2xl font-bold tracking-tight mb-8">Curated Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             <Link href="/collections/furniture">
               <CollectionCard title="Furniture" desc="Tools for focus." img="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop" />
             </Link>
             <Link href="/collections/decor">
               <CollectionCard title="Decor" desc="Comfort and calm." img="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1000&auto=format&fit=crop" />
             </Link>
             <Link href="/collections/accessories">
               <CollectionCard title="Accessories" desc="The finishing touch." img="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop" />
             </Link>
          </div>
        </div>

        {/* 6. NEWSLETTER (Unchanged) */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-20">
          <section className="rounded-2xl border border-black/5 bg-white py-20 px-6 text-center shadow-sm">
             <h2 className="text-3xl font-bold tracking-tight mb-4 text-black">Join the Atelier.</h2>
             <p className="text-zinc-500 max-w-lg mx-auto mb-8">
               Sign up for our newsletter to receive exclusive offers, design inspiration, and early access.
             </p>
             <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
               <input 
                 type="email" 
                 placeholder="email@example.com" 
                 className="flex-1 rounded-full bg-black/5 border border-transparent px-6 py-3 text-black placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-black"
               />
               <button className="rounded-full bg-black text-white px-8 py-3 font-medium hover:bg-zinc-800 transition-colors">
                 Subscribe
               </button>
             </div>
          </section>
        </div>

      </main>
    </div>
  );
}

// Local Helper - Optimized
function CollectionCard({ title, desc, img }) {
  return (
    <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer">
      <Image 
        src={img} 
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors z-10" />
      <div className="absolute bottom-6 left-6 text-white z-20">
         <h3 className="text-xl font-bold">{title}</h3>
         <p className="text-sm text-zinc-200 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
           {desc}
         </p>
      </div>
    </div>
  )
}