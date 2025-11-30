import { Navbar } from "@/components/navbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-5xl font-bold tracking-tight mb-8">About Atelier.</h1>
        
        <div className="space-y-6 text-lg text-zinc-600 leading-relaxed font-serif">
          <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-black first-letter:mr-3 first-letter:float-left">
            Founded in 2024, Atelier was born from a desire to slow down. In a world of fast furniture and disposable trends, we wanted to build a sanctuary for honest materials and timeless design.
          </p>
          <p>
            We work directly with artisans in Copenhagen, Kyoto, and Milan to source objects that balance functionality with sculptural beauty. Every piece in our collection is chosen for its ability to age gracefully—developing a patina that tells the story of its use.
          </p>
          <div className="my-12 aspect-video w-full overflow-hidden rounded-xl bg-zinc-200">
             <img 
               src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000&auto=format&fit=crop" 
               className="h-full w-full object-cover"
               alt="Our Studio"
             />
          </div>
          <h3 className="text-2xl font-bold text-black mt-8 mb-4 font-sans">Our Commitment</h3>
          <p>
            Sustainability isn&apos;t just a buzzword for us; it&apos;s the baseline. We offset 100% of our carbon footprint, use plastic-free packaging, and offer a lifetime repair guarantee on all furniture. We believe that the most sustainable product is the one you never have to replace.
          </p>
        </div>
      </main>
    </div>
  );
}