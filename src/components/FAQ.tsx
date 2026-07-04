export default function FAQ() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl font-bold text-center mb-12 text-secondary-foreground">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-3 text-foreground">
              Are your wall panels waterproof?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Yes. Our wall panels are waterproof and moisture-resistant, making them a great option for bathrooms, kitchens, basements, laundry rooms, and other interior spaces.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-3 text-foreground">
              Can the panels be installed over existing walls?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Yes. The panels can be installed over drywall, plywood, concrete, tile, and many other clean, flat surfaces using construction adhesive or silicone.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-3 text-foreground">
              Are the panels easy to install?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Yes. They are lightweight and designed for quick installation, helping contractors and homeowners complete projects faster than traditional tile or stone.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-3 text-foreground">
              How can I receive my order?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Orders are available for pickup by appointment. Local delivery may be available depending on your location and order size.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-3 text-foreground">
              How can I get pricing?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Please contact us with your project details. Pricing depends on the product type, quantity, and availability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}