import { TrendingDown, TrendingUp, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const OutcomesMetrics = () => {
  const metrics = [
    {
      icon: TrendingDown,
      label: "Missed-event rate",
      change: "↓ 42%",
      color: "text-green-600",
    },
    {
      icon: TrendingUp,
      label: "Message open-rate",
      change: "↑ 68%",
      color: "text-blue-600",
    },
    {
      icon: Clock,
      label: "Time-to-task",
      change: "5min → 30sec",
      color: "text-purple-600",
    },
  ];

  return (
    <section id="proof" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Measurable results from day one
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Universities using Campus One see immediate improvements in student engagement and administrative efficiency
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <Card key={metric.label} className="p-8 text-center space-y-4 hover:shadow-lg transition-shadow">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold">{metric.label}</h3>
                <p className={`text-3xl font-bold ${metric.color}`}>{metric.change}</p>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 space-y-2">
              <h4 className="font-semibold text-lg">Before Campus One</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Students miss 40% of important events</li>
                <li>• Admins juggle 5+ communication tools</li>
                <li>• Average 5 minutes to find information</li>
              </ul>
            </Card>
            <Card className="p-6 space-y-2 border-primary">
              <h4 className="font-semibold text-lg text-primary">After Campus One</h4>
              <ul className="space-y-2 text-sm">
                <li>• Event participation up 42%</li>
                <li>• Single platform for all communications</li>
                <li>• Information found in under 30 seconds</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutcomesMetrics;
