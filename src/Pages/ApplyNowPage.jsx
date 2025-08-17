import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import LoanApplicationForm from '@/components/forms/LoanApplicationForm';
import PageTransition from '@/components/PageTransition';

const ApplyNowPage = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Apply for Loan Online - PhoenixStar Distribution Services Pvt. Ltd.</title>
        <meta name="description" content="Apply for home loan, personal loan, business loan online with PhoenixStar Distribution Services Pvt. Ltd. Quick approval, best rates, minimal documentation." />
        <meta property="og:title" content="Apply for Loan Online - PhoenixStar Distribution Services Pvt. Ltd." />
        <meta property="og:description" content="Start your loan application today with PhoenixStar Distribution Services Pvt. Ltd. for fast and reliable financial solutions." />
      </Helmet>

      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Apply for Loan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Get instant loan approval with our simple online application process
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="shadow-xl border-0">
              <CardHeader className="text-center bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-t-lg">
                <CardTitle className="text-3xl">Loan Application Form</CardTitle>
                <p className="text-green-100">Fill in your details for quick loan processing</p>
              </CardHeader>
              <CardContent className="p-8">
                <LoanApplicationForm />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Need Help with Your Application?</h2>
            <p className="mt-4 text-lg text-gray-600">Our experts are here to assist you</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-8 border-0 shadow-lg">
              <Phone className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Call Us</h3>
              <p className="text-slate-600 mb-4">Speak with our loan experts</p>
              <a href="tel:+918856963787" className="text-green-500 font-semibold text-lg">
                +91 8856963787
              </a>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <Mail className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Email Us</h3>
              <p className="text-slate-600 mb-4">Send us your queries</p>
              <a href="mailto:PhoenixStar3787@gmail.com" className="text-blue-500 font-semibold text-lg">
                PhoenixStar3787@gmail.com
              </a>
            </Card>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ApplyNowPage;