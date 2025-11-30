import "./globals.css";
import { Inter } from "next/font/google";
import { ShopProvider } from "@/context/shop-context";
import { Footer } from "@/components/footer"; // Import Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata = {

  title: {
    default: "Atelier. | Minimalist E-Commerce",
    template: "%s | Atelier.", 
  },
  description: "Curated minimalist furniture and objects for the modern home. Designed to last a lifetime.",
  

  keywords: ["Furniture", "Minimalist", "Design", "Home Decor", "Copenhagen", "Store"],
  

  authors: [{ name: "Atelier Team" }],
  creator: "Atelier Inc.",


  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://atelier-store.tau.vercel.app",
    title: "Atelier. | Minimalist E-Commerce",
    description: "Curated minimalist furniture and objects for the modern home.",
    siteName: "Atelier Store",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Atelier Storefront Preview",
      },
    ],
  },


  twitter: {
    card: "summary_large_image",
    title: "Atelier. | Minimalist E-Commerce",
    description: "Curated minimalist furniture and objects for the modern home.",
    images: ["/opengraph-image.png"],
    creator: "@atelier_store",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ShopProvider>
          <div className="flex min-h-screen flex-col">
            {children}
            <Footer /> {/* Footer is now global */}
          </div>
        </ShopProvider>
      </body>
    </html>
  );
}