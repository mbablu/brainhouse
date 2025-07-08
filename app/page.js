
import CtaSection from "./../components/cta-section";
import EngineeringTransform from "./../components/engineering-transformation-section";
import HeroSection from "./../components/hero-sectoin/hero-section";
import OurValues from "./../components/our-values";
import StatsSection from "./../components/stats";
import WhyBrainHouse from "./../components/why-brainhouse";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection> 
      {/* <HeaderSection></HeaderSection>   */}
      <EngineeringTransform></EngineeringTransform> 
      <WhyBrainHouse></WhyBrainHouse>
      <StatsSection></StatsSection>
      <OurValues></OurValues>
      <CtaSection></CtaSection> 
{/* 

      
      <StatSection></StatSection> 
      <CtaTwoSection></CtaTwoSection> 
      <StatsTwoSecton></StatsTwoSecton> 
      <Testimonial></Testimonial> 
      <FaqSection></FaqSection> 
      <Footer></Footer>  */}
       
    </>
  );
}
