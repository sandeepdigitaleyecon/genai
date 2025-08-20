import { Award, Users, Briefcase, Sparkles } from 'lucide-react';
import speakerImage from '@/assets/speaker-portrait.jpg';
import herosImage from '@/assets/heros.png';
import speakerImg from '@/assets/speaker.png';

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

      <div className="container mx-auto lg:pt-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Speaker Image with Enhanced Effects */}
                    <div className="flex justify-center lg:justify-end animate-scale-in">
                      <div className="relative">
                        {/* Multiple Glow Layers
                        <div className="absolute -inset-8 bg-gradient-primary rounded-full opacity-20 blur-3xl animate-glow-pulse"></div>
                        <div className="absolute -inset-6 bg-secondary/30 rounded-full blur-2xl animate-glow-pulse" style={{animationDelay: '1s'}}></div>
                        <div className="absolute -inset-4 bg-bright-orange/20 rounded-full blur-xl animate-glow-pulse" style={{animationDelay: '2s'}}></div>
                         */}
                        {/* Speaker Image */}
                        <div className="relative w-100 h-80 lg:w-96 lg:h-96">
                          <img 
                            src={speakerImg}
                            alt="Kemburu Sateesh Kumar - Your AI Transformation Guide"
                            className="w-full h-full object-cover"
                          />
                          
                          {/* Enhanced Floating Elements */}
                          <div className="absolute -top-6 -right-6 bg-bright-orange text-background px-4 py-2 rounded-full text-sm font-bold animate-float shadow-lg">
                            30+ Years
                          </div>
                          <div className="absolute -bottom-4 -left-4 bg-primary text-background px-4 py-2 rounded-full text-sm font-bold animate-float shadow-lg" style={{animationDelay: '1s'}}>
                            AI Expert
                          </div>
                          <div className="absolute top-1/4 -left-8 bg-secondary text-background px-3 py-1 rounded-full text-xs font-bold animate-float shadow-lg" style={{animationDelay: '2s'}}>
                            500+ Projects
                          </div>
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

            
          </div>
        </div>
      </div>
    </section>
  );
};