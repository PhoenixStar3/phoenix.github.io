import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-800 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">PhoenixStar Distribution Services</div>
                <div className="text-green-400 text-sm">Guiding You to the Right Loan</div>
              </div>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              Your trusted Corporate DSA partner in Maharashtra, specializing in home loans, personal loans, 
              business loans, and comprehensive financial services. Licensed and regulated financial services provider.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-green-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-green-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-green-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-green-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slate-300 hover:text-green-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-green-400 transition-colors">Our Services</Link></li>
              <li><Link to="/apply" className="text-slate-300 hover:text-green-400 transition-colors">Apply for Loan</Link></li>
              <li><Link to="/join-dsa" className="text-slate-300 hover:text-green-400 transition-colors">Join as DSA</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-green-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-green-400" />
                <span className="text-slate-300 text-sm">Omerga, Dharashiv, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-green-400" />
                <span className="text-slate-300 text-sm">+91 8856963787</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-green-400" />
                <span className="text-slate-300 text-sm">PhoenixStar3787@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 PhoenixStar Distribution Services Pvt. Ltd. All rights reserved. | 
            Licensed Corporate DSA | RERA Registered
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;