import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Page Not Found - PhoenixStar Distribution Services</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to PhoenixStar Distribution Services homepage for loan and financial services." />
      </Helmet>

      <section className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-9xl font-bold text-green-500 mb-8">404</div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Page Not Found</h1>
            <p className="text-xl text-slate-300 mb-8 max-w-lg mx-auto">
              Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/')}
                size="lg"
                className="btn-gradient text-white border-0"
              >
                <Home className="mr-2 w-5 h-5" />
                Go to Homepage
              </Button>
              
              <Button
                onClick={() => navigate(-1)}
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900"
              >
                <ArrowLeft className="mr-2 w-5 h-5" />
                Go Back
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NotFound;