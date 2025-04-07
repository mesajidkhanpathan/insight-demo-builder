
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const DemoForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    phoneNumber: "",
    companySize: "",
    currentERP: "",
    primaryChallenge: "",
    timeframe: "",
    additionalInfo: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success("Demo request submitted successfully! Our team will contact you shortly.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        jobTitle: "",
        phoneNumber: "",
        companySize: "",
        currentERP: "",
        primaryChallenge: "",
        timeframe: "",
        additionalInfo: ""
      });
    }, 1500);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border p-6 md:p-8">
      <h3 className="text-2xl font-bold mb-6">Book Your Personalized Demo</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name*</Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name*</Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Smith"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Work Email*</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@company.com"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number*</Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="+1 (555) 123-4567"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company">Company Name*</Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Acme Inc."
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="jobTitle">Job Title*</Label>
            <Input
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              placeholder="Director of Operations"
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="companySize">Company Size*</Label>
          <Select 
            value={formData.companySize} 
            onValueChange={(value) => handleSelectChange("companySize", value)}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select company size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-10">1-10 employees</SelectItem>
              <SelectItem value="11-50">11-50 employees</SelectItem>
              <SelectItem value="51-200">51-200 employees</SelectItem>
              <SelectItem value="201-500">201-500 employees</SelectItem>
              <SelectItem value="501-1000">501-1000 employees</SelectItem>
              <SelectItem value="1000+">1000+ employees</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="currentERP">Current ERP System*</Label>
          <Select 
            value={formData.currentERP} 
            onValueChange={(value) => handleSelectChange("currentERP", value)}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select your current ERP system" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="SAP">SAP</SelectItem>
              <SelectItem value="Oracle">Oracle</SelectItem>
              <SelectItem value="Microsoft Dynamics">Microsoft Dynamics</SelectItem>
              <SelectItem value="NetSuite">NetSuite</SelectItem>
              <SelectItem value="Sage">Sage</SelectItem>
              <SelectItem value="Infor">Infor</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
              <SelectItem value="None">We don't use an ERP system</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label>Primary Challenge with ERP Data*</Label>
          <RadioGroup 
            value={formData.primaryChallenge}
            onValueChange={(value) => handleSelectChange("primaryChallenge", value)}
            required
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="analysis" id="analysis" />
                <Label htmlFor="analysis" className="font-normal">Data analysis is too time-consuming</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="visualization" id="visualization" />
                <Label htmlFor="visualization" className="font-normal">Poor data visualization</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="access" id="access" />
                <Label htmlFor="access" className="font-normal">Limited data accessibility</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="accuracy" id="accuracy" />
                <Label htmlFor="accuracy" className="font-normal">Data accuracy concerns</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="integration" id="integration" />
                <Label htmlFor="integration" className="font-normal">Integration challenges</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="other" />
                <Label htmlFor="other" className="font-normal">Other</Label>
              </div>
            </div>
          </RadioGroup>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="timeframe">Implementation Timeframe*</Label>
          <Select 
            value={formData.timeframe} 
            onValueChange={(value) => handleSelectChange("timeframe", value)}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select your timeline" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="immediately">Immediately</SelectItem>
              <SelectItem value="1-3 months">1-3 months</SelectItem>
              <SelectItem value="3-6 months">3-6 months</SelectItem>
              <SelectItem value="6-12 months">6-12 months</SelectItem>
              <SelectItem value="just exploring">Just exploring options</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="additionalInfo">Additional Information (Optional)</Label>
          <Textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            placeholder="Tell us about your specific needs or questions"
            className="h-24"
          />
        </div>
        
        <Button type="submit" className="w-full bg-accent hover:bg-accent/90" size="lg" disabled={loading}>
          {loading ? "Submitting..." : "Book Your Demo"}
        </Button>
        
        <p className="text-sm text-slate-500 text-center">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </form>
    </div>
  );
};

export default DemoForm;
