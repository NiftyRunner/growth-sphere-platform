
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-workbridge-blue font-bold text-2xl">Work<span className="text-workbridge-green">Bridge</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-800 hover:text-workbridge-blue font-medium">Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-workbridge-blue font-medium">About</Link>
            <Link to="/services" className="text-gray-800 hover:text-workbridge-blue font-medium">Services</Link>
            <Link to="/contact" className="text-gray-800 hover:text-workbridge-blue font-medium">Contact</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="border-workbridge-blue text-workbridge-blue hover:bg-workbridge-blue hover:text-white">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-workbridge-blue text-white hover:bg-blue-600">
                Register
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} className="text-gray-800">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link to="/" className="block text-gray-800 hover:text-workbridge-blue font-medium py-2">Home</Link>
            <Link to="/about" className="block text-gray-800 hover:text-workbridge-blue font-medium py-2">About</Link>
            <Link to="/services" className="block text-gray-800 hover:text-workbridge-blue font-medium py-2">Services</Link>
            <Link to="/contact" className="block text-gray-800 hover:text-workbridge-blue font-medium py-2">Contact</Link>
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <Link to="/login">
                <Button variant="outline" className="w-full border-workbridge-blue text-workbridge-blue hover:bg-workbridge-blue hover:text-white">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button className="w-full bg-workbridge-blue text-white hover:bg-blue-600">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
