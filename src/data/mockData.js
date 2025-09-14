export const tshirtCategories = [
  {
    name: "Graphic Tees", // <-- CHANGED
    slug: "oversized-graphic-tees",
    subtitle: "Bold & Expressive",
    image: "https://m.media-amazon.com/images/I/71stMG2PuZL._UY1100_.jpg",
  },
  {
    name: "The Essentials", // <-- CHANGED
    slug: "boxy-solid-neutrals",
    subtitle: "Minimalist Staples", // <-- Updated subtitle
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Long Sleeves", // <-- CHANGED
    slug: "retro-striped-long-sleeves",
    subtitle: "Timeless & Versatile",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQaeYAf_4EVWHZt04L6B563SpwCmY7IYN6DPZsYak2NJF7ullwtCgjwIzJmJ8qchrSm_rkyAgtHX4QirZOa02Qgc886aMgIl7h5g-8HeO0OAAYpRmyWTPtB",
  },
  {
    name: "Athletic Tees", // <-- CHANGED
    slug: "sports-jersey-inspired",
    subtitle: "Street & Sport Style", // <-- Updated subtitle
    image: "./src/assets/images/athletic-tee1.jpg",
  },
  {
    name: "Limited Edition", // <-- CHANGED
    slug: "imported-collection",
    subtitle: "Exclusive Drops", // <-- Updated subtitle
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
  },
];

export const products = [
  {
    id: "rdx-ogt-01",
    name: "Rebellion Graphic Tee",
    price: "$45.00",
    description:
      "Define your style with this statement piece. Made from 100% premium heavyweight cotton, this oversized tee offers a relaxed fit and ultimate comfort. The high-quality print is designed to last.",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=987",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800",
    ],
    sizes: ["S", "M", "L", "XL"],
    categorySlug: "oversized-graphic-tees",
  },
  {
    id: "rdx-bsn-01",
    name: "Essential Boxy Tee - Olive",
    price: "$35.00",
    description:
      "The cornerstone of any modern wardrobe. Our boxy tee in a muted olive tone is crafted for a structured, contemporary silhouette. The durable, soft-touch fabric makes it perfect for everyday wear.",
    images: [
      "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?q=80&w=987",
      "https://plus.unsplash.com/premium_photo-1674494955322-23c2895c25e8?q=80&w=987",
    ],
    sizes: ["S", "M", "L", "XL"],
    categorySlug: "boxy-solid-neutrals",
  },
  {
    id: "rdx-rsl-01",
    name: "70's Stripe Long-Sleeve",
    price: "$55.00",
    description:
      "A nod to timeless style. This retro-inspired long-sleeve features classic stripes and a comfortable, standard fit. Perfect for layering or wearing on its own.",
    images: ["https://m.media-amazon.com/images/I/61tLU9bVU8L._SX679_.jpg"],
    sizes: ["S", "M", "L", "XL"],
    categorySlug: "retro-striped-long-sleeves",
  },
  // NEW T-SHIRT ADDED BELOW
  {
    id: "rdx-ath-01", // <-- Unique ID
    name: "Performance V-Neck", // <-- New name
    price: "$40.00", // <-- New price
    description:
      "Engineered for performance and style. This moisture-wicking V-neck keeps you cool and comfortable, whether you're at the gym or on the go.", // <-- New description
    images: [
      "./src/assets/images/athletic-tee1.jpg", // <-- New image
    ], // <-- New images
    sizes: ["S", "M", "L", "XL"],
    categorySlug: "sports-jersey-inspired", // <-- Matches the "Athletic Tees" slug
  },
];
