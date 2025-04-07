
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

const dataPoints = [
  "inventory levels",
  "financial metrics",
  "sales performance",
  "production efficiency",
  "supply chain data",
  "customer insights"
];

const HeroSection = () => {
  const [currentDataPoint, setCurrentDataPoint] = useState(0);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDataPoint((prev) => (prev + 1) % dataPoints.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-24 pb-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
              Transform Your ERP Data Into 
              <div className="h-16 md:h-20">
                <span className="gradient-text block mt-2 transition-all duration-500">
                  {dataPoints[currentDataPoint]} insights
                </span>
              </div>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0">
              InsightERP connects directly to Tally, SAP, Busy, and other ERPs to deliver powerful visualizations that make complex data simple to understand and act on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 hover:scale-105 transition-transform duration-200"
                onClick={scrollToDemo}
              >
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-slate-300 text-slate-200 hover:bg-slate-700 group"
                onClick={() => setShowDialog(true)}
              >
                <PlayCircle className="mr-2 h-5 w-5 group-hover:text-accent transition-colors" />
                Watch Overview
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative bg-slate-800 rounded-xl shadow-2xl border border-slate-700 p-2 max-w-lg mx-auto hover:shadow-accent/20 hover:shadow-2xl transition-all duration-500">
              <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800" 
                  alt="ERP Data Visualization Dashboard" 
                  className="w-full rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent rounded-full p-3 shadow-lg animate-pulse">
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
            <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
              <p className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-accent transition-colors">+45%</p>
              <p className="text-slate-400">Decision-making speed</p>
            </div>
            <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
              <p className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-accent transition-colors">3.5x</p>
              <p className="text-slate-400">ROI for our customers</p>
            </div>
            <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
              <p className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-accent transition-colors">92%</p>
              <p className="text-slate-400">User satisfaction rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Simple video modal - in a real app you'd use a proper Dialog from shadcn/ui */}
      {showDialog && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setShowDialog(false)}>
          <div className="bg-white rounded-lg overflow-hidden max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-semibold">Product Overview</h3>
              <button onClick={() => setShowDialog(false)} className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="aspect-video bg-slate-100 flex items-center justify-center">
              <div className="text-center p-8">
                <PlayCircle className="h-16 w-16 text-accent mx-auto mb-4" />
                <p className="text-slate-700">[Video placeholder - In a real implementation this would be a video player]</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
