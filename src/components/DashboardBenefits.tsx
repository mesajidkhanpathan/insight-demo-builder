
import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const dashboardFeatures = [
  {
    title: "Real-time Financial Analytics",
    description: "Monitor financial health with real-time KPIs and customizable dashboards that integrate directly with your ERP.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800",
    benefits: [
      "Cash flow visualization",
      "Revenue trend analysis",
      "Expense breakdown by category",
      "Profit margin tracking"
    ],
  },
  {
    title: "Inventory Intelligence",
    description: "Optimize inventory levels with predictive analytics that forecast demand patterns and identify stocking opportunities.",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800",
    benefits: [
      "Stock level optimization",
      "Stockout prevention alerts",
      "Seasonal demand forecasting",
      "Dead stock identification"
    ],
  },
  {
    title: "Supply Chain Visibility",
    description: "Get complete visibility into your supply chain with interactive maps and performance metrics for every vendor.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800",
    benefits: [
      "Vendor performance scoring",
      "Delivery time tracking",
      "Order status visualization",
      "Cost comparison analytics"
    ],
  }
];

const DashboardBenefits = () => {
  return (
    <div className="section-padding bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Powerful Dashboards That
            <span className="gradient-text block mt-2">Drive Business Results</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Transform complex ERP data from Tally, Busy, SAP Business One, Align Books, ERPNext and more into intuitive visualizations that make decision-making simple.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {dashboardFeatures.map((feature, index) => (
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1 p-1">
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                      <p className="text-slate-600 mb-6">{feature.description}</p>
                      
                      <div className="space-y-3 mb-8">
                        {feature.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="mr-2 mt-1 bg-green-100 rounded-full p-1">
                              <Check className="h-3 w-3 text-green-600" />
                            </div>
                            <span className="text-slate-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      
                      <a href="#demo-section" className="text-accent font-semibold inline-flex items-center hover:underline">
                        See it in action <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                    <div className="relative h-full">
                      <div className="h-full">
                        <img 
                          src={feature.image} 
                          alt={feature.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-60"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 space-x-4">
            <CarouselPrevious className="relative static left-0 right-auto translate-y-0" />
            <CarouselNext className="relative static right-0 left-auto translate-y-0" />
          </div>
        </Carousel>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6">Works With All Major ERP Systems</h3>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {["Tally", "Busy", "SAP Business One", "Align Books", "ERPNext", "Microsoft Dynamics"].map((erp, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition-all duration-200">
                <span className="font-medium text-slate-800">{erp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBenefits;
