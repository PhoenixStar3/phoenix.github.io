import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, TrendingUp, CheckCircle, Star, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Home = () => {
  const services = [
    {
      title: 'Home Loans',
      description: 'Competitive rates for your dream home',
      icon: '🏠',
    },
    {
      title: 'Personal Loans',
      description: 'Quick approval for personal needs',
      icon: '💰',
    },
    {
      title: 'Business Loans',
      description: 'Fuel your business growth',
      icon: '🏢',
    },
    {
      title: 'Loan Against Property',
      description: 'Unlock your property value',
      icon: '🏘️',
    },
    {
      title: 'Credit Cards',
      description: 'Best credit card offers',
      icon: '💳',
    },
    {
      title: 'Insurance',
      description: 'Comprehensive protection plans',
      icon: '🛡️',
    },
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Trusted & Licensed',
      description: 'Registered Corporate DSA with all necessary certifications',
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Expert Team',
      description: 'Experienced professionals guiding you through every step',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      title: 'Best Rates',
      description: 'Competitive interest rates and flexible terms',
    },
  ];

  const testimonials = [
    {
      name: 'Rajesh Patil',
      location: 'Omerga',
      rating: 5,
      comment: 'Excellent service! Got my home loan approved within 15 days. Highly recommended!',
    },
    {
      name: 'Priya Sharma',
      location: 'Dharashiv',
      rating: 5,
      comment: 'Professional team and transparent process. Very satisfied with their service.',
    },
    {
      name: 'Amit Kumar',
      location: 'Maharashtra',
      rating: 5,
      comment: 'Best loan consultancy in the region. They helped me get the best rates.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>PhoenixStar Distribution Services Pvt. Ltd. - Best Loan Provider in Omerga, Maharashtra</title>
        <meta name="description" content="Leading Corporate DSA in Omerga, Dharashiv, Maharashtra. Get home loans, personal loans, business loans with best rates. Licensed loan consultancy services." />
        <meta name="keywords" content="loan in Omerga, Corporate DSA Maharashtra, home loan Dharashiv, personal loan Omerga, business loan Maharashtra, PhoenixStar Distribution Services" />
        <meta property="og:title" content="PhoenixStar Distribution Services Pvt. Ltd. - Best Loan Provider in Omerga, Maharashtra" />
        <meta property="og:description" content="Leading Corporate DSA in Omerga, Dharashiv, Maharashtra. Get home loans, personal loans, business loans with best rates. Licensed loan consultancy services." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-green-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Guiding You to the{' '}
                <span className="text-gradient">Right Loan</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Maharashtra's trusted Corporate DSA for all your financial needs. 
                Get the best loan rates with our expert guidance and personalized service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/apply">
                  <Button size="lg" className="btn-gradient text-white border-0 w-full sm:w-auto">
                    Apply for Loan
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href="https://wa.me/918856963787" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900 w-full sm:w-auto">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="floating-animation">
                <img  
                  className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto" 
                  alt="Professional loan consultation office in Omerga Maharashtra"
                 src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive financial solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="card-hover h-full border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="btn-gradient text-white border-0">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose PhoenixStar?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Your trusted partner for all financial solutions in Maharashtra
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Licensed Corporate DSA in Maharashtra
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-slate-700">RBI Registered & Compliant</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-slate-700">5+ Years of Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-slate-700">1000+ Happy Customers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-slate-700">Quick Loan Approval Process</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img  
                className="rounded-2xl shadow-xl w-full" 
                alt="Licensed Corporate DSA office in Omerga Dharashiv Maharashtra"
               src="https://images.unsplash.com/photo-1542884028-7528427f867d" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-slate-600">
              Trusted by customers across Maharashtra
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="card-hover h-full border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-600 mb-4 italic">"{testimonial.comment}"</p>
                    <div>
                      <p className="font-semibold text-slate-900">{testimonial.name}</p>
                      <p className="text-sm text-slate-500">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Your Loan Approved?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who got their loans approved through PhoenixStar Distribution Services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-500 w-full sm:w-auto">
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+918856963787">
                <Button size="lg" className="bg-white text-green-500 hover:bg-slate-100 w-full sm:w-auto">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;