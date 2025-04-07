
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, BarChart3, TrendingUp, Clock, Users } from "lucide-react";

const dataPoints = [
  "inventory levels",
  "financial metrics",
  "sales performance",
  "production efficiency",
  "supply chain data",
  "customer insights"
];

const statsData = [
  {
    icon: <TrendingUp className="h-8 w-8 text-accent" />,
    value: "+45%",
    label: "Decision-making speed",
    description: "Faster insights lead to quicker actions"
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-accent" />,
    value: "3.5x",
    label: "ROI for our customers",
    description: "Average return on investment"
  },
  {
    icon: <Clock className="h-8 w-8 text-accent" />,
    value: "92%",
    label: "User satisfaction rate",
    description: "Based on customer feedback"
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    value: "10k+",
    label: "Active users",
    description: "Across 500+ companies"
  }
];

const HeroSection = () => {
  const [currentDataPoint, setCurrentDataPoint] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const [visibleStats, setVisibleStats] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDataPoint((prev) => (prev + 1) % dataPoints.length);
    }, 3000);
    
    // Increment visible stats count gradually
    const statsTimer = setTimeout(() => {
      if (visibleStats < statsData.length) {
        setVisibleStats(prev => prev + 1);
      }
    }, 600);
    
    return () => {
      clearInterval(interval);
      clearTimeout(statsTimer);
    };
  }, [visibleStats]);

  const scrollToDemo = () => {
    const demoSection = document.getElementById("demo-section");
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Abstract data visualization graphics */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-24 pb-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              #1 Rated ERP Analytics Platform | Used by 500+ Companies
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6 animate-fade-in">
              Transform Your ERP Data Into 
              <div className="h-16 md:h-20">
                <span className="gradient-text block mt-2 transition-all duration-500">
                  {dataPoints[currentDataPoint]} insights
                </span>
              </div>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
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
                className="border-slate-300 text-slate-700 hover:bg-slate-100 group"
                onClick={() => setShowDialog(true)}
              >
                <PlayCircle className="mr-2 h-5 w-5 group-hover:text-accent transition-colors" />
                Watch Overview
              </Button>
            </div>
            
            {/* Key numbers highlighted in small cards */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {statsData.slice(0, visibleStats).map((stat, index) => (
                <div 
                  key={index}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-start gap-4 hover:border-accent/30 hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="mt-1">{stat.icon}</div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-sm font-medium text-slate-700">{stat.label}</div>
                    <div className="text-xs text-slate-500 mt-1">{stat.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative bg-white rounded-xl shadow-xl border border-slate-200 p-2 max-w-lg mx-auto hover:shadow-accent/20 hover:shadow-2xl transition-all duration-500">
              <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800" 
                  alt="ERP Data Visualization Dashboard" 
                  className="w-full rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-500"
                />
              </div>
              
              {/* Floating UI elements to make it look like an actual dashboard */}
              <div className="absolute top-10 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-slate-200 transform rotate-3 hover:rotate-0 transition-all duration-300">
                <div className="w-32 h-20">
                  <div className="h-2 w-20 bg-accent/70 rounded-full mb-2"></div>
                  <div className="h-2 w-16 bg-slate-300 rounded-full mb-2"></div>
                  <div className="h-2 w-24 bg-slate-300 rounded-full mb-2"></div>
                  <div className="h-8 w-full bg-slate-100 rounded-md"></div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-slate-200 transform -rotate-6 hover:rotate-0 transition-all duration-300">
                <div className="w-40 h-24">
                  <div className="flex items-center mb-2">
                    <div className="h-3 w-3 rounded-full bg-accent mr-2"></div>
                    <div className="h-2 w-20 bg-slate-300 rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="h-3 w-full bg-slate-200 rounded-full"></div>
                    <div className="h-3 w-full bg-slate-200 rounded-full"></div>
                    <div className="h-3 w-full bg-slate-200 rounded-full"></div>
                    <div className="h-3 w-full bg-slate-200 rounded-full"></div>
                  </div>
                  <div className="mt-2 h-10 w-full bg-gradient-to-r from-accent/50 to-purple-500/50 rounded-md"></div>
                </div>
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
      <div className="bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center group hover:-translate-y-1 transition-transform duration-300">
                <p className="text-3xl md:text-4xl font-bold text-slate-900 mb-1 group-hover:text-accent transition-colors">{stat.value}</p>
                <p className="text-slate-600">{stat.label}</p>
              </div>
            ))}
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
