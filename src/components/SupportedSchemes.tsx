
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SupportedSchemes = () => {
  const schemes = [
    {
      name: "PMJAY (Ayushman Bharat)",
      coverage: "Up to ₹5 Lakhs",
      beneficiaries: "10+ Crore families",
      color: "blue"
    },
    {
      name: "CGHS",
      coverage: "Central Govt Employees",
      beneficiaries: "40+ Lakh beneficiaries",
      color: "green"
    },
    {
      name: "ESIC",
      coverage: "₹1-7 Lakhs",
      beneficiaries: "13+ Crore workers",
      color: "purple"
    },
    {
      name: "Jan Aushadhi",
      coverage: "Up to 90% savings",
      beneficiaries: "9000+ stores",
      color: "orange"
    },
    {
      name: "State Schemes",
      coverage: "Varies by state",
      beneficiaries: "50+ state programs",
      color: "red"
    },
    {
      name: "Corporate Insurance",
      coverage: "Company policies",
      beneficiaries: "Private sector",
      color: "indigo"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Supported Government Schemes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We help you identify and apply for various government healthcare schemes and insurance programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schemes.map((scheme, index) => {
            const colorClasses = {
              blue: "border-blue-200 hover:border-blue-400 bg-blue-50",
              green: "border-green-200 hover:border-green-400 bg-green-50",
              purple: "border-purple-200 hover:border-purple-400 bg-purple-50",
              orange: "border-orange-200 hover:border-orange-400 bg-orange-50",
              red: "border-red-200 hover:border-red-400 bg-red-50",
              indigo: "border-indigo-200 hover:border-indigo-400 bg-indigo-50"
            };

            return (
              <Card key={index} className={`p-6 border-2 transition-all duration-300 hover:shadow-lg ${colorClasses[scheme.color as keyof typeof colorClasses]}`}>
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {scheme.name}
                    </h3>
                    <Badge variant="secondary" className="text-xs">
                      Active
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Coverage:</span>
                      <span className="font-medium text-gray-800">{scheme.coverage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Reach:</span>
                      <span className="font-medium text-gray-800">{scheme.beneficiaries}</span>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Don't see your scheme? We're constantly adding new programs.
          </p>
          <a href="#contact" className="text-blue-600 hover:text-blue-800 font-medium">
            Contact us to add your scheme →
          </a>
        </div>
      </div>
    </section>
  );
};

export default SupportedSchemes;
