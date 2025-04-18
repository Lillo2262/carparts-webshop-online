
import { ShoppingCart, Wrench, Truck } from "lucide-react";
import { Button } from "./button";

export const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Quality Car Parts for Every Vehicle
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Find the perfect parts for your vehicle at competitive prices. Fast shipping nationwide.
        </p>
        <Button size="lg" className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white">
          Shop Now
        </Button>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="flex flex-col items-center">
            <div className="bg-purple-100 p-4 rounded-full mb-4">
              <Wrench className="w-8 h-8 text-[#8B5CF6]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Parts</h3>
            <p className="text-gray-600">Genuine and aftermarket parts for all makes and models</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-purple-100 p-4 rounded-full mb-4">
              <ShoppingCart className="w-8 h-8 text-[#8B5CF6]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
            <p className="text-gray-600">Competitive pricing on our entire inventory</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-purple-100 p-4 rounded-full mb-4">
              <Truck className="w-8 h-8 text-[#8B5CF6]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
            <p className="text-gray-600">Quick delivery to your doorstep</p>
          </div>
        </div>
      </div>
    </div>
  );
};
