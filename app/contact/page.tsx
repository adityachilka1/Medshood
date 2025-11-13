'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FormInput } from '@/components/ui/FormInput';
import { Button } from '@/components/ui/Button';
import { validateContactForm } from '@/utils/validation';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import { ContactFormData, ContactFormErrors } from '@/types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const { isSubmitting, submitError, submitSuccess, handleSubmit, reset } = useFormSubmit();

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateContactForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // TODO: Replace with actual API endpoint when backend is ready
      await handleSubmit('/api/contact', formData);

      // Clear form on success
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    } catch (error) {
      // Error is handled by useFormSubmit hook
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section id="main-content" className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Get in touch
          </h1>
          <p className="text-xl text-white/95 max-w-3xl mx-auto">
            Have questions? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-novo-gray rounded-lg">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-900 mb-4">For general inquiries</p>
              <a
                href="mailto:support@medshood.com"
                className="text-primary font-semibold hover:text-secondary transition-smooth"
              >
                support@medshood.com
              </a>
            </div>

            <div className="text-center p-8 bg-novo-gray rounded-lg">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-900 mb-4">Mon-Fri, 9 AM - 6 PM IST</p>
              <a
                href="tel:+911800123456"
                className="text-primary font-semibold hover:text-secondary transition-smooth"
              >
                +91 1800 123 456
              </a>
            </div>

            <div className="text-center p-8 bg-novo-gray rounded-lg">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-900 mb-4">Available 24/7</p>
              <button
                className="text-primary font-semibold hover:text-secondary transition-smooth"
                onClick={() => alert('Chat feature coming soon!')}
              >
                Start Chat
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-novo-gray p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-primary mb-6">Send us a message</h2>

              {/* Success Message */}
              {submitSuccess && (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 mb-6" role="alert">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-green-900 font-semibold">
                      Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitError && (
                <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4 mb-6" role="alert">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <p className="text-red-900 font-semibold">{submitError}</p>
                  </div>
                </div>
              )}

              <form onSubmit={onSubmit} className="space-y-6">
                <FormInput
                  label="Full Name"
                  type="text"
                  value={formData.name}
                  onChange={(value) => handleInputChange('name', value)}
                  placeholder="John Doe"
                  required
                  error={errors.name}
                  autoComplete="name"
                />

                <FormInput
                  label="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={(value) => handleInputChange('email', value)}
                  placeholder="john.doe@example.com"
                  required
                  error={errors.email}
                  inputMode="email"
                  autoComplete="email"
                />

                <FormInput
                  label="Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={(value) => handleInputChange('phone', value)}
                  placeholder="+91 98765 43210"
                  required
                  error={errors.phone}
                  inputMode="tel"
                  autoComplete="tel"
                />

                <FormInput
                  label="Message"
                  type="textarea"
                  value={formData.message}
                  onChange={(value) => handleInputChange('message', value)}
                  placeholder="Tell us how we can help..."
                  required
                  error={errors.message}
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>

              <div className="mt-6 bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-900">
                  <strong>Demo Note:</strong> This is a frontend prototype. The form doesn't currently send to a server. Backend API integration is documented in the project review reports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-20 bg-novo-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Office</h2>
            <p className="text-xl text-gray-900">Visit us at our headquarters</p>
          </div>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg card-shadow">
            <div className="flex items-start mb-6">
              <svg className="w-6 h-6 text-primary mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-900">
                  Medshood Healthcare Pvt Ltd<br />
                  123 Residency Road<br />
                  Bangalore, Karnataka 560025<br />
                  India
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="w-6 h-6 text-primary mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Business Hours</h3>
                <p className="text-gray-900">
                  Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                  Saturday: 10:00 AM - 4:00 PM IST<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
