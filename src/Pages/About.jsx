import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, Users, Award, TrendingUp, CheckCircle, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '1000+', label: 'Happy Customers' },
    { number: '50+', label: 'Bank Partners' },
    { number: '99%', label: 'Approval Rate' },
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Trust & Transparency',
      description: 'We believe in complete transparency in all our dealings with clear terms and conditions.',
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Customer First',
      description: 'Our customers are at the heart of everything we do. Your success is our success.',
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: 'Excellence',
      description: 'We strive for excellence in service delivery and maintain the highest professional standards.',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      title: 'Innovation',
      description: 'We continuously innovate our processes to provide faster and better service to our clients.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About PhoenixStar Distribution Services - Leading Corporate DSA in Maharashtra</title>
        <meta name="description" content="Learn about PhoenixStar Distribution Services, a trusted Corporate DSA in Omerga, Dharashiv, Maharashtra. 5+ years experience, 1000+ happy customers, licensed financial services." />
        <meta name="keywords" content="about PhoenixStar, Corporate DSA Maharashtra, loan consultancy Omerga, financial services Dharashiv, licensed DSA" />
        <meta property="og:title" content="About PhoenixStar Distribution Services - Leading Corporate DSA in Maharashtra" />
        <meta property="og:description" content="Learn about PhoenixStar Distribution Services, a trusted Corporate DSA in Omerga, Dharashiv, Maharashtra. 5+ years experience, 1000+ happy customers, licensed financial services." />
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
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">About PhoenixStar</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Your trusted financial partner in Maharashtra, committed to guiding you to the right loan solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                PhoenixStar Distribution Services Pvt. Ltd. was founded with a simple mission: to make financial 
                services accessible and transparent for everyone in Maharashtra. Based in Omerga, Dharashiv, 
                we have been serving the financial needs of individuals and businesses across the region.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                As a licensed Corporate DSA (Direct Selling Agent), we bridge the gap between customers and 
                financial institutions, ensuring you get the best loan products at competitive rates with 
                minimal hassle.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-slate-700">RBI Registered Corporate DSA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-slate-700">RERA Registered for Real Estate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-slate-700">ISO Certified Processes</span>
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
                alt="PhoenixStar Distribution Services office building in Omerga Maharashtra"
               src="https://images.unsplash.com/photo-1631498539536-54cd61318e4d" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-slate-600">
              Numbers that speak for our commitment and success
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-green-500 mb-2">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Target className="w-10 h-10 text-blue-500 mr-4" />
                    <h3 className="text-3xl font-bold text-slate-900">Our Mission</h3>
                  </div>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    To democratize access to financial services by providing transparent, efficient, 
                    and customer-centric loan solutions. We aim to be the most trusted financial 
                    partner for individuals and businesses in Maharashtra, helping them achieve 
                    their dreams through the right financial products.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <TrendingUp className="w-10 h-10 text-green-500 mr-4" />
                    <h3 className="text-3xl font-bold text-slate-900">Our Vision</h3>
                  </div>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    To become Maharashtra's leading Corporate DSA, recognized for our integrity, 
                    innovation, and customer satisfaction. We envision a future where every 
                    individual and business has easy access to the financial resources they 
                    need to grow and prosper.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="card-hover h-full border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                    <p className="text-slate-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Expert Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Meet the professionals who make your financial dreams come true
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img  
                className="rounded-2xl shadow-xl w-full" 
                alt="PhoenixStar Distribution Services professional team in office"
               src="https://images.unsplash.com/photo-1493882552576-fce827c6161e" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Experienced Financial Consultants
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our team consists of certified financial advisors, loan specialists, and customer 
                service experts who bring years of experience in the financial services industry.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-slate-700">Certified Financial Advisors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-slate-700">Loan Processing Specialists</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-slate-700">Customer Relationship Managers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-slate-700">Legal & Compliance Experts</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;