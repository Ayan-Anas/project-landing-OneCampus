import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroMockup from "@/assets/hero-mockup.png";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-12 md:pt-24 md:pb-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              One calm place for{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                campus information
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Campus One unifies updates, deadlines, and actions so students act in seconds—and universities communicate with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" asChild className="text-base">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfFdMcZj0WlREIG9v02uu02cgMS9aGn0ozlg5-DFKBXKfPmRA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                  Request a Demo
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base">
                <a href="mailto:hello@campusone.app">
                  Talk to Us
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Badge variant="secondary" className="px-4 py-2 text-sm">Privacy-first</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">Brandable</Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">Fast to deploy</Badge>
            </div>
          </div>

          {/* Right: Product Mockup */}
          <div className="relative">
            <div className="relative animate-fade-in">
              <img 
                src={heroMockup} 
                alt="Campus One unified feed and calendar on laptop and mobile devices" 
                className="w-full h-auto rounded-lg shadow-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
