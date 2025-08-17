import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, User, Building, MapPin, CreditCard, Shield, Percent, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <Home className="w-12 h-12 text-blue-500" />,
      title: 'Home Loans',
      description: 'Make your dream home a reality with our competitive home loan rates',
      features: ['Up to 90% financing', 'Flexible tenure up to 30 years', 'Quick approval in 7-15 days', 'Minimal documentation'],
      rates: 'Starting from 8.5% p.a.',
      color: 'from-blue-50 to-blue-100',
    },
    {
      icon: <User className="w-12 h-12 text-green-500" />,
      title: 'Personal Loans',
      description: 'Instant personal loans for all your immediate financial needs',
      features: ['No collateral required', 'Loan up to ₹40 lakhs', 'Same day approval', 'Flexible repayment options'],
      rates: 'Starting from 10.5% p.a.',
      color: 'from-green-50 to-green-100',
    },
    {
      icon: <Building className="w-12 h-12 text-purple-500" />,
      title: 'Business Loans',
      description: 'Fuel your business growth with our tailored business financing solutions',
      features: ['Working capital loans', 'Equipment financing', 'Business expansion loans', 'MSME loans'],
      rates: 'Starting from 9.5% p.a.',
      color: 'from-purple-50 to-purple-100',
    },
    {
      icon: <MapPin className="w-12 h-12 text-orange-500" />,
      title: 'Loan Against Property',
      description: 'Unlock the value of your property for various financial needs',
      features: ['High loan amount', 'Lower interest rates', 'Flexible end-use', 'Quick processing'],
      rates: 'Starting from 8.75% p.a.',
      color: 'from-orange-50 to-orange-100',
    },
    {
      icon: <CreditCard className="w-12 h-12 text-red-500" />,
      title: 'Credit Cards',
      description: 'Choose from a wide range of credit cards with attractive benefits',
      features: ['Lifetime free cards', 'Reward points', 'Cashback offers', 'Travel benefits'],
      rates: 'Zero annual fee options',
      color: 'from-red-50 to-red-100',
    },
    {
      icon: <Shield className="w-12 h-12 text-indigo-500" />,
      title: 'Insurance',
      description: 'Comprehensive insurance solutions for complete financial protection',
      features: ['Life insurance', 'Health insurance', 'Motor insurance', 'Property insurance'],
      rates: 'Competitive premiums',
      color: 'from-indigo-50 to-indigo-100',
    },
  ];

  const benefits = [
    {
      icon: <Percent className="w-8 h-8 text-green-500" />,
      title: 'Best Interest Rates',
      description: 'We negotiate the best rates with our partner banks',
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: 'Quick Processing',
      description: 'Fast approval and disbursal process',
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-purple-500" />,
      title: 'High Approval Rate',
      description: '99% loan approval rate with our expertise',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Financial Services - Home Loans, Personal Loans, Business Loans in Omerga, Maharashtra</title>
        <meta name="description" content="Complete financial services by PhoenixStar Distribution Services in Omerga, Maharashtra. Home loans, personal loans, business loans, credit cards, insurance with best rates." />
        <meta name="keywords" content="home loan Omerga, personal loan Maharashtra, business loan Dharashiv, credit card services, insurance Omerga, loan against property" />
        <meta property="og:title" content="Financial Services - Home Loans, Personal Loans, Business Loans in Omerga, Maharashtra" />
        <meta property="og:description" content="Complete financial services by PhoenixStar Distribution Services in Omerga, Maharashtra. Home loans, personal loans, business loans, credit cards, insurance with best rates." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive financial solutions tailored to meet all your personal and business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`card-hover h-full border-0 shadow-lg bg-gradient-to-br ${service.color}`}>
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl text-slate-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-slate-600 mb-6 text-center">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-3 mb-4">
                        <span className="text-lg font-semibold text-green-600">{service.rates}</span>
                      </div>
                      <Link to="/apply">
                        <Button className="w-full btn-gradient text-white border-0">
                          Apply Now
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-slate-600">
              Experience the PhoenixStar advantage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
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
                50+ Partner Banks & NBFCs
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We have partnerships with leading banks and financial institutions across India, 
                ensuring you get access to the best loan products and interest rates in the market.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-slate-700">SBI, HDFC, ICICI, Axis Bank</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-slate-700">Bajaj Finserv, Tata Capital</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-slate-700">LIC Housing Finance, PNB Housing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-slate-700">And many more leading institutions</span>
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
                alt="Bank partnership network PhoenixStar Distribution Services"
               src="https://images.unsplash.com/photo-1496115965489-21be7e6e59a0" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Simple Loan Process</h2>
            <p className="text-xl text-slate-600">
              Get your loan approved in just 4 easy steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Apply Online', description: 'Fill our simple application form' },
              { step: '02', title: 'Document Verification', description: 'Submit required documents' },
              { step: '03', title: 'Approval', description: 'Get instant approval notification' },
              { step: '04', title: 'Disbursal', description: 'Receive funds in your account' },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{process.title}</h3>
                <p className="text-slate-600">{process.description}</p>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Apply for a Loan?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Choose from our wide range of financial products and get the best rates in Maharashtra
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-500 w-full sm:w-auto">
                  Apply for Loan
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" className="bg-white text-green-500 hover:bg-slate-100 w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;