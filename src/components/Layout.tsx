import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Mail, Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/gallery", label: "Gallery" },
  { to: "/shipping", label: "Shipping & Pickup" },
  { to: "/contact", label: "Contact" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-secondary text-secondary-foreground">
        <div className="container flex items-center justify-between py-2 text-sm">
          <span className="hidden sm:inline font-sans text-secondary-foreground/80">
            Premium Marble PVC & WPVC Wall Panels — Boston, Massachusetts
          </span>
          <div className="flex items-center gap-4 ml-auto">
            <a
              href="mailto:ZhausDesign@outlook.com"
              className="flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">ZhausDesign@outlook.com</span>
            </a>
            <a
              href="tel:978-979-9150"
              className="flex items-center gap-1.5 hover:text-primary transition-colors ml-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">978-979-9150</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
            <span className="font-serif text-2xl font-bold tracking-wide text-foreground group-hover:text-primary transition-colors">
              ZHAUS DESIGN
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={cn(
                    "text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary",
                    location.pathname === link.to
                      ? "text-primary"
                      : "text-foreground/70"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className="hidden lg:inline-flex gold-gradient text-primary-foreground px-6 py-2.5 text-sm font-semibold tracking-wide uppercase rounded hover:opacity-90 transition-opacity"
          >
            Get a Quote
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-background border-t border-border animate-fade-in">
            <ul className="flex flex-col py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block px-6 py-3 text-sm font-medium tracking-wide uppercase transition-colors",
                      location.pathname === link.to
                        ? "text-primary bg-muted"
                        : "text-foreground/70 hover:text-primary hover:bg-muted/50"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="px-6 pt-3">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="block gold-gradient text-center text-primary-foreground px-6 py-3 text-sm font-semibold tracking-wide uppercase rounded"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">ZHAUS DESIGN</h3>
            <p className="text-secondary-foreground/70 leading-relaxed text-sm">
              ZHaus Design specializes in high-end interior design, premium marble PVC wall panels, and WPVC sheets for homes and businesses across Boston, Massachusetts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-primary">Contact</h4>
            <div className="space-y-3 text-sm text-secondary-foreground/70">
              <p>
                <span className="text-secondary-foreground font-medium">Email:</span>{" "}
                <a href="mailto:ZhausDesign@outlook.com" className="hover:text-primary transition-colors">
                  ZhausDesign@outlook.com
                </a>
              </p>
              <p>
                <span className="text-secondary-foreground font-medium">Phone:</span>{" "}
                <a href="tel:978-979-9150" className="hover:text-primary transition-colors">
                  978-979-9150
                </a>
              </p>
              <p>
                <span className="text-secondary-foreground font-medium">Business:</span>{" "}
                ZHaus Design
              </p>
              <p>
                <span className="text-secondary-foreground font-medium">Location:</span>{" "}
                Boston, Massachusetts
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary-foreground/50">
            © {new Date().getFullYear()} ZHaus Design. All rights reserved.
          </p>
          <p className="text-xs text-secondary-foreground/50">
            High-End Interior Design & Premium Wall Panels
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[108px]">{children}</main>
      <Footer />
    </div>
  );
}
