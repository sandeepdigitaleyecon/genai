import { ArrowRight, Sparkles, Rocket } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import speakerImage from '@/assets/speaker-portrait.jpg';

export const FinalCTA = () => {
  // Workshop date - 7 days from now
  const workshopDate = new Date();
  workshopDate.setDate(workshopDate.getDate() + 4);
  workshopDate.setHours(19, 0, 0, 0);

  return (
    <section className="py-20 bg-hero relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-2xl animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-bright-orange/20 rounded-full blur-xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(185 100% 50% / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(185 100% 50% / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-center space-y-8 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 text-sm">
              <Rocket className="w-4 h-4 text-primary icon-glow animate-glow-pulse" />
              <span className="text-primary font-semibold">Final Call</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl lg:text-7xl font-display font-black leading-tight">
              <span className="text-gradient">Don't Just Watch</span><br />
              <span className="text-foreground">the</span>{" "}
              <span className="text-neon">Future.</span><br />
              <span className="text-bright-orange glow-orange">Create It.</span>
            </h2>

            {/* Final CTA Button */}
            <div className="space-y-6">
              <a target="_blank" href='https://pages.razorpay.com/pl_QfmPM7Lazjt6Y1/view'><button className="btn-hero group w-full lg:w-auto text-xl px-12 py-6 pulse-glow">
                <span className="flex items-center gap-3 justify-center">
                  Reserve Your Seat
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </button></a>
            </div>

            
          </div>

          
        </div>

        {/* Final Trust Line */}
        <div className="text-center lg:mt-16 pt-8 border-t border-border/30">
          <p className="text-lg text-muted-foreground">
            <span className="text-primary font-semibold">Secure your spot today</span> and step into the future of creative technology
          </p>
        </div>
      </div>
    </section>
  );
};