

import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";
 
// ─── CATEGORY TYPE ────────────────────────────────────────────────────────────
export interface Category {
  slug: string;
  name: string;
  tag: string;
  coverImage: string;
  description: string;
  specs: string[];
}
 
// ─── CATEGORIES DATA ──────────────────────────────────────────────────────────
// Edit name, description, tag, specs, and coverImage for each category.
// The `slug` must match the route: /products/:slug
export const CATEGORIES: Category[] = [
  {
    slug: "marble-pvc",
    name: "Marble PVC Wall Panels",
    tag: "Bestseller",
    coverImage:
      "https://i.postimg.cc/DzBSXjpd/IMG-2826-(1).jpg",
    description:
      "Premium marble-finish PVC panels. Waterproof, low-maintenance, 9 ft × 4 ft, 8 mm thick. Perfect for bathrooms, kitchens, basements and feature walls.",
    specs: ["9 ft × 4 ft", "8 mm thick", "Waterproof", "Tongue & Groove"],
  },
  {
    slug: "wpvc",
    name: "WPVC Decorative Panels",
    tag: "New",
    coverImage:
      "https://i.postimg.cc/9FfsWBrx/71442e2570b19f85c5f9f3232f972cdd.jpg",
    description:
      "Wood-plastic composite strength fused with PVC durability. Modern, stylish solution for walls, ceilings and feature designs with excellent rigidity.",
    specs: ["Wood-Plastic Composite", "Walls & Ceilings", "High Rigidity", "Long-Lasting"],
  },
  {
    slug: "mirror",
    name: "Mirror Panels",
    tag: "Premium",
    coverImage:
      "https://i.postimg.cc/MKD1qhnM/IMG-3743.jpg",
    description:
      "Elegant mirror panel solutions that add depth, light and a luxury feel to any room — residential or commercial.",
    specs: ["Interior Use", "Various Sizes", "Custom Cut", "Elegant Finish"],
  },
  {
    slug: "stone-sheets",
    name: "Wall Stone Sheets",
    tag: "Natural Look",
    coverImage:
      "https://i.postimg.cc/mk3pb89z/IMG-3745.jpg",
    description:
      "Realistic stone-texture wall sheets for a natural, organic aesthetic. Durable and easy to install — transforms any wall into a striking focal point.",
    specs: ["Stone Texture", "Lightweight", "Easy Install", "Indoor Use"],
  },
];
 
// ─── CATEGORY CARD ────────────────────────────────────────────────────────────
function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      to={`/products/${category.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Cover image */}
      <div className="relative overflow-hidden h-64">
        <img
          src={category.coverImage}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent" />
 
        {/* Tag badge */}
        <span className="absolute top-4 left-4 gold-gradient text-primary-foreground text-xs font-bold tracking-widest uppercase px-3 py-1 rounded">
          {category.tag}
        </span>
      </div>
 
      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {category.name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
          {category.description}
        </p>
 
        {/* Spec pills */}
        <div className="flex flex-wrap gap-2 mb-5">
          {category.specs.map((spec) => (
            <span
              key={spec}
              className="text-xs border border-border text-muted-foreground px-2.5 py-1 rounded uppercase tracking-wide"
            >
              {spec}
            </span>
          ))}
        </div>
 
        {/* CTA row */}
        <div className="flex items-center gap-1.5 text-primary text-sm font-semibold tracking-wide uppercase group-hover:gap-3 transition-all duration-200">
          <span>View Products</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
 
// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function Products() {
  return (
    <>
      {/* Page header */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
                Our Collections
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-secondary-foreground mb-6">
                Premium Wall Panel Collections
              </h1>
              <p className="text-secondary-foreground/70 leading-relaxed">
                Explore our full range of luxury wall panel solutions — from marble PVC and WPVC
                decorative sheets to mirror panels and natural stone finishes. Click any collection
                to browse all available products.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
 
      {/* Thin gold divider */}
      <div className="h-px gold-gradient opacity-40" />
 
      {/* Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {CATEGORIES.map((cat, i) => (
              <ScrollReveal key={cat.slug} delay={i * 100}>
                <CategoryCard category={cat} />
              </ScrollReveal>
            ))}
          </div>
 
          {/* Bottom CTA */}
          <ScrollReveal delay={400}>
            <div className="mt-20 bg-card border border-border rounded-xl p-12 text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Not sure which panel is right for you?
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Contact us for a free consultation. We'll help you find the perfect solution for
                your space and budget.
              </p>
              <Link
                to="/contact"
                className="inline-flex gold-gradient text-primary-foreground px-8 py-3 font-semibold text-sm tracking-wide uppercase rounded hover:opacity-90 transition-opacity"
              >
                Get a Free Quote
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
 
      {/* Sticky button */}
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
 