import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Building2, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.message) {
      toast({ title: "Please fill in required fields", variant: "destructive" });
      return;
    }
    const response = await fetch("https://formspree.io/f/xwvrgqqn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        message: form.message,
      }),
    });
    if (response.ok) {
      setSubmitted(true);
      toast({ title: "Message sent!", description: "We'll respond within 24 hours during business days." });
    } else {
      toast({ title: "Something went wrong. Please try again.", variant: "destructive" });
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Get In Touch</p>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Ready to transform your space with premium marble PVC panels? Contact us for personalized consultation and pricing.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <ScrollReveal delay={200} className="lg:col-span-3">
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="font-serif text-xl font-bold text-foreground mb-6">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </h2>
              {submitted ? (
                <div className="text-center py-12">
                  <p className="text-primary font-serif text-2xl font-bold mb-2">Thank you!</p>
                  <p className="text-muted-foreground">We'll get back to you within 24 hours during business days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <Input
                        id="firstName"
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input
                        id="lastName"
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        className="bg-background"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="bg-background resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full gold-gradient text-primary-foreground py-3 font-semibold text-sm tracking-wide uppercase rounded hover:opacity-90 transition-opacity"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal delay={400} className="lg:col-span-2">
            <div className="space-y-8">
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a href="mailto:ZhausDesign@outlook.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    ZhausDesign@outlook.com
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Building2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Business</h3>
                  <p className="text-muted-foreground text-sm">ZHaus Design</p>
                  <p className="text-muted-foreground text-sm">Premium Marble PVC & WPVC Wall Panels</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Response Time</h3>
                  <p className="text-muted-foreground text-sm">
                    We respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
