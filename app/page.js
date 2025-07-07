import BentoGrid from "@/components/bento-grid";
import CtaSection from "@/components/cta-section";
import CtaTwoSection from "@/components/cta2-section";
import EngineeringTransform from "@/components/engineering-transformation-section";
import FaqSection from "@/components/faq-section";
import Footer from "@/components/footer";
import HeaderSection from "@/components/header-secton";
import HeroSection from "@/components/hero-sectoin/hero-section";
import OurValues from "@/components/our-values";
import StatsTwoSecton from "@/components/stat2-section";
import StatsSection from "@/components/stats";
import StatSection from "@/components/stats-section";
import Testimonial from "@/components/testimonial";
import WhyBrainHouse from "@/components/why-brainhouse";

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
