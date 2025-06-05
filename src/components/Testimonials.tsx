
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Delhi",
      avatar: "PS",
      rating: 5,
      text: "MediSaver AI helped me save ₹8,000 on my father's cardiac surgery bill. The generic medicine suggestions alone saved us 60% on medications!",
      savings: "₹8,000"
    },
    {
      name: "Rajesh Kumar",
      location: "Mumbai",
      avatar: "RK",
      rating: 5,
      text: "I discovered I was eligible for PMJAY through their analysis. They guided me through the entire application process. Highly recommended!",
      savings: "₹2,50,000"
    },
    {
      name: "Dr. Anita Patel",
      location: "Ahmedabad",
      avatar: "AP",
      rating: 5,
      text: "As a healthcare professional, I'm impressed by their accuracy. I now recommend MediSaver AI to all my patients for transparent billing.",
      savings: "₹15,000"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from people who have saved thousands on their medical expenses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Savings Badge */}
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  <span>💰</span>
                  <span>Saved {testimonial.savings}</span>
                </div>

                {/* User Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-blue-100 text-blue-600 font-medium">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Join thousands of satisfied users saving on healthcare costs
          </p>
          <div className="flex justify-center items-center gap-8 text-sm text-gray-500">
            <span>⭐ 4.9/5 Rating</span>
            <span>📱 10,000+ Downloads</span>
            <span>💰 ₹50L+ Total Savings</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
