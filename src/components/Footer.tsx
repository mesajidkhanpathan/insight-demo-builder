
import React from "react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">InsightERP</h3>
            <p className="mb-4">
              Transforming ERP data into actionable business insights that drive growth and efficiency.
            </p>
            <div className="flex space-x-4">
              {["Twitter", "LinkedIn", "Facebook"].map((social, i) => (
                <a key={i} href="#" className="text-slate-400 hover:text-white transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              {["Features", "Integrations", "Pricing", "Demo", "API"].map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {["Documentation", "Blog", "Case Studies", "Webinars", "Support"].map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {["About Us", "Careers", "Partners", "Contact", "Legal"].map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            © 2025 InsightERP. All rights reserved.
          </p>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#" className="text-slate-500 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-slate-500 hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
