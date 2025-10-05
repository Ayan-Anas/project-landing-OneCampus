import { ReactNode } from "react";

interface SolutionSectionProps {
  title: string;
  bullets: string[];
  imageSrc?: string;
  imageAlt?: string;
  imageOnRight?: boolean;
  bgLight?: boolean;
  icon?: React.ReactNode;
}

const SolutionSection = ({
  title,
  bullets,
  imageSrc,
  imageAlt,
  imageOnRight = false,
  bgLight = false,
  icon,
}: SolutionSectionProps) => {
  // If no image, use full-width centered layout
  if (!imageSrc) {
    return (
      <section className={`py-16 md:py-24 ${bgLight ? "bg-muted/30" : "bg-background"}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              {icon && <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">{icon}</div>}
              <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
            </div>
            <ul className="grid md:grid-cols-2 gap-6">
              {bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 md:py-24 ${bgLight ? "bg-muted/30" : "bg-background"}`}>
      <div className="container mx-auto px-4">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${imageOnRight ? "" : "md:grid-flow-dense"}`}>
          {/* Content */}
          <div className={`space-y-6 ${imageOnRight ? "" : "md:col-start-1"}`}>
            <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
            <ul className="space-y-4">
              {bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className={imageOnRight ? "md:col-start-2" : "md:col-start-2"}>
            <img 
              src={imageSrc} 
              alt={imageAlt} 
              className="w-full h-auto rounded-lg shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
