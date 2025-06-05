
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Pill, TrendingDown, CheckCircle } from "lucide-react";

interface Medicine {
  name: string;
  branded: string;
  generic: string;
  savings: string;
}

interface MedicineAlternativesProps {
  medicines: Medicine[];
  onClose: () => void;
}

const MedicineAlternatives = ({ medicines, onClose }: MedicineAlternativesProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto medical-card">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                <Pill className="w-6 h-6 text-green-600" />
                Generic Medicine Alternatives
              </h3>
              <p className="text-gray-600 mt-1">Save up to 90% with these generic alternatives</p>
            </div>
            <Button variant="ghost" onClick={onClose} className="hover:bg-gray-100">
              <X className="w-5 h-5" />
            </Button>
          </div>

          <div className="space-y-4">
            {medicines.map((medicine, index) => (
              <Card key={index} className="p-6 border border-green-100 hover:border-green-200 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{medicine.name}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-red-50 rounded-lg">
                        <p className="text-sm text-gray-600">Branded Price</p>
                        <p className="text-xl font-bold text-red-600">{medicine.branded}</p>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <p className="text-sm text-gray-600">Generic Price</p>
                        <p className="text-xl font-bold text-green-600">{medicine.generic}</p>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-gray-600">You Save</p>
                        <p className="text-xl font-bold text-blue-600">{medicine.savings}</p>
                      </div>
                    </div>
                  </div>
                  <div className="ml-6 flex flex-col items-center gap-2">
                    <TrendingDown className="w-8 h-8 text-green-500" />
                    <span className="text-sm font-medium text-green-600">87% Off</span>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Same composition</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">FDA approved</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Available at Jan Aushadhi</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">💡 Pro Tip</h4>
            <p className="text-green-700 text-sm">
              Generic medicines contain the same active ingredients as branded ones but cost significantly less. 
              Always consult your doctor before switching medications.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MedicineAlternatives;
