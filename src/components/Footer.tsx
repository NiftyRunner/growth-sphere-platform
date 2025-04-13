
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">WorkBridge</h3>
            <p className="text-gray-400 mb-4">
              Connecting talent with opportunity and promoting decent work for economic growth.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-400 hover:text-white" target="_blank" rel="noreferrer">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white" target="_blank" rel="noreferrer">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services#internships" className="text-gray-400 hover:text-white">Internships</Link></li>
              <li><Link to="/services#apprenticeships" className="text-gray-400 hover:text-white">Apprenticeships</Link></li>
              <li><Link to="/services#freelancing" className="text-gray-400 hover:text-white">Freelancing</Link></li>
              <li><Link to="/services#training" className="text-gray-400 hover:text-white">Training Programs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <p>1234 Career Street, Employment City, EC 56789</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="flex-shrink-0" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="flex-shrink-0" />
                <p>info@workbridge.example</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} WorkBridge. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Supporting Sustainable Development Goal 8: Decent Work and Economic Growth
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
