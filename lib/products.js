export const products = [
  {
    id: "lounge-chair-01",
    slug: "lounge-chair-01",
    title: "The Lounge Chair 01",
    price: 1200,
    category: "Furniture",
    description: "Designed in Copenhagen, The Lounge Chair 01 combines solid white oak with premium Italian leather. A timeless silhouette built for decades of comfort. Includes a 10-year structural warranty.",
    images: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=2000&auto=format&fit=crop", // Main
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000&auto=format&fit=crop", // Detail 1
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1000&auto=format&fit=crop", // Detail 2
    ],
    colors: [
      { id: "oak", name: "Natural Oak", hex: "#D4C3A3" },
      { id: "walnut", name: "Dark Walnut", hex: "#5D4037" }
    ],
    details: [
      { title: "Dimensions", content: "H: 80cm, W: 65cm, D: 70cm" },
      { title: "Materials", content: "Solid Oak, Aniline Leather, High-density Foam" },
      { title: "Shipping", content: "Free worldwide shipping. 30-day return policy." }
    ]
  },
  {
    id: "ceramic-vase",
    slug: "ceramic-vase",
    title: "Ceramic Vase",
    price: 89,
    category: "Decor",
    description: "Hand-thrown stoneware vase with a matte glaze finish. Perfect for dried arrangements or standing alone as a sculptural piece.",
    images: [
      "https://images.unsplash.com/photo-1631125915902-d8abe9225ff2?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1612196808214-b7e239e5f6b7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "stone", name: "Stone Grey", hex: "#A8A29E" },
      { id: "charcoal", name: "Charcoal", hex: "#292524" }
    ],
    details: [
      { title: "Dimensions", content: "H: 25cm, Dia: 12cm" },
      { title: "Care", content: "Hand wash only. Water tight." }
    ]
  },
  {
    id: "analog-clock",
    slug: "analog-clock",
    title: "Analog Wall Clock",
    price: 120,
    category: "Decor",
    description: "A silent sweep movement wall clock featuring a brushed aluminum face and minimal markings. Battery included.",
    images: [
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563861826100-9cb868c725a9?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "white", name: "Matte White", hex: "#F5F5F5" },
      { id: "black", name: "Matte Black", hex: "#171717" }
    ],
    details: [
      { title: "Dimensions", content: "Dia: 30cm, D: 4cm" },
      { title: "Movement", content: "Quartz Silent Sweep" }
    ]
  },
  {
    id: "leather-tote",
    slug: "leather-tote",
    title: "Everyday Leather Tote",
    price: 240,
    category: "Accessories",
    description: "Full-grain vegetable tanned leather that develops a unique patina over time. Fits a 15-inch laptop comfortably.",
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "tan", name: "Tan", hex: "#D2691E" },
      { id: "black", name: "Black", hex: "#000000" }
    ],
    details: [
      { title: "Dimensions", content: "H: 40cm, W: 35cm, D: 10cm" },
      { title: "Material", content: "Italian Vegetable Tanned Leather" }
    ]
  },
  {
    id: "wooden-stool",
    slug: "wooden-stool",
    title: "Artist Stool",
    price: 180,
    category: "Furniture",
    description: "Three-legged solid wood stool. Versatile enough to be used as a side table, plant stand, or extra seating.",
    images: [
      "https://images.unsplash.com/photo-1540809799-5da9372c3f64?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "natural", name: "Natural", hex: "#EADBC8" },
      { id: "stained", name: "Stained", hex: "#4A3B32" }
    ],
    details: [
      { title: "Dimensions", content: "H: 45cm, Dia: 32cm" },
      { title: "Weight Limit", content: "120kg" }
    ]
  },
  {
  id: "wool-throw-blanket",
  slug: "wool-throw-blanket",
  title: "Wool Throw Blanket",
  price: 140,
  category: "Home",
  description: "A handwoven Merino wool throw with a soft, breathable texture. Ideal for beds, sofas, or cozy evenings.",
  images: [
    "https://images.unsplash.com/photo-1600172454132-4db2f2ab9e48?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600443003060-e78e929f7bc7?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1578898887931-e681c244b1d0?q=80&w=1000&auto=format&fit=crop"
  ],
  colors: [
    { id: "cream", name: "Cream", hex: "#F5EDE3" },
    { id: "mocha", name: "Mocha", hex: "#A2907D" }
  ],
  details: [
    { title: "Dimensions", content: "130cm x 170cm" },
    { title: "Material", content: "100% Merino Wool" }
  ]
},
{
  id: "linen-bedding-set",
  slug: "linen-bedding-set",
  title: "Linen Bedding Set",
  price: 260,
  category: "Home",
  description: "Premium European flax linen bedding set that becomes softer with every wash. Breathable and durable.",
  images: [
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1595526114035-0d45d8a7a5f2?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1586105251261-72a756497a12?q=80&w=1000&auto=format&fit=crop"
  ],
  colors: [
    { id: "sand", name: "Sand", hex: "#D8C8B0" },
    { id: "white", name: "White", hex: "#FFFFFF" }
  ],
  details: [
    { title: "Includes", content: "1 Duvet Cover, 2 Pillowcases" },
    { title: "Material", content: "100% Flax Linen" }
  ]
},
{
  id: "marble-coffee-table",
  slug: "marble-coffee-table",
  title: "Marble Coffee Table",
  price: 890,
  category: "Furniture",
  description: "A minimalist coffee table featuring hand-polished Carrara marble and a welded steel frame.",
  images: [
    "https://images.unsplash.com/photo-1598300055042-82636fcb2a99?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1567016432779-094069958e31?q=80&w=1000&auto=format&fit=crop"
  ],
  colors: [
    { id: "white-marble", name: "White Marble", hex: "#ECECEC" },
    { id: "black-steel", name: "Black Steel", hex: "#1C1C1C" }
  ],
  details: [
    { title: "Dimensions", content: "L: 120cm, W: 60cm, H: 40cm" },
    { title: "Materials", content: "Carrara Marble, Powder-coated Steel" }
  ]
},
{
  id: "aroma-candle-set",
  slug: "aroma-candle-set",
  title: "Aroma Candle Set",
  price: 49,
  category: "Home",
  description: "A set of hand-poured soy candles with essential oil scents inspired by nature and slow evenings.",
  images: [
    "https://images.unsplash.com/photo-1604251406876-c1e9c5bba025?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605894201269-4377b6bd06ac?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1607082349566-187faf8230b2?q=80&w=1000&auto=format&fit=crop"
  ],
  colors: [
    { id: "amber", name: "Amber Glass", hex: "#8C5A38" },
    { id: "clear", name: "Clear Glass", hex: "#FDFCF9" }
  ],
  details: [
    { title: "Burn Time", content: "40 hours each" },
    { title: "Material", content: "Soy Wax, Essential Oils" }
  ]
},
{
  id: "studio-desk-lamp",
  slug: "studio-desk-lamp",
  title: "Studio Desk Lamp",
  price: 190,
  category: "Lighting",
  description: "A precision-machined aluminum lamp with adjustable arm tension and warm LED output.",
  images: [
    "https://images.unsplash.com/photo-1595514532830-3320728b3460?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1595514485028-1a93ff6bd6f0?q=80&w=1000&auto=format&fit=crop"
  ],
  colors: [
    { id: "matte-black", name: "Matte Black", hex: "#1A1A1A" },
    { id: "brushed-silver", name: "Brushed Silver", hex: "#C0C0C0" }
  ],
  details: [
    { title: "Brightness", content: "450 lumens" },
    { title: "Power", content: "LED, 6W" }
  ]
},
{
  id: "round-jute-rug",
  slug: "round-jute-rug",
  title: "Round Jute Rug",
  price: 160,
  category: "Home",
  description: "A hand-braided jute rug that adds warmth and natural texture to any living space.",
  images: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1567016432779-094069958e31?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop"
  ],
  colors: [
    { id: "natural", name: "Natural", hex: "#D3B88C" },
    { id: "tan", name: "Tan", hex: "#C29B6C" }
  ],
  details: [
    { title: "Diameter", content: "150cm" },
    { title: "Material", content: "100% Jute" }
  ]
},
{
  id: "espresso-machine",
  slug: "espresso-machine",
  title: "Classic Espresso Machine",
  price: 740,
  category: "Kitchen",
  description: "A semi-automatic espresso machine with a stainless-steel boiler and professional-grade steam wand.",
  images: [
    "https://images.unsplash.com/photo-1520986606214-8b456906c813?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1587732320915-2c0fbc270ae4?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1000&auto=format&fit=crop"
  ],
  colors: [
    { id: "steel", name: "Stainless Steel", hex: "#D8D8D8" },
    { id: "black", name: "Matte Black", hex: "#111111" }
  ],
  details: [
    { title: "Pressure", content: "15 Bar" },
    { title: "Power", content: "1400W" }
  ]
},
{
  id: "teak-bookshelf",
  slug: "teak-bookshelf",
  title: "Teak Bookshelf",
  price: 980,
  category: "Furniture",
  description: "A mid-century inspired bookshelf crafted from sustainably sourced teak wood.",
  images: [
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000&auto=format&fit=crop"
  ],
  colors: [
    { id: "teak", name: "Natural Teak", hex: "#CB8E43" },
    { id: "dark-teak", name: "Dark Teak", hex: "#6A4A1E" }
  ],
  details: [
    { title: "Dimensions", content: "H: 180cm, W: 90cm, D: 30cm" },
    { title: "Material", content: "Solid Teak Wood" }
  ]
},
{
  id: "stone-dinner-plates",
  slug: "stone-dinner-plates",
  title: "Stoneware Dinner Plate Set",
  price: 120,
  category: "Kitchen",
  description: "A set of four hand-glazed stoneware plates with a smooth matte finish.",
  images: [
    "https://images.unsplash.com/photo-1524593001323-1c06b8f1df52?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1612196808214-b7e239e5f6b7?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=1000&auto=format&fit=crop"
  ],
  colors: [
    { id: "slate", name: "Slate Grey", hex: "#626262" },
    { id: "ivory", name: "Ivory", hex: "#F7F4ED" }
  ],
  details: [
    { title: "Set", content: "4 Plates" },
    { title: "Diameter", content: "28cm" }
  ]
},
{
  id: "premium-chef-knife",
  slug: "premium-chef-knife",
  title: "Premium Chef Knife",
  price: 180,
  category: "Kitchen",
  description: "Hand-forged 8-inch chef knife crafted with Japanese VG-10 steel and walnut handle.",
  images: [
    "https://images.unsplash.com/photo-1598103442097-8b74394b40bb?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1498574603811-d735b655305c?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1586201375761-83865001e31b?q=80&w=1000&auto=format&fit=crop"
  ],
  colors: [
    { id: "walnut", name: "Walnut", hex: "#5A3E2B" },
    { id: "black", name: "Black Steel", hex: "#202020" }
  ],
  details: [
    { title: "Blade Length", content: "8 inches" },
    { title: "Material", content: "VG-10 Steel, Walnut Wood" }
  ]
},
  {
    id: "ceramic-dinner-plates",
    slug: "ceramic-dinner-plates",
    title: "Ceramic Dinner Plates — Set of 4",
    price: 110,
    category: "Kitchenware",
    description:
      "Set of four hand-glazed ceramic dinner plates with a subtle speckled finish. Durable, dishwasher safe, and crafted for everyday use.",
    images: [
      "https://images.unsplash.com/photo-1543357480-c60d5f6f3b5c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601047975876-3d7d295d13c8?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1612197527762-8ccec4a16ba2?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "linen", name: "Linen White", hex: "#F3EFEA" },
      { id: "sand", name: "Warm Sand", hex: "#D6C7A1" }
    ],
    details: [
      { title: "Dimensions", content: "Dia: 27cm" },
      { title: "Care", content: "Dishwasher & microwave safe." }
    ]
  },
  {
    id: "pendant-lamp",
    slug: "pendant-lamp",
    title: "Minimal Pendant Lamp",
    price: 190,
    category: "Lighting",
    description:
      "Powder-coated steel pendant lamp with a soft diffusion dome. Designed to cast warm, even light across dining or workspace surfaces.",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578899200160-cb13be11f217?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540932239986-df660a6f75ad?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "cream", name: "Soft Cream", hex: "#EFE9DD" },
      { id: "charcoal", name: "Charcoal Black", hex: "#1A1A1A" }
    ],
    details: [
      { title: "Dimensions", content: "Dia: 22cm, H: 18cm" },
      { title: "Cable", content: "150cm adjustable fabric cable" }
    ]
  },
  {
    id: "linen-bedset",
    slug: "linen-bedset",
    title: "Linen Bedding Set",
    price: 280,
    category: "Bedroom",
    description:
      "100% European flax linen bedding set. Breathable, stonewashed for softness, and naturally temperature regulating.",
    images: [
      "https://images.unsplash.com/photo-1600483314607-3c1e5b3aee43?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585261841803-1f99c509c3b3?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616628182506-5a9513762c28?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "fog", name: "Fog Grey", hex: "#BFBDB6" },
      { id: "clay", name: "Clay", hex: "#C6A995" }
    ],
    details: [
      { title: "Included", content: "1 Duvet Cover, 2 Pillowcases" },
      { title: "Care", content: "Machine wash cold. Tumble dry low." }
    ]
  },
  {
    id: "marble-coasters",
    slug: "marble-coasters",
    title: "Marble Coasters — Set of 4",
    price: 55,
    category: "Decor",
    description:
      "Hand-cut marble coasters with soft cork backing to protect surfaces. Each piece is naturally unique.",
    images: [
      "https://images.unsplash.com/photo-1520095972842-5d79d515c377?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567777327857-22c47e5f9846?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601048898731-6f2d14a3cd59?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "white", name: "White Marble", hex: "#F2F2F2" },
      { id: "black", name: "Black Marble", hex: "#1C1C1C" }
    ],
    details: [
      { title: "Dimensions", content: "10cm x 10cm" },
      { title: "Material", content: "Natural Marble, Cork Backing" }
    ]
  },
  {
    id: "canvas-backpack",
    slug: "canvas-backpack",
    title: "Heritage Canvas Backpack",
    price: 150,
    category: "Accessories",
    description:
      "Waxed canvas backpack with padded laptop sleeve and reinforced stitching. Designed for daily commuting and weekend travel.",
    images: [
      "https://images.unsplash.com/photo-1500336624523-d727130c3328?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "olive", name: "Olive Green", hex: "#6B6F4E" },
      { id: "navy", name: "Navy Blue", hex: "#1A2A49" }
    ],
    details: [
      { title: "Dimensions", content: "H: 45cm, W: 28cm, D: 14cm" },
      { title: "Capacity", content: "22L" }
    ]
  },
  {
    id: "stone-soap-dish",
    slug: "stone-soap-dish",
    title: "Stone Soap Dish",
    price: 32,
    category: "Bathroom",
    description:
      "Carved sandstone soap dish with natural drainage grooves. A minimal, durable addition to any bathroom sink.",
    images: [
      "https://images.unsplash.com/photo-1601048453707-e8d5ce5c3a0d?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616627903902-89c72c3bd6ed?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598530228140-568798e71df4?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "sandstone", name: "Sandstone", hex: "#C8B89A" },
      { id: "basalt", name: "Basalt Grey", hex: "#4B4B4B" }
    ],
    details: [
      { title: "Dimensions", content: "12cm x 8cm x 2cm" },
      { title: "Material", content: "Natural Sandstone" }
    ]
  },
  {
    id: "linen-curtains",
    slug: "linen-curtains",
    title: "Linen Curtain Panel",
    price: 95,
    category: "Decor",
    description:
      "Semi-sheer linen curtains that soften daylight while maintaining privacy. Finished with hidden tab top.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586105251261-72a756497e4f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e1?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "ecru", name: "Ecru", hex: "#E3DCC8" },
      { id: "taupe", name: "Taupe", hex: "#B5A89A" }
    ],
    details: [
      { title: "Dimensions", content: "270cm x 140cm" },
      { title: "Material", content: "100% Linen" }
    ]
  },
  {
    id: "oak-desk",
    slug: "oak-desk",
    title: "Modern Oak Desk",
    price: 720,
    category: "Furniture",
    description:
      "A clean-lined writing desk crafted from solid European oak. Includes two soft-close drawers and cable management passthrough.",
    images: [
      "https://images.unsplash.com/photo-1616627893042-1fc4ce69970e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589571739149-47ed84f08760?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576267423445-72a7f4e6c9a0?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "oak", name: "Natural Oak", hex: "#D1BFA4" },
      { id: "smoked", name: "Smoked Oak", hex: "#5C4A3D" }
    ],
    details: [
      { title: "Dimensions", content: "W: 120cm, D: 55cm, H: 75cm" },
      { title: "Material", content: "Solid Oak, Steel Hardware" }
    ]
  },
  {
    id: "plant-pot",
    slug: "plant-pot",
    title: "Matte Ceramic Plant Pot",
    price: 48,
    category: "Decor",
    description:
      "Matte ceramic planter with built-in drainage and matching saucer. Ideal for indoor plants and succulents.",
    images: [
      "https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1546456073-6712f79251bb?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "terracotta", name: "Terracotta", hex: "#C86B3C" },
      { id: "white", name: "Soft White", hex: "#F4F4F2" }
    ],
    details: [
      { title: "Dimensions", content: "Dia: 18cm, H: 16cm" },
      { title: "Material", content: "Matte Ceramic" }
    ]
  },
  {
    id: "walnut-shelf",
    slug: "walnut-shelf",
    title: "Floating Walnut Shelf",
    price: 140,
    category: "Furniture",
    description:
      "Solid walnut floating shelf with invisible brackets. Perfect for displaying books, candles, and decor pieces.",
    images: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154363-e2e716f8e8b6?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615873967394-bd6dc0e3b7a0?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "walnut", name: "Walnut", hex: "#5B4636" },
      { id: "dark", name: "Dark Walnut", hex: "#3A2D25" }
    ],
    details: [
      { title: "Dimensions", content: "W: 90cm, D: 20cm" },
      { title: "Weight Limit", content: "20kg" }
    ]
  },
  {
    id: "wool-throw",
    slug: "wool-throw",
    title: "Merino Wool Throw",
    price: 160,
    category: "Home Textiles",
    description:
      "Soft merino wool blanket woven in Portugal. Lightweight yet warm, with fringed edges for a classic finish.",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593181629936-f86688c1832a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "grey", name: "Heather Grey", hex: "#A9A9A9" },
      { id: "oat", name: "Oatmeal", hex: "#D6CDBE" }
    ],
    details: [
      { title: "Dimensions", content: "130cm x 180cm" },
      { title: "Material", content: "100% Merino Wool" }
    ]
  },
  {
    id: "espresso-cups",
    slug: "espresso-cups",
    title: "Porcelain Espresso Cups — Set of 2",
    price: 35,
    category: "Kitchenware",
    description:
      "Handmade porcelain espresso cups with a minimal curved silhouette. Perfect for daily coffee rituals.",
    images: [
      "https://images.unsplash.com/photo-1589923188900-85eeb3fa34b9?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610878180933-bf30c7c70a3c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520095972842-5d79d515c377?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "white", name: "Porcelain White", hex: "#FFFFFF" },
      { id: "ink", name: "Ink Blue", hex: "#2D3C54" }
    ],
    details: [
      { title: "Capacity", content: "90ml" },
      { title: "Care", content: "Dishwasher safe." }
    ]
  },
  {
    id: "twill-apron",
    slug: "twill-apron",
    title: "Cotton Twill Apron",
    price: 60,
    category: "Kitchenware",
    description:
      "Durable cotton twill apron with adjustable straps and double front pockets. Designed for home chefs and makers.",
    images: [
      "https://images.unsplash.com/photo-1508805097263-43cae7a6e6a1?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549388947-7e7c95f0a4f6?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "khaki", name: "Khaki", hex: "#C8B48A" },
      { id: "charcoal", name: "Charcoal", hex: "#3A3A3A" }
    ],
    details: [
      { title: "Material", content: "100% Cotton Twill" },
      { title: "Care", content: "Machine wash cold." }
    ]
  },
  {
    id: "glass-carafe",
    slug: "glass-carafe",
    title: "Handblown Glass Carafe",
    price: 75,
    category: "Kitchenware",
    description:
      "A handblown borosilicate glass carafe with a tapered mouth for smooth pouring. Ideal for water, wine, or iced tea.",
    images: [
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520095972842-5d79d515c377?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589923188900-85eeb3fa34b9?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "clear", name: "Clear", hex: "#F4F4F4" }
    ],
    details: [
      { title: "Capacity", content: "1L" },
      { title: "Material", content: "Borosilicate Glass" }
    ]
  },
  {
    id: "bath-towel",
    slug: "bath-towel",
    title: "Turkish Cotton Bath Towel",
    price: 45,
    category: "Bathroom",
    description:
      "Premium Turkish cotton bath towel woven for maximum absorbency and softness. Quick-drying and lightweight.",
    images: [
      "https://images.unsplash.com/photo-1588776814546-1cfac03d8142?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601048898731-6f2d14a3cd59?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e1?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "white", name: "Classic White", hex: "#FFFFFF" },
      { id: "beige", name: "Soft Beige", hex: "#E4D8C9" }
    ],
    details: [
      { title: "Dimensions", content: "70cm x 140cm" },
      { title: "Material", content: "Turkish Cotton" }
    ]
  },
  {
    id: "table-runner",
    slug: "table-runner",
    title: "Woven Table Runner",
    price: 38,
    category: "Home Textiles",
    description:
      "Handwoven cotton table runner with clean stitched edges. Adds subtle texture and warmth to any dining setup.",
    images: [
      "https://images.unsplash.com/photo-1601048898513-8cfdfc58f1a5?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588776814446-bf83f5e0e1d5?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "natural", name: "Natural Cotton", hex: "#E7DFD4" },
      { id: "brown", name: "Warm Brown", hex: "#6D4C41" }
    ],
    details: [
      { title: "Dimensions", content: "180cm x 35cm" },
      { title: "Care", content: "Machine wash gentle." }
    ]
  },
  {
    id: "brass-candle-holder",
    slug: "brass-candle-holder",
    title: "Brass Candle Holder",
    price: 42,
    category: "Decor",
    description:
      "Solid brushed brass candle holder with a warm reflective glow. Designed for standard taper candles.",
    images: [
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "brass", name: "Brass", hex: "#D4A657" }
    ],
    details: [
      { title: "Dimensions", content: "H: 9cm, Dia: 4cm" },
      { title: "Material", content: "Solid Brass" }
    ]
  }

];