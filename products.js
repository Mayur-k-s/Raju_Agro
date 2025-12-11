const products = [
  // --- FERTILIZERS ---
  {
    id: "fert-001",
    category: "fertilizers",
    name: "Bharat Urea (Neem Coated)",
    image: "Bharat_urea.png", 
    price: "₹266.50",
    quantity: "45 kg",
    shortDesc: "High-quality Nitrogen fertilizer essential for plant growth.",
    chemicalName: "Carbamide (46% Nitrogen)",
    purpose: "Primary source of Nitrogen to promote rapid green growth.",
    uses: [
      "Promotes leafy growth in paddy and sugarcane.",
      "Improves photosynthesis process.",
      "Neem coating ensures slow release of Nitrogen."
    ],
    manufacturing: "Produced by reacting ammonia with carbon dioxide under high pressure.",
    source: "Madras Fertilizers Limited (Government of India Undertaking)",
    warnings: "Do not apply in standing water. Keep away from children."
  },
  {
    id: "fert-002",
    category: "fertilizers",
    name: "DAP (Di-Ammonium Phosphate)",
    image: "fertilizer.jpg", 
    price: "₹1,350.00",
    quantity: "50 kg",
    shortDesc: "The world's most widely used phosphorus fertilizer.",
    chemicalName: "Diammonium Phosphate (18% N, 46% P)",
    purpose: "Root development and flowering support.",
    uses: [
      "Crucial for initial root establishment.",
      "Used during sowing/planting time.",
      "Provides both Nitrogen and Phosphorus."
    ],
    manufacturing: "Made by reacting phosphoric acid with ammonia.",
    source: "IPL (Indian Potash Limited)",
    warnings: "Avoid direct contact with seeds as it may cause burning."
  },

  // --- INSECTICIDES ---
  {
    id: "ins-001",
    category: "insecticides",
    name: "Coragen (Chlorantraniliprole)",
    image: "insecticides.png", // Use generic or specific image
    price: "₹1,850.00",
    quantity: "150 ml",
    shortDesc: "Broad-spectrum insecticide for long-lasting pest control.",
    chemicalName: "Chlorantraniliprole 18.5% SC",
    purpose: "Controls Lepidopteran pests like Stem Borer and Leaf Folder.",
    uses: [
      "Highly effective against Stem Borer in Paddy.",
      "Controls Bollworm in Cotton.",
      "Safe for beneficial insects."
    ],
    manufacturing: "Synthesized through complex organic chemical reactions involving pyrazole acids.",
    source: "FMC Corporation",
    warnings: "Toxic to aquatic life. Wear protective gear while spraying."
  },
  {
    id: "ins-002",
    category: "insecticides",
    name: "Monocrotophos 36% SL",
    image: "insecticides.png",
    price: "₹450.00",
    quantity: "1 Liter",
    shortDesc: "Systemic insecticide for sucking and chewing pests.",
    chemicalName: "Monocrotophos 36% SL",
    purpose: "Controls aphids, thrips, and bollworms.",
    uses: [
      "Used in Cotton, Paddy, and Pulses.",
      "Quick knockdown action.",
      "Systemic action protects new growth."
    ],
    manufacturing: "Organophosphate synthesis pathway.",
    source: "UPL Limited",
    warnings: "Highly toxic (Red Label). Restricted use recommended."
  },

  // --- PESTICIDES / FUNGICIDES ---
  {
    id: "pest-001",
    category: "pesticides",
    name: "Saaf (Carbendazim + Mancozeb)",
    image: "pesticides.png",
    price: "₹650.00",
    quantity: "1 kg",
    shortDesc: "Systemic and Contact Fungicide.",
    chemicalName: "Carbendazim 12% + Mancozeb 63% WP",
    purpose: "Treats fungal diseases like Blast, Leaf Spot, and Rust.",
    uses: [
      "Effective for Paddy Blast and Sheath Blight.",
      "Used for seed treatment.",
      "Dual mode of action prevents resistance."
    ],
    manufacturing: "Formulated by blending systemic benzimidazoles with dithiocarbamates.",
    source: "UPL Limited",
    warnings: "Do not inhale spray mist. Wash hands thoroughly after use."
  },

  // --- SEEDS ---
  {
    id: "seed-001",
    category: "seeds",
    name: "Rasi 659 Cotton Seeds",
    image: "seeds.png",
    price: "₹860.00",
    quantity: "450g Packet",
    shortDesc: "High-yielding Bt Cotton Hybrid.",
    chemicalName: "Hybrid Cotton Seeds (Bollgard II)",
    purpose: "Cotton cultivation for high yield and pest resistance.",
    uses: [
      "Resistant to American Bollworm.",
      "Suitable for both irrigated and rainfed conditions.",
      "Big boll size and easy picking."
    ],
    manufacturing: "Produced through genetic hybridization and strict quality testing.",
    source: "Rasi Seeds",
    warnings: "Store in a cool dry place. Do not use for food or feed."
  }
];