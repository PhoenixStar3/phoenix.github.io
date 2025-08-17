import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

const LoanApplicationForm = () => {
  const [formData, setFormData] = useState({
    loanType: '',
    fullName: '',
    email: '',
    phone: '',
    panCard: '',
    aadharCard: '',
    monthlyIncome: '',
    loanAmount: '',
    purpose: '',
    employmentType: '',
    companyName: '',
    workExperience: '',
    address: '',
    city: '',
    pincode: '',
    additionalInfo: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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

    setTimeout(() => {
      const applications = JSON.parse(localStorage.getItem('loanApplications') || '[]');
      const newApplication = {
        id: Date.now(),
        ...formData,
        status: 'Pending Review',
        submittedAt: new Date().toISOString(),
      };
      applications.push(newApplication);
      localStorage.setItem('loanApplications', JSON.stringify(applications));

      toast({
        title: "Application Submitted Successfully!",
        description: "Our team will review your application and contact you within 24 hours.",
      });

      setFormData({
        loanType: '',
        fullName: '',
        email: '',
        phone: '',
        panCard: '',
        aadharCard: '',
        monthlyIncome: '',
        loanAmount: '',
        purpose: '',
        employmentType: '',
        companyName: '',
        workExperience: '',
        address: '',
        city: '',
        pincode: '',
        additionalInfo: '',
      });

      setIsSubmitting(false);
    }, 2000);
  };

  const loanTypes = [
    'Home Loan',
    'Personal Loan',
    'Business Loan',
    'Loan Against Property',
    'Credit Card',
    'Other'
  ];

  const employmentTypes = [
    'Salaried',
    'Self Employed',
    'Business Owner',
    'Professional',
    'Retired',
    'Other'
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="loanType" className="text-lg font-semibold text-slate-900">
          Type of Loan Required *
        </Label>
        <select
          id="loanType"
          name="loanType"
          value={formData.loanType}
          onChange={handleInputChange}
          required
          className="w-full mt-2 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
          <option value="">Select Loan Type</option>
          {loanTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="fullName" className="text-lg font-semibold text-slate-900">
            Full Name *
          </Label>
          <Input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            className="mt-2"
            placeholder="Enter your full name"
          />
        </div>
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            required
            className="mt-2"
            placeholder="Enter your phone number"
          />
        </div>
        <div>
          <Label htmlFor="panCard" className="text-lg font-semibold text-slate-900">
            PAN Card Number *
          </Label>
          <Input
            id="panCard"
            name="panCard"
            value={formData.panCard}
            onChange={handleInputChange}
            required
            className="mt-2"
            placeholder="Enter PAN number"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="aadharCard" className="text-lg font-semibold text-slate-900">
          Aadhar Card Number *
        </Label>
        <Input
          id="aadharCard"
          name="aadharCard"
          value={formData.aadharCard}
          onChange={handleInputChange}
          required
          className="mt-2"
          placeholder="Enter Aadhar number"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="monthlyIncome" className="text-lg font-semibold text-slate-900">
            Monthly Income *
          </Label>
          <Input
            id="monthlyIncome"
            name="monthlyIncome"
            type="number"
            value={formData.monthlyIncome}
            onChange={handleInputChange}
            required
            className="mt-2"
            placeholder="Enter monthly income"
          />
        </div>
        <div>
          <Label htmlFor="loanAmount" className="text-lg font-semibold text-slate-900">
            Loan Amount Required *
          </Label>
          <Input
            id="loanAmount"
            name="loanAmount"
            type="number"
            value={formData.loanAmount}
            onChange={handleInputChange}
            required
            className="mt-2"
            placeholder="Enter loan amount"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="purpose" className="text-lg font-semibold text-slate-900">
          Purpose of Loan *
        </Label>
        <Input
          id="purpose"
          name="purpose"
          value={formData.purpose}
          onChange={handleInputChange}
          required
          className="mt-2"
          placeholder="Enter purpose of loan"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="employmentType" className="text-lg font-semibold text-slate-900">
            Employment Type *
          </Label>
          <select
            id="employmentType"
            name="employmentType"
            value={formData.employmentType}
            onChange={handleInputChange}
            required
            className="w-full mt-2 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">Select Employment Type</option>
            {employmentTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <Label htmlFor="companyName" className="text-lg font-semibold text-slate-900">
            Company/Business Name *
          </Label>
          <Input
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            required
            className="mt-2"
            placeholder="Enter company/business name"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="workExperience" className="text-lg font-semibold text-slate-900">
          Work Experience (Years) *
        </Label>
        <Input
          id="workExperience"
          name="workExperience"
          type="number"
          value={formData.workExperience}
          onChange={handleInputChange}
          required
          className="mt-2"
          placeholder="Enter work experience in years"
        />
      </div>

      <div>
        <Label htmlFor="address" className="text-lg font-semibold text-slate-900">
          Complete Address *
        </Label>
        <Textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
          className="mt-2"
          placeholder="Enter your complete address"
          rows={3}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="city" className="text-lg font-semibold text-slate-900">
            City *
          </Label>
          <Input
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
            className="mt-2"
            placeholder="Enter your city"
          />
        </div>
        <div>
          <Label htmlFor="pincode" className="text-lg font-semibold text-slate-900">
            Pincode *
          </Label>
          <Input
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleInputChange}
            required
            className="mt-2"
            placeholder="Enter pincode"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="additionalInfo" className="text-lg font-semibold text-slate-900">
          Additional Information
        </Label>
        <Textarea
          id="additionalInfo"
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleInputChange}
          className="mt-2"
          placeholder="Any additional information you'd like to share"
          rows={3}
        />
      </div>

      <div className="text-center pt-6">
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="btn-gradient text-white border-0 px-12 py-4 text-lg"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Submitting Application...
            </>
          ) : (
            <>
              <CheckCircle className="mr-2 w-5 h-5" />
              Submit Application
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default LoanApplicationForm;