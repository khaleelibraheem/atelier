import { Navbar } from "@/components/navbar";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Privacy Policy</h1>
        
        <div className="space-y-8 text-sm text-zinc-600 leading-relaxed">
          <p>At Atelier, we respect your privacy. This policy outlines how we handle your data.</p>
          
          <section>
            <h2 className="text-base font-bold text-black mb-2">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or sign up for our newsletter. This includes name, email, shipping address, and payment information.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-black mb-2">2. How We Use Information</h2>
            <p>We use your information to fulfill orders, send shipping notifications, and improve our store layout. We do not sell your personal data to third-party advertisers.</p>
          </section>
          
          <section>
            <h2 className="text-base font-bold text-black mb-2">3. Cookies</h2>
            <p>We use cookies to maintain your cart session and remember your preferences. You can disable cookies in your browser settings, though this may affect site functionality.</p>
          </section>
        </div>
      </main>
    </div>
  );
}