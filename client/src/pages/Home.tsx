import { useState } from "react";
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
import BeyondMathSection from "@/components/BeyondMathSection";
// Temporarily disabled - waiting for parent testimonials
// import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>EduVerseJr - Personalized Coding & Math Learning for Kids Ages 6-15</title>
        <meta
          name="description"
          content="EduVerseJr offers personalized coding and math programs for kids aged 6-15. Expert-led online learning with curriculum aligned to US, UK, Canada, Australia, Singapore, and UAE standards. Empower your child's future with fun, interactive STEM education."
        />
        <link rel="canonical" href="https://eduversejr.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="EduVerseJr - Personalized Coding & Math Learning for Kids Ages 6-15" />
        <meta property="og:description" content="Transform your child's future with expert-led coding and math programs. Interactive, fun, and curriculum-aligned learning for kids aged 6-15. Join thousands of young learners today!" />
        <meta property="og:url" content="https://eduversejr.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:title" content="EduVerseJr - Personalized Coding & Math Learning for Kids Ages 6-15" />
        <meta name="twitter:description" content="Transform your child's future with expert-led coding and math programs. Interactive, fun, and curriculum-aligned learning for kids aged 6-15." />
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
      <LearningStyleSection />
      {/* Testimonials section temporarily disabled - waiting for parent testimonials */}
      {/* <div id="testimonials">
        <TestimonialsSection />
      </div> */}
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
