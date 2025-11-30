import { Navbar } from "@/components/navbar";

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-bold tracking-tight mb-8">Shipping & Delivery</h1>
        
        <div className="space-y-12 text-zinc-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-black mb-4">Dispatch Timing</h2>
            <p>
              All in-stock items are dispatched within 24-48 hours of placing your order. 
              Custom or made-to-order furniture pieces (such as the Lounge Chair 01 in specific fabrics) 
              have a lead time of 4-6 weeks, which will be noted clearly on the product page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">Shipping Rates</h2>
            <div className="border border-black/10 rounded-xl overflow-hidden">
              <div className="grid grid-cols-2 border-b border-black/10 bg-black/5 p-4 font-medium text-black">
                <span>Region</span>
                <span>Estimate</span>
              </div>
              <div className="grid grid-cols-2 border-b border-black/10 p-4">
                <span>North America</span>
                <span>Free (Orders over $200)</span>
              </div>
              <div className="grid grid-cols-2 border-b border-black/10 p-4">
                <span>Europe</span>
                <span>$25 Flat Rate</span>
              </div>
              <div className="grid grid-cols-2 p-4">
                <span>Asia Pacific</span>
                <span>$45 Flat Rate</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-4">White Glove Delivery</h2>
            <p>
              For large furniture items, we offer a White Glove service. Our partners will 
              deliver the item to your room of choice, assemble it, and remove all packaging materials.
              This service is selected at checkout for an additional fee of $150.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}