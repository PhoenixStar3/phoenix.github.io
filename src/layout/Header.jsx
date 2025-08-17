import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Briefcase, Users, HeartHandshake as Handshake, Phone, Home } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About Us', path: '/about', icon: Users },
  { name: 'Services', path: '/services', icon: Briefcase },
  { name: 'Join as DSA', path: '/join-dsa', icon: Handshake },
  { name: 'Contact Us', path: '/contact', icon: Phone },
];

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const activeLinkStyle = {
    color: '#38bdf8',
    fontWeight: '600',
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <header className="bg-white dark:bg-slate-900/70 dark:backdrop-blur-lg shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img  className="h-10 w-auto" alt="PhoenixStar Distribution Services Pvt. Ltd. Logo" src="https://images.unsplash.com/photo-1662390925238-81258bbb471c" />
            <span className="text-xl font-bold text-slate-800 dark:text-white">
              PhoenixStar
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                className="text-gray-600 dark:text-gray-300 hover:text-sky-500 transition-colors duration-300 font-medium"
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="outline" className="border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild className="bg-green-500 hover:bg-green-600">
              <Link to="/apply">Apply Now</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button onClick={() => setIsOpen(!isOpen)} variant="ghost" size="icon">
              {isOpen ? <X className="h-6 w-6 text-slate-800 dark:text-white" /> : <Menu className="h-6 w-6 text-slate-800 dark:text-white" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="md:hidden bg-white dark:bg-slate-900 pb-4"
          >
            <nav className="flex flex-col items-center space-y-4 pt-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                  className="text-gray-600 dark:text-gray-300 hover:text-sky-500 transition-colors duration-300 font-medium text-lg"
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="flex flex-col space-y-4 w-full px-8 pt-4">
                 <Button asChild variant="outline" className="border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white w-full">
                    <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
                </Button>
                <Button asChild className="bg-green-500 hover:bg-green-600 w-full">
                    <Link to="/apply" onClick={() => setIsOpen(false)}>Apply Now</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;