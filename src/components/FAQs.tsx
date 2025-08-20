import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "When is the workshop scheduled?",
      answer: "The upcoming workshop on 'Master the future of creativity with Generative AI' will be held on August 23rd, 2025 at 7 PM. You will receive a confirmation email with all details after registration."
    },
    {
      question: "Where is the workshop happening?",
      answer: "This is a live online workshop conducted via Zoom. You'll receive the meeting link and access details in your confirmation email after registration."
    },
    {
      question: "How will this workshop help me?",
      answer: "This workshop will teach you how to leverage cutting-edge AI tools to boost your creative efficiency by 10x, learn industry-standard workflows, and future-proof your career in the creative industries."
    },
    {
      question: "Are there any qualifications required?",
      answer: "No specific qualifications are required! This workshop is designed for creators of all levels - from beginners to professionals. Basic computer skills and enthusiasm to learn are all you need."
    },
    {
      question: "Do I get the session recording?",
      answer: "Yes! All registered participants will receive access to the complete workshop recording within 24 hours after the session, so you can revisit the content anytime."
    },
    {
      question: "What should I do if I don't receive confirmation even after making the payment?",
      answer: "If you don't receive your confirmation email within 10 minutes of payment, please check your spam folder first. If it's not there, contact our support team immediately and we'll resolve it quickly."
    }
  ];

  return (
    <section className="py-5 lg:py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-card border border-border rounded-xl px-6 hover:border-primary/50 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4">
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