import { products } from "@/lib/products";

export default function sitemap() {
  const baseUrl = "https://your-domain.vercel.app"; // You will change this later

  // 1. Static Routes
  const routes = [
    "",
    "/shop",
    "/about",
    "/collections/furniture",
    "/collections/decor",
    "/collections/accessories",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  // 2. Dynamic Product Routes
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/product/${product.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...productRoutes];
}