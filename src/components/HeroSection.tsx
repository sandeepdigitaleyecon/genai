import { ArrowRight, Sparkles, Clock } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import speakerImage from '@/assets/speaker-portrait.jpg';
import heroImage from '@/assets/hero.png';


export const HeroSection = () => {
  // Set workshop date - 7 days from now for demo
  const workshopDate = new Date();
  workshopDate.setDate(workshopDate.getDate() + 4);
  workshopDate.setHours(19, 0, 0, 0); // 7 PM

  return (
    <section className="min-h-screen bg-hero flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-neon-cyan/30 rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 pt-20 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            

            {/* Main Headlines */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-7xl font-display font-black leading-tight">
                <span className="text-foreground">Master</span>{" "}
                <span className="text-neon">Generative AI</span>{" "}<br></br>
                <span className="text-foreground text-3xl">in 3 Hours</span>
              </h1>
              <div className="text-2xl lg:text-3xl font-bold text-bright-orange">
                For Just ₹49
              </div>
            </div>

            

            {/* Speaker Image */}
            <div className="flex justify-center lg:justify-end animate-scale-in block lg:hidden">
            <div className="relative">
              {/* Glow Effects 
              <div className="absolute -inset-4 bg-gradient-primary rounded-full opacity-20 blur-2xl animate-glow-pulse"></div>
              <div className="absolute -inset-2 bg-primary/30 rounded-full blur-xl"></div> */}
              
              {/* Speaker Image */}
              <div className="relative w-100 h-60 lg:w-96 lg:h-96">
                <img 
                  src={heroImage}
                  alt="Kemburu Sateesh Kumar - AI Workshop Speaker"
                  className="w-full h-full object-cover "
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-bright-orange text-background px-3 py-1 rounded-full text-sm font-bold animate-float">
                  30+ Years
                </div>
                <div className="absolute -bottom-2 -left-2 bg-primary text-background px-3 py-1 rounded-full text-sm font-bold animate-float" style={{animationDelay: '1s'}}>
                  Expert
                </div>
              </div>
            </div>
          </div>
          {/* Sub-headline 
            <div className="space-y-3 text-lg lg:text-xl text-muted-foreground">
              <div className="flex items-center justify-left lg:justify-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
                <span>Live AI Demos</span>
              </div>
              <div className="flex items-center justify-left lg:justify-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" style={{animationDelay: '1s'}}></div>
                <span>Hands-on AI Tools Training</span>
              </div>
              <div className="flex items-center justify-left lg:justify-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full animate-glow-pulse" style={{animationDelay: '0.5s'}}></div>
                <span>Career Guidance from 30+ Years Expert</span>
              </div>
            </div>*/}

            {/* CTA Button */}
            <div className="space-y-6">
              <a target="_blank" href='https://pages.razorpay.com/pl_QfmPM7Lazjt6Y1/view'><button className="btn-hero group w-full lg:w-auto">
                <span className="flex items-center gap-3 justify-center">
                  Join Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button></a>
              
              {/* Urgency Text 
              <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-bright-orange">
                <Clock className="w-4 h-4" />
                <span className="font-semibold">Workshop starts in:</span>
              </div>*/}
            </div>

            {/* Countdown Timer */}
            <CountdownTimer targetDate={workshopDate} className="lg:justify-start" />
          </div>

          {/* Speaker Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative hidden lg:block">
              {/* Glow Effects */}
              <div className="absolute -inset-4 bg-gradient-primary rounded-full opacity-20 blur-2xl animate-glow-pulse"></div>
              <div className="absolute -inset-2 bg-primary/30 rounded-full blur-xl"></div>
              
              {/* Speaker Image */}
              <div className="relative w-90">
                <img 
                  src={heroImage}
                  alt="Kemburu Sateesh Kumar - AI Workshop Speaker"
                  className="w-full h-full object-cover border-primary/50 shadow-2xl"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-bright-orange text-background px-3 py-1 rounded-full text-sm font-bold animate-float">
                  30+ Years
                </div>
                <div className="absolute -bottom-2 -left-2 bg-primary text-background px-3 py-1 rounded-full text-sm font-bold animate-float" style={{animationDelay: '1s'}}>
                  Expert
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};