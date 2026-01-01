import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Play } from "lucide-react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutUsSection from "@/components/AboutUsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import LearningStyleSection from "@/components/LearningStyleSection";
import MathCurriculumSection from "@/components/MathCurriculumSection";
import CodingCurriculumSection from "@/components/CodingCurriculumSection";
import BeyondMathSection from "@/components/BeyondMathSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <div id="about">
        <AboutUsSection />
      </div>
      <div id="why-choose">
        <WhyChooseSection />
      </div>
      <div id="curriculum">
        <MathCurriculumSection />
        <CodingCurriculumSection />
      </div>
      <LearningStyleSection />
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="booking">
        <BookingSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <div id="contact">
        <FooterSection />
      </div>
    </div>
  );
}
