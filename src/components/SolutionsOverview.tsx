import { Calendar, Search, Bell, Zap, BarChart3, List } from "lucide-react";

const SolutionsOverview = () => {
  const features = [
    { icon: List, label: "Unified Feed" },
    { icon: Calendar, label: "Calendar" },
    { icon: Search, label: "Search" },
    { icon: Bell, label: "Reminders" },
    { icon: Zap, label: "Action Shortcuts" },
    { icon: BarChart3, label: "Admin Insights" },
  ];

  return (
    <section id="solutions" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to cut through noise and lift engagement—without adding more tools
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.label} className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm font-medium">{feature.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview;
