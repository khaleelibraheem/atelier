import { Navbar } from "@/components/navbar";

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Returns & Exchanges</h1>
        <p className="text-zinc-500 mb-12">Last updated: October 2024</p>
        
        <div className="space-y-10 text-zinc-600 leading-relaxed">
          <p className="text-lg">
            We want you to love your Atelier pieces. If you are not completely satisfied, 
            we accept returns within 30 days of delivery.
          </p>

          <section className="bg-white p-8 rounded-2xl border border-black/5">
            <h3 className="text-black font-bold mb-4">How to initiate a return</h3>
            <ol className="list-decimal pl-5 space-y-3">
              <li>Visit our Returns Portal and enter your order number.</li>
              <li>Select the items you wish to return and the reason.</li>
              <li>Print the prepaid shipping label sent to your email.</li>
              <li>Drop the package off at any authorized courier location.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">Conditions</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Items must be in original condition and packaging.</li>
              <li>Furniture items are subject to a 10% restocking fee.</li>
              <li>Custom orders are final sale and cannot be returned.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}