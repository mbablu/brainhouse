import BentoGrid from "@/components/bento-grid";
import CtaSection from "@/components/cta-section";
import CtaTwoSection from "@/components/cta2-section";
import FaqSection from "@/components/faq-section";
import Footer from "@/components/footer";
import HeaderSection from "@/components/header-secton";
import HeroSection from "@/components/hero-sectoin/hero-section";
import StatsTwoSecton from "@/components/stat2-section";
import StatSection from "@/components/stats-section";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection> 
      <HeaderSection></HeaderSection>  
      <BentoGrid></BentoGrid> 
      <CtaSection></CtaSection> 
      <StatSection></StatSection> 
      <CtaTwoSection></CtaTwoSection> 
      <StatsTwoSecton></StatsTwoSecton> 
      <Testimonial></Testimonial> 
      <FaqSection></FaqSection> 
      <Footer></Footer> 
       
    </>
  );
}
