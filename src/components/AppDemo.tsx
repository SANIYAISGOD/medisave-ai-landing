
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AppDemo = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            See MediSaver AI in Action
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Watch how our AI transforms complex medical bills into actionable savings opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Video/Image Placeholder */}
          <div className="relative">
            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium">Interactive Demo</p>
                  <p className="text-white/80">Click to see MediSaver AI analyze a sample bill</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Demo Features */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Real-time Analysis Features:</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-800 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Instant Bill Scanning</h4>
                    <p className="text-blue-100">OCR technology extracts all charges, medicines, and procedures in seconds</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-800 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Smart Cost Breakdown</h4>
                    <p className="text-blue-100">AI categorizes expenses and identifies overcharges or unnecessary items</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-800 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Savings Recommendations</h4>
                    <p className="text-blue-100">Get personalized suggestions for generic alternatives and government schemes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Try Interactive Demo
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Download Sample Report
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDemo;
