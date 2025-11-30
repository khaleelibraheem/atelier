"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { ArrowRight, Minus, Plus, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useShop } from "@/context/shop-context";
import Image from "next/image";

export function ProductView({ product }) {
  // Set default color (safe check)
  const defaultColor = product.colors && product.colors.length > 0 ? product.colors[0].id : null;
  
  const [selectedColor, setSelectedColor] = useState(defaultColor);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useShop();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      color: selectedColor,
      quantity: quantity
    });
  };

  const currentColorObj = product.colors.find(c => c.id === selectedColor);

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-10 lg:py-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          
       {/* LEFT: Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#E5E5E5]">
              {/* Main Image */}
              <Image
                src={product.images[0]}
                alt={product.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-2 gap-4">
                {product.images.slice(1, 3).map((img, idx) => (
                  <div key={idx} className="relative aspect-square w-full overflow-hidden rounded-xl bg-[#E5E5E5]">
                    <Image 
                      src={img} 
                      alt="Detail" 
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 30vw"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT: Info */}
          <div className="lg:col-span-5 mt-10 lg:mt-0">
            <div className="sticky top-24">
              <div className="mb-4 flex items-center gap-2 text-sm text-zinc-500">
                <span>Shop</span><span>/</span><span>{product.category}</span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-[#1A1A1A] mb-2">
                {product.title}
              </h1>
              <div className="flex items-center justify-between mb-8">
                <span className="text-2xl font-medium">${product.price.toLocaleString()}.00</span>
                <div className="flex items-center gap-1">
                   {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-black text-black" />)}
                  <span className="text-sm ml-2 underline">4.9 (128)</span>
                </div>
              </div>

              <p className="text-zinc-600 leading-relaxed mb-10 border-b border-black/5 pb-10">
                {product.description}
              </p>

              <div className="space-y-8">
                {/* Colors */}
                <div>
                  <label className="text-sm font-bold uppercase tracking-wide text-zinc-500 mb-3 block">
                    Finish: <span className="text-black ml-1">{currentColorObj?.name}</span>
                  </label>
                  <div className="flex gap-3">
                    {product.colors.map((color) => (
                        <button 
                        key={color.id}
                        onClick={() => setSelectedColor(color.id)}
                        className={`h-12 px-6 rounded-lg border flex items-center justify-center gap-2 transition-all ${
                            selectedColor === color.id 
                            ? "border-black bg-black text-white" 
                            : "border-black/10 hover:border-black/30"
                        }`}
                        >
                        <div className="h-4 w-4 rounded-full border border-white/20" style={{ backgroundColor: color.hex }}></div>
                        {color.name}
                        </button>
                    ))}
                  </div>
                </div>

                {/* Quantity & Add */}
                <div>
                  <label className="text-sm font-bold uppercase tracking-wide text-zinc-500 mb-3 block">Quantity</label>
                  <div className="flex gap-4">
                    <div className="flex items-center rounded-lg border border-black/10 bg-white px-2">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-zinc-50"><Minus className="h-4 w-4" /></button>
                      <span className="w-12 text-center font-medium">{quantity}</span>
                      <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-zinc-50"><Plus className="h-4 w-4" /></button>
                    </div>
                    <Button onClick={handleAddToCart} className="flex-1 h-12 bg-black text-white hover:bg-zinc-800 rounded-lg text-base">
                      Add to Cart — ${(product.price * quantity).toLocaleString()}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Accordion */}
              <div className="mt-12 space-y-4">
                 {product.details.map((detail, idx) => (
                     <AccordionItem key={idx} title={detail.title} content={detail.content} />
                 ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-black/5">
      <button onClick={() => setIsOpen(!isOpen)} className="flex w-full items-center justify-between py-4 text-left font-medium hover:text-black/70 transition-colors">
        {title}
        <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
        <p className="text-sm text-zinc-500 leading-relaxed">{content}</p>
      </div>
    </div>
  );
}