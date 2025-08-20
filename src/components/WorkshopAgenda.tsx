import { Clock, Brain, Monitor, Users, CheckCircle, ArrowRight } from 'lucide-react';

export const WorkshopAgenda = () => {
  const agenda = [
    {
      hour: "Hour 1",
      time: "7:00 - 8:00 PM",
      icon: Brain,
      title: "The Power of Generative AI",
      description: "Surprising facts and how AI is transforming the creative world",
      highlights: [
        "AI's impact on creative industries",
        "Real-world case studies",
        "Future opportunities"
      ]
    },
    {
      hour: "Hour 2", 
      time: "8:00 - 9:00 PM",
      icon: Monitor,
      title: "Live AI Demos",
      description: "Create cinematic compositions, ad-level visuals, and VFX with AI tools",
      highlights: [
        "Live tool demonstrations",
        "Professional workflows",
        "Commercial applications"
      ]
    },
    {
      hour: "Hour 3",
      time: "9:00 - 10:00 PM", 
      icon: Users,
      title: "Career Guidance & Q&A",
      description: "Map your future in films, design, gaming, or entrepreneurship",
      highlights: [
        "Personalized career paths",
        "Industry insights",
        "Open Q&A session"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-secondary/20 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 text-sm mb-6">
            <Clock className="w-4 h-4 text-primary icon-glow" />
            <span className="text-primary font-semibold">Workshop Timeline</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-display font-black mb-6">
            <span className="text-foreground">Your 3-Hour</span>{" "}
            <span className="text-gradient">Journey Into the Future</span>
          </h2>
          
          <p className="text-xl text-muted-foreground">
            A structured path from AI basics to career transformation
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary transform lg:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {agenda.map((item, index) => (
              <div 
                key={index}
                className={`relative flex items-center animate-scale-in ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background z-10 animate-glow-pulse" style={{animationDelay: `${index * 0.5}s`}}></div>

                {/* Content Card */}
                <div className={`ml-20 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="card-futuristic hover:scale-105 transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-primary rounded-lg opacity-20 blur-lg group-hover:opacity-40 transition-opacity"></div>
                        <div className="relative bg-gradient-primary p-2 rounded-lg">
                          <item.icon className="w-6 h-6 text-background" />
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-primary">{item.hour}</div>
                        <div className="text-xs text-muted-foreground">{item.time}</div>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {item.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-success-green" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a target="_blank" href='https://pages.razorpay.com/pl_QfmPM7Lazjt6Y1/view'><button className="btn-hero group w-full lg:w-auto text-xl px-12 py-6 pulse-glow">
                <span className="flex items-center gap-3 justify-center">
                  Reserve Your Seat
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>
              </a>
        </div>
        
      </div>
    </section>
  );
};