
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "InsightERP transformed how we analyze our supply chain data. What used to take days now takes minutes, and our decision-making speed has improved by 60%.",
    author: "Sarah Johnson",
    position: "COO, Globex Manufacturing",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    quote: "The visualizations are incredible—our executive team finally understands our financial data without needing an interpreter. We've achieved cost savings of 22% in just six months.",
    author: "Michael Chen",
    position: "CFO, NexTech Solutions",
    image: "https://randomuser.me/api/portraits/men/54.jpg"
  },
  {
    quote: "As a retailer with complex inventory challenges, InsightERP has been a game-changer. The predictive analytics have reduced our stockouts by 35% while improving cash flow.",
    author: "David Rodriguez",
    position: "VP of Operations, RetailMax",
    image: "https://randomuser.me/api/portraits/men/29.jpg"
  }
];

const TestimonialSection = () => {
  return (
    <div className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by Leading Companies
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            See how businesses across industries are transforming their decision-making with InsightERP.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-slate-200">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                
                <p className="text-slate-600 italic">"{testimonial.quote}"</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-slate-500">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-12 opacity-70">
          {["Company A", "Company B", "Company C", "Company D", "Company E", "Company F"].map((company, i) => (
            <div key={i} className="text-slate-400 font-semibold text-xl">
              {company}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
