import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const tiers = [
    {
      name: "Pilot (Dept.)",
      description: "Perfect for testing with a single department",
      features: [
        "50–200 students",
        "Basic analytics",
        "Email support",
        "Core features included",
      ],
      cta: "Start a Pilot",
      highlighted: false,
    },
    {
      name: "Institution",
      description: "Full-featured for campus-wide deployment",
      features: [
        "Unlimited students",
        "SSO integration",
        "Custom branding",
        "Full analytics suite",
        "Priority support",
        "Training & onboarding",
      ],
      cta: "Request a Quote",
      highlighted: true,
    },
    {
      name: "Custom",
      description: "For multi-campus systems",
      features: [
        "Multi-campus support",
        "Advanced integrations",
        "Custom workflows",
        "SLA guarantees",
        "Dedicated success manager",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
            Choose the plan that fits your institution's needs
          </p>
          <p className="text-sm text-muted-foreground">
            Educational discounts available · Risk-free pilot program
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`p-8 space-y-6 ${
                tier.highlighted
                  ? "border-2 border-primary shadow-xl scale-105"
                  : ""
              }`}
            >
              <div>
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </div>

              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="w-full"
                variant={tier.highlighted ? "default" : "outline"}
              >
                <a href="mailto:sales@campusone.app">{tier.cta}</a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
