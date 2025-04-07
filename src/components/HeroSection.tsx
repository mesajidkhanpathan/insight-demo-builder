
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToDemo = () => {
    const demoSection = document.getElementById("demo-section");
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
      {/* Abstract data visualization graphics */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-24 pb-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Turn Your ERP Data Into 
              <span className="gradient-text block mt-2">
                Actionable Decisions
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0">
              InsightERP transforms complex ERP data into clear, actionable visualizations that drive better business decisions, faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-8"
                onClick={scrollToDemo}
              >
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-slate-300 text-slate-200 hover:bg-slate-700"
              >
                Watch Overview
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative bg-slate-800 rounded-xl shadow-2xl border border-slate-700 p-2 max-w-lg mx-auto">
              <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800" 
                  alt="ERP Data Visualization Dashboard" 
                  className="w-full rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent rounded-full p-3 shadow-lg">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21H4.6C3.1 21 2 19.9 2 18.4V3" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 7L16 12L13 9L9 13" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 7H21V11" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats bar */}
      <div className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">+45%</p>
              <p className="text-slate-400">Decision-making speed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">3.5x</p>
              <p className="text-slate-400">ROI for our customers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">92%</p>
              <p className="text-slate-400">User satisfaction rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
