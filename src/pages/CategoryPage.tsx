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
      name: "Marbel-1",
      image: "https://i.postimg.cc/DzBSXjpd/IMG-2826-(1).jpg",
      //description: "hi there how are u"
      // soldOut: true, // ← add this line to mark as sold out
    },
    {
      id: "mp-2",
      name: "MB-2",
      image:
        "https://i.postimg.cc/brXSyGBq/IMG-2827.jpg",
      // soldOut: true,
    },
    {
      id: "mp-3",
      name: "MB-3",
      image:
        "https://i.postimg.cc/RVLJmZQZ/IMG-2828.jpg",
    },
    {
      id: "mp-4",
      name: "MB-4",
      image:
        "https://i.postimg.cc/bJRfJW62/IMG-2829.jpg",
    },
    {
      id: "mp-5",
      name: "MB-5",
      image:
        "https://i.postimg.cc/WbyLhM7J/IMG-2830.jpg",
    },
    {
      id: "mp-6",
      name: "MB-6",
      image:
        "https://i.postimg.cc/ThMV4N6r/IMG-2831.jpg",
    },
    {
      id: "mp-7",
      name: "MB-7",
      image:
        "https://i.postimg.cc/ht0YVTLH/IMG-2832.jpg",
    },
    {
      id: "mp-8",
      name: "MB-8",
      image:
        "https://i.postimg.cc/C1nJrq8Y/IMG-2833.jpg",
    },
    {
      id: "mp-9",
      name: "MB-9",
      image:
        "https://i.postimg.cc/VkPzVMHX/IMG-2834.jpg",
    },
    {
      id: "mp-10",
      name: "MB-10",
      image:
        "https://i.postimg.cc/SsR4MGJF/IMG-2858.jpg",
    },
    {
      id: "mp-11",
      name: "MB-11",
      image:
        "https://i.postimg.cc/1XNZW5GW/IMG-2860.jpg",
    },
    {
      id: "mp-12",
      name: "MB-12",
      image:
        "https://i.postimg.cc/DyLS0796/IMG-3255.jpg",
    },
    {
      id: "mp-13",
      name: "MB-13",
      image:
        "https://i.postimg.cc/ht0h8pP4/IMG-3256.jpg",
    },
    {
      id: "mp-14",
      name: "MB-14",
      image:
        "https://i.postimg.cc/PqrJSYPy/IMG-3262.jpg",
    },
    {
      id: "mp-15",
      name: "MB-15",
      image:
        "https://i.postimg.cc/cJ9H2CnV/IMG-3273.jpg",
    },
    {
      id: "mp-16",
      name: "MB-16",
      image:
        "https://i.postimg.cc/xCBdjZtS/IMG-3673.jpg",
    },
    {
      id: "mp-17",
      name: "MB-17",
      image:
        "https://i.postimg.cc/sfZXHVDH/IMG-3674.jpg",
    },
    {
      id: "mp-18",
      name: "MB-18",
      image:
        "https://i.postimg.cc/pXbdggmX/IMG-3676.jpg",
    },
    {
      id: "mp-19",
      name: "MB-19",
      image:
        "https://i.postimg.cc/TYMPZZKr/IMG-3677.jpg",
    },
    {
      id: "mp-20",
      name: "MB-20",
      image:
        "https://i.postimg.cc/c4RJZX3D/IMG-3678.jpg",
    },
    {
      id: "mp-21",
      name: "MB-21",
      image:
        "https://i.postimg.cc/qMs70jn0/IMG-3679.jpg",
    },
    {
      id: "mp-22",
      name: "MB-22",
      image:
        "https://i.postimg.cc/CxwxKkH1/IMG-3680.jpg",
    },
    {
      id: "mp-23",
      name: "MB-23",
      image:
        "https://i.postimg.cc/0QK84fxW/IMG-3682.jpg",

    },
    {
      id: "mp-24",
      name: "MB-24",
      image:
        "https://i.postimg.cc/PJmdX5Cd/IMG-3683.jpg",

    },
    {
      id: "mp-25",
      name: "MB-25",
      image:
        "https://i.postimg.cc/VvjzfkJt/IMG-3684.jpg",

    },
    {
      id: "mp-26",
      name: "MB-26",
      image:
        "https://i.postimg.cc/fLVLNs7m/IMG-3672.jpg",

    },

  ],

  "wpvc": [
    // ── ADD YOUR WPVC PRODUCTS HERE ──
    {
      id: "wp-1",
      name: "WPVC Interior Panel",
      image:
        "https://i.postimg.cc/9FfsWBrx/71442e2570b19f85c5f9f3232f972cdd.jpg",
    },
    {
      id: "wp-2",
      name: "WPVC Living Space",
      image:
        "https://i.postimg.cc/jd93R0pB/IMG-2753.jpg",

    },
    {
      id: "wp-3",
      name: "WPVC Commercial",
      image:
        "https://i.postimg.cc/d0R5R7Lz/IMG-2757.jpg",

    },
    {
      id: "wp-4",
      name: "WPVC Commercial",
      image:
        "https://i.postimg.cc/hvYs4T5m/IMG-2782.jpg",

    },
    {
      id: "wp-5",
      name: "WPVC Commercial",
      image:
        "https://i.postimg.cc/7Yp9p178/IMG-2783.jpg",

    },
    {
      id: "wp-6",
      name: "WPVC Commercial",
      image:
        "https://i.postimg.cc/PqH4qt2g/IMG-2787.jpg",

    },
    {
      id: "wp-7",
      name: "WPVC Commercial",
      image:
        "https://i.postimg.cc/4yYv0nx3/IMG-2844.jpg",

    },
    {
      id: "wp-8",
      name: "WPVC Commercial",
      image:
        "https://i.postimg.cc/nrNKfZXg/IMG-3141.jpg",

    },
    {
      id: "wp-9",
      name: "WPVC Commercial",
      image:
        "https://i.postimg.cc/rFtCCdHb/IMG-3142.jpg",

    },
    {
      id: "wp-10",
      name: "WPVC Commercial",
      image:
        "https://i.postimg.cc/GhsJJBNc/IMG-3143.jpg",

    },
    {
      id: "wp-11",
      name: "WPVC Commercial",
      image:
        "https://i.postimg.cc/Nj66S3BS/IMG-3224.jpg",

    },
    {
      id: "wp-12",
      name: "WPVC Commercial",
      image:
        "https://i.postimg.cc/zfpnXTLf/IMG-3225.jpg",

    },
    {
      id: "wp-13",
      name: "WPVC Commercial",
      image:
        "https://i.postimg.cc/j5FPyK40/IMG-3226.jpg",

    },
    {
      id: "wp-14",
      name: "WPVC Commercial",
      image:
        "https://i.postimg.cc/Znv3cgwB/IMG-3227.jpg",

    },
    {
      id: "wp-15",
      name: "WPC Commercial",
      image:
        "https://i.postimg.cc/tRsmw4fz/IMG-3388.jpg",

    },
    {
      id: "wp-16",
      name: "WPC Commercial",
      image:
        "https://i.postimg.cc/25j0wkhL/IMG-3757.jpg",

    },

  ],

  "mirror": [
    // ── ADD YOUR MIRROR PRODUCTS HERE ──
    {
      id: "mir-1",
      name: "Full-Length Mirror Panel",
      image: "https://i.postimg.cc/MKD1qhnM/IMG-3743.jpg",

    },
    {
      id: "mir-1",
      name: "Full-Length Mirror Panel",
      image: "https://i.postimg.cc/tgV1Zf4P/IMG-3744.jpg",

    },
    {
      id: "mir-1",
      name: "Full-Length Mirror Panel",
      image: "https://i.postimg.cc/g21jWDHV/IMG-3748-(1).jpg",

    },
    {
      id: "mir-1",
      name: "Full-Length Mirror Panel",
      image: "https://i.postimg.cc/GtM3SJp0/IMG-3749.jpg",

    },
    {
      id: "mir-1",
      name: "Full-Length Mirror Panel",
      image: "https://i.postimg.cc/zXBGHMdw/IMG-3750.jpg",

    },
  ],

  "stone-sheets": [
    // ── ADD YOUR STONE SHEET PRODUCTS HERE ──
    {
      id: "st-1",
      name: "Stone Sheet — Style 1",
      image:
        "https://static.wixstatic.com/media/8e3244_78da4fe422da432f80cbbe70bb69efdf~mv2.jpeg",
    },
    {
      id: "st-2",
      name: "Stone Sheet — Style 2",
      image:
        "https://static.wixstatic.com/media/8e3244_284be8d806414bf58d56e7ce33171129~mv2.jpeg",
    },
    {
      id: "st-3",
      name: "Stone Sheet — Style 3",
      image:
        "https://static.wixstatic.com/media/8e3244_140b213877a7408da5e9e708b2fced44~mv2.jpeg",
    },
    {
      id: "st-4",
      name: "Stone Sheet — Style 4",
      image:
        "https://static.wixstatic.com/media/8e3244_7f0d33cf85cc4fd59874b853eccad91c~mv2.jpeg",
    },
    {
      id: "st-5",
      name: "Stone Sheet — Style 5",
      image:
        "https://static.wixstatic.com/media/8e3244_497fbce5b9ea4d2eb619bce3be4d2447~mv2.jpeg",
    },
    {
      id: "st-6",
      name: "Stone Sheet — Style 6",
      image:
        "https://static.wixstatic.com/media/8e3244_28fe8f82ecd949c6abb39c2ad2fab06e~mv2.jpeg",
    },
    {
      id: "st-7",
      name: "Stone Sheet — Style 7",
      image:
        "https://i.postimg.cc/mk3pb89z/IMG-3745.jpg",
    },
    {
      id: "st-8",
      name: "Stone Sheet — Style 8",
      image:
        "https://i.postimg.cc/CLNrXrYk/IMG-3754.jpg",
    },
    {
      id: "st-9",
      name: "Stone Sheet — Style 9",
      image:
        "https://i.postimg.cc/vZ2qH14b/IMG-3756.jpg",
    },
    {
      id: "st-10",
      name: "Stone Sheet — Style 10",
      image:
        "https://i.postimg.cc/N0WdmW7f/IMG-3787.jpg",
    },
    {
      id: "st-11",
      name: "Stone Sheet — Style 11",
      image:
        "https://i.postimg.cc/0jvZHDBV/IMG-3790.jpg",
    },
    {
      id: "st-12",
      name: "Stone Sheet — Style 12",
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
