import { ArrowRight, AlertCircle, Star, Zap } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';

export const PricingSection = () => {
  // Workshop date - 7 days from now
  const workshopDate = new Date();
  workshopDate.setDate(workshopDate.getDate() + 4);
  workshopDate.setHours(19, 0, 0, 0);

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-bright-orange/5 via-transparent to-primary/5"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-bright-orange/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary/10 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-bright-orange/20 border border-bright-orange/30 rounded-full px-4 py-2 text-sm mb-6">
            <Zap className="w-4 h-4 text-bright-orange animate-glow-pulse" />
            <span className="text-bright-orange font-semibold">Special Launch Offer</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-display font-black mb-6">
            <span className="text-foreground">Your Dream Career is Just</span><br />
            <span className="text-bright-orange glow-orange">₹49 Away!</span>
          </h2>
        </div>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto">
          <div className="card-futuristic border-bright-orange/30 bg-gradient-to-br from-card via-card to-bright-orange/5 hover:scale-105 transition-all duration-500 animate-scale-in">
            {/* Original vs Offer Price */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="text-3xl text-muted-foreground line-through">₹599</div>
                <div className="text-6xl lg:text-8xl font-display font-black text-bright-orange glow-orange">₹49</div>
              </div>
              
              {/* Savings Badge */}
              <div className="inline-flex items-center gap-2 bg-success-green/20 border border-success-green/30 rounded-full px-4 py-2">
                <Star className="w-4 h-4 text-success-green" />
                <span className="text-success-green font-semibold">Save 92% - Limited Time</span>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="text-center mb-8 space-y-4">
              <h3 className="text-2xl font-display font-bold text-foreground">
                What You Get:
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                {[
                  "3 Hours of Expert Training",
                  "Live AI Tool Demonstrations", 
                  "Personal Career Roadmap",
                  "Industry Insider Knowledge",
                  "Direct Access to Mentor",
                  "Exclusive Workshop Materials"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-bright-orange rounded-full animate-glow-pulse" style={{animationDelay: `${index * 0.1}s`}}></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Urgency Message */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-destructive/20 border border-destructive/30 rounded-full px-4 py-2 mb-4">
                <AlertCircle className="w-4 h-4 text-destructive animate-glow-pulse" />
                <span className="text-destructive font-semibold">Hurry! Only Few Seats Left</span>
              </div>
              <p className="text-muted-foreground text-lg">
                <span className="text-foreground font-semibold">"One session that could change your entire creative path."</span>
              </p>
            </div>

            {/* CTA Button */}
            <div className="text-center mb-8">
              <a target="_blank" href='https://pages.razorpay.com/pl_QfmPM7Lazjt6Y1/view'><button className="btn-hero w-full md:w-auto group text-xl px-12 py-6">
                <span className="flex items-center gap-3 justify-center">
                  Reserve Your Seat for ₹49
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </button></a>
            </div>

            {/* Countdown */}
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-4 font-semibold">
                ⏰ Workshop starts in:
              </div>
              <CountdownTimer targetDate={workshopDate} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};