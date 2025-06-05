
import { Eye, Brain, MapPin, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const KeyFeatures = () => {
  const features = [
    {
      icon: Eye,
      title: "Advanced OCR Technology",
      description: "Our cutting-edge Optical Character Recognition accurately extracts text from any medical document, even handwritten prescriptions.",
      color: "green"
    },
    {
      icon: Brain,
      title: "Natural Language Processing",
      description: "AI-powered NLP understands medical terminology and context to provide accurate analysis and recommendations.",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Government Scheme Matcher",
      description: "Automatically matches your profile with eligible schemes like PMJAY, CGHS, ESIC, and state-specific programs.",
      color: "emerald"
    },
    {
      icon: MapPin,
      title: "Jan Aushadhi Locator",
      description: "Find the nearest Jan Aushadhi stores with generic medicines at up to 90% lower costs than branded alternatives.",
      color: "teal"
    }
  ];

  return (
    <section className="py-20 medical-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Powerful AI Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Advanced technology working behind the scenes to maximize your healthcare savings
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClasses = {
              green: "from-green-500 to-green-600",
              blue: "from-blue-500 to-blue-600",
              emerald: "from-emerald-500 to-emerald-600",
              teal: "from-teal-500 to-teal-600"
            };

            return (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 group border-0 medical-card hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-br ${colorClasses[feature.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
