import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const JoinNetwork = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Login Section */}
      <div className="max-w-md mx-auto pt-16 pb-8 px-4">
        {/* Back to Home */}
        <Link
          to="/"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-8">
            One simple solution for contractors and designers
          </h1>
        </div>

        <div className="space-y-6">
          <div>
            <Input 
              placeholder="Username or Email"
              className="w-full h-12 border-2 border-gray-300 rounded-lg bg-white text-gray-700"
            />
          </div>
          
          <div>
            <Input 
              type="password"
              placeholder="Password"
              className="w-full h-12 border-2 border-gray-300 rounded-lg bg-white text-gray-700"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="keep-signed" />
            <label htmlFor="keep-signed" className="text-sm text-gray-600">
              Keep me signed in
            </label>
          </div>

          <Button className="w-full h-12 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-lg">
            Sign In
          </Button>

          <div className="text-center mt-6">
            <p className="text-gray-600">
              Don't have an account yet?{" "}
              <Link to="/signup" className="text-yellow-400 underline font-semibold">
                Join Now.
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-gray-800 rounded-xl p-8 relative overflow-hidden">
          {/* Hard Hat Icon at top-right */}
          <div className="absolute -top-3 -right-2 z-20">
            <div className="bg-yellow-400 rounded-full p-3 shadow-lg">
              <img src="/icon.png" alt="Hard Hat Icon" className="w-8 h-8" />
            </div>
          </div>

          <div className="relative z-10">
            {/* Heading */}
            <h2 className="text-2xl font-bold text-white mb-6 leading-tight max-w-md">
              Subscribe to get information, latest news and other interesting offers
            </h2>
            
            {/* Email Input with Icon */}
            <div className="mb-4">
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Home className="w-5 h-5 text-gray-400" />
                </div>
                <div className="absolute left-10 top-1/2 transform -translate-y-1/2 w-px h-4 bg-gray-300"></div>
                <Input 
                  type="email"
                  placeholder="Your Email Address"
                  className="pl-12 bg-white border-gray-300 text-gray-700 placeholder-gray-400 h-12 rounded-lg"
                />
              </div>
            </div>

            {/* Subscribe Button */}
            <Button 
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 h-12 rounded-lg w-full sm:w-auto"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default JoinNetwork; 