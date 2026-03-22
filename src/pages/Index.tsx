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
          style={{ backgroundImage: `url(/hero-luxury.jpg)` }}
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
          We Offer Marble PVC Wall Panels, WPC sheets, Stone Pu & Mirrors in Boston, Massachusetts
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          ZHaus Design specializes in premium marble PVC wall panels and WPVC sheets for homes and businesses across Boston, Massachusetts. We provide durable, waterproof, low‑maintenance wall solutions ideal for bathrooms, kitchens, basements, and feature walls.
        </p>
      </div>
    </ScrollReveal>

    <ScrollReveal delay={200}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Marble PVC */}
        <div className="group relative overflow-hidden rounded-lg">
          <img
            src="https://i.postimg.cc/DzBSXjpd/IMG-2826-(1).jpg"
            alt="Marble PVC Wall Panels"
            className="w-full h-80 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-6">
            <h3 className="font-serif text-xl font-bold text-secondary-foreground">
              Marble PVC Panels
            </h3>
          </div>
        </div>

        {/* WPVC */}
        <div className="group relative overflow-hidden rounded-lg">
          <img
            src="https://i.postimg.cc/9FfsWBrx/71442e2570b19f85c5f9f3232f972cdd.jpg"
            alt="WPVC Decorative Sheets"
            className="w-full h-80 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-6">
            <h3 className="font-serif text-xl font-bold text-secondary-foreground">
              WPVC Decorative Sheets
            </h3>
          </div>
        </div>

        {/* Mirror Panels */}
        <div className="group relative overflow-hidden rounded-lg">
          <img
            src="https://i.postimg.cc/MKD1qhnM/IMG-3743.jpg"
            alt="Mirror Panels"
            className="w-full h-80 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-6">
            <h3 className="font-serif text-xl font-bold text-secondary-foreground">
              Mirror Panels
            </h3>
          </div>
        </div>

        {/* Stone Sheets */}
        <div className="group relative overflow-hidden rounded-lg">
          <img
            src="https://i.postimg.cc/mk3pb89z/IMG-3745.jpg"
            alt="Wall Stone Sheets"
            className="w-full h-80 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-6">
            <h3 className="font-serif text-xl font-bold text-secondary-foreground">
              Wall Stone Sheets
            </h3>
          </div>
        </div>
      </div>

      {/* Explore button */}
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
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <ScrollReveal>
                <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">Why Choose Us</p>
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8">
                  Why Choose<br/>ZHaus Design
                </h2>
                <div className="w-24 h-px bg-primary mb-8" />
              </ScrollReveal>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-12 sm:gap-16 mt-12 lg:mt-0">
              {FEATURES.map((f, i) => (
                <ScrollReveal key={f.title} delay={i * 50}>
                  <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10 border-t border-border/50 pt-12 group">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-primary/10 rounded-full scale-150 group-hover:scale-[2] transition-transform duration-500 opacity-0 group-hover:opacity-100" />
                      <f.icon className="w-10 h-10 text-primary relative z-10" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">{f.title}</h3>
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-light max-w-2xl">{f.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Panel Specifications */}
      <section className="relative py-32 bg-foreground text-background overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="text-center lg:text-left">
                <h2 className="font-serif text-3xl sm:text-4xl text-primary font-light mb-4">
                  Panel Specifications
                </h2>
                <p className="text-background/80 text-sm sm:text-base leading-relaxed font-light max-w-sm mx-auto lg:mx-0">
                  Broad coverage and a premium, high‑end feel suitable for both residential and commercial spaces.
                </p>
              </div>
              
              <div className="flex items-center justify-center gap-8 sm:gap-16">
                <div className="text-center transform hover:scale-105 transition-transform duration-500">
                  <p className="text-6xl sm:text-8xl font-serif font-light text-background tracking-tighter">9<span className="text-3xl sm:text-5xl text-primary ml-2">×</span>4</p>
                  <p className="text-primary tracking-[0.2em] text-xs uppercase mt-6 opacity-80">Feet (Panel Size)</p>
                </div>
                <div className="w-px h-32 bg-background/20 hidden sm:block rotate-12" />
                <div className="text-center transform hover:scale-105 transition-transform duration-500">
                  <p className="text-6xl sm:text-8xl font-serif font-light text-background tracking-tighter">8<span className="text-2xl sm:text-4xl text-primary ml-3 font-sans opacity-70">mm</span></p>
                  <p className="text-primary tracking-[0.2em] text-xs uppercase mt-6 opacity-80">Thickness</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Recent Installations */}
      <section className="py-32 bg-secondary">
        <div className="container">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <ScrollReveal>
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">Our Work</p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-secondary-foreground">
                Recent Installations
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-3 text-secondary-foreground hover:text-primary transition-colors font-medium tracking-widest uppercase text-xs"
              >
                View Full Gallery <span className="w-12 h-px bg-current" />
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {INSTALLATION_IMAGES.slice(0, 3).map((img, i) => (
              <ScrollReveal 
                key={i} 
                delay={i * 200}
                className={
                  i === 0 ? "lg:col-span-7 lg:col-start-1" :
                  i === 1 ? "lg:col-span-4 lg:col-start-9 lg:-mt-32" :
                  "lg:col-span-6 lg:col-start-4 lg:mt-24"
                }
              >
                <div className="group overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-[50vh] sm:h-[60vh] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Teaser */}
      <section className="py-40 bg-background flex flex-col items-center justify-center text-center">
        <div className="container">
          <ScrollReveal>
            <div className="w-px h-24 bg-primary mx-auto mb-12" />
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-8">
              Shipping & Pickup Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-12 font-light">
              At ZHaus Design, we currently offer pickup only from our facility in Boston, Massachusetts to ensure product integrity and customer satisfaction.
            </p>
            <Link
              to="/shipping"
              className="group inline-flex items-center gap-4 text-primary font-semibold text-xs tracking-[0.2em] uppercase hover:opacity-80 transition-opacity"
            >
              <span className="w-8 h-px bg-primary group-hover:w-16 transition-all duration-300" />
              View Full Policy
              <span className="w-8 h-px bg-primary group-hover:w-16 transition-all duration-300" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
