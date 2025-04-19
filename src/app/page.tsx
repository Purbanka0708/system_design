import { main } from "framer-motion/client";
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUS from "@/components/WhyChooseUS";
import SystemDesignTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUS/>
      <SystemDesignTestimonials/>
      <UpcomingWebinars/>
      <Instructors/>
    </main>
    
  );
}
