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
    title: "Advanced WPC Panels",
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
          className="absolute inset-0 bg-cover bg-center animate-[slowZoom_8s_ease-in-out_infinite_alternate]"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="container relative z-10 py-28 lg:py-36">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-secondary-foreground leading-[1.05] mb-6">
              Luxury Marble PVC
              <span className="block text-gold-gradient">Wall Panels</span>
            </h1>
            <p className="text-lg sm:text-xl text-secondary-foreground/85 leading-relaxed mb-12 font-light max-w-2xl">
              "Durable, waterproof luxury marble PVC wall panels, designed to elevate any residential or commercial space in Boston, Massachusetts."
            </p>
            <div className="flex flex-wrap gap-4">
            <Link
                to="/products/marble-pvc"
                className="gold-gradient backdrop-blur-md text-primary-foreground px-9 py-4 font-semibold text-sm tracking-wide uppercase rounded-2xl shadow-xl hover:scale-105 hover:opacity-90 transition-all duration-300"
              >
                Explore our Marbel
              </Link>
              <Link
                to="/products#wpvc"
className="border border-white/30 backdrop-blur-md text-white px-9 py-4 font-semibold text-sm tracking-wide uppercase rounded-2xl hover:bg-white hover:text-black transition-all duration-300"              >
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
                Zhaus Design offers marble PVC panels, WPC decorative sheets, PU stone panels, and mirror  designs for homes, contractors, and businesses. Visit our Columbus warehouse to explore available styles and inventory.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {[
    {
      title: "Marble PVC Panels",
      image: "https://i.postimg.cc/76d6Sdnn/marble-main-page.jpg",
      alt: "Marble PVC Wall Panels",
    },
    {
      title: "WPC Wood Decorative Sheets",
      image: "https://i.postimg.cc/s2XJvCNJ/wpvc-for-main-page.jpg",
      alt: "WPC Decorative Sheets",
    },
    {
      title: "Mirror Wall Panels",
      image: "https://i.postimg.cc/pLX0n6Gg/mirror-for-main-page.jpg",
      alt: "Mirror Wall Panels",
    },
    {
      title: "PU Wall Stone Sheets",
      image: "https://i.postimg.cc/Vv8gsG0G/Stone-Panles-for-main-page.jpg",
      alt: "PU Wall Stone Sheets",
    },
  ].map((item, index) => (
    <div
      key={index}
      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <img
        src={item.image}
        alt={item.alt}
        className="w-full h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
        <h3 className="font-serif text-xl font-bold text-white">
          {item.title}
        </h3>
      </div>
    </div>
  ))}
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

      {/* Panel Specifications */}
<section className="py-24 bg-secondary">
  <div className="container">
    <ScrollReveal>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
          Product Details
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-secondary-foreground mb-6">
          Panel Specifications
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          Our wall panels are designed for interior applications with large-format sizes, modern finishes, and easy maintenance.
        </p>
      </div>
    </ScrollReveal>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-background/80 border border-border rounded-2xl p-8 text-center shadow-lg">
        <h3 className="font-serif text-xl font-bold mb-3">Panel Size</h3>
        <p className="text-muted-foreground">9 ft x 4 ft</p>
      </div>

      <div className="bg-background/80 border border-border rounded-2xl p-8 text-center shadow-lg">
        <h3 className="font-serif text-xl font-bold mb-3">Application</h3>
        <p className="text-muted-foreground">Interior walls, bathrooms, kitchens, TV walls, and feature walls</p>
      </div>

      <div className="bg-background/80 border border-border rounded-2xl p-8 text-center shadow-lg">
        <h3 className="font-serif text-xl font-bold mb-3">Benefits</h3>
        <p className="text-muted-foreground">Water-resistant, lightweight, low maintenance, and modern luxury appearance</p>
      </div>
    </div>
  </div>
</section>
{/* Popular Applications */}
<section className="py-24 bg-secondary">
  <div className="container">
    <ScrollReveal>
      <div className="text-center mb-16">
        <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
          Applications
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-secondary-foreground">
          Perfect for Modern Interior Spaces
        </h2>
      </div>
    </ScrollReveal>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        "Bathroom Walls",
        "TV Feature Walls",
        "Kitchen Backsplash",
        "Office Walls",
        "Hallways",
        "Commercial Spaces",
      ].map((item) => (
        <div
          key={item}
          className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-lg p-8 text-center hover:border-primary/50 transition-colors"
        >
          <h3 className="font-serif text-xl font-bold text-secondary-foreground">
            {item}
          </h3>
        </div>
      ))}
    </div>
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
            className="flex gap-8 overflow-x-auto pb-4 cursor-grab snap-x snap-mandatory scrollbar-hide"
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
  className="w-full aspect-[4/5] object-cover rounded-2xl hover:scale-[1.02] transition-transform duration-300"
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
{/* Trust Section */}
<section className="py-24 bg-background">
  <div className="container">
    <ScrollReveal>
      <div className="text-center mb-16">
        <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
          Trusted Quality
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
          Why Customers Choose ZHaus Design
        </h2>
      </div>
    </ScrollReveal>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-primary/40 transition-all duration-300">
        <h3 className="font-serif text-xl font-bold mb-4">
          Premium Materials
        </h3>

        <p className="text-muted-foreground leading-relaxed">
          Carefully selected wall panel solutions designed for modern residential and commercial interiors.
        </p>
      </div>

      <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-primary/40 transition-all duration-300">
        <h3 className="font-serif text-xl font-bold mb-4">
          Local Warehouse
        </h3>

        <p className="text-muted-foreground leading-relaxed">
          Convenient local pickup available in Boston, Massachusetts with inventory ready for contractors and homeowners.
        </p>
      </div>

      <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-primary/40 transition-all duration-300">
        <h3 className="font-serif text-xl font-bold mb-4">
          Modern Luxury Designs
        </h3>

        <p className="text-muted-foreground leading-relaxed">
          Elegant marble, WPC, mirror, and stone panel collections that elevate any interior space.
        </p>
      </div>

    </div>
  </div>
</section>
      {/* Shipping Teaser */}
      <section className="py-20 bg-background">
        <div className="container">
          <ScrollReveal>
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-12 text-center max-w-2xl mx-auto shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-primary/40 transition-all duration-300">
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
