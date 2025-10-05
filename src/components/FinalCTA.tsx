import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-accent text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to lift student engagement without more tools?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Join universities nationwide in simplifying campus communication
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild className="text-base">
            <a href="https://demo.campusone.app" target="_blank" rel="noopener noreferrer">
              See the Demo
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-base bg-white/10 border-white/20 hover:bg-white/20 text-white">
            <a href="mailto:hello@campusone.app">
              Talk to Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
