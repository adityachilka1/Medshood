'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import {
  UploadIcon,
  CheckIcon,
  ClipboardIcon,
  DoctorIcon,
  PackageIcon,
} from '@/components/icons/CheckIcon';

export default function UploadPrescriptionPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadStep, setUploadStep] = useState<'upload' | 'details' | 'success'>('upload');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [patientDetails, setPatientDetails] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files).filter(file =>
      file.type.startsWith('image/') || file.type === 'application/pdf'
    );

    setFiles(prev => [...prev, ...droppedFiles]);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...selectedFiles]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleContinue = () => {
    if (files.length > 0) {
      setUploadStep('details');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real implementation, this would upload to server
    setUploadStep('success');
  };

  const handleDetailsChange = (field: string, value: string) => {
    setPatientDetails(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="text-2xl font-bold gradient-text">
            Medshood
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-4">
            <div className={`flex items-center gap-2 ${uploadStep === 'upload' ? 'text-primary' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                uploadStep === 'upload' ? 'bg-primary text-white' : 'bg-gray-200'
              }`}>
                1
              </div>
              <span className="font-semibold hidden sm:inline">Upload</span>
            </div>
            <div className="w-12 h-1 bg-gray-300"></div>
            <div className={`flex items-center gap-2 ${uploadStep === 'details' ? 'text-primary' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                uploadStep === 'details' ? 'bg-primary text-white' : 'bg-gray-200'
              }`}>
                2
              </div>
              <span className="font-semibold hidden sm:inline">Details</span>
            </div>
            <div className="w-12 h-1 bg-gray-300"></div>
            <div className={`flex items-center gap-2 ${uploadStep === 'success' ? 'text-primary' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                uploadStep === 'success' ? 'bg-primary text-white' : 'bg-gray-200'
              }`}>
                3
              </div>
              <span className="font-semibold hidden sm:inline">Confirm</span>
            </div>
          </div>
        </div>

        {/* Upload Step */}
        {uploadStep === 'upload' && (
          <div className="animate-fade-in-up">
            <div className="text-center mb-6 md:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                <span className="gradient-text">Upload Your Prescription</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-900 px-4">
                Our licensed pharmacists will verify and process your prescription within 2 hours
              </p>
            </div>

            {/* Upload Area */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`border-3 border-dashed rounded-xl p-12 text-center transition-all ${
                  isDragging ? 'border-primary bg-blue-50' : 'border-gray-300 hover:border-primary'
                }`}
              >
                <div className="mb-6">
                  <UploadIcon className="w-16 h-16 mx-auto text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Drop your prescription here</h3>
                <p className="text-gray-900 mb-6">
                  or click to browse from your device
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*,.pdf"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="prescription-upload"
                  aria-label="Upload prescription files (images or PDF)"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-dark transition-all"
                >
                  Choose Files
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  Supports: JPG, PNG, PDF (Max 10MB per file)
                </p>
              </div>

              {/* File List */}
              {files.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-bold mb-4">Uploaded Files ({files.length})</h4>
                  <div className="space-y-3">
                    {files.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-3">
                          <ClipboardIcon className="w-6 h-6 text-primary" />
                          <div>
                            <p className="font-semibold">{file.name}</p>
                            <p className="text-sm text-gray-500">
                              {(file.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleRemoveFile(index)}
                          className="text-red-500 hover:text-red-700 font-semibold"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {files.length > 0 && (
                <button
                  onClick={handleContinue}
                  className="w-full mt-6 bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-all"
                >
                  Continue to Details
                </button>
              )}
            </div>

            {/* How It Works */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How It Works</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UploadIcon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">1. Upload</h4>
                  <p className="text-sm text-gray-900">
                    Upload clear photos of your prescription
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DoctorIcon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">2. Verification</h4>
                  <p className="text-sm text-gray-900">
                    Pharmacist verifies within 2 hours
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <PackageIcon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">3. Delivery</h4>
                  <p className="text-sm text-gray-900">
                    Medicines delivered in 24-48 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Alternative Option */}
            <div className="mt-8 text-center">
              <p className="text-gray-900 mb-4">
                Don't have a prescription? Browse our medicine categories
              </p>
              <Link
                href="/#categories"
                className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
              >
                Browse Medicines →
              </Link>
            </div>
          </div>
        )}

        {/* Details Step */}
        {uploadStep === 'details' && (
          <div className="animate-fade-in-up">
            <div className="text-center mb-8">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="gradient-text">Delivery Details</span>
              </h1>
              <p className="text-xl text-gray-900">
                Where should we deliver your medicines?
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="fullName" className="block font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={patientDetails.fullName}
                    onChange={(e) => handleDetailsChange('fullName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your full name"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    pattern="[0-9]{10}"
                    value={patientDetails.phone}
                    onChange={(e) => handleDetailsChange('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="10-digit mobile number"
                    aria-required="true"
                    aria-describedby="phone-help"
                  />
                  <p id="phone-help" className="sr-only">Enter 10-digit mobile number without country code</p>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block font-semibold mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={patientDetails.email}
                  onChange={(e) => handleDetailsChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your.email@example.com"
                  aria-required="true"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="address" className="block font-semibold mb-2">Delivery Address *</label>
                <textarea
                  id="address"
                  name="address"
                  required
                  value={patientDetails.address}
                  onChange={(e) => handleDetailsChange('address', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="House/Flat No., Building Name, Street"
                  aria-required="true"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label htmlFor="city" className="block font-semibold mb-2">City *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={patientDetails.city}
                    onChange={(e) => handleDetailsChange('city', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="City"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block font-semibold mb-2">State *</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    required
                    value={patientDetails.state}
                    onChange={(e) => handleDetailsChange('state', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="State"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="pincode" className="block font-semibold mb-2">Pincode *</label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    required
                    pattern="[0-9]{6}"
                    value={patientDetails.pincode}
                    onChange={(e) => handleDetailsChange('pincode', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="6-digit PIN"
                    aria-required="true"
                    aria-describedby="pincode-help"
                  />
                  <p id="pincode-help" className="sr-only">Enter 6-digit PIN code for delivery location</p>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setUploadStep('upload')}
                  className="flex-1 border-2 border-gray-300 text-gray-900 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary-dark transition-all"
                >
                  Submit Prescription
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Success Step */}
        {uploadStep === 'success' && (
          <div className="animate-fade-in-up">
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckIcon className="w-12 h-12 text-green-600" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="gradient-text">Prescription Submitted!</span>
              </h1>
              <p className="text-xl text-gray-900 mb-8">
                Our licensed pharmacist will verify your prescription within 2 hours
              </p>

              <div className="bg-blue-50 rounded-xl p-6 mb-8 text-left">
                <h3 className="font-bold mb-4">What happens next?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Our pharmacist will review and verify your prescription</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>You'll receive a confirmation call within 2 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>We'll share pricing and payment details</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Your medicines will be delivered in 24-48 hours</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300"
                >
                  Back to Home
                </Link>
                <Link
                  href="/#categories"
                  className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300"
                >
                  Browse Medicines
                </Link>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-900">
                  Questions? Call us at{' '}
                  <a href="tel:+918800000000" className="text-primary font-bold">
                    +91 88000 00000
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Trust Section */}
      <div className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-white/90">Authentic Medicines</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">&lt;2hr</div>
              <div className="text-white/90">Verification Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24-48hr</div>
              <div className="text-white/90">Fast Delivery</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Licensed</div>
              <div className="text-white/90">Pharmacists</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
