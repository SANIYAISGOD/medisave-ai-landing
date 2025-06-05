
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How accurate is the AI analysis?",
      answer: "Our AI has a 95% accuracy rate in extracting and analyzing medical bill information. It uses advanced OCR and NLP technologies trained on thousands of medical documents."
    },
    {
      question: "Is my medical data secure?",
      answer: "Yes, absolutely. We use bank-grade encryption and comply with healthcare data protection standards. Your documents are processed securely and deleted after analysis."
    },
    {
      question: "Which government schemes do you support?",
      answer: "We support major schemes like PMJAY (Ayushman Bharat), CGHS, ESIC, Jan Aushadhi, and 50+ state-specific programs. We're constantly adding new schemes."
    },
    {
      question: "How much can I save on average?",
      answer: "Users typically save 30-70% on their medical expenses through our recommendations. This includes generic medicine alternatives, government scheme eligibility, and identifying billing errors."
    },
    {
      question: "Do you charge for the analysis?",
      answer: "Basic analysis is free for up to 3 bills per month. Premium plans offer unlimited analysis, detailed reports, and priority support starting at ₹99/month."
    },
    {
      question: "Can I use this for insurance claims?",
      answer: "Yes! Our detailed analysis reports can help you understand your bills better and ensure you're claiming all eligible expenses from your insurance provider."
    },
    {
      question: "What types of medical documents can I upload?",
      answer: "You can upload hospital bills, prescription slips, diagnostic reports, pharmacy receipts, and insurance documents. We support all major image formats (JPG, PNG, PDF)."
    },
    {
      question: "How do you find Jan Aushadhi stores?",
      answer: "Our database includes 9,000+ Jan Aushadhi stores across India. We use your location to find the nearest stores and check medicine availability in real-time."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about MediSaver AI and how it can help you save on healthcare costs
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex justify-center gap-4">
            <a href="mailto:support@medisaver.ai" className="text-blue-600 hover:text-blue-800 font-medium">
              📧 Email Support
            </a>
            <span className="text-gray-300">|</span>
            <a href="tel:+911234567890" className="text-blue-600 hover:text-blue-800 font-medium">
              📞 Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
