import { HeroSection } from "@/components/HeroSection";
import { ValueProposition } from "@/components/ValueProposition";
import { AboutSpeaker } from "@/components/AboutSpeaker";
import { WorkshopAgenda } from "@/components/WorkshopAgenda";
import { PricingSection } from "@/components/PricingSection";
import { FinalCTA } from "@/components/FinalCTA";
import WhatYouLearn from "@/components/WhatYouLearn";
import KeyBenefits from "@/components/KeyBenefits";
import SoftwareFocus from "@/components/SoftwareFocus";
import FAQ from "@/components/FAQs";
import TargetAudience from "@/components/TargetAudience";


const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WorkshopAgenda />
      <WhatYouLearn/>
      <KeyBenefits />
      <AboutSpeaker />
      <TargetAudience />
      <SoftwareFocus/>
      <FAQ />
      <FinalCTA />
    </div>
  );
};

export default Index;
