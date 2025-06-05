
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, MapPin, Clock, Phone, Navigation, Star } from "lucide-react";
import { useState, useEffect } from "react";

interface JanAushadhiStoresProps {
  onClose: () => void;
}

const JanAushadhiStores = ({ onClose }: JanAushadhiStoresProps) => {
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const [locationPermission, setLocationPermission] = useState<string>('prompt');

  const mockStores = [
    {
      id: 1,
      name: "Jan Aushadhi Store - Central Hospital",
      address: "123 MG Road, Near Central Hospital, Bangalore",
      distance: "0.5 km",
      openTime: "8:00 AM - 10:00 PM",
      phone: "+91 98765 43210",
      rating: 4.5,
      availability: "In Stock"
    },
    {
      id: 2,
      name: "Jan Aushadhi Store - Medical College",
      address: "456 Hospital Road, Medical College Campus, Bangalore",
      distance: "1.2 km",
      openTime: "24/7",
      phone: "+91 98765 43211",
      rating: 4.7,
      availability: "In Stock"
    },
    {
      id: 3,
      name: "Jan Aushadhi Store - City Center",
      address: "789 Main Street, City Center Mall, Bangalore",
      distance: "2.1 km",
      openTime: "9:00 AM - 9:00 PM",
      phone: "+91 98765 43212",
      rating: 4.3,
      availability: "Limited Stock"
    }
  ];

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setLocationPermission('granted');
        },
        () => {
          setLocationPermission('denied');
        }
      );
    }
  }, []);

  const handleGetDirections = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/${encodedAddress}`, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-5xl max-h-[90vh] overflow-y-auto medical-card">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-green-600" />
                Nearby Jan Aushadhi Stores
              </h3>
              <p className="text-gray-600 mt-1">Find the nearest stores with generic medicines</p>
            </div>
            <Button variant="ghost" onClick={onClose} className="hover:bg-gray-100">
              <X className="w-5 h-5" />
            </Button>
          </div>

          {locationPermission === 'denied' && (
            <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800 text-sm">
                📍 Enable location services for more accurate results. Showing results for Bangalore.
              </p>
            </div>
          )}

          <div className="mb-6">
            <Input 
              placeholder="Search for a specific location..." 
              className="w-full"
            />
          </div>

          <div className="grid gap-4">
            {mockStores.map((store) => (
              <Card key={store.id} className="p-6 border border-green-100 hover:border-green-200 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">{store.name}</h4>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(store.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                          <span className="text-sm text-gray-600 ml-1">({store.rating})</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold text-green-600">{store.distance}</span>
                        <p className="text-xs text-gray-500">away</p>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{store.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{store.openTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>{store.phone}</span>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        store.availability === 'In Stock' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {store.availability}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 lg:flex-col lg:w-40">
                    <Button 
                      onClick={() => handleGetDirections(store.address)}
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Directions
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => window.open(`tel:${store.phone}`, '_self')}
                      className="border-green-600 text-green-600 hover:bg-green-50"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">📍 About Jan Aushadhi Stores</h4>
            <p className="text-blue-700 text-sm">
              Jan Aushadhi stores are government-run pharmacies that provide quality generic medicines 
              at affordable prices. They offer medicines at up to 90% lower cost than branded alternatives.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default JanAushadhiStores;
