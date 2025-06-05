
import { Eye, Brain, MapPin, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const KeyFeatures = () => {
  const features = [
    {
      icon: Eye,
      title: "Advanced OCR Technology",
      description: "Our cutting-edge Optical Character Recognition accurately extracts text from any medical document, even handwritten prescriptions.",
      color: "blue"
    },
    {
      icon: Brain,
      title: "Natural Language Processing",
      description: "AI-powered NLP understands medical terminology and context to provide accurate analysis and recommendations.",
      color: "green"
    },
    {
      icon: Shield,
      title: "Government Scheme Matcher",
      description: "Automatically matches your profile with eligible schemes like PMJAY, CGHS, ESIC, and state-specific programs.",
      color: "blue"
    },
    {
      icon: MapPin,
      title: "Jan Aushadhi Locator",
      description: "Find the nearest Jan Aushadhi stores with generic medicines at up to 90% lower costs than branded alternatives.",
      color: "green"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Powerful AI Features
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Advanced technology working behind the scenes to maximize your healthcare savings
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClasses = {
              blue: "bg-blue-600",
              green: "bg-emerald-600"
            };

            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 group border border-slate-200 bg-white hover:-translate-y-1">
                <div className={`w-16 h-16 ${colorClasses[feature.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
