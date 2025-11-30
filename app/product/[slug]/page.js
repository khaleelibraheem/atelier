import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import { ProductView } from "@/components/product-view";

// 1. Generate Metadata dynamically
export async function generateMetadata({ params }) {
  // Await params in Next.js 15
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found | Atelier.",
    };
  }

  return {
    title: `${product.title} | Atelier.`,
    description: product.description,
    openGraph: {
      images: [product.images[0]], // Good for link sharing on social media
    },
  };
}

// 2. The Page Component
export default async function Page({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return notFound();
  }

  // Pass data to the Client Component
  return <ProductView product={product} />;
}