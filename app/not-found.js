import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
         <span className="text-9xl font-bold text-black/5">404</span>
         <h1 className="text-3xl font-bold mt-4 mb-4">Object Not Found</h1>
         <p className="text-zinc-500 max-w-md mb-8">
           The piece you are looking for has been moved or does not exist.
         </p>
         <Link href="/shop">
           <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-zinc-800 transition-colors">
             Back to Shop
           </button>
         </Link>
      </main>
      <Footer />
    </div>
  );
}