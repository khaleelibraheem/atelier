import { ArrowRight } from "lucide-react";
import Image from "next/image";

// Added 'className' prop with a default fallback
export function ProductCard({ title, price, img, className }) {
  return (
    <div className={`snap-start group cursor-pointer ${className || "min-w-[260px] md:min-w-full"}`}>
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-[#F0F0F0] mb-4">
        <Image 
          src={img} 
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
        <button className="absolute bottom-4 right-4 bg-white h-10 w-10 rounded-full shadow-lg flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-black hover:text-white z-10">
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
      <div>
        <h3 className="text-base font-medium leading-tight">{title}</h3>
        <p className="text-sm text-zinc-500 mt-1">{price}</p>
      </div>
    </div>
  );
}