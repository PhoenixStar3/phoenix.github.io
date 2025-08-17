import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, LogIn, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';

const Login = () => {
  const [isLogin, setIsLogin] = React.useState(true);
  const [showPassword, setShowPassword] = React.useState(false);
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    role: 'DSA',
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate authentication
    setTimeout(() => {
      if (isLogin) {
        // Login logic
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.email === formData.email && u.password === formData.password);
        
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          toast({
            title: "Login Successful!",
            description: `Welcome back, ${user.name}!`,
          });
          navigate('/dashboard');
        } else {
          toast({
            title: "Login Failed",
            description: "Invalid email or password. Please try again.",
            variant: "destructive",
          });
        }
      } else {
        // Register logic
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const existingUser = users.find(u => u.email === formData.email);
        
        if (existingUser) {
          toast({
            title: "Registration Failed",
            description: "User with this email already exists.",
            variant: "destructive",
          });
          setFormData(prev => ({ ...prev, password: '' })); // Clear password on failed registration
        } else {
          const newUser = {
            id: Date.now(),
            name: formData.name,
            email: formData.email,
            password: formData.password,
            phone: formData.phone,
            role: formData.role,
            createdAt: new Date().toISOString(),
          };
          
          users.push(newUser);
          localStorage.setItem('users', JSON.stringify(users));
          localStorage.setItem('currentUser', JSON.stringify(newUser));
          
          toast({
            title: "Registration Successful!",
            description: `Welcome to PhoenixStar, ${newUser.name}!`,
          });
          navigate('/dashboard');
        }
      }
      
      setIsSubmitting(false);
    }, 2000);
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: '',
      password: '',
      name: '',
      phone: '',
      role: 'DSA',
    });
  };

  return (
    <>
      <Helmet>
        <title>{isLogin ? 'Login' : 'Register'} - PhoenixStar Distribution Services Pvt. Ltd. DSA Portal</title>
        <meta name="description" content={`${isLogin ? 'Login to' : 'Register for'} PhoenixStar Distribution Services Pvt. Ltd. DSA portal. Access your dashboard, manage loan applications and track commissions.`} />
        <meta name="keywords" content="DSA login, loan portal, PhoenixStar login, financial services portal, DSA dashboard" />
        <meta property="og:title" content={`${isLogin ? 'Login' : 'Register'} - PhoenixStar Distribution Services Pvt. Ltd. DSA Portal`} />
        <meta property="og:description" content={`${isLogin ? 'Login to' : 'Register for'} PhoenixStar Distribution Services Pvt. Ltd. DSA portal. Access your dashboard, manage loan applications and track commissions.`} />
      </Helmet>

      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-green-900 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <img  className="h-12 w-auto" alt="PhoenixStar Distribution Services Pvt. Ltd. Logo" src="https://images.unsplash.com/photo-1662390925238-81258bbb471c" />
                <div>
                  <div className="text-white font-bold text-xl">PhoenixStar</div>
                  <div className="text-green-400 text-sm">Distribution Services Pvt. Ltd.</div>
                </div>
              </div>
              <p className="text-slate-300">
                {isLogin ? 'Welcome back to your dashboard' : 'Join our DSA network today'}
              </p>
            </div>

            <Card className="shadow-2xl border-0">
              <CardHeader className="text-center bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-t-lg">
                <CardTitle className="text-2xl">
                  {isLogin ? 'Login to Dashboard' : 'Create Account'}
                </CardTitle>
                <p className="text-green-100">
                  {isLogin ? 'Access your DSA portal' : 'Start your journey with us'}
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {!isLogin && (
                    <>
                      <div>
                        <Label htmlFor="name" className="text-lg font-semibold text-slate-900">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required={!isLogin}
                          className="mt-2"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-lg font-semibold text-slate-900">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required={!isLogin}
                          className="          mt-2"
                          placeholder="Enter your phone number"
                        />
                      </div>

                      <div>
                        <Label htmlFor="role" className="text-lg font-semibold text-slate-900">
                          Role *
                        </Label>
                        <select
                          id="role"
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          required={!isLogin}
                          className="w-full mt-2 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="DSA">DSA Partner</option>
                          <option value="Admin">Admin</option>
                        </select>
                      </div>
                    </>
                  )}

                  <div>
                    <Label htmlFor="email" className="text-lg font-semibold text-slate-900">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <Label htmlFor="password" className="text-lg font-semibold text-slate-900">
                      Password *
                    </Label>
                    <div className="relative mt-2">
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                        className="pr-12"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500 hover:text-slate-700"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full btn-gradient text-white border-0"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        {isLogin ? 'Signing In...' : 'Creating Account...'}
                      </>
                    ) : (
                      <>
                        {isLogin ? <LogIn className="mr-2 w-5 h-5" /> : <UserPlus className="mr-2 w-5 h-5" />}
                        {isLogin ? 'Sign In' : 'Create Account'}
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-slate-600">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                  </p>
                  <button
                    onClick={toggleMode}
                    className="text-green-500 font-semibold hover:text-green-600 transition-colors"
                  >
                    {isLogin ? 'Create Account' : 'Sign In'}
                  </button>
                </div>

                {isLogin && (
                  <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold text-slate-900 mb-2">Demo Credentials:</h4>
                    <div className="text-sm text-slate-600 space-y-1">
                      <p><strong>Admin:</strong> admin@phoenixstar.com / admin123</p>
                      <p><strong>DSA:</strong> dsa@phoenixstar.com / dsa123</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Login;