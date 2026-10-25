/**
 * ============================================================
 *  ELUVINA AESTHETIC CENTRE — PRODUCTS DATA
 * ============================================================
 *  HOW TO ADD A PRODUCT:
 *  1. Copy one of the existing product objects below.
 *  2. Give it a unique `id`.
 *  3. Set `category` to "Hair" or "Skin".
 *  4. Set `subCategory` to the matching category name
 *     (e.g. "Shampoo", "Face Wash", "Minoxidil", etc.)
 *  5. Fill in name, mrp, price, description, and benefits.
 *  6. Place a product image in /public/images/products/
 *     and update the `image` field.
 * ============================================================
 */

export const productsData = [

  // ─────────────────────────────────────────────
  //  HAIR — Medicated Shampoo & Hair Care
  // ─────────────────────────────────────────────
  {
    id: "h-sh-001",
    category: "Hair",
    subCategory: "Medicated Shampoo",
    name: "Anatrix Hairfall Defense Shampoo",
    image: "/images/products/anatrix_hairfall_defense_shampoo.avif",
    mrp: 550,
    price: 495,
    description: "Anti Hairfall Hair Growth Supplement (120 ml) for Hairfall & Follicular Hypoactivity.",
    benefits: [
      "Increases A:T ratio",
      "Repairs hair shaft",
      "Aids in hair growth",
      "Smoothens hair texture"
    ]
  },
  {
    id: "h-sh-002",
    category: "Hair",
    subCategory: "Medicated Shampoo",
    name: "Follidan Anti Dandruff Shampoo",
    image: "/images/products/follidan_shampoo.avif",
    mrp: 390,
    price: 351,
    description: "Anti-Dandruff Shampoo for All Hair Types (100 ml) with Climbazole & Piroctone Olamine.",
    benefits: [
      "Controls itching & scalp redness",
      "Climbazole & Piroctone Olamine action",
      "Clears & calms irritated scalp",
      "Prevents dandruff recurrence"
    ]
  },

  // ─────────────────────────────────────────────
  //  HAIR — Hair Oil
  // ─────────────────────────────────────────────
  {
    id: "h-ho-001",
    category: "Hair",
    subCategory: "Hair Oil",
    name: "Scalp Revival Hair Oil",
    image: "/images/products/cat_hair_oil.png",
    mrp: 899,
    price: 809,
    description: "A powerful blend of Bhringraj, Rosemary, and Castor Oil that stimulates hair growth, nourishes the scalp, and improves blood circulation.",
    benefits: [
      "Promotes new hair growth",
      "Reduces scalp inflammation",
      "Prevents premature greying",
      "Non-sticky, lightweight formula"
    ]
  },

  // ─────────────────────────────────────────────
  //  HAIR — Hair Serum
  // ─────────────────────────────────────────────
  {
    id: "h-hs-001",
    category: "Hair",
    subCategory: "Hair Serum",
    name: "Anatrix Pro Hair Serum",
    image: "/images/products/anatrix_hair_pro_serum.avif",
    mrp: 1350,
    price: 1215,
    description: "Multiple Pathway Stimulation for Hair Growth with Redensyl & Anagain (50 ml).",
    benefits: [
      "Increases anagen phase hair density",
      "Aids in hair elongation",
      "Enhances follicular stem cell activity",
      "Prevents miniaturization of hair roots"
    ]
  },
  {
    id: "h-hs-002",
    category: "Hair",
    subCategory: "Hair Serum",
    name: "Anable Anti Hairfall and Hair Regrowth Serum",
    image: "/images/products/anable_hair_serum.avif",
    mrp: 1300,
    price: 1170,
    description: "Advanced Hair Growth & Density Serum formulated with 3% Redensyl, 3% Procapil, 2% Anagain, SpecPed SC Complex & Trifolium Pratense (50 ml).",
    benefits: [
      "Clinically active formula: AnaGain, Procapil & Redensyl",
      "Stimulates dormant follicles & boosts hair density",
      "Lengthens hair growth cycle & anchors hair roots",
      "Reduces scalp inflammation & promotes cellular renewal"
    ]
  },

  // ─────────────────────────────────────────────
  //  HAIR — Minoxidil
  // ─────────────────────────────────────────────
  {
    id: "h-mx-001",
    category: "Hair",
    subCategory: "Minoxidil",
    name: "Minoxidil 5% Solution",
    image: "/images/products/cat_minoxidil.avif",
    mrp: 1199,
    price: 1079,
    description: "Minoxidil 5% topical solution clinically proven to stimulate hair follicles, promote regrowth, and halt hereditary hair loss in men and women.",
    benefits: [
      "Clinically proven active formulation",
      "Stimulates dormant hair follicles",
      "Visible results in 3-4 months",
      "Easy targeted dropper application"
    ]
  },

  // ─────────────────────────────────────────────
  //  SKIN — Face Wash & Cleanser
  // ─────────────────────────────────────────────
  {
    id: "s-fw-001",
    category: "Skin",
    subCategory: "Face Wash",
    name: "Vegetal Tea Tree Acne Prevention Gel Face Wash",
    image: "",
    mrp: 249,
    price: 224,
    description: "Soap-free, paraben-free gel face wash (100 ml) for oily, acne-prone skin with sebum control.",
    benefits: [
      "Controls excess sebum & shine",
      "Soap-free gentle purifying formula",
      "Prevents acne lesions & breakouts",
      "Paraben free and dermatologically tested"
    ]
  },
  {
    id: "s-fw-002",
    category: "Skin",
    subCategory: "Face Wash",
    name: "Vegetal Sandal Whitening Gel Face Wash",
    image: "",
    mrp: 250,
    price: 225,
    description: "Whitening gel cleanser (100 ml) formulated for uneven skin tone, dull skin & tan removal.",
    benefits: [
      "Targets uneven skin tone & sun tan",
      "Restores natural skin radiance",
      "Gentle daily herbal brightening",
      "Hypoallergenic & paraben free"
    ]
  },
  {
    id: "s-fw-003",
    category: "Skin",
    subCategory: "Face Wash",
    name: "Dermshine Advanced Gentle Cleanser",
    image: "/images/products/dermshine_cleanser.avif",
    mrp: 650,
    price: 585,
    description: "Barrier Repair + Brightening Cleanser (100 ml) with Niacinamide, Alpha Arbutin & AHA Ceramide Complex.",
    benefits: [
      "AHA blend and ceramide complex",
      "With Niacinamide & Alpha Arbutin",
      "Supports skin barrier & tan removal",
      "Suitable for normal to dry & sensitive skin"
    ]
  },
  {
    id: "s-fw-004",
    category: "Skin",
    subCategory: "Face Wash",
    name: "Tea Tree Acne Face Wash & Vegetal Sandal Combo",
    image: "",
    mrp: 500,
    price: 450,
    description: "Dual cleansing care pack (100 ml + 100 ml) combining Tea Tree sebum control with Sandal skin brightening.",
    benefits: [
      "Complete acne prevention & tan removal combo",
      "Deep cleansing without drying skin",
      "Soap-free & paraben-free herbal formulations",
      "Value combo pack"
    ]
  },

  // ─────────────────────────────────────────────
  //  SKIN — Soap & Body Care
  // ─────────────────────────────────────────────
  {
    id: "s-sp-001",
    category: "Skin",
    subCategory: "Soap",
    name: "Duvitin Moisturising Soap for Dry Skin",
    image: "/images/products/duvitin_moisturising_soap.avif",
    mrp: 408,
    price: 367,
    description: "Intense moisturising soap pack of 4 (300 g) formulated with Shea Butter & Vitamin E for dry, dehydrated skin.",
    benefits: [
      "Deeply nourishes & locks in moisture",
      "Enriched with Shea Butter & Vitamin E",
      "Enhances skin softness & elasticity",
      "Pack of 4 convenient clinical bars"
    ]
  },

  // ─────────────────────────────────────────────
  //  SKIN — Moisturizer
  // ─────────────────────────────────────────────
  {
    id: "s-mo-001",
    category: "Skin",
    subCategory: "Moisturizer",
    name: "Vegetal SoftLite™ Intense Daily Moisturiser",
    image: "",
    mrp: 310,
    price: 279,
    description: "Creamy intense daily lotion (90 ml) for dry, itchy skin with non-greasy brightening finish.",
    benefits: [
      "Moisturises, restores & protects skin barrier",
      "Non-comedogenic & hypoallergenic",
      "Relieves dry, itchy skin instantly",
      "Lightweight non-greasy absorption"
    ]
  },

  // ─────────────────────────────────────────────
  //  SKIN — Sunscreen
  // ─────────────────────────────────────────────
  {
    id: "s-ss-001",
    category: "Skin",
    subCategory: "Sunscreen",
    name: "UVICOZ Aqua Gel Sunscreen SPF 50+ PA++++",
    image: "/images/products/uvicoz_sunscreen.avif",
    mrp: 650,
    price: 585,
    description: "Oxybenzone-free aqua gel sunscreen (60 g) with microencapsulated technology and hydrating finish.",
    benefits: [
      "SPF 50+ PA++++ broad-spectrum protection",
      "Oxybenzone free microencapsulated formula",
      "Hydrating, non-greasy aqua gel texture",
      "Zero white cast, dermatologist tested"
    ]
  },
  {
    id: "s-ss-002",
    category: "Skin",
    subCategory: "Sunscreen",
    name: "SUNDAM Sunscreen SPF 50 PA++++",
    image: "/images/products/sundam_sunscreen.avif",
    mrp: 850,
    price: 765,
    description: "Broad Spectrum UVA/UVB protection (50 g) with Microbata Photoscience and Gen 2 UV filters.",
    benefits: [
      "Strong UVA/UVB + IR + HEV blue light defense",
      "Powered by Gen Z intelligent UV filters",
      "Microbiome-friendly protective shield",
      "Lightweight matte finish without residue"
    ]
  },

  // ─────────────────────────────────────────────
  //  SKIN — Serum
  // ─────────────────────────────────────────────
  {
    id: "s-sr-001",
    category: "Skin",
    subCategory: "Serum",
    name: "Blabon 5% Niacinamide Serum",
    image: "/images/products/blabon_serum.avif",
    mrp: 950,
    price: 855,
    description: "5% Niacinamide Radiance Serum for Acne & Pigmentation (30 ml). Refines pores & evens skin tone.",
    benefits: [
      "Fades acne marks & dark spots",
      "Reduces hyperpigmentation",
      "Regulates sebum production",
      "Minimizes enlarged pores"
    ]
  },
  {
    id: "s-sr-002",
    category: "Skin",
    subCategory: "Serum",
    name: "Hebeda Hyaluronic Serum",
    image: "/images/products/hebeda_serum.avif",
    mrp: 770,
    price: 693,
    description: "Multi Molecular Weight Hyaluronic Acid 2% (30 ml) for deep cellular hydration.",
    benefits: [
      "Provides intense hydration",
      "Promotes elasticity & firmness",
      "Softens fine lines",
      "Improves skin texture"
    ]
  },
  {
    id: "s-sr-003",
    category: "Skin",
    subCategory: "Serum",
    name: "Ceutox Pro Cream Serum",
    image: "/images/products/ceutox_pro_cream_serum.avif",
    mrp: 1650,
    price: 1485,
    description: "0.3% Microencapsulated Retinol (30 ml) for advanced cellular turnover.",
    benefits: [
      "Reduces blemishes & spots",
      "Improves overall skin texture",
      "Softens fine lines & wrinkles",
      "Depigments for an even skin tone"
    ]
  },

  // ─────────────────────────────────────────────
  //  SKIN — Cream & Eye Care
  // ─────────────────────────────────────────────
  {
    id: "s-cr-001",
    category: "Skin",
    subCategory: "Cream",
    name: "Kojic Acid Brightening Cream",
    image: "/images/products/cat_cream.png",
    mrp: 999,
    price: 899,
    description: "Kojic Acid and Niacinamide combined to reduce hyperpigmentation, melasma, and uneven skin tone for a visibly brighter complexion.",
    benefits: [
      "Reduces melasma",
      "Brightens dull complexion",
      "Even skin tone",
      "Gentle for daily use"
    ]
  },
  {
    id: "s-ue-001",
    category: "Skin",
    subCategory: "Under Eye",
    name: "Peptide Eye Cream",
    image: "/images/products/cat_under_eye.png",
    mrp: 1199,
    price: 1079,
    description: "Caffeine and Tri-Peptide enriched eye cream that reduces dark circles, puffiness, and fine lines around the delicate eye area.",
    benefits: [
      "Reduces dark circles",
      "Depuffs tired eyes",
      "Smooths fine lines",
      "Lightweight & fast absorbing"
    ]
  },

];

/**
 * Helper: get all unique subCategories for a given tab
 */
export function getSubCategories(tab) {
  const filtered = tab === 'All'
    ? productsData
    : productsData.filter(p => p.category === tab);
  return [...new Set(filtered.map(p => p.subCategory))];
}

/**
 * Helper: get products for a given subCategory
 */
export function getProductsBySubCategory(subCategory) {
  return productsData.filter(p => p.subCategory === subCategory);
}

