
import { Upload, Search, Download } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Bill",
      description: "Simply take a photo of your medical bill or prescription and upload it to our secure platform.",
      color: "blue"
    },
    {
      icon: Search,
      title: "AI Analysis",
      description: "Our advanced AI uses OCR and NLP to analyze your bill, identifying all charges and medications.",
      color: "green"
    },
    {
      icon: Download,
      title: "Get Savings Report",
      description: "Receive a detailed breakdown with generic alternatives, government schemes, and nearby Jan Aushadhi stores.",
      color: "purple"
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

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const colorClasses = {
              blue: "bg-blue-100 text-blue-600 border-blue-200",
              green: "bg-green-100 text-green-600 border-green-200",
              purple: "bg-purple-100 text-purple-600 border-purple-200"
            };

            return (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className={`w-20 h-20 mx-auto rounded-full border-4 ${colorClasses[step.color as keyof typeof colorClasses]} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-10 h-10" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">
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
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform translate-x-4"></div>
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
