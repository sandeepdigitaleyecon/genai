import { ArrowRight} from 'lucide-react';
const WhatYouLearn = () => {
  const learningPoints = [
    {
      title: "Impact of Gen AI on creative industries",
      icon: "🎨",
      description: "Understand how AI is reshaping film, design, and content creation"
    },
    {
      title: "Instant upgrades for editors, designers & creators",
      icon: "⚡",
      description: "Transform your workflow with AI-powered enhancements"
    },
    {
      title: "Top AI tools for video & Photoshop",
      icon: "🛠️",
      description: "Master the most powerful AI tools in the market"
    },
    {
      title: "Simplifying reels, wedding films & YouTube edits",
      icon: "📱",
      description: "Streamline your content creation process"
    },
    {
      title: "Techniques to ideate visuals & content in minutes",
      icon: "💡",
      description: "Accelerate your creative brainstorming process"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            What You Will{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Learn
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical skills and insights that will revolutionize your creative workflow
          </p>
        </div>

        <div className="max-w-4xl mx-auto pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningPoints.map((point, index) => (
              <div 
                key={index}
                className="bg-gradient-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl group-hover:animate-float">
                    {point.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3 justify-center">
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

export default WhatYouLearn;
