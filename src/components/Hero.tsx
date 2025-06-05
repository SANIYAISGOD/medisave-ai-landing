
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

  return (
    <section className="relative overflow-hidden medical-gradient min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-2xl font-bold text-white">MediSaver AI</span>
          </div>
          
          <AuthSection isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        </div>
      </nav>

      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 text-white">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-6 py-3 text-sm font-medium backdrop-blur-sm">
                <Shield className="w-4 h-4" />
                Trusted by 50,000+ Patients
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Cut Your{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">
                    Medical Bills
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-2 bg-green-400/30 rounded-full"></div>
                </span>
                {" "}with AI
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed font-light">
                Upload your hospital bill or prescription and get instant AI-powered analysis 
                with cost breakdowns, generic alternatives, and government scheme eligibility.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white border-0 group text-lg px-8 py-4">
                Start Saving Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-4">
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-green-300">₹2.5Cr+</div>
                <div className="text-sm text-blue-200 font-medium">Total Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-green-300">50K+</div>
                <div className="text-sm text-blue-200 font-medium">Bills Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-green-300">98%</div>
                <div className="text-sm text-blue-200 font-medium">Accuracy Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column - Upload Interface */}
          <div className="lg:pl-8">
            <UploadAnalysis isAuthenticated={isAuthenticated} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
