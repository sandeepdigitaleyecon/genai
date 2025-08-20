import { Video, User, Target, Lightbulb } from 'lucide-react';

export const ValueProposition = () => {
  const features = [
    {
      icon: Video,
      title: "Live AI Demos",
      description: "Watch real-time AI creation in action with professional tools and workflows"
    },
    {
      icon: User,
      title: "30+ Years Mentor Experience",
      description: "Learn from a seasoned professional with decades in filmmaking and creative technology"
    },
    {
      icon: Target,
      title: "Career Guidance & Future Path",
      description: "Get personalized roadmap for success in films, VFX, gaming, and design"
    },
    {
      icon: Lightbulb,
      title: "Hands-on AI Tools",
      description: "Master the same AI tools that top creators use in their professional workflows"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-48 h-48 bg-primary/20 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-display font-black mb-6">
            <span className="text-gradient">Why Join</span>{" "}
            <span className="text-foreground">This Workshop?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Because the <span className="text-neon font-semibold">Future Won't Wait</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card-futuristic hover:scale-105 transition-all duration-300 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center space-y-4">
                {/* Icon */}
                <div className="relative mx-auto w-16 h-16 mb-4">
                  <div className="absolute inset-0 bg-gradient-primary rounded-xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative bg-gradient-primary p-3 rounded-xl">
                    <feature.icon className="w-10 h-10 text-background" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Visual Element */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
              <div className="w-2 h-2 bg-secondary rounded-full animate-glow-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" style={{animationDelay: '1s'}}></div>
            </div>
            <span className="font-medium">Transform Your Creative Career Today</span>
          </div>
        </div>
      </div>
    </section>
  );
};