const TargetAudience = () => {
  const audiences = [
    {
      title: "Content Creators",
      icon: "📱",
      description: "Elevate your social media content game"
    },
    {
      title: "Filmmakers", 
      icon: "🎬",
      description: "Revolutionize your film production workflow"
    },
    {
      title: "Designers",
      icon: "🎨", 
      description: "Transform your design process with AI"
    },
    {
      title: "Wedding Filmmakers",
      icon: "💒",
      description: "Create stunning wedding films efficiently"
    },
    {
      title: "YouTubers",
      icon: "📺",
      description: "Scale your YouTube content creation"
    },
    {
      title: "Marketing Professionals",
      icon: "📊",
      description: "Boost your marketing campaigns with AI"
    }
  ];

  return (
    <section className="py-10 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center ">
          {/*<h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Let's unlock the tools reshaping
          </h2>
          <div className="text-4xl md:text-6xl font-heading font-bold bg-gradient-primary bg-clip-text text-transparent mb-8">
            CREATIVE INDUSTRIES
          </div>*/}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            This is not the usual workshop. This is a dynamic hands-on experience into the exciting world of Generative AI tools. 
            Designed for those who want to fast-track their skills and open doors to amazing career opportunities.
          </p>
          
          {/* Rating */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="flex text-yellow-400 text-xl">
              ⭐⭐⭐⭐⭐
            </div>
            <span className="text-lg font-semibold text-foreground">4.8/5 rating</span>
          </div>
        </div>

        {/*<div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiences.map((audience, index) => (
              <div 
                key={index}
                className="bg-gradient-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 group hover:shadow-card"
              >
                <div className="text-4xl mb-4 group-hover:animate-float">
                  {audience.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {audience.title}
                </h3>
                <p className="text-muted-foreground">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>*/}
      </div>
    </section>
  );
};
export default TargetAudience;