import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ContactForm from '@/components/forms/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8 text-green-500" />,
      title: 'Our Location',
      details: ['Omerga, Dharashiv', 'Maharashtra, India'],
      action: null,
    },
    {
      icon: <Phone className="w-8 h-8 text-blue-500" />,
      title: 'Phone Number',
      details: ['+91 8856963787'],
      action: 'tel:+918856963787',
    },
    {
      icon: <Mail className="w-8 h-8 text-purple-500" />,
      title: 'Email Address',
      details: ['PhoenixStar3787@gmail.com'],
      action: 'mailto:PhoenixStar3787@gmail.com',
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: 'Business Hours',
      details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: 10:00 AM - 5:00 PM'],
      action: null,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact PhoenixStar Distribution Services - Loan Consultancy in Omerga, Maharashtra</title>
        <meta name="description" content="Contact PhoenixStar Distribution Services for loan consultation in Omerga, Dharashiv, Maharashtra. Call +91 8856963787 or email PhoenixStar3787@gmail.com for best loan rates." />
        <meta name="keywords" content="contact PhoenixStar, loan consultant Omerga, financial services contact Maharashtra, DSA contact Dharashiv" />
        <meta property="og:title" content="Contact PhoenixStar Distribution Services - Loan Consultancy in Omerga, Maharashtra" />
        <meta property="og:description" content="Contact PhoenixStar Distribution Services for loan consultation in Omerga, Dharashiv, Maharashtra. Call +91 8856963787 or email PhoenixStar3787@gmail.com for best loan rates." />
      </Helmet>

      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get in touch with our expert team for all your financial needs
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-slate-600">
              We're here to help you with all your financial needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="card-hover h-full border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      {info.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-slate-600">
                          {info.action ? (
                            <a href={info.action} className="hover:text-green-500 transition-colors">
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0 shadow-xl max-w-2xl mx-auto">
              <CardContent className="p-8">
                <MessageCircle className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Quick WhatsApp Support</h3>
                <p className="text-green-100 mb-6">
                  Get instant answers to your loan queries on WhatsApp
                </p>
                <a href="https://wa.me/918856963787" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-500">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-xl border-0">
                <CardHeader className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-t-lg">
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <p className="text-green-100">We'll get back to you within 24 hours</p>
                </CardHeader>
                <CardContent className="p-8">
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900">Our Location</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-64 bg-slate-200 rounded-b-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-green-500 mx-auto mb-4" />
                      <p className="text-slate-600">Interactive map will be available soon</p>
                      <p className="text-sm text-slate-500 mt-2">Omerga, Dharashiv, Maharashtra</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900">Office Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Monday - Friday</span>
                      <span className="font-semibold text-slate-900">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Saturday</span>
                      <span className="font-semibold text-slate-900">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Sunday</span>
                      <span className="font-semibold text-slate-900">10:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0 bg-gradient-to-r from-red-50 to-red-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Emergency Contact</h3>
                  <p className="text-slate-600 mb-4">
                    For urgent loan requirements outside business hours
                  </p>
                  <a href="tel:+918856963787" className="text-red-600 font-semibold text-lg">
                    +91 8856963787
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What documents are required for loan application?",
                answer: "Basic documents include PAN card, Aadhar card, income proof, bank statements, and property documents (for secured loans)."
              },
              {
                question: "How long does loan approval take?",
                answer: "Most loans are approved within 7-15 days, depending on the loan type and documentation completeness."
              },
              {
                question: "What are your service charges?",
                answer: "Our consultation is free. We earn commission from banks, so there are no charges to customers for our services."
              },
              {
                question: "Do you provide loans in rural areas?",
                answer: "Yes, we provide loan services across Maharashtra, including rural and semi-urban areas."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.question}</h3>
                    <p className="text-slate-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;