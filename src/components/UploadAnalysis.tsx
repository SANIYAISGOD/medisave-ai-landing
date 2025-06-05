
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, FileText, Sparkles, MapPin, Clock, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import MedicineAlternatives from "./MedicineAlternatives";
import JanAushadhiStores from "./JanAushadhiStores";

interface UploadAnalysisProps {
  isAuthenticated: boolean;
}

const UploadAnalysis = ({ isAuthenticated }: UploadAnalysisProps) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [showAlternatives, setShowAlternatives] = useState(false);
  const [showStores, setShowStores] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isAuthenticated) {
      toast({
        title: "Please log in",
        description: "You need to be logged in to analyze medical bills.",
        variant: "destructive",
      });
      return;
    }

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
          description: "Your medical bill has been analyzed. Check the detailed breakdown below.",
        });
      }, 4000);
    }
  };

  const mockAnalysis = {
    totalBill: "₹12,450",
    potentialSavings: "₹4,200",
    genericAlternatives: 5,
    eligibleSchemes: ["PMJAY", "CGHS", "State Health Insurance"],
    nearbyStores: 8,
    medicines: [
      { name: "Paracetamol 500mg", branded: "₹120", generic: "₹15", savings: "₹105" },
      { name: "Omeprazole 20mg", branded: "₹350", generic: "₹45", savings: "₹305" },
      { name: "Atorvastatin 10mg", branded: "₹280", generic: "₹35", savings: "₹245" }
    ]
  };

  return (
    <div className="space-y-6">
      <Card className="p-8 medical-card">
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              AI Medical Bill Analyzer
            </h3>
            <p className="text-gray-600">
              Upload your medical bill and get instant savings recommendations
            </p>
          </div>

          <div className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            isAuthenticated ? 'border-green-300 hover:border-green-500' : 'border-gray-300'
          }`}>
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={handleFileUpload}
              className="hidden"
              id="file-upload"
              disabled={!isAuthenticated}
            />
            <label htmlFor="file-upload" className={`cursor-pointer ${!isAuthenticated ? 'opacity-50' : ''}`}>
              <div className="space-y-4">
                {!uploadedFile ? (
                  <>
                    <Upload className={`w-12 h-12 mx-auto ${isAuthenticated ? 'text-green-500' : 'text-gray-400'}`} />
                    <div>
                      <p className="text-lg font-medium text-gray-700">
                        {isAuthenticated ? "Click to upload or drag and drop" : "Please log in to upload files"}
                      </p>
                      <p className="text-sm text-gray-500">
                        PNG, JPG, PDF up to 10MB
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
            <div className="text-center space-y-4 p-6 bg-blue-50 rounded-lg">
              <div className="flex items-center justify-center gap-3">
                <div className="animate-spin w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full"></div>
                <Sparkles className="w-6 h-6 text-green-600 animate-pulse" />
              </div>
              <div className="space-y-2">
                <p className="text-gray-700 font-medium">Analyzing your medical bill...</p>
                <p className="text-sm text-gray-600">Our AI is extracting text, identifying medicines, and finding savings opportunities</p>
              </div>
            </div>
          )}

          {analysisComplete && (
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Analysis Results
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">Total Bill:</span>
                    <span className="font-medium text-gray-800">{mockAnalysis.totalBill}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600">Potential Savings:</span>
                    <span className="font-medium text-green-600">{mockAnalysis.potentialSavings}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-600">Generic Options:</span>
                    <span className="font-medium text-blue-600">{mockAnalysis.genericAlternatives}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-500" />
                    <span className="text-gray-600">Nearby Stores:</span>
                    <span className="font-medium text-purple-600">{mockAnalysis.nearbyStores}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-600">Eligible Schemes:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {mockAnalysis.eligibleSchemes.map((scheme, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                        {scheme}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button 
                  onClick={() => setShowAlternatives(true)}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  View Medicine Alternatives
                </Button>
                <Button 
                  onClick={() => setShowStores(true)}
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Find Jan Aushadhi Stores
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card>

      {showAlternatives && (
        <MedicineAlternatives 
          medicines={mockAnalysis.medicines}
          onClose={() => setShowAlternatives(false)}
        />
      )}

      {showStores && (
        <JanAushadhiStores 
          onClose={() => setShowStores(false)}
        />
      )}
    </div>
  );
};

export default UploadAnalysis;
