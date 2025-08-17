import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Apply for Loan', path: '/apply-now' },
    { name: 'Join as DSA', path: '/join-dsa' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ];

  return (
    <footer className="bg-brand-blue text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img  className="h-10 w-auto" alt="PhoenixStar Logo" src="https://images.unsplash.com/photo-1649871766874-5692baf18a2a" />
              <span className="text-xl font-bold text-white">PhoenixStar</span>
            </Link>
            <p className="text-sm">Guiding You to the Right Loan.</p>
            <p className="text-sm">Your trusted partner in financial services, providing expert guidance for all your loan and insurance needs.</p>
          </div>

          <div>
            <p className="font-semibold text-white mb-4">Quick Links</p>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-brand-sky transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white mb-4">Contact Info</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-brand-sky" />
                <span>Omerga, Dharashiv, Maharashtra, India</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-brand-sky" />
                <a href="mailto:PhoenixStar3787@gmail.com" className="hover:text-brand-sky">
                  PhoenixStar3787@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-brand-sky" />
                <a href="tel:+918856963787" className="hover:text-brand-sky">
                  +91 8856963787
                </a>
              </li>
               <li className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-3 text-brand-sky" />
                <a href="https://wa.me/918856963787" target="_blank" rel="noopener noreferrer" className="hover:text-brand-sky">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white mb-4">Legal</p>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-brand-sky transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} PhoenixStar Distribution Services Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;