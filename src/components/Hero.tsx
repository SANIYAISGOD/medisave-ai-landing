
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, FileText, Sparkles, ArrowRight, Shield, Users, Activity } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AuthSection from "./AuthSection";
import UploadAnalysis from "./UploadAnalysis";

const Hero = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();

  const handleStartSaving = () => {
    if (!isAuthenticated) {
      toast({
        title: "Sign up required",
        description: "You need to sign up first to start analyzing your medical bills.",
        variant: "destructive",
      });
      return;
    }
    // If authenticated, scroll to upload section or handle accordingly
    document.querySelector('#upload-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 py-6 bg-white shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-800">MediSaver AI</span>
          </div>
          
          <AuthSection isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        </div>
      </nav>

      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 text-slate-800">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-6 py-3 text-sm font-medium text-blue-700">
                <Shield className="w-4 h-4" />
                Trusted by 50,000+ Patients
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-slate-900">
                Cut Your{" "}
                <span className="relative text-blue-600">
                  Medical Bills
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-200 rounded-full"></div>
                </span>
                {" "}with AI
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed">
                Upload your hospital bill or prescription and get instant AI-powered analysis 
                with cost breakdowns, generic alternatives, and government scheme eligibility.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={handleStartSaving}
                className="bg-blue-600 hover:bg-blue-700 text-white border-0 group text-lg px-8 py-4"
              >
                Start Saving Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600">₹2.5Cr+</div>
                <div className="text-sm text-slate-600 font-medium">Total Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600">50K+</div>
                <div className="text-sm text-slate-600 font-medium">Bills Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-slate-600 font-medium">Accuracy Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column - Upload Interface */}
          <div className="lg:pl-8" id="upload-section">
            <UploadAnalysis isAuthenticated={isAuthenticated} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
