export default function Loading() {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Fake Navbar */}
      <div className="h-20 border-b border-black/5 bg-white/50 backdrop-blur-md" />
      
      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-pulse">
          
          {/* Left Column Skeleton */}
          <div className="aspect-[4/5] bg-black/5 rounded-xl" />
          
          {/* Right Column Skeleton */}
          <div className="space-y-6 mt-12 md:mt-0">
             <div className="h-4 w-24 bg-black/5 rounded" />
             <div className="h-12 w-3/4 bg-black/5 rounded" />
             <div className="h-6 w-1/4 bg-black/5 rounded" />
             <div className="h-32 w-full bg-black/5 rounded" />
             <div className="grid grid-cols-2 gap-4">
                <div className="h-12 w-full bg-black/5 rounded" />
                <div className="h-12 w-full bg-black/5 rounded" />
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}