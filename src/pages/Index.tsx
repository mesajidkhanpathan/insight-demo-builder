
import React from "react";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import DemoForm from "@/components/DemoForm";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <HeroSection />
        <FeatureSection />
        <div id="demo-section" className="bg-slate-50 section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Ready to Transform Your Business Decisions?
              </h2>
              <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                Book a personalized demo with our experts and discover how InsightERP can help your business make smarter decisions faster.
              </p>
              <DemoForm />
            </div>
          </div>
        </div>
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
