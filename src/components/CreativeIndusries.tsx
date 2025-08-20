import { Award, Users, Briefcase, Sparkles } from 'lucide-react';
import speakerImage from '@/assets/speaker-portrait.jpg';

export const AboutSpeaker = () => {
  const achievements = [
    { icon: Award, label: "30+ Years Legacy", value: "Film & VFX" },
    { icon: Users, label: "500+ Projects", value: "Delivered" },
    { icon: Briefcase, label: "International", value: "Clients" },
    { icon: Sparkles, label: "Academy", value: "Founder" }
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Speaker Image & Stats */}
          <div className="flex flex-col items-center lg:items-start animate-scale-in">
            {/* Image */}
            <div className="relative mb-8">
              <div className="absolute -inset-4 bg-gradient-primary rounded-full opacity-20 blur-2xl animate-glow-pulse"></div>
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                <img 
                  src={speakerImage}
                  alt="Kemburu Sateesh Kumar - Creative Technology Expert"
                  className="w-full h-full object-cover rounded-full border-4 border-primary/30 shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 text-sm">
                <Sparkles className="w-4 h-4 text-primary icon-glow" />
                <span className="text-primary font-semibold">Meet Your Mentor</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-display font-black">
                <span className="text-foreground">Kemburu</span>{" "}
                <span className="text-gradient">Sateesh Kumar</span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <span className="text-primary font-semibold">30+ years of legacy</span> in ad filmmaking, 
                visual media, and creative storytelling, combining artistry with cutting-edge technology.
              </p>
              
              <p>
                <span className="text-secondary font-semibold">Founder of Scintilla Kreations & Scintilla Digital Academy</span> — 
                powering brands with films, VFX, and innovation while training the next generation of creators.
              </p>
              
              <p>
                Worked with <span className="text-neon font-semibold">national and international clients</span>, 
                creating benchmark ad films and campaigns that set industry standards.
              </p>
              
              <p>
                A <span className="text-gradient font-semibold">techno-creative visionary</span> who bridges 
                traditional filmmaking artistry with the latest AI technologies.
              </p>
            </div>
            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="card-futuristic text-center p-4 hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <achievement.icon className="w-6 h-6 text-primary mx-auto mb-2 icon-glow" />
                  <div className="text-sm font-bold text-foreground">{achievement.value}</div>
                  <div className="text-xs text-muted-foreground">{achievement.label}</div>
                </div>
              ))}
            </div>

            {/* Highlight Box */}
            <div className="card-futuristic bg-gradient-primary/10 border-primary/30">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 animate-glow-pulse"></div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    Why Learn from Sateesh?
                  </h4>
                  <p className="text-muted-foreground">
                    Get insights from someone who has witnessed and shaped the evolution of creative technology — 
                    from traditional filmmaking to the AI revolution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};