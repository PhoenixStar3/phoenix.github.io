import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Home, User, Briefcase, Building, CreditCard, ShieldCheck } from 'lucide-react';

const services = [
  { name: 'Home Loan', icon: Home, description: 'Affordable and flexible home loans to help you buy your dream home.' },
  { name: 'Personal Loan', icon: User, description: 'Quick and easy personal loans to meet your immediate financial needs.' },
  { name: 'Business Loan', icon: Briefcase, description: 'Tailored business loans to fuel your company\'s growth and expansion.' },
  { name: 'Loan Against Property', icon: Building, description: 'Unlock the value of your property with our loan against property options.' },
  { name: 'Credit Card', icon: CreditCard, description: 'Get the best credit cards with exciting rewards and benefits.' },
  { name: 'Insurance', icon: ShieldCheck, description: 'Secure your future with our comprehensive range of insurance products.' },
];

const whyChooseUs = [
  { title: 'Expert Guidance', description: 'Our team of experts provides personalized advice to find the best loan for you.' },
  { title: 'Wide Range of Products', description: 'We offer a diverse portfolio of financial products from leading banks and NBFCs.' },
  { title: 'Quick Processing', description: 'We ensure a hassle-free and fast application process for all our services.' },
  { title: 'Transparent Process', description: 'No hidden charges. We believe in complete transparency with our customers.' },
];

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>PhoenixStar Distribution Services Pvt. Ltd. | Guiding You to the Right Loan</title>
        <meta name="description" content="PhoenixStar Distribution Services Pvt. Ltd. in Omerga, Maharashtra. We are a corporate DSA offering Home Loans, Personal Loans, Business Loans, and more. Apply for a loan in Omerga today." />
        <meta property="og:title" content="PhoenixStar Distribution Services Pvt. Ltd. | Guiding You to the Right Loan" />
        <meta property="og:description" content="Your trusted partner for loans and financial services in Maharashtra. Get expert guidance on home, personal, and business loans." />
      </Helmet>

      <div className="relative text-white overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <img  className="w-full h-full object-cover opacity-20" alt="Abstract background of financial charts and graphs" src="https://images.unsplash.com/photo-1500401519266-0b71b29a05e0" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            PhoenixStar Distribution Services Pvt. Ltd.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-xl md:text-2xl text-sky-400 font-semibold"
          >
            Guiding You to the Right Loan
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
              <Link to="/apply">Apply for a Loan <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900">
              <Link to="/services">Our Services</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-slate-100 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">We offer a comprehensive range of financial products to meet your needs.</p>
          </div>
          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 dark:bg-slate-800">
                  <CardHeader>
                    <div className="mx-auto bg-sky-500/10 p-4 rounded-full w-fit">
                      <service.icon className="h-8 w-8 text-sky-500" />
                    </div>
                    <CardTitle className="mt-4 text-slate-900 dark:text-white">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Why Choose PhoenixStar?</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Your success is our priority. We are committed to finding the best financial solutions for you.</p>
          </div>
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold">Become a Direct Selling Agent (DSA)</h2>
              <p className="mt-2 text-lg text-gray-300 max-w-2xl">Join our network of successful DSAs and build a rewarding career in finance.</p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-slate-900 font-bold">
                <Link to="/join-dsa">Join Our Team <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;