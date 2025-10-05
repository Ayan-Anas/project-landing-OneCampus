import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Campus One transformed how our students discover opportunities. Engagement is up 40% and we've consolidated three different platforms.",
      name: "Dr. Sarah Chen",
      role: "Director of Student Success",
      institution: "Pacific Coast University",
    },
    {
      quote: "Our student leaders love the unified dashboard. Event planning went from hours to minutes, and we finally have real-time attendance data.",
      name: "Marcus Johnson",
      role: "Student Activities Coordinator",
      institution: "Riverside College",
    },
    {
      quote: "The analytics alone justify the investment. We can see exactly which messages land and which students need a nudge—all in one place.",
      name: "Jennifer Martinez",
      role: "Associate Dean of Students",
      institution: "Mountain View State",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by universities nationwide
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="p-8 md:p-12">
                    <div className="flex flex-col items-center text-center space-y-6">
                      <Quote className="w-12 h-12 text-primary/20" />
                      <p className="text-lg md:text-xl italic text-muted-foreground max-w-3xl">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-12 h-12 bg-primary/10" />
                        <div className="text-left">
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.institution}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
