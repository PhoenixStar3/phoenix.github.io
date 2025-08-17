import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

const DSAApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    experience: '',
    qualification: '',
    currentOccupation: '',
    salesExperience: '',
    whyJoin: '',
    expectedEarning: '',
    availability: '',
    references: '',
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
      const applications = JSON.parse(localStorage.getItem('dsaApplications') || '[]');
      const newApplication = {
        id: Date.now(),
        ...formData,
        status: 'Under Review',
        submittedAt: new Date().toISOString(),
      };
      applications.push(newApplication);
      localStorage.setItem('dsaApplications', JSON.stringify(applications));

      toast({
        title: "DSA Application Submitted Successfully!",
        description: "Thank you for your interest. Our team will review your application and contact you within 48 hours.",
      });

      setFormData({
        fullName: '',
        email: '',
        phone: '',
        city: '',
        state: '',
        experience: '',
        qualification: '',
        currentOccupation: '',
        salesExperience: '',
        whyJoin: '',
        expectedEarning: '',
        availability: '',
        references: '',
      });

      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
      </div>

      <div>
        <Label htmlFor="state" className="text-lg font-semibold text-slate-900">
          State *
        </Label>
        <Input
          id="state"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
          required
          className="mt-2"
          placeholder="Enter your state"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="qualification" className="text-lg font-semibold text-slate-900">
            Educational Qualification *
          </Label>
          <select
            id="qualification"
            name="qualification"
            value={formData.qualification}
            onChange={handleInputChange}
            required
            className="w-full mt-2 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">Select Qualification</option>
            <option value="12th Pass">12th Pass</option>
            <option value="Graduate">Graduate</option>
            <option value="Post Graduate">Post Graduate</option>
            <option value="Professional Degree">Professional Degree</option>
          </select>
        </div>
        <div>
          <Label htmlFor="experience" className="text-lg font-semibold text-slate-900">
            Total Work Experience (Years) *
          </Label>
          <Input
            id="experience"
            name="experience"
            type="number"
            value={formData.experience}
            onChange={handleInputChange}
            required
            className="mt-2"
            placeholder="Enter years of experience"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="currentOccupation" className="text-lg font-semibold text-slate-900">
          Current Occupation *
        </Label>
        <Input
          id="currentOccupation"
          name="currentOccupation"
          value={formData.currentOccupation}
          onChange={handleInputChange}
          required
          className="mt-2"
          placeholder="Enter your current occupation"
        />
      </div>

      <div>
        <Label htmlFor="salesExperience" className="text-lg font-semibold text-slate-900">
          Sales/Financial Services Experience
        </Label>
        <Textarea
          id="salesExperience"
          name="salesExperience"
          value={formData.salesExperience}
          onChange={handleInputChange}
          className="mt-2"
          placeholder="Describe your sales or financial services experience"
          rows={3}
        />
      </div>

      <div>
        <Label htmlFor="whyJoin" className="text-lg font-semibold text-slate-900">
          Why do you want to join as DSA? *
        </Label>
        <Textarea
          id="whyJoin"
          name="whyJoin"
          value={formData.whyJoin}
          onChange={handleInputChange}
          required
          className="mt-2"
          placeholder="Tell us why you want to become a DSA partner"
          rows={3}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="expectedEarning" className="text-lg font-semibold text-slate-900">
            Expected Monthly Earning *
          </Label>
          <select
            id="expectedEarning"
            name="expectedEarning"
            value={formData.expectedEarning}
            onChange={handleInputChange}
            required
            className="w-full mt-2 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">Select Expected Earning</option>
            <option value="25000-50000">₹25,000 - ₹50,000</option>
            <option value="50000-100000">₹50,000 - ₹1,00,000</option>
            <option value="100000-200000">₹1,00,000 - ₹2,00,000</option>
            <option value="200000+">₹2,00,000+</option>
          </select>
        </div>
        <div>
          <Label htmlFor="availability" className="text-lg font-semibold text-slate-900">
            Availability *
          </Label>
          <select
            id="availability"
            name="availability"
            value={formData.availability}
            onChange={handleInputChange}
            required
            className="w-full mt-2 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">Select Availability</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Weekends Only">Weekends Only</option>
            <option value="Flexible">Flexible</option>
          </select>
        </div>
      </div>

      <div>
        <Label htmlFor="references" className="text-lg font-semibold text-slate-900">
          References (Optional)
        </Label>
        <Textarea
          id="references"
          name="references"
          value={formData.references}
          onChange={handleInputChange}
          className="mt-2"
          placeholder="Provide any professional references"
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
              Submit DSA Application
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default DSAApplicationForm;