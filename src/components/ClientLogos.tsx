
import React from "react";

const clientData = [
  {
    name: "Tech Innovators Inc.",
    logo: "https://randomuser.me/api/portraits/men/1.jpg", // This would be replaced with actual logo
    industry: "Manufacturing"
  },
  {
    name: "Global Services Ltd.",
    logo: "https://randomuser.me/api/portraits/women/2.jpg",
    industry: "Retail"
  },
  {
    name: "Prime Solutions",
    logo: "https://randomuser.me/api/portraits/men/3.jpg",
    industry: "Healthcare"
  },
  {
    name: "Vertex Systems",
    logo: "https://randomuser.me/api/portraits/women/4.jpg",
    industry: "Finance"
  },
  {
    name: "Harbor Logistics",
    logo: "https://randomuser.me/api/portraits/men/5.jpg",
    industry: "Transportation"
  },
  {
    name: "NextGen Enterprises",
    logo: "https://randomuser.me/api/portraits/women/6.jpg",
    industry: "Technology"
  }
];

const ClientLogos = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Trusted by Leading Businesses</h2>
          <p className="text-gray-600">Join hundreds of companies making better decisions with InsightERP</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clientData.map((client, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-20 h-20 bg-slate-100 rounded-full overflow-hidden mb-3 flex items-center justify-center border border-slate-200 group-hover:border-accent/50 transition-all duration-300">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="text-sm font-medium text-slate-700 text-center group-hover:text-accent transition-colors duration-300">{client.name}</p>
              <p className="text-xs text-slate-500">{client.industry}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
