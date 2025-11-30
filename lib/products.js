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
  }
];