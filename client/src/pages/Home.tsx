import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Play } from "lucide-react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutUsSection from "@/components/AboutUsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import LearningStyleSection from "@/components/LearningStyleSection";
import MathCurriculumSection from "@/components/MathCurriculumSection";
import CodingCurriculumSection from "@/components/CodingCurriculumSection";
import ScienceCurriculumSection from "@/components/ScienceCurriculumSection";
import BeyondMathSection from "@/components/BeyondMathSection";
import RevaAISection from "@/components/RevaAISection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>EduVerseJr - Personalized Math, Science & Coding Learning for Kids Grades 5-10</title>
        <meta
          name="description"
          content="EduVerseJr offers personalized Math, Science and Coding programs for kids in Grades 5-10. Expert-led 1-on-1 online classes aligned with US, UK, Canada, Australia, Singapore, and UAE curricula. Empower your child's future with fun, interactive STEM education."
        />
        <link rel="canonical" href="https://eduversejr.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="EduVerseJr - Personalized Math, Science & Coding for Kids Grades 5-10" />
        <meta property="og:description" content="Transform your child's future with expert-led Math, Science and Coding programs. Interactive 1-on-1 online classes, curriculum-aligned for Grades 5-10 across US, UK, Canada, Australia, Singapore and UAE." />
        <meta property="og:url" content="https://eduversejr.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://eduversejr.com/logo.jpg" />
        <meta property="og:image:alt" content="EduVerseJr - Personalized Math, Science & Coding for Kids" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EduVerseJr - Personalized Math, Science & Coding for Kids Grades 5-10" />
        <meta name="twitter:description" content="Transform your child's future with expert-led Math, Science and Coding programs. Interactive 1-on-1 online classes for Grades 5-10." />
        <meta name="twitter:image" content="https://eduversejr.com/logo.jpg" />
      </Helmet>
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
      </div>
      <div id="coding-curriculum">
        <CodingCurriculumSection />
      </div>
      <div id="science-curriculum">
        <ScienceCurriculumSection />
      </div>
      <LearningStyleSection />
      <div id="reva-ai">
        <RevaAISection />
      </div>
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
