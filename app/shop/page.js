import { Navbar } from "@/components/navbar";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";
import Link from "next/link";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      
      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">All Products</h1>
          <p className="text-zinc-500 max-w-2xl">
             Explore our complete collection of honest materials and functional design.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-8 no-scrollbar mb-8 border-b border-black/5">
           <TabButton active>All</TabButton>
           <Link href="/collections/furniture"><TabButton>Furniture</TabButton></Link>
           <Link href="/collections/decor"><TabButton>Decor</TabButton></Link>
           <Link href="/collections/accessories"><TabButton>Accessories</TabButton></Link>
        </div>

        {/* Product Grid - Updated for nice mobile 2-col */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 lg:gap-x-6">
           {products.map((product) => (
             <Link key={product.id} href={`/product/${product.slug}`} className="block">
                <ProductCard 
                  title={product.title} 
                  price={`$${product.price}`} 
                  img={product.images[0]}
                  // Forces card to fit the grid column instead of fixed width
                  className="w-full" 
                />
             </Link>
           ))}
        </div>
      </main>
    </div>
  );
}

function TabButton({ children, active }) {
  return (
    <button className={`px-5 py-2 text-sm font-medium rounded-full transition-colors border whitespace-nowrap ${
      active 
       ? "bg-black text-white border-black" 
       : "bg-transparent text-zinc-500 border-transparent hover:border-black/10 hover:text-black"
    }`}>
      {children}
    </button>
  );
}