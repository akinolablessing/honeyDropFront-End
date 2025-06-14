
import { GraduationCap, Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-yellow-400 rounded-full flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Honey Drop</h3>
            </div>
            <p className="text-blue-200 mb-4">
              Building excellent scholars with godly character across Africa.
            </p>
            <div className="flex items-center space-x-2 text-yellow-300">
              <Heart className="h-4 w-4" />
              <span className="text-sm">Made with love for African education</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#" className="hover:text-yellow-300 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors">Academic Programs</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors">Student Life</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors">Parent Portal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#" className="hover:text-yellow-300 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors">Payment Guide</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors">Technical Support</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-blue-200">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-yellow-300" />
                <span>ainacmarian06@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-300" />
                <span>+234 703 820 1974</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-yellow-300" />
                <span>Ilesa, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; 2025 Honey Drop. All rights reserved. Excellence in Learning, Godly in Character.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
