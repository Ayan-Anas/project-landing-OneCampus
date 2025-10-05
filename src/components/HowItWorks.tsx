import { Plug, LayoutGrid, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      icon: Plug,
      title: "Connect",
      description: "Link the tools you already use—calendars, LMS, event systems—in minutes",
    },
    {
      icon: LayoutGrid,
      title: "Organize",
      description: "Campus One creates a clear feed and living schedule automatically",
    },
    {
      icon: Zap,
      title: "Act",
      description: "Students tap once to RSVP, submit, or save—no searching, no switching apps",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to transform campus communication
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <Card key={step.title} className="p-8 text-center space-y-4 relative">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                    {idx + 1}
                  </div>
                </div>
                <div className="flex justify-center">
                  <Icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
