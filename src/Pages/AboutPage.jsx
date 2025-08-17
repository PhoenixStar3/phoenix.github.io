import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Lightbulb, HeartHandshake as Handshake, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PageTransition from '@/components/PageTransition';

const AboutPage = () => {
  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '1000+', label: 'Happy Customers' },
    { number: '50+', label: 'Bank Partners' },
    { number: '99%', label: 'Approval Rate' },
  ];

  const values = [
    { icon: Users, title: 'Customer Centric', description: 'We prioritize our clients\' needs and provide personalized solutions.' },
    { icon: Lightbulb, title: 'Innovation', description: 'Continuously seeking new ways to improve our services and processes.' },
    { icon: Handshake, title: 'Integrity', description: 'Operating with honesty and transparency in all our dealings.' },
    { icon: Award, title: 'Excellence', description: 'Committed to delivering the highest quality service and achieving outstanding results.' },
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>About PhoenixStar Distribution Services Pvt. Ltd.</title>
        <meta name="description" content="Learn about PhoenixStar Distribution Services Pvt. Ltd., a leading Corporate DSA in Omerga, Maharashtra. Our mission, vision, and values." />
        <meta property="og:title" content="About PhoenixStar Distribution Services Pvt. Ltd." />
        <meta property="og:description" content="Discover the story behind PhoenixStar Distribution Services Pvt. Ltd. and our commitment to financial excellence." />
      </Helmet>

      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            PhoenixStar Distribution Services Pvt. Ltd. - Guiding You to the Right Loan
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                PhoenixStar Distribution Services Pvt. Ltd. was founded with a vision to simplify the loan application process and provide transparent, reliable financial solutions to individuals and businesses across Maharashtra. Based in Omerga, Dharashiv, we have grown to become a trusted Corporate DSA, known for our commitment to customer satisfaction and ethical practices.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With years of experience in the financial sector, our team of experts is dedicated to understanding your unique needs and connecting you with the best loan products from our extensive network of banking partners.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img  
                className="rounded-lg shadow-xl w-full" 
                alt="PhoenixStar Distribution Services Pvt. Ltd. office building"
               src="https://images.unsplash.com/photo-1693471019113-d2837cc9a2cc" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Achievements</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Numbers that speak for our dedication and success.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="h-full shadow-lg border-0">
                  <CardContent className="p-6">
                    <div className="text-5xl font-bold text-green-500 mb-2">{stat.number}</div>
                    <p className="text-lg text-slate-700">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Card className="h-full shadow-lg border-0 bg-gradient-to-br from-blue-50 to-blue-100">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-slate-900">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To empower individuals and businesses by providing seamless access to financial resources, fostering growth and stability through expert guidance and a commitment to excellence.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Card className="h-full shadow-lg border-0 bg-gradient-to-br from-green-50 to-green-100">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-slate-900">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To be the most trusted and preferred Corporate DSA in Maharashtra, recognized for our integrity, innovative solutions, and unwavering dedication to our clients' financial well-being.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Core Values</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">The principles that guide our every action.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full shadow-lg border-0 text-center">
                  <CardContent className="p-6">
                    <value.icon className="h-12 w-12 text-sky-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default AboutPage;