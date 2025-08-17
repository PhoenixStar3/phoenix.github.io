import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
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
      const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
      const newMessage = {
        id: Date.now(),
        ...formData,
        submittedAt: new Date().toISOString(),
      };
      messages.push(newMessage);
      localStorage.setItem('contactMessages', JSON.stringify(messages));

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-lg font-semibold text-slate-900">
          Full Name *
        </Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="mt-2"
          placeholder="Enter your full name"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            placeholder="Enter your phone"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="subject" className="text-lg font-semibold text-slate-900">
          Subject *
        </Label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          required
          className="w-full mt-2 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
          <option value="">Select Subject</option>
          <option value="Home Loan Inquiry">Home Loan Inquiry</option>
          <option value="Personal Loan Inquiry">Personal Loan Inquiry</option>
          <option value="Business Loan Inquiry">Business Loan Inquiry</option>
          <option value="DSA Partnership">DSA Partnership</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Support">Support</option>
        </select>
      </div>

      <div>
        <Label htmlFor="message" className="text-lg font-semibold text-slate-900">
          Message *
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          className="mt-2"
          placeholder="Enter your message"
          rows={5}
        />
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
            Sending Message...
          </>
        ) : (
          <>
            <Send className="mr-2 w-5 h-5" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;