export const products = [
  // --- Existing 5 products here ---

  {
    id: "floor-lamp-01",
    slug: "floor-lamp-01",
    title: "Arc Floor Lamp",
    price: 320,
    category: "Lighting",
    description:
      "A sculptural arc lamp featuring a brushed steel frame and linen drum shade. Provides warm ambient lighting ideal for living spaces.",
    images: [
      "https://images.unsplash.com/photo-1615873968403-89e7c5e5a33e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616628188506-62e8507d890f?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "steel", name: "Brushed Steel", hex: "#C0C0C0" },
      { id: "black", name: "Matte Black", hex: "#1A1A1A" }
    ],
    details: [
      { title: "Height", content: "180cm" },
      { title: "Materials", content: "Steel Frame, Linen Shade" },
      { title: "Bulb", content: "E27 LED Included" }
    ]
  },

  {
    id: "linen-duvet-01",
    slug: "linen-duvet-01",
    title: "Linen Duvet Set",
    price: 150,
    category: "Home",
    description:
      "Stonewashed European flax linen duvet cover and pillowcases. Soft, breathable, and temperature regulating for year-round comfort.",
    images: [
      "https://images.unsplash.com/photo-1602080758315-9fbd1e2ea20b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602810315101-1f24c45ea7e8?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585821568636-016d5f3fd788?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "oat", name: "Oatmeal", hex: "#D7C9B8" },
      { id: "white", name: "Soft White", hex: "#F9F9F6" }
    ],
    details: [
      { title: "Material", content: "100% European Flax Linen" },
      { title: "Includes", content: "1 Duvet Cover, 2 Pillowcases" }
    ]
  },

  {
    id: "stone-coasters-01",
    slug: "stone-coasters-01",
    title: "Marble Coaster Set",
    price: 45,
    category: "Decor",
    description:
      "Set of four hand-cut marble coasters with cork backing. Minimal and durable for everyday table protection.",
    images: [
      "https://images.unsplash.com/photo-1616628184962-9643e516be6b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603808033192-082815d0e8f5?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603808033347-3c5e9c8ebefb?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "white", name: "White Marble", hex: "#EDEDED" },
      { id: "black", name: "Black Marble", hex: "#2B2B2B" }
    ],
    details: [
      { title: "Dimensions", content: "10cm x 10cm" },
      { title: "Material", content: "Natural Marble" }
    ]
  },

  {
    id: "wool-throw-01",
    slug: "wool-throw-01",
    title: "Merino Wool Throw",
    price: 110,
    category: "Home",
    description:
      "Luxuriously soft throw blanket woven from 100% Australian Merino wool. Lightweight warmth with a modern textured weave.",
    images: [
      "https://images.unsplash.com/photo-1615874959474-41e6087e9a60?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580715919898-9ff43d5b0cc3?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616628184773-15a6b0a3a28h?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "cream", name: "Cream", hex: "#F5ECE2" },
      { id: "charcoal", name: "Charcoal", hex: "#333333" }
    ],
    details: [
      { title: "Size", content: "130cm x 180cm" },
      { title: "Material", content: "100% Merino Wool" }
    ]
  },

  {
    id: "desk-organizer-01",
    slug: "desk-organizer-01",
    title: "Walnut Desk Organizer",
    price: 95,
    category: "Office",
    description:
      "A precision-crafted desk organizer featuring compartments for pens, notes, and everyday essentials. Made from American walnut.",
    images: [
      "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587129941851-f37d4a47f37c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "walnut", name: "Walnut", hex: "#5C4632" },
      { id: "black", name: "Black Stain", hex: "#1A1A1A" }
    ],
    details: [
      { title: "Dimensions", content: "W: 28cm, D: 14cm, H: 5cm" },
      { title: "Material", content: "Solid Walnut" }
    ]
  },

  {
    id: "glass-carafe-01",
    slug: "glass-carafe-01",
    title: "Ripple Glass Carafe",
    price: 60,
    category: "Kitchen",
    description:
      "A hand-blown borosilicate glass carafe with vertical ribbing for improved grip and refined aesthetics. Heat resistant.",
    images: [
      "https://images.unsplash.com/photo-1607345366928-39e0b485cac5?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607075931130-e04da9f88a6d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "clear", name: "Clear Glass", hex: "#F2F2F2" }
    ],
    details: [
      { title: "Volume", content: "1 Liter" },
      { title: "Material", content: "Borosilicate Glass" }
    ]
  },

  {
    id: "tea-kettle-01",
    slug: "tea-kettle-01",
    title: "Stovetop Tea Kettle",
    price: 130,
    category: "Kitchen",
    description:
      "A classic stovetop kettle made from brushed stainless steel with a heat-resistant handle. Compatible with gas, electric, and induction.",
    images: [
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1498525677781-1bbd7a8eddb0?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603898037225-45bf95cde9e0?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "steel", name: "Stainless Steel", hex: "#D1D5DB" },
      { id: "black", name: "Black Handle", hex: "#1E1E1E" }
    ],
    details: [
      { title: "Capacity", content: "1.7L" },
      { title: "Compatibility", content: "All stovetops" }
    ]
  },

  {
    id: "canvas-backpack-01",
    slug: "canvas-backpack-01",
    title: "Heavy Canvas Backpack",
    price: 160,
    category: "Accessories",
    description:
      "Durable canvas backpack with vegetable-tanned leather straps. Fits laptops up to 16 inches.",
    images: [
      "https://images.unsplash.com/photo-1542293787938-c9e299b8807c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579547621706-1a9c79d5ffda?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562159278-4c3b3fcde6b3?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "sand", name: "Sand", hex: "#D7C6A4" },
      { id: "olive", name: "Olive", hex: "#6B705C" }
    ],
    details: [
      { title: "Dimensions", content: "H: 45cm, W: 30cm, D: 15cm" },
      { title: "Material", content: "Heavy Canvas + Leather" }
    ]
  },

  {
    id: "ceramic-mug-01",
    slug: "ceramic-mug-01",
    title: "Handmade Ceramic Mug",
    price: 32,
    category: "Kitchen",
    description:
      "Wheel-thrown ceramic mug with a satin matte glaze. Each piece is unique with slight variations.",
    images: [
      "https://images.unsplash.com/photo-1587933780164-04aabd1bb236?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520931737576-7fe5e0b396af?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572977489236-12f30eab2eb6?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "sand", name: "Sand", hex: "#C8B69A" },
      { id: "charcoal", name: "Charcoal", hex: "#2A2A2A" }
    ],
    details: [
      { title: "Volume", content: "350ml" },
      { title: "Care", content: "Dishwasher safe" }
    ]
  },

  {
    id: "table-lamp-01",
    slug: "table-lamp-01",
    title: "Opal Glass Table Lamp",
    price: 140,
    category: "Lighting",
    description:
      "A mid-century inspired lamp featuring a warm opal glass globe and brushed brass base. Creates soft diffused light.",
    images: [
      "https://images.unsplash.com/photo-1616628184773-5ddf6204a511?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533676802871-59c3a07a0daa?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616627458507-bd8b1f5bbf52?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "brass", name: "Brushed Brass", hex: "#D4AF37" },
      { id: "black", name: "Black Base", hex: "#1C1C1C" }
    ],
    details: [
      { title: "Height", content: "38cm" },
      { title: "Bulb", content: "G9 LED Included" }
    ]
  },

  {
    id: "linen-curtains-01",
    slug: "linen-curtains-01",
    title: "Sheer Linen Curtains",
    price: 95,
    category: "Home",
    description:
      "Light-filtering sheer curtains made from natural linen. Adds softness and texture to any room.",
    images: [
      "https://images.unsplash.com/photo-1597042870506-bd6d9d38a6f5?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519710164211-24cae46f2e46?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "white", name: "Off White", hex: "#F2EFE7" },
      { id: "taupe", name: "Taupe", hex: "#C9B8A6" }
    ],
    details: [
      { title: "Size", content: "140cm x 280cm" },
      { title: "Material", content: "100% Linen" }
    ]
  },

  {
    id: "cutting-board-01",
    slug: "cutting-board-01",
    title: "Walnut Cutting Board",
    price: 70,
    category: "Kitchen",
    description:
      "Reversible edge-grain cutting board crafted from sustainably harvested American walnut.",
    images: [
      "https://images.unsplash.com/photo-1616627458587-73c740aa5c93?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604935933778-9ab0ee20cf14?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543351611-54c6731ac426?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "walnut", name: "Walnut", hex: "#5A4635" }
    ],
    details: [
      { title: "Dimensions", content: "40cm x 25cm" },
      { title: "Material", content: "Solid Walnut" }
    ]
  },

  {
    id: "sofa-01",
    slug: "sofa-01",
    title: "Modern Modular Sofa",
    price: 2100,
    category: "Furniture",
    description:
      "A modular three-seater sofa with high-density cushions, kiln-dried hardwood frame, and machine-washable covers.",
    images: [
      "https://images.unsplash.com/photo-1616620435367-83b081e0b662?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615873968404-0e2a6f2a4440?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519710164211-24cae46f2e46?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "beige", name: "Beige", hex: "#D8D2C4" },
      { id: "slate", name: "Slate Grey", hex: "#6C6F72" }
    ],
    details: [
      { title: "Dimensions", content: "W: 220cm, D: 92cm, H: 84cm" },
      { title: "Material", content: "Hardwood, Foam, Fabric" }
    ]
  },

  {
    id: "sculpture-01",
    slug: "sculpture-01",
    title: "Abstract Stone Sculpture",
    price: 210,
    category: "Decor",
    description:
      "Hand-carved minimalist sculpture made from natural limestone. Each piece is one-of-a-kind.",
    images: [
      "https://images.unsplash.com/photo-1602526219337-b39a2a908db8?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580842754708-e0da5a89d487?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1629654852426-d76db9d9e0aa?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "stone", name: "Light Stone", hex: "#D4C9B9" }
    ],
    details: [
      { title: "Height", content: "28cm" },
      { title: "Material", content: "Natural Limestone" }
    ]
  },

  {
    id: "bedside-table-01",
    slug: "bedside-table-01",
    title: "Oak Bedside Table",
    price: 320,
    category: "Furniture",
    description:
      "A minimal bedside table made from solid European oak with a soft-close drawer system.",
    images: [
      "https://images.unsplash.com/photo-1532372320572-cda25653a26c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616628185043-9fa7e52d27df?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555041469-d4414fae3e69?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "oak", name: "Natural Oak", hex: "#D4C3A3" },
      { id: "dark-oak", name: "Dark Oak", hex: "#5A4738" }
    ],
    details: [
      { title: "Dimensions", content: "H: 55cm, W: 45cm, D: 38cm" },
      { title: "Material", content: "Solid Oak" }
    ]
  },

  {
    id: "planter-01",
    slug: "planter-01",
    title: "Matte Ceramic Planter",
    price: 55,
    category: "Decor",
    description:
      "A minimal ceramic planter with a built-in drainage tray. Ideal for indoor plants and succulents.",
    images: [
      "https://images.unsplash.com/photo-1616628184962-9643e516be6b?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602526219337-b39a2a908db8?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520975943377-f5262a0a9633?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "white", name: "White", hex: "#F6F6F6" },
      { id: "sage", name: "Sage Green", hex: "#A3B18A" }
    ],
    details: [
      { title: "Diameter", content: "16cm" },
      { title: "Material", content: "Ceramic" }
    ]
  },

  {
    id: "chef-knife-01",
    slug: "chef-knife-01",
    title: "Carbon Steel Chef Knife",
    price: 180,
    category: "Kitchen",
    description:
      "Hand-forged 8-inch chef knife with a Japanese carbon steel blade and walnut handle. Razor-sharp and perfectly balanced.",
    images: [
      "https://images.unsplash.com/photo-1588346476088-5f8b60a7a76e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506804886640-e68349f71cff?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604908177104-c100db75f3ad?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "walnut", name: "Walnut Handle", hex: "#5A4633" }
    ],
    details: [
      { title: "Blade Length", content: "8 Inches" },
      { title: "Material", content: "Carbon Steel + Walnut" }
    ]
  },

  {
    id: "wool-rug-01",
    slug: "wool-rug-01",
    title: "Handwoven Wool Rug",
    price: 490,
    category: "Home",
    description:
      "A handwoven flat-weave rug made from New Zealand wool. Soft underfoot with neutral tonal patterning.",
    images: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1532372320572-cda25653a26c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616628184807-72dc57a2b953?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "cream", name: "Cream", hex: "#EDE6D9" },
      { id: "grey", name: "Warm Grey", hex: "#C4BEB6" }
    ],
    details: [
      { title: "Size", content: "200cm x 300cm" },
      { title: "Material", content: "New Zealand Wool" }
    ]
  },

  {
    id: "mirror-01",
    slug: "mirror-01",
    title: "Rounded Wall Mirror",
    price: 180,
    category: "Decor",
    description:
      "A frameless rounded mirror with polished edges. Perfect for hallways, bathrooms, or entryways.",
    images: [
      "https://images.unsplash.com/photo-1591076482161-e467d9f15f46?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602446171679-df6e3c2b5e24?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154356-596af9009e17?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "silver", name: "Silver Edge", hex: "#D8D8D8" }
    ],
    details: [
      { title: "Diameter", content: "60cm" },
      { title: "Material", content: "Tempered Glass" }
    ]
  },

  {
    id: "throw-pillow-01",
    slug: "throw-pillow-01",
    title: "Textured Throw Pillow",
    price: 48,
    category: "Home",
    description:
      "A soft, textured throw pillow with a removable cushion insert. Adds warmth to any sofa or bed.",
    images: [
      "https://images.unsplash.com/photo-1595526114035-0c39445e65b3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602810315101-1f24c45ea7e8?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610465299995-0bdcb0d1f917?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "cream", name: "Cream", hex: "#EFE7D7" },
      { id: "rust", name: "Rust", hex: "#B65A3A" }
    ],
    details: [
      { title: "Size", content: "50cm x 50cm" },
      { title: "Cover", content: "Removable + Machine Washable" }
    ]
  },

  {
    id: "fragrance-01",
    slug: "fragrance-01",
    title: "Home Fragrance Diffuser",
    price: 65,
    category: "Decor",
    description:
      "A natural essential oil diffuser with rattan reeds. Releases a subtle, long-lasting scent.",
    images: [
      "https://images.unsplash.com/photo-1520830564259-df0e8ddde3f5?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580842754708-e0da5a89d487?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616628184807-72dc57a2b953?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "amber", name: "Amber Bottle", hex: "#8C5E3C" }
    ],
    details: [
      { title: "Volume", content: "120ml" },
      { title: "Duration", content: "Up to 90 Days" }
    ]
  },

  {
    id: "candle-01",
    slug: "candle-01",
    title: "Soy Wax Candle",
    price: 30,
    category: "Decor",
    description:
      "Hand-poured soy candle with a cotton wick and subtle earthy aroma. Burns clean for up to 40 hours.",
    images: [
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504203700686-f21e703e5f53?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "white", name: "White Wax", hex: "#FAF7F2" },
      { id: "amber", name: "Amber Jar", hex: "#8C583A" }
    ],
    details: [
      { title: "Burn Time", content: "40 Hours" },
      { title: "Material", content: "100% Soy Wax" }
    ]
  },

  {
    id: "wall-art-01",
    slug: "wall-art-01",
    title: "Minimal Line Art Print",
    price: 45,
    category: "Decor",
    description:
      "Museum-grade matte art print featuring abstract minimal line drawings. Frame not included.",
    images: [
      "https://images.unsplash.com/photo-1541614101331-1a5a3a7871d5?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524646432684-e4f764e1cf9d?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "white", name: "White Background", hex: "#FFFFFF" }
    ],
    details: [
      { title: "Size", content: "A2 (42 x 59.4 cm)" },
      { title: "Print", content: "Matte Archival Paper" }
    ]
  },

  {
    id: "bed-frame-01",
    slug: "bed-frame-01",
    title: "Solid Oak Bed Frame",
    price: 980,
    category: "Furniture",
    description:
      "A handcrafted platform bed made from sustainably sourced oak with a slatted base for improved mattress airflow.",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600047504697-7c9039e08107?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154426-729b3bf6fb87?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "oak", name: "Natural Oak", hex: "#D4C3A3" },
      { id: "dark-oak", name: "Dark Oak", hex: "#5D4037" }
    ],
    details: [
      { title: "Size", content: "Queen (160cm x 200cm)" },
      { title: "Material", content: "Solid Oak Frame" }
    ]
  },

  {
    id: "carpet-01",
    slug: "carpet-01",
    title: "Soft Woven Carpet",
    price: 230,
    category: "Home",
    description:
      "A soft woven carpet offering comfort and durability. Neutral tone complements any interior.",
    images: [
      "https://images.unsplash.com/photo-1532372320572-cda25653a26c?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563411654055-03616fb44475?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "sand", name: "Sand", hex: "#D4C7B3" },
      { id: "grey", name: "Cool Grey", hex: "#B5B5B5" }
    ],
    details: [
      { title: "Size", content: "200cm x 250cm" },
      { title: "Material", content: "Woven Textile" }
    ]
  },

  {
    id: "coat-hook-01",
    slug: "coat-hook-01",
    title: "Modern Wall Hooks",
    price: 38,
    category: "Decor",
    description:
      "A set of three minimalist wall hooks with weighted metal construction. Ideal for coats, bags, and accessories.",
    images: [
      "https://images.unsplash.com/photo-1595535373410-ead1c018f0b5?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583446451785-f5a3bfa2a343?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519710164211-24cae46f2e46?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "black", name: "Black Metal", hex: "#2A2A2A" },
      { id: "brass", name: "Brass", hex: "#D4AF37" }
    ],
    details: [
      { title: "Set", content: "3 Hooks" },
      { title: "Material", content: "Metal" }
    ]
  },

  {
    id: "wine-glass-01",
    slug: "wine-glass-01",
    title: "Crystal Wine Glass Set",
    price: 85,
    category: "Kitchen",
    description:
      "Set of two lead-free crystal wine glasses hand-blown for optimal clarity and balance.",
    images: [
      "https://images.unsplash.com/photo-1524593119773-e9e8f7b9ee0e?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616628184807-72dc57a2b953?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "clear", name: "Clear", hex: "#F8F8F8" }
    ],
    details: [
      { title: "Set", content: "2 Glasses" },
      { title: "Volume", content: "450ml Each" }
    ]
  },

  {
    id: "blanket-01",
    slug: "blanket-01",
    title: "Organic Cotton Blanket",
    price: 140,
    category: "Home",
    description:
      "A breathable blanket woven from 100% organic cotton. Perfect for layering during all seasons.",
    images: [
      "https://images.unsplash.com/photo-1595526114035-0c39445e65b3?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154356-596af9009e17?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603898037225-45bf95cde9e0?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "white", name: "Natural White", hex: "#F6F4EC" },
      { id: "beige", name: "Beige", hex: "#D8CFC0" }
    ],
    details: [
      { title: "Size", content: "150cm x 200cm" },
      { title: "Material", content: "Organic Cotton" }
    ]
  },

  {
    id: "sideboard-01",
    slug: "sideboard-01",
    title: "Walnut Sideboard",
    price: 1350,
    category: "Furniture",
    description:
      "A contemporary sideboard crafted from solid walnut and finished with soft-close hinges. Ideal for dining or living spaces.",
    images: [
      "https://images.unsplash.com/photo-1587502536900-9c4f8d24caad?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555041469-d4414fae3e69?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616628184807-72dc57a2b953?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "walnut", name: "Walnut", hex: "#5D4635" }
    ],
    details: [
      { title: "Dimensions", content: "W: 160cm, H: 80cm, D: 45cm" },
      { title: "Material", content: "Solid Walnut" }
    ]
  },

  {
    id: "water-bottle-01",
    slug: "water-bottle-01",
    title: "Insulated Steel Bottle",
    price: 42,
    category: "Accessories",
    description:
      "A double-walled insulated water bottle that keeps beverages cold for 24 hours or hot for 12.",
    images: [
      "https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520975943377-f5262a0a9633?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "black", name: "Black", hex: "#1C1C1C" },
      { id: "silver", name: "Silver", hex: "#D1D5DB" }
    ],
    details: [
      { title: "Volume", content: "750ml" },
      { title: "Material", content: "Stainless Steel" }
    ]
  },

  {
    id: "wristwatch-01",
    slug: "wristwatch-01",
    title: "Minimal Analog Watch",
    price: 210,
    category: "Accessories",
    description:
      "A clean, minimal wristwatch featuring a Japanese quartz movement and Italian leather strap.",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "black", name: "Black Leather", hex: "#1A1A1A" },
      { id: "tan", name: "Tan Leather", hex: "#C49A6C" }
    ],
    details: [
      { title: "Case Size", content: "40mm" },
      { title: "Movement", content: "Japanese Quartz" }
    ]
  },

  {
    id: "office-chair-01",
    slug: "office-chair-01",
    title: "Ergonomic Office Chair",
    price: 420,
    category: "Furniture",
    description:
      "An ergonomic office chair with lumbar support, breathable mesh, and smooth 360° swivel.",
    images: [
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555041469-8b53a4c83de3?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1000&auto=format&fit=crop"
    ],
    colors: [
      { id: "black", name: "Black Mesh", hex: "#1A1A1A" },
      { id: "grey", name: "Grey Mesh", hex: "#727272" }
    ],
    details: [
      { title: "Adjustments", content: "Height + Lumbar + Armrests" },
      { title: "Material", content: "Mesh + Steel Base" }
    ]
  }
];
