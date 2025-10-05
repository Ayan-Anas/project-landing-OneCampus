import { List, Calendar, Bell, Search, Zap, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: List,
      title: "Unified Feed",
      description: "See all updates, deadlines, and opportunities in one chronological stream",
    },
    {
      icon: Calendar,
      title: "Campus Calendar",
      description: "Every deadline, event, and commitment in a single living schedule",
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Timely nudges for RSVPs, submissions, and important actions",
    },
    {
      icon: Search,
      title: "Universal Search",
      description: "Find any event, resource, or contact instantly across campus",
    },
    {
      icon: Zap,
      title: "Action Shortcuts",
      description: "One-tap RSVP, submit, save—no app-switching required",
    },
    {
      icon: BarChart3,
      title: "Admin Insights",
      description: "Track engagement, reach, and outcomes with real-time analytics",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful features, simple experience
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="p-6 space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
