import { ArrowRight } from 'lucide-react';

const KeyBenefits = () => {
  const benefits = [
    {
      title: "Boosting Creative Efficiency",
      icon: "⚡",
      gradient: "from-primary to-secondary"
    },
    {
      title: "Boost your creativity",
      icon: "🎨",
      gradient: "from-secondary to-accent"
    },
    {
      title: "Resources worth Rs 10,000",
      icon: "💎",
      gradient: "from-accent to-primary"
    },
    {
      title: "Career insights",
      icon: "📈",
      gradient: "from-primary to-electric-orange"
    },
    {
      title: "Expert guidance",
      icon: "👨‍🏫",
      gradient: "from-electric-orange to-secondary"
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Key{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Benefits
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to advance your creative career
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-20 rounded-xl blur-sm group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="relative bg-gradient-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="text-4xl mb-4 group-hover:animate-float">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <a target="_blank" href='https://pages.razorpay.com/pl_QfmPM7Lazjt6Y1/view'><button className="btn-hero group w-full lg:w-auto">
                <span className="flex items-center gap-3 justify-center">
                  Join Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button></a>
        </div>
        
      </div>
    </section>
  );
};

export default KeyBenefits;