
import React from "react";
import { ChartBar, ChartLine, ArrowRight, Calendar, User, LucideIcon, PieChart, Zap, Database, Shield } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <ChartBar className="h-10 w-10 text-accent" />,
    title: "Interactive Dashboards",
    description: "Customizable dashboards bring critical KPIs front and center. Drill down into data points with a single click for deeper insights."
  },
  {
    icon: <PieChart className="h-10 w-10 text-accent" />,
    title: "Real-time Analytics",
    description: "Live data processing gives you up-to-the-minute insights from your ERP, ensuring decisions are made with the freshest information."
  },
  {
    icon: <Zap className="h-10 w-10 text-accent" />,
    title: "Predictive Forecasting",
    description: "AI algorithms analyze your historical ERP data to predict future trends with remarkable accuracy, helping you stay ahead."
  },
  {
    icon: <User className="h-10 w-10 text-accent" />,
    title: "Role-Based Dashboards",
    description: "Tailored visualizations based on roles ensure team members see only the insights relevant to their decision-making needs."
  }
];

const integrationFeatures = [
  "5-minute setup with no coding required",
  "Secure, encrypted connections to your ERP",
  "Automatic updates when your ERP data changes",
  "No disruption to existing workflows",
  "Custom field mapping for specialized needs",
  "Historical data import and analysis"
];

const FeatureSection = () => {
  return (
    <div className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Complex ERP Data Into
            <span className="gradient-text block mt-2">Actionable Business Insights</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            InsightERP connects directly to your existing ERP system, whether it's Tally, Busy, SAP Business One, or ERPNext, transforming your raw data into visual insights that drive better decision-making.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card group hover:border-accent/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">{feature.title}</h3>
              <p className="text-slate-600 mb-4">{feature.description}</p>
              <a href="#" className="text-accent font-medium inline-flex items-center group-hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-8 border border-slate-100 hover:shadow-lg transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Seamless Integration With Your Existing ERP System</h3>
              <p className="text-slate-600 mb-6">
                We connect directly with Tally, Busy, SAP Business One, Align Books, ERPNext and all major ERP platforms. No migration, no disruption — just instant insights.
              </p>
              <ul className="space-y-3">
                {integrationFeatures.map((item, i) => (
                  <li key={i} className="flex items-center group">
                    <span className="h-5 w-5 rounded-full bg-green-100 text-green-600 inline-flex items-center justify-center mr-2 group-hover:bg-green-200 transition-colors">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-lg shadow-lg p-4 border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-2 gap-4">
                  {["SAP Business One", "Tally", "MS Dynamics", "ERPNext", "Busy", "Align Books"].map((erp, i) => (
                    <div 
                      key={i} 
                      className="border rounded p-3 text-center bg-white hover:border-accent hover:shadow-sm transition-all duration-200"
                    >
                      <p className="font-semibold text-slate-800">{erp}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center text-slate-500 text-sm">
                  + 20 more supported ERP systems
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
