import { Navbar } from "@/components/navbar";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Terms of Service</h1>
        
        <div className="space-y-8 text-sm text-zinc-600 leading-relaxed">
          <section>
            <h2 className="text-base font-bold text-black mb-2">Overview</h2>
            <p>By accessing or using the Atelier website, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, then you may not access the website.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-black mb-2">Product Accuracy</h2>
            <p>We have made every effort to display as accurately as possible the colors and images of our products. We cannot guarantee that your computer monitor&apos;s display of any color will be accurate.</p>
          </section>
          
          <section>
            <h2 className="text-base font-bold text-black mb-2">Limitation of Liability</h2>
            <p>In no case shall Atelier, our directors, officers, or employees be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, or consequential damages.</p>
          </section>
        </div>
      </main>
    </div>
  );
}