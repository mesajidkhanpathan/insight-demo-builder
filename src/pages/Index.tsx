
import React from "react";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import DashboardBenefits from "@/components/DashboardBenefits";
import DemoForm from "@/components/DemoForm";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";
import ClientLogos from "@/components/ClientLogos";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <HeroSection />
        <ClientLogos />
        <FeatureSection />
        <DashboardBenefits />
        <div id="demo-section" className="bg-slate-50 section-padding">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Ready to Transform Your Business Decisions?
              </h2>
              <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
                Book a personalized demo with our experts and discover how InsightERP can help your business unlock the full potential of your ERP data.
              </p>
              
              <div className="mb-12 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/DuuO7glrz1E" 
                    title="InsightERP Demo Video" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
              
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
