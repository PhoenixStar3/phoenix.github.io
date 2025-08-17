import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart3, 
  Users, 
  FileText, 
  DollarSign, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  LogOut,
  Filter,
  Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';
import StatCard from '@/components/dashboard/StatCard';
import ApplicationTable from '@/components/dashboard/ApplicationTable';

const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loanApplications, setLoanApplications] = useState([]);
  const [dsaApplications, setDsaApplications] = useState([]);
  const [contactMessages, setContactMessages] = useState([]);
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (!user) {
      navigate('/login');
      return;
    }
    
    setCurrentUser(user);
    setLoanApplications(JSON.parse(localStorage.getItem('loanApplications') || '[]'));
    setDsaApplications(JSON.parse(localStorage.getItem('dsaApplications') || '[]'));
    setContactMessages(JSON.parse(localStorage.getItem('contactMessages') || '[]'));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    toast({
      title: "Logged Out Successfully",
      description: "Thank you for using PhoenixStar Dashboard",
    });
    navigate('/');
  };

  const updateApplicationStatus = (id, status, type) => {
    if (type === 'loan') {
      const updated = loanApplications.map(app => 
        app.id === id ? { ...app, status } : app
      );
      setLoanApplications(updated);
      localStorage.setItem('loanApplications', JSON.stringify(updated));
    } else if (type === 'dsa') {
      const updated = dsaApplications.map(app => 
        app.id === id ? { ...app, status } : app
      );
      setDsaApplications(updated);
      localStorage.setItem('dsaApplications', JSON.stringify(updated));
    }
    
    toast({
      title: "Status Updated",
      description: `Application status changed to ${status}`,
    });
  };

  if (!currentUser) {
    return <div>Loading...</div>;
  }

  const stats = {
    totalLoans: loanApplications.length,
    approvedLoans: loanApplications.filter(app => app.status === 'Approved').length,
    pendingLoans: loanApplications.filter(app => app.status === 'Pending Review').length,
    totalDSAs: dsaApplications.length,
    activeDSAs: dsaApplications.filter(app => app.status === 'Approved').length,
    totalMessages: contactMessages.length,
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved': return 'text-green-600 bg-green-100';
      case 'Rejected': return 'text-red-600 bg-red-100';
      case 'Under Review': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-blue-600 bg-blue-100';
    }
  };

  return (
    <>
      <Helmet>
        <title>Dashboard - PhoenixStar Distribution Services</title>
        <meta name="description" content="PhoenixStar Distribution Services dashboard for managing loan applications, DSA partners and business operations." />
      </Helmet>

      <div className="min-h-screen bg-slate-50">
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-slate-800 to-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">P</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-slate-900">Dashboard</h1>
                  <p className="text-sm text-slate-600">Welcome back, {currentUser.name}</p>
                </div>
              </div>
              <Button onClick={handleLogout} variant="outline" size="sm">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <nav className="flex space-x-8">
              {[
                { id: 'overview', label: 'Overview', icon: <BarChart3 className="w-5 h-5" /> },
                { id: 'loans', label: 'Loan Applications', icon: <FileText className="w-5 h-5" /> },
                { id: 'dsas', label: 'DSA Applications', icon: <Users className="w-5 h-5" /> },
                { id: 'messages', label: 'Messages', icon: <Clock className="w-5 h-5" /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-green-500 text-white'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <StatCard
                  title="Total Loan Applications"
                  value={stats.totalLoans}
                  icon={<FileText className="w-6 h-6 text-white" />}
                  color="bg-blue-500"
                />
                <StatCard
                  title="Approved Loans"
                  value={stats.approvedLoans}
                  icon={<CheckCircle className="w-6 h-6 text-white" />}
                  color="bg-green-500"
                />
                <StatCard
                  title="Pending Applications"
                  value={stats.pendingLoans}
                  icon={<Clock className="w-6 h-6 text-white" />}
                  color="bg-yellow-500"
                />
                <StatCard
                  title="Total DSA Partners"
                  value={stats.totalDSAs}
                  icon={<Users className="w-6 h-6 text-white" />}
                  color="bg-purple-500"
                />
                <StatCard
                  title="Active DSAs"
                  value={stats.activeDSAs}
                  icon={<TrendingUp className="w-6 h-6 text-white" />}
                  color="bg-indigo-500"
                />
                <StatCard
                  title="Total Messages"
                  value={stats.totalMessages}
                  icon={<DollarSign className="w-6 h-6 text-white" />}
                  color="bg-orange-500"
                />
              </div>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {loanApplications.slice(0, 5).map((app) => (
                      <div key={app.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                        <div>
                          <p className="font-medium text-slate-900">{app.fullName}</p>
                          <p className="text-sm text-slate-600">{app.loanType} - ₹{app.loanAmount}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}>
                          {app.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {activeTab === 'loans' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Loan Applications</CardTitle>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <ApplicationTable 
                    applications={loanApplications}
                    type="loan"
                    currentUser={currentUser}
                    onStatusUpdate={updateApplicationStatus}
                  />
                </CardContent>
              </Card>
            </motion.div>
          )}

          {activeTab === 'dsas' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>DSA Partner Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ApplicationTable 
                    applications={dsaApplications}
                    type="dsa"
                    currentUser={currentUser}
                    onStatusUpdate={updateApplicationStatus}
                  />
                </CardContent>
              </Card>
            </motion.div>
          )}

          {activeTab === 'messages' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Contact Messages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contactMessages.map((message) => (
                      <div key={message.id} className="p-4 bg-slate-50 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-medium text-slate-900">{message.name}</p>
                            <p className="text-sm text-slate-600">{message.email} • {message.phone}</p>
                          </div>
                          <span className="text-xs text-slate-500">
                            {new Date(message.submittedAt).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-slate-700 mb-2">Subject: {message.subject}</p>
                        <p className="text-slate-600">{message.message}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;