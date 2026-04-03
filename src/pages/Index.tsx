import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HERO_IMAGE, MARBLE_PVC_MAIN, WPVC_MAIN, INSTALLATION_IMAGES } from "@/data/images";
import { Droplets, Zap, DollarSign, Ruler, TreePine, Building2 } from "lucide-react";
import { useRef, useState } from "react";

const FEATURES = [
  {
    icon: Building2,
    title: "Luxury Marble Appearance",
    desc: "Our panels deliver a high‑end marble look with realistic veining and premium finishes — perfect for modern interiors throughout Boston, Massachusetts.",
  },
  {
    icon: Droplets,
    title: "Waterproof & Long‑Lasting",
    desc: "Made from high‑quality PVC and WPVC materials, our panels resist moisture, warping, and damage — ideal for kitchens, bathrooms, and commercial spaces.",
  },
  {
    icon: Zap,
    title: "Fast, Simple Installation",
    desc: "Our panels are lightweight and designed for quick installation, saving time and labor costs while delivering a flawless finish.",
  },
  {
    icon: DollarSign,
    title: "Luxury Without the High Cost",
    desc: "Enjoy the beauty of marble at a fraction of the price. Premium quality, accessible pricing — the perfect combination.",
  },
  {
    icon: Ruler,
    title: "Large Panel Size",
    desc: "Our marble PVC panels come in a generous 9 ft × 4 ft size with a sturdy 8 mm thickness, providing broad coverage and a premium, high‑end feel.",
  },
  {
    icon: TreePine,
    title: "Advanced WPVC Panels",
    desc: "Our WPVC panels combine wood‑plastic strength with PVC durability, offering a modern, stylish solution for interior walls, ceilings, and feature designs.",
  },
];

export default function Index() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current.offsetLeft || 0);
    carouselRef.current.scrollLeft = scrollLeft - (x - startX);
  };
  const handleMouseUp = () => setIsDragging(false);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-secondary">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-6">
              Luxury Marble PVC
              <span className="block text-gold-gradient">Wall Panels</span>
            </h1>
            <p className="text-lg sm:text-xl text-secondary-foreground/80 leading-relaxed mb-10 font-light">
              "Durable, waterproof luxury marble PVC wall panels, designed to elevate any residential or commercial space in Boston, Massachusetts."
            </p>
            <div className="flex flex-wrap gap-4">
            <Link
                to="/products/marble-pvc"
                className="gold-gradient text-primary-foreground px-8 py-3.5 font-semibold text-sm tracking-wide uppercase rounded hover:opacity-90 transition-opacity"
              >
                Explore our Marbel
              </Link>
              <Link
                to="/products#wpvc"
                className="border-2 border-primary text-primary px-8 py-3.5 font-semibold text-sm tracking-wide uppercase rounded hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Explore other products
              </Link>
            </div>
            <Link
              to="/contact"
              className="inline-block mt-5 text-secondary-foreground/60 hover:text-primary text-sm font-medium tracking-wide uppercase transition-colors"
            >
              Get a Quote →
            </Link>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-background">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">What We Offer</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">
                We Offer Marble PVC Wall Panels, WPC sheets, PU Stone & Mirrors in Boston, Massachusetts
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                ZHaus Design specializes in premium marble PVC wall panels and WPVC sheets for homes and businesses across Boston, Massachusetts. We provide durable, waterproof, low‑maintenance wall solutions ideal for bathrooms, kitchens, basements, and feature walls.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="group relative overflow-hidden rounded-lg">
                <img
                  src="https://i.postimg.cc/76d6Sdnn/marble-main-page.jpg"
                  alt="Marble PVC Wall Panels"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-6">
                  <h3 className="font-serif text-xl font-bold text-secondary-foreground">Marble PVC Panels</h3>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <img
                  src="https://i.postimg.cc/s2XJvCNJ/wpvc-for-main-page.jpg"
                  alt="WPC Decorative Sheets"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-6">
                  <h3 className="font-serif text-xl font-bold text-secondary-foreground">WPC Wood Decorative Sheets</h3>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <img
                  src="https://i.postimg.cc/pLX0n6Gg/mirror-for-main-page.jpg"
                  alt="Mirror Panels"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-6">
                  <h3 className="font-serif text-xl font-bold text-secondary-foreground">Mirror</h3>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <img
                  src="https://i.postimg.cc/Vv8gsG0G/Stone-Panles-for-main-page.jpg"
                  alt="PU Wall Stone Sheets"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-6">
                  <h3 className="font-serif text-xl font-bold text-secondary-foreground">PU Wall Stone Sheets</h3>
                </div>
              </div>
            </div>
            <div className="text-center mt-10">
              <Link
                to="/products"
                className="inline-flex gold-gradient text-black px-10 py-3.5 font-semibold text-sm tracking-wide uppercase rounded hover:opacity-90 transition-opacity"
              >
                Explore Our Products
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Why Choose Us</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-secondary-foreground">
                Why Choose ZHaus Design
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 100}>
                <div className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-lg p-8 hover:border-primary/50 transition-colors group h-full">
                  <f.icon className="w-10 h-10 text-primary mb-5 group-hover:scale-110 transition-transform" />
                  <h3 className="font-serif text-lg font-bold text-secondary-foreground mb-3">{f.title}</h3>
                  <p className="text-secondary-foreground/70 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Panel Specs */}
      <section className="py-20 bg-background">
        <div className="container">
          <ScrollReveal>
            <div className="gold-gradient rounded-xl p-12 sm:p-16 text-center">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
                Panel Specifications
              </h2>
              <div className="flex flex-wrap justify-center gap-12 mt-8">
                <div>
                  <p className="text-5xl font-serif font-bold text-primary-foreground">9 × 4</p>
                  <p className="text-primary-foreground/80 text-sm mt-2 uppercase tracking-wide">Feet (Panel Size)</p>
                </div>
                <div className="w-px bg-primary-foreground/30 hidden sm:block" />
                <div>
                  <p className="text-5xl font-serif font-bold text-primary-foreground">8 mm</p>
                  <p className="text-primary-foreground/80 text-sm mt-2 uppercase tracking-wide">Thickness</p>
                </div>
              </div>
              <p className="text-primary-foreground/80 mt-8 max-w-xl mx-auto text-sm leading-relaxed">
                Broad coverage and a premium, high‑end feel suitable for both residential and commercial spaces.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Recent Installations */}
      <section className="py-24 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Our Work</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-secondary-foreground">
                Recent Installations
              </h2>
            </div>
          </ScrollReveal>
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto pb-4 cursor-grab snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {INSTALLATION_IMAGES.map((img, i) => (
              <div key={i} className="flex-shrink-0 w-72 sm:w-80 snap-center">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-96 object-cover rounded-lg hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/gallery"
              className="inline-flex gold-gradient text-primary-foreground px-8 py-3 font-semibold text-sm tracking-wide uppercase rounded hover:opacity-90 transition-opacity"
            >
              More Images
            </Link>
          </div>
        </div>
      </section>

      {/* Shipping Teaser */}
      <section className="py-20 bg-background">
        <div className="container">
          <ScrollReveal>
            <div className="bg-card border border-border rounded-xl p-12 text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                Shipping & Pickup Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At ZHaus Design, we currently offer pickup only from our facility in Boston, Massachusetts to ensure product integrity and customer satisfaction.
              </p>
              <Link
                to="/shipping"
                className="text-primary font-semibold text-sm tracking-wide uppercase hover:opacity-80 transition-opacity"
              >
                View Full Policy →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
