import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do you handle student privacy?",
      answer: "Campus One operates on a read-only basis wherever possible—we pull information from your existing systems but never store passwords. Students can request deletion of their data at any time, and we're fully FERPA compliant.",
    },
    {
      question: "How long does setup take?",
      answer: "Most institutions are up and running with a pilot in hours, not weeks. Our team handles the initial configuration, and you can start with a single department to test before scaling campus-wide.",
    },
    {
      question: "What integrations do you support?",
      answer: "We start with simple URL-based feeds and grow with your needs. Native integrations include common LMS platforms, event management systems, and SSO providers. Custom integrations available for enterprise plans.",
    },
    {
      question: "Can we customize the branding?",
      answer: "Absolutely. Campus One supports your institution's colors, logo, and even custom domain. Students see a seamless extension of your brand, not a third-party platform.",
    },
    {
      question: "What kind of support do you provide?",
      answer: "All plans include email support. Institution and Custom tiers get priority support, training sessions, and ongoing optimization help. We're committed to your success from day one.",
    },
    {
      question: "Is there a contract commitment?",
      answer: "Our pilot program is designed to be low-risk. Start with a department-level trial, measure results, then expand if it makes sense. No long-term commitment required for pilots.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Common questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
