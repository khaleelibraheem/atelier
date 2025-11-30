import "./globals.css";
import { Inter } from "next/font/google";
import { ShopProvider } from "@/context/shop-context";
import { Footer } from "@/components/footer"; // Import Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Atelier.",
  description: "Minimalist E-Commerce Store",
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