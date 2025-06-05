
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, FileText, Sparkles, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setIsAnalyzing(true);
      setAnalysisComplete(false);
      
      // Simulate AI analysis
      setTimeout(() => {
        setIsAnalyzing(false);
        setAnalysisComplete(true);
        toast({
          title: "Analysis Complete!",
          description: "Your medical bill has been analyzed. Check the breakdown below.",
        });
      }, 3000);
    }
  };

  const mockAnalysis = {
    totalBill: "₹12,450",
    potentialSavings: "₹4,200",
    genericAlternatives: 3,
    eligibleSchemes: ["PMJAY", "CGHS"]
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                AI-Powered Healthcare Savings
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Cut Your Medical Bills with{" "}
                <span className="bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">
                  AI
                </span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Upload a photo of your hospital bill or prescription and get instant AI-powered analysis 
                with cost breakdowns, generic medicine suggestions, and government scheme recommendations.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white border-0 group">
                Try It Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">₹50L+</div>
                <div className="text-sm text-blue-200">Total Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">10K+</div>
                <div className="text-sm text-blue-200">Bills Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300">95%</div>
                <div className="text-sm text-blue-200">Accuracy Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column - Upload Interface */}
          <div className="lg:pl-8">
            <Card className="p-8 bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    Upload Your Medical Bill
                  </h3>
                  <p className="text-gray-600">
                    Get instant AI analysis and savings recommendations
                  </p>
                </div>

                <div className="border-2 border-dashed border-blue-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="space-y-4">
                      {!uploadedFile ? (
                        <>
                          <Upload className="w-12 h-12 text-blue-500 mx-auto" />
                          <div>
                            <p className="text-lg font-medium text-gray-700">
                              Click to upload or drag and drop
                            </p>
                            <p className="text-sm text-gray-500">
                              PNG, JPG up to 10MB
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          <FileText className="w-12 h-12 text-green-500 mx-auto" />
                          <div>
                            <p className="text-lg font-medium text-gray-700">
                              {uploadedFile.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              File uploaded successfully
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </label>
                </div>

                {isAnalyzing && (
                  <div className="text-center space-y-4">
                    <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
                    <p className="text-gray-600">Analyzing your medical bill...</p>
                  </div>
                )}

                {analysisComplete && (
                  <div className="space-y-4 p-6 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800">Analysis Results:</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Total Bill:</span>
                        <span className="font-medium text-gray-800 ml-2">{mockAnalysis.totalBill}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Potential Savings:</span>
                        <span className="font-medium text-green-600 ml-2">{mockAnalysis.potentialSavings}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Generic Options:</span>
                        <span className="font-medium text-blue-600 ml-2">{mockAnalysis.genericAlternatives}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Eligible Schemes:</span>
                        <span className="font-medium text-purple-600 ml-2">{mockAnalysis.eligibleSchemes.join(", ")}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
