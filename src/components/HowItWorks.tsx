
import { Upload, Search, Download } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Bill",
      description: "Simply take a photo of your medical bill or prescription and upload it to our secure platform.",
      color: "green"
    },
    {
      icon: Search,
      title: "AI Analysis",
      description: "Our advanced AI uses OCR and NLP to analyze your bill, identifying all charges and medications.",
      color: "blue"
    },
    {
      icon: Download,
      title: "Get Savings Report",
      description: "Receive a detailed breakdown with generic alternatives, government schemes, and nearby Jan Aushadhi stores.",
      color: "emerald"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in just 3 simple steps and start saving on your medical expenses today
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const colorClasses = {
              green: "from-green-500 to-green-600 shadow-green-200",
              blue: "from-blue-500 to-blue-600 shadow-blue-200",
              emerald: "from-emerald-500 to-emerald-600 shadow-emerald-200"
            };

            return (
              <div key={index} className="text-center group relative">
                <div className="relative mb-8">
                  <div className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${colorClasses[step.color as keyof typeof colorClasses]} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-1 bg-gradient-to-r from-green-300 via-blue-300 to-emerald-300 transform translate-x-4 rounded-full"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
