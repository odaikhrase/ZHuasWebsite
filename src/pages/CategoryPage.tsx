import { useState, useEffect, useCallback } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowLeft, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { CATEGORIES } from "./Products";

// ─── TYPES ────────────────────────────────────────────────────────────────────
interface Product {
  id: string;
  name: string;
  image: string;
  description?: string;
  soldOut?: boolean;
  comingSoon?: boolean;
}

type ProductMap = Record<string, Product[]>;

// ─────────────────────────────────────────────────────────────────────────────
// PRODUCT DATA
// Add your products here manually under the matching category slug.
//
// To add a product:
//   {
//     id: "unique-id",          ← any unique string
//     name: "Product Name",     ← displayed under the image
//     image: "https://...",     ← direct image URL
//     description: "Optional",  ← small subtitle (size, color, etc.)
//   },
// ─────────────────────────────────────────────────────────────────────────────
const PRODUCTS: ProductMap = {
  "marble-pvc": [
    // ── ADD YOUR MARBLE PVC PRODUCTS HERE ──
    {
      id: "mp-1",
      name: "2826",
      image: "https://i.postimg.cc/DzBSXjpd/IMG-2826-(1).jpg",
      //description: "hi there how are u"
     //   // ← add this line to mark as sold out
    },

    {
      id: "mp-2",
      name: "2827",
      image:
        "https://i.postimg.cc/gk2MMQD5/2827.jpg",
      
    },
    {
      id: "mp-3",
      name: "2829",
      image:
        "https://i.postimg.cc/CxWmx1Vt/2829.jpg",
         
    },
    {
      id: "mp-4",
      name: "2831",
      image:
        "https://i.postimg.cc/gjSKFcDr/2831.jpg",
         
    },
    {
      id: "mp-5",
      name: "2832",
      image:
        "https://i.postimg.cc/ZYVHyjSL/2832.jpg",
         
    },
    {
      id: "mp-6",
      name: "2833",
      image:
        "https://i.postimg.cc/2SB7MDBq/2833.jpg",
         
    },
    {
      id: "mp-7",
      name: "2834",
      image:
        "https://i.postimg.cc/G2zFG36K/2834.jpg",
         
    },
    {
      id: "mp-8",
      name: "3255",
      image:
        "https://i.postimg.cc/ZnM6s7bv/3255.jpg",
    },
    {
      id: "mp-9",
      name: "3256",
      image:
        "https://i.postimg.cc/HLgXN7gz/3256.jpg",
    },
    {
      id: "mp-10",
      name: "8081",
      image:
        "https://i.postimg.cc/SsZ9jTzv/8081.jpg",
        comingSoon: true,
    },
    {
      id: "mp-11",
      name: "8087 2A Matt",
      image:
        "https://i.postimg.cc/WpHrvyVG/8087-2A-Matt.jpg",
        comingSoon: true,
    },
    {
      id: "mp-12",
      name: "80138",
      image:
        "https://i.postimg.cc/63Q2sr1f/80138.jpg",
        comingSoon: true,
    },
    {
      id: "mp-13",
      name: "80139",
      image:
        "https://i.postimg.cc/C53zfWMJ/80139.jpg",
        comingSoon: true,
    },
    {
      id: "mp-14",
      name: "80798",
      image:
        "https://i.postimg.cc/W1PdpLHX/80798.png",
        comingSoon: true,
    },
    {
      id: "mp-15",
      name: "Black Gold 1",
      image:
        "https://i.postimg.cc/FKr1cbmK/Black-Gold.jpg",
    },
    {
      id: "mp-16",
      name: "Black Gold 2",
      image:
        "https://i.postimg.cc/RF80jjt7/Black-Gold-2.jpg",
    },
    {
      id: "mp-17",
      name: "Blue Gold",
      image:
        "https://i.postimg.cc/fWJB4Fpt/Blue-Gold.jpg",
       //  
    },
    {
      id: "mp-18",
      name: "Green Gold",
      image:
        "https://i.postimg.cc/28WGyWzm/Green-Gold.jpg",
    },
    {
      id: "mp-19",
      name: "KBJ1-8038",
      image:
        "https://i.postimg.cc/tgqNBmFC/KBJ1-8038.jpg",
        comingSoon: true,
    },
     {
      id: "mp-20",
      name: "KBJ1-8056",
      image:
        "https://i.postimg.cc/1Rk0kzDg/KBJ1-8056.jpg",
    },
     {
      id: "mp-21",
      name: "KBJ1-8077",
      image:
        "https://i.postimg.cc/NjY60PJL/KBJ1-8077.jpg",
        comingSoon: true,
    },
     {
      id: "mp-22",
      name: "KBJ1-8056",
      image:
        "https://i.postimg.cc/1Rk0kzDg/KBJ1-8056.jpg",
        comingSoon: true,
    },
     {
      id: "mp-23",
      name: "KBJ1-8077",
      image:
        "https://i.postimg.cc/NjY60PJL/KBJ1-8077.jpg",
        comingSoon: true,
     
    },
     {
      id: "mp-24",
      name: "KBJ1-8080",
      image:
        "https://i.postimg.cc/T3CD325k/KBJ1-8080.jpg",
        comingSoon: true,
     
    },
     {
      id: "mp-25",
      name: "KBJ1-8090",
      image:
        "https://i.postimg.cc/QMzKc6bP/KBJ1-8090.jpg",
        comingSoon: true,
      
    },
     {
      id: "mp-26",
      name: "KBJ1 80116",
      image:
        "https://i.postimg.cc/wMXt89dC/KBJ1-80116.jpg",
        comingSoon: true,
    
    },
     
     {
      id: "mp-27",
      name: "KBJ-8086",
      image:
        "https://i.postimg.cc/wB17xXpg/KBJ-8086.jpg",
        comingSoon: true,

    
    },
    {
      id: "mp-28",
      name: "Mirror Silver ",
      image:
        "https://i.postimg.cc/v8q3ZYBq/Mirror-Silver.jpg",
        //comingSoon: true,

    
    },
     {
      id: "mp-29",
      name: "Mirror Gold ",
      image:
        "https://i.postimg.cc/mgwjzCyB/Mirror-Gold.jpg",
        //comingSoon: true,

    
    },

  ],
 
  "wpc": [
    // ── ADD YOUR WPVC PRODUCTS HERE ──
    {
      id: "wp-1",
      name: "WPC ",
      image:
        "https://i.postimg.cc/tgjjpvVY/1.jpg",
    },
    {
      id: "wp-2",
      name: "WPC ",
      image:
        "https://i.postimg.cc/qRBHCtL9/2.jpg",
      
    },
    {
      id: "wp-3",
      name: "WPC",
      image:
        "https://i.postimg.cc/G35nHmyR/3.jpg",
      
    },
     {
      id: "wp-4",
      name: "WPC ",
      image:
        "https://i.postimg.cc/9Q33YgbZ/4.jpg",
      
    },
     {
      id: "wp-5",
      name: "WPC ",
      image:
        "https://i.postimg.cc/Qdc24gnj/5.jpg",
      
    },
     {
      id: "wp-6",
      name: "WPC ",
      image:
        "https://i.postimg.cc/k59kkVkD/6.jpg",
      
    },
     {
      id: "wp-7",
      name: "WPC ",
      image:
        "https://i.postimg.cc/B6nRnrZ9/7.jpg",
      
    },
     {
      id: "wp-8",
      name: "WPC",
      image:
        "https://i.postimg.cc/sXHqQT1p/8.jpg",
      
    },
     {
      id: "wp-9",
      name: "WPC",
      image:
        "https://i.postimg.cc/x8k7KLz2/9.jpg",
      
    },

  
    {
      id: "wp-10",
      name: "WPC ",
      image:
        "https://i.postimg.cc/FsL8zgvG/10.jpg",
      
    },
    {
      id: "wp-11",
      name: "WPC ",
      image:
        "https://i.postimg.cc/t4dctqYP/11.jpg",
      
    },
    {
      id: "wp-16",
      name: "WPC ",
      image:
        "https://i.postimg.cc/CMBWkzx4/3-24-1.jpg",
      
    },
    {
      id: "wp-16",
      name: "WPC ",
      image:
        "https://i.postimg.cc/3xnLPTx6/3-24-2.jpg",
      
    },
    {
      id: "wp-16",
      name: "WPC ",
      image:
        "https://i.postimg.cc/TwWCL5Jn/3-24-3.jpg",
      
    },
    {
      id: "wp-16",
      name: "WPC ",
      image:
        "https://i.postimg.cc/qvMwc5Gd/3-24-4.jpg",
      
    },
    {
      id: "wp-16",
      name: "WPC ",
      image:
        "https://i.postimg.cc/mZYyvsXg/3-24-5.jpg",
      
    },
    {
      id: "wp-16",
      name: "Trims ",
      image:
        "https://i.postimg.cc/P5xbv8tH/3-24-6.jpg",
      
    },
       {
      id: "wp-16",
      name: "Trims ",
      image:
        "https://i.postimg.cc/dVqXxqWZ/3-24-1.jpg",
      
    },
  ],
 
  "mirror": [
    // ── ADD YOUR MIRROR PRODUCTS HERE ──
   {
    id: "mir-1",
    name: "Mirror 1",
    image: "https://i.postimg.cc/y8Tf3LbD/1.jpg",
      
   },
    {
    id: "mir-1",
    name: "Mirror 2",
    image: "https://i.postimg.cc/9F51833R/2.jpg",
     
   },
    {
    id: "mir-1",
    name: "Mirror 3",
    image: "https://i.postimg.cc/5NBgDP1h/3.jpg",
     
   },
    {
    id: "mir-1",
    name: "Mirror 4",
    image: "https://i.postimg.cc/Z5jc5CWv/4.jpg",
      
   },
    {
    id: "mir-1",
    name: "Mirror 5",
    image: "https://i.postimg.cc/mrDSzB9w/5.jpg",
      
   },
  ],
 
  "stone-sheets": [
    // ── ADD YOUR STONE SHEET PRODUCTS HERE ──
    {
      id: "PU",
      name: "PU Stone",
      image:
        "https://static.wixstatic.com/media/8e3244_78da4fe422da432f80cbbe70bb69efdf~mv2.jpeg",
    },
    {
      id: "st-2",
      name: "PU Stone",
      image:
        "https://static.wixstatic.com/media/8e3244_284be8d806414bf58d56e7ce33171129~mv2.jpeg",
    },
    {
      id: "st-3",
      name: "PU Stone",
      image:
        "https://static.wixstatic.com/media/8e3244_140b213877a7408da5e9e708b2fced44~mv2.jpeg",
    },
    {
      id: "st-4",
      name: "PU Stone",
      image:
        "https://static.wixstatic.com/media/8e3244_7f0d33cf85cc4fd59874b853eccad91c~mv2.jpeg",
    },
    {
      id: "st-5",
      name: "PU Stone",
      image:
        "https://static.wixstatic.com/media/8e3244_497fbce5b9ea4d2eb619bce3be4d2447~mv2.jpeg",
    },
    {
      id: "st-6",
      name: "PU Stone",
      image:
        "https://static.wixstatic.com/media/8e3244_28fe8f82ecd949c6abb39c2ad2fab06e~mv2.jpeg",
    },
      {
      id: "st-7",
      name: "PU Stone",
      image:
        "https://i.postimg.cc/mk3pb89z/IMG-3745.jpg",
    },
      {
      id: "st-8",
      name: "PU Stone",
      image:
        "https://i.postimg.cc/CLNrXrYk/IMG-3754.jpg",
    },
      {
      id: "st-9",
      name: "PU Stone",
      image:
        "https://i.postimg.cc/vZ2qH14b/IMG-3756.jpg",
    },
      {
      id: "st-10",
      name: "PU Stone",
      image:
        "https://i.postimg.cc/N0WdmW7f/IMG-3787.jpg",
    },
     {
      id: "st-11",
      name: "PU Stone",
      image:
        "https://i.postimg.cc/0jvZHDBV/IMG-3790.jpg",
    },
     {
      id: "st-12",
      name: "PU Stone",
      image:
        "https://i.postimg.cc/d39nMDMc/IMG-3791.jpg",
    },

  ],
};

// ─── LIGHTBOX ─────────────────────────────────────────────────────────────────
function Lightbox({
  products,
  index,
  onClose,
  onNav,
}: {
  products: Product[];
  index: number;
  onClose: () => void;
  onNav: (dir: number) => void;
}) {
  const product = products[index];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose, onNav]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in"
      onClick={onClose}
    >
      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onNav(-1); }}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 border border-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Image + info */}
      <div
        className="relative max-w-5xl w-full mx-16 sm:mx-24 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={product.image}
          alt={product.name}
          className="max-h-[75vh] w-full object-contain rounded-lg"
        />
        <div className="mt-5">
          <p className="font-serif text-xl font-semibold text-white">{product.name}</p>
          {product.description && (
            <p className="text-white/50 text-sm mt-1">{product.description}</p>
          )}
          <p className="text-white/30 text-xs mt-3 tracking-widest uppercase">
            {index + 1} / {products.length}
          </p>
        </div>
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNav(1); }}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 border border-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 bg-white/10 hover:bg-white/20 border border-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}

// ─── PRODUCT CARD ─────────────────────────────────────────────────────────────
function ProductCard({
  product,
  index,
  onClick,
}: {
  product: Product;
  index: number;
  onClick: () => void;
}) {
  return (
    <ScrollReveal delay={index * 60}>
      <div
        className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
        onClick={onClick}
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/5]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {product.soldOut && (
            <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded pointer-events-none">
              Sold Out
            </div>
          )}
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-background/90 rounded-full p-3 border border-border">
              <ZoomIn className="w-5 h-5 text-primary" />
            </div>
          </div>
        </div>

        {/* Name + description */}
        <div className="p-4">
          <h3 className="font-serif text-base font-semibold text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          {product.description && (
            <p className="text-muted-foreground text-xs mt-1 leading-relaxed">
              {product.description}
            </p>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}

// ─── EMPTY STATE ──────────────────────────────────────────────────────────────
function EmptyState({ categoryName }: { categoryName: string }) {
  return (
    <div className="text-center py-24 max-w-md mx-auto">
      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
        <span className="text-2xl">🖼️</span>
      </div>
      <h3 className="font-serif text-xl font-bold text-foreground mb-3">
        Products Coming Soon
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">
        We're currently adding products to the{" "}
        <strong className="text-foreground">{categoryName}</strong> collection. Check back soon or
        contact us directly for availability.
      </p>
      <Link
        to="/contact"
        className="inline-flex gold-gradient text-primary-foreground px-6 py-2.5 font-semibold text-sm tracking-wide uppercase rounded hover:opacity-90 transition-opacity"
      >
        Ask About Availability
      </Link>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const category = CATEGORIES.find((c) => c.slug === slug);
  const products: Product[] = slug ? (PRODUCTS[slug] ?? []) : [];

  // Redirect to /products if slug is unknown
  useEffect(() => {
    if (!category) navigate("/products", { replace: true });
  }, [category, navigate]);

  const handleNav = useCallback(
    (dir: number) => {
      setLightboxIdx((prev) => {
        if (prev === null) return null;
        const next = prev + dir;
        if (next < 0) return products.length - 1;
        if (next >= products.length) return 0;
        return next;
      });
    },
    [products.length]
  );

  if (!category) return null;

  return (
    <>
      {lightboxIdx !== null && products.length > 0 && (
        <Lightbox
          products={products}
          index={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
          onNav={handleNav}
        />
      )}

      {/* ── Hero banner ── */}
      <section className="relative bg-secondary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${category.coverImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/60" />

        <div className="container relative z-10 py-20">
          {/* Breadcrumb */}
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-secondary-foreground/60 hover:text-primary text-sm font-medium tracking-wide uppercase transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            All Collections
          </Link>

          <div className="max-w-2xl">
            <span className="inline-block gold-gradient text-primary-foreground text-xs font-bold tracking-widest uppercase px-3 py-1 rounded mb-5">
              {category.tag}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-secondary-foreground mb-5 leading-tight">
              {category.name}
            </h1>
            <p className="text-secondary-foreground/70 leading-relaxed mb-6">
              {category.description}
            </p>

            {/* Spec pills */}
            <div className="flex flex-wrap gap-2">
              {category.specs.map((spec) => (
                <span
                  key={spec}
                  className="text-xs border border-secondary-foreground/20 text-secondary-foreground/60 px-3 py-1 rounded uppercase tracking-wide"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gold divider */}
      <div className="h-px gold-gradient opacity-40" />

      {/* ── Product grid ── */}
      <section className="py-24 bg-background">
        <div className="container">
          {products.length === 0 ? (
            <EmptyState categoryName={category.name} />
          ) : (
            <>
              {/* Count + pricing link */}
              <div className="flex items-center justify-between mb-10">
                <p className="text-muted-foreground text-sm">
                  <span className="text-foreground font-semibold">{products.length}</span>{" "}
                  {products.length === 1 ? "product" : "products"} in this collection
                </p>
                <Link
                  to="/contact"
                  className="text-primary text-sm font-semibold tracking-wide uppercase hover:opacity-80 transition-opacity"
                >
                  Request Pricing →
                </Link>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
                {products.map((product, i) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={i}
                    onClick={() => setLightboxIdx(i)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-xl mx-auto">
              <h2 className="font-serif text-2xl font-bold text-secondary-foreground mb-4">
                Interested in {category.name}?
              </h2>
              <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-8">
                Contact us for pricing, availability, and a free consultation. Pickup available at
                our Boston, Massachusetts facility.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="gold-gradient text-primary-foreground px-8 py-3 font-semibold text-sm tracking-wide uppercase rounded hover:opacity-90 transition-opacity"
                >
                  Get a Quote
                </Link>
                <Link
                  to="/products"
                  className="border border-secondary-foreground/20 text-secondary-foreground/80 hover:border-primary hover:text-primary px-8 py-3 font-semibold text-sm tracking-wide uppercase rounded transition-colors"
                >
                  Browse All Collections
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sticky pricing button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Link
          to="/contact"
          className="gold-gradient text-primary-foreground px-6 py-3 font-semibold text-sm tracking-wide uppercase rounded-full shadow-lg hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          Request Pricing
        </Link>
      </div>
    </>
  );
}
