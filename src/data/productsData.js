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
  //  HAIR — Shampoo
  // ─────────────────────────────────────────────
  {
    id: "h-sh-001",
    category: "Hair",
    subCategory: "Shampoo",
    name: "ANATRIX HAIRFALL DEFENSE SHAMPOO",
    image: "/images/products/Hair_Shampoo/ANATRIX HAIRFALL DEFENSE SHAMPOO.png",
    mrp: 550,
    price: 500,
    description: "Anti Hairfall Hair Growth Supllement (120 ml)",
    benefits: [
      "Increases A:T ratio",
      "Repairs hair shaft ",
      "Aids in hair growth",
      "Smoothens hair texture "
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
    price: 699,
    description: "A powerful blend of Bhringraj, Rosemary, and Castor Oil that stimulates hair growth, nourishes the scalp, and improves blood circulation.",
    benefits: [
      "Promotes new hair growth",
      "Reduces scalp inflammation",
      "Prevents premature greying",
      "Non-sticky, lightweight formula"
    ]
  },
  {
    id: "h-ho-002",
    category: "Hair",
    subCategory: "Hair Oil",
    name: "Onion Blackseed Hair Oil",
    image: "/images/products/cat_hair_oil.png",
    mrp: 749,
    price: 549,
    description: "Onion extract and Black Seed Oil come together to fight hair thinning, dandruff, and scalp infections while delivering deep nourishment.",
    benefits: [
      "Controls dandruff",
      "Thickens thin hair",
      "Rich in antioxidants",
      "Suitable for all hair types"
    ]
  },

  // ─────────────────────────────────────────────
  //  HAIR — Hair Serum
  // ─────────────────────────────────────────────
  {
    id: "h-hs-001",
    category: "Hair",
    subCategory: "Hair Serum",
    name: "ANATRIX PRO HAIR SERUM",
    image: "/images/products/Hair_Serum/Anatrix_Hair_Pro_Serum.png",
    mrp: 990,
    price: 950,
    description: "Multiple Pathway Stimulation for Hair Growth. (50 ml)",
    benefits: [
      "Increases anagen phase hair density",
      "Aids in hair elongation ",
      "Enhances stem cell activity",
      "Prevents miniaturization of hair "
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
    image: "/images/products/cat_minoxidil.png",
    mrp: 1199,
    price: 899,
    description: "FDA-approved Minoxidil 5% topical solution clinically proven to regrow hair and halt hereditary hair loss in men and women.",
    benefits: [
      "FDA approved formula",
      "Clinically proven hair regrowth",
      "Visible results in 3-4 months",
      "Easy dropper application"
    ]
  },
  {
    id: "h-mx-002",
    category: "Hair",
    subCategory: "Minoxidil",
    name: "Minoxidil 10% Extra Strength",
    image: "/images/products/cat_minoxidil.png",
    mrp: 1599,
    price: 1299,
    description: "Extra-strength Minoxidil 10% for advanced hair loss stages, formulated with Finasteride-free compound for maximum regrowth.",
    benefits: [
      "Extra strength formula",
      "For advanced hair loss",
      "Fast-absorbing solution",
      "Doctor recommended"
    ]
  },

  // ─────────────────────────────────────────────
  //  SKIN — Face Wash
  // ─────────────────────────────────────────────
  {
    id: "s-fw-001",
    category: "Skin",
    subCategory: "Face Wash",
    name: "Gentle Hydrating Face Wash",
    image: "/images/products/cat_face_wash.png",
    mrp: 599,
    price: 449,
    description: "A creamy, soap-free face wash with Hyaluronic Acid and Ceramides that cleanses without stripping the skin's natural moisture barrier.",
    benefits: [
      "Soap-free gentle formula",
      "Locks in moisture",
      "Suitable for sensitive skin",
      "Dermatologist tested"
    ]
  },
  {
    id: "s-fw-002",
    category: "Skin",
    subCategory: "Face Wash",
    name: "Salicylic Acid Acne Face Wash",
    image: "/images/products/cat_face_wash.png",
    mrp: 699,
    price: 499,
    description: "2% Salicylic Acid powered face wash that deep cleans pores, controls excess oil, and prevents acne breakouts.",
    benefits: [
      "2% Salicylic Acid",
      "Unclogs and minimises pores",
      "Controls excess sebum",
      "Prevents breakouts"
    ]
  },

  // ─────────────────────────────────────────────
  //  SKIN — Moisturizer
  // ─────────────────────────────────────────────
  {
    id: "s-mo-001",
    category: "Skin",
    subCategory: "Moisturizer",
    name: "Ultra-Light Day Moisturizer",
    image: "/images/products/cat_moisturizer.png",
    mrp: 899,
    price: 699,
    description: "A feather-light, non-comedogenic moisturizer with Niacinamide and Hyaluronic Acid that hydrates all day without greasiness.",
    benefits: [
      "Non-comedogenic formula",
      "24-hour hydration",
      "Brightens dull skin",
      "SPF 15 added protection"
    ]
  },
  {
    id: "s-mo-002",
    category: "Skin",
    subCategory: "Moisturizer",
    name: "Intense Repair Night Cream",
    image: "/images/products/cat_moisturizer.png",
    mrp: 1299,
    price: 999,
    description: "A rich overnight cream with Retinol and Peptides that repairs skin damage, boosts collagen, and delivers visibly younger-looking skin by morning.",
    benefits: [
      "Retinol boosts cell turnover",
      "Reduces fine lines overnight",
      "Deep nourishment while you sleep",
      "Clinically tested"
    ]
  },

  // ─────────────────────────────────────────────
  //  SKIN — Sunscreen
  // ─────────────────────────────────────────────
  {
    id: "s-ss-001",
    category: "Skin",
    subCategory: "Sunscreen",
    name: "SPF 50+ Matte Sunscreen",
    image: "/images/products/cat_sunscreen.png",
    mrp: 799,
    price: 599,
    description: "Broad-spectrum SPF 50+ PA++++ sunscreen with a matte finish that shields against UVA/UVB rays and blue light without white cast.",
    benefits: [
      "SPF 50+ PA++++",
      "Zero white cast",
      "Matte finish for oily skin",
      "Blue light protection"
    ]
  },

  // ─────────────────────────────────────────────
  //  SKIN — Serum
  // ─────────────────────────────────────────────
  {
    id: "s-sr-001",
    category: "Skin",
    subCategory: "Serum",
    name: " BLABON SERUM ",
    image: "/images/products/Face_Serum/Blabon_Serum.png",
    mrp: 950,
    price: 900,
    description: "5% | 10% Niacinamide Radiance Serum (30 ml)",
    benefits: [
      "Fades acne marks",
      "Reduces hyperpigmentation",
      "Regulates sebum production",
      "Minimizes pore appearance"
    ]
  },
  {
    id: "s-sr-002",
    category: "Skin",
    subCategory: "Serum",
    name: " HEBEDA SERUM",
    image: "/images/products/Face_Serum/Hebeda_ Serum.png",
    mrp: 770,
    price: 750,
    description: "Multi Molecular Weight Hyaluronic Acid (30 ml)",
    benefits: [
      "Provides hydration ",
      "Promotes elasticity ",
      "Improves skin texture ",
      "Anti-aging "
    ]
  },
  {
    id: "s-sr-003",
    category: "Skin",
    subCategory: "Serum",
    name: " CEUTOX PRO CREAM SERUM",
    image: "/images/products/Face_Serum/Ceutox_Pro_Serum.png",
    mrp: 1650,
    price: 1600,
    description: "0.3% Microencapsulated Retinol (30 ml)",
    benefits: [
      "Reduces blemishes ",
      "Improves skin texture ",
      "Softens fine lines ",
      "Depigments for even skin tone "
    ]
  },

  // ─────────────────────────────────────────────
  //  SKIN — Cream
  // ─────────────────────────────────────────────
  {
    id: "s-cr-001",
    category: "Skin",
    subCategory: "Cream",
    name: "Kojic Acid Brightening Cream",
    image: "/images/products/cat_cream.png",
    mrp: 999,
    price: 749,
    description: "Kojic Acid and Niacinamide combined to reduce hyperpigmentation, melasma, and uneven skin tone for a visibly brighter complexion.",
    benefits: [
      "Reduces melasma",
      "Brightens dull complexion",
      "Even skin tone",
      "Gentle for daily use"
    ]
  },

  // ─────────────────────────────────────────────
  //  SKIN — Face Mask
  // ─────────────────────────────────────────────
  {
    id: "s-fm-001",
    category: "Skin",
    subCategory: "Face Mask",
    name: "Kaolin Clay Purifying Mask",
    image: "/images/products/cat_face_mask.png",
    mrp: 799,
    price: 599,
    description: "Kaolin and Bentonite clay detox mask that draws out impurities, shrinks pores, and leaves skin deeply cleansed and smooth.",
    benefits: [
      "Deep pore cleansing",
      "Absorbs excess oil",
      "Tightens pores visibly",
      "Vegan & cruelty-free"
    ]
  },

  // ─────────────────────────────────────────────
  //  SKIN — Under Eye
  // ─────────────────────────────────────────────
  {
    id: "s-ue-001",
    category: "Skin",
    subCategory: "Under Eye",
    name: "Peptide Eye Cream",
    image: "/images/products/cat_under_eye.png",
    mrp: 1199,
    price: 899,
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
