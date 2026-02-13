import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import { MARBLE_PVC_MAIN, WPVC_MAIN, INSTALLATION_IMAGES } from "@/data/images";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { useEffect } from "react";

const INSTALL_STEPS = [
  { title: "🔧 Step 1: Prepare the Wall Surface", content: "Make sure the wall is clean, dry, and smooth. Remove dust, loose paint, or old adhesive. Fill large holes or uneven areas for a flat finish." },
  { title: "📏 Step 2: Measure & Plan Your Layout", content: "Measure the height and width of your wall. Plan your layout to reduce cutting and ensure a seamless look. Dry‑fit the panels before applying adhesive to confirm alignment." },
  { title: "✂️ Step 3: Cut Panels (If Needed)", content: "Use a utility knife, circular saw, or table saw. Cut from the back side for cleaner edges. Always double‑check measurements before cutting." },
  { title: "🧱 Step 4: Apply Adhesive", content: "Use a strong construction adhesive suitable for PVC panels. Apply adhesive in vertical lines or dots across the back. Optional: Add finishing nails or screws around the edges for extra support." },
  { title: "📌 Step 5: Install the First Panel", content: "Start from one corner or the bottom of the wall. Press the panel firmly into place. Ensure it is perfectly level — this sets the foundation for the rest." },
  { title: "🔗 Step 6: Connect Additional Panels", content: "Slide the next panel into the tongue‑and‑groove joint. Press firmly to lock it in. Continue across the wall, checking alignment as you go." },
  { title: "🎨 Step 7: Finish Edges & Corners", content: "Use matching trims for corners, edges, and end caps. In wet areas (bathrooms, kitchens), seal joints with silicone for waterproofing." },
  { title: "🧼 Step 8: Clean & Inspect", content: "Wipe the panels with a damp cloth to remove dust or fingerprints. Check all joints to ensure a tight, seamless finish." },
];

export default function Products() {
  useEffect(() => {
    if (window.location.hash === "#wpvc") {
      setTimeout(() => {
        document.getElementById("wpvc")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <>
      {/* Marble PVC */}
      <section className="py-24 bg-background">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Our Products</p>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-foreground mb-6">
                Marble PVC Wall Panels
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                Decor Emperor specializes in premium marble PVC wall panels for homes and businesses across Columbus, Ohio. We provide durable, waterproof, low‑maintenance wall solutions ideal for bathrooms, kitchens, basements, and feature walls.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
              <img src={MARBLE_PVC_MAIN} alt="Marble PVC Wall Panel product" className="w-full h-72 object-cover rounded-lg" loading="lazy" />
              {INSTALLATION_IMAGES.slice(0, 5).map((img, i) => (
                <img key={i} src={img.src} alt={img.alt} className="w-full h-72 object-cover rounded-lg" loading="lazy" />
              ))}
            </div>
          </ScrollReveal>

          {/* Installation Guide */}
          <ScrollReveal delay={300}>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-2 text-center">
                🛠️ How to Install Marble PVC Wall Panels
              </h2>
              <p className="text-muted-foreground text-center mb-8 text-sm">
                Installing marble‑finish PVC wall panels is a fast, clean, and beginner‑friendly process.
              </p>
              <Accordion type="single" collapsible className="border border-border rounded-lg overflow-hidden">
                {INSTALL_STEPS.map((step, i) => (
                  <AccordionItem key={i} value={`step-${i}`} className="border-border">
                    <AccordionTrigger className="px-6 text-left font-semibold text-foreground hover:no-underline hover:text-primary">
                      {step.title}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 text-muted-foreground leading-relaxed">
                      {step.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="mt-8 bg-card border border-border rounded-lg p-6">
                <h3 className="font-serif text-lg font-bold text-foreground mb-3">⭐ Why Customers Love This Installation Method</h3>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• No grout, no mess</li>
                  <li>• Lightweight and easy to handle</li>
                  <li>• Fast installation — most walls finish in hours</li>
                  <li>• Waterproof and moisture‑resistant</li>
                  <li>• Perfect for DIY or professional installers</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WPVC */}
      <section id="wpvc" className="py-24 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">WPVC Collection</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-secondary-foreground mb-6">
                WPVC Decorative Panels
              </h2>
              <p className="text-secondary-foreground/70 leading-relaxed">
                Our WPVC panels combine wood‑plastic strength with PVC durability, offering a modern, stylish solution for interior walls, ceilings, and feature designs. They deliver a premium look with excellent rigidity and long‑lasting performance.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <img src={WPVC_MAIN} alt="WPVC Decorative Sheets" className="w-full h-72 object-cover rounded-lg" loading="lazy" />
              {INSTALLATION_IMAGES.slice(5).map((img, i) => (
                <img key={i} src={img.src} alt={img.alt} className="w-full h-72 object-cover rounded-lg" loading="lazy" />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-6 right-6 z-40">
        <Link
          to="/contact"
          className="gold-gradient text-primary-foreground px-6 py-3 font-semibold text-sm tracking-wide uppercase rounded-full shadow-lg hover:opacity-90 transition-opacity"
        >
          Request Pricing
        </Link>
      </div>
    </>
  );
}
