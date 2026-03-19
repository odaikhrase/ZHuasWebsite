import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import { MapPin, Package } from "lucide-react";

export default function Shipping() {
  return (
    <section className="py-24 bg-background">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Policy</p>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-foreground mb-6">
              Shipping & Pickup Policy
            </h1>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="bg-card border border-border rounded-xl p-8 sm:p-12 mb-8">
            <Package className="w-10 h-10 text-primary mb-6" />
            <p className="text-foreground leading-relaxed text-lg">
              At Decor Emperor, we are committed to providing a premium experience from product selection to final handoff. To ensure product integrity and customer satisfaction, we currently offer pickup only from our facility in Columbus, Ohio.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="gold-gradient rounded-xl p-8 sm:p-12 text-center">
            <MapPin className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
            <h2 className="font-serif text-2xl font-bold text-primary-foreground mb-2">
              Pickup Location
            </h2>
            <p className="text-primary-foreground/90 text-lg font-medium">
              Columbus, Ohio
            </p>
            <p className="text-primary-foreground/70 text-sm mt-2">
              Contact us for facility details and scheduling.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={500}>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Have questions about pickup?</p>
            <Link
              to="/contact"
              className="inline-flex gold-gradient text-primary-foreground px-8 py-3 font-semibold text-sm tracking-wide uppercase rounded hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
