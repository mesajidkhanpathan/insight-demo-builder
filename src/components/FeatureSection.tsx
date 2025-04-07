
import React from "react";
import { ChartBar, ChartLine, ArrowRight, Calendar, User } from "lucide-react";

const features = [
  {
    icon: <ChartBar className="h-10 w-10 text-accent" />,
    title: "Interactive Dashboards",
    description: "Customizable dashboards that bring your most important KPIs to the forefront, enabling quick analysis and decision-making."
  },
  {
    icon: <ChartLine className="h-10 w-10 text-accent" />,
    title: "Real-time Analytics",
    description: "Live data processing gives you up-to-the-minute insights, ensuring decisions are made with the freshest information available."
  },
  {
    icon: <Calendar className="h-10 w-10 text-accent" />,
    title: "Predictive Forecasting",
    description: "AI-powered algorithms analyze historical data to predict future trends, helping you stay ahead of market changes."
  },
  {
    icon: <User className="h-10 w-10 text-accent" />,
    title: "Role-Based Access",
    description: "Tailor data visibility based on roles, ensuring team members have access to relevant insights without overwhelming them."
  }
];

const FeatureSection = () => {
  return (
    <div className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Turn Complex ERP Data Into
            <span className="gradient-text block mt-2">Simple Business Insights</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            InsightERP connects to your existing ERP system, transforms your data into actionable visualizations, and empowers your team to make confident decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-600 mb-4">{feature.description}</p>
              <a href="#" className="text-accent font-medium inline-flex items-center hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-8 border border-slate-100">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Seamless Integration With Your Existing ERP System</h3>
              <p className="text-slate-600 mb-6">
                We connect directly with SAP, Oracle, Microsoft Dynamics, and all major ERP platforms. No migration, no disruption — just instant insights.
              </p>
              <ul className="space-y-3">
                {["5-minute setup process", "No coding required", "Secure, encrypted connections", "Automatic updates"].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="h-5 w-5 rounded-full bg-green-100 text-green-600 inline-flex items-center justify-center mr-2">
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
              <div className="bg-white rounded-lg shadow-lg p-4 border border-slate-200">
                <div className="grid grid-cols-2 gap-4">
                  {["SAP", "Oracle", "MS Dynamics", "NetSuite", "Sage", "Infor"].map((erp, i) => (
                    <div key={i} className="border rounded p-3 text-center bg-white">
                      <p className="font-semibold text-slate-800">{erp}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center text-slate-500 text-sm">
                  + 20 more supported systems
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
