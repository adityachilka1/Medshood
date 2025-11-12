"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ClipboardIcon,
  DoctorIcon,
  PackageIcon,
  SupportIcon,
  CheckmarkBadgeIcon,
  MedicalCrossIcon,
  HomeDeliveryIcon,
  TargetIcon,
  UnlockIcon,
  MoneyBackIcon,
  SearchIcon,
  UploadIcon,
} from "@/components/icons/CheckIcon";
import { MEDICAL_CATEGORIES, PLATFORM_STATS } from "@/constants/categories";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = PLATFORM_STATS;

  const howItWorks = [
    {
      step: "01",
      title: "Search or Upload",
      description: "Find your medicine by name or condition, or upload your prescription",
      Icon: ClipboardIcon
    },
    {
      step: "02",
      title: "Pharmacist Verification",
      description: "Our licensed pharmacists verify your prescription and medicine requirements",
      Icon: DoctorIcon
    },
    {
      step: "03",
      title: "Fast Delivery",
      description: "Get authentic medicines delivered to your doorstep within 24-48 hours",
      Icon: PackageIcon
    },
    {
      step: "04",
      title: "Expert Support",
      description: "Access ongoing support from our team of licensed pharmacists anytime",
      Icon: SupportIcon
    }
  ];

  const benefits = [
    {
      title: "Authentic Medicines",
      description: "100% genuine medications sourced directly from licensed manufacturers",
      Icon: CheckmarkBadgeIcon,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Licensed Pharmacists",
      description: "Expert guidance from qualified pharmacists for all your health needs",
      Icon: MedicalCrossIcon,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Fast Delivery",
      description: "24-48 hour delivery to your doorstep with secure packaging",
      Icon: HomeDeliveryIcon,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Best Prices",
      description: "Up to 70% savings on specialty and chronic disease medications",
      Icon: TargetIcon,
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Secure & Private",
      description: "Your health information is encrypted and completely confidential",
      Icon: UnlockIcon,
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Easy Returns",
      description: "Hassle-free returns and refunds if medicines don't meet quality standards",
      Icon: MoneyBackIcon,
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />

      {/* Premium Hero Section */}
      <section id="main-content" className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white pt-20 pb-32 md:pt-32 md:pb-40 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse-subtle"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute top-20 right-1/4 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
            <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-40 left-1/4 w-2 h-2 bg-white/50 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className={`${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="inline-flex items-center gap-2 bg-white/20 glass px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Licensed Online Pharmacy
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                India's Trusted{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Online Pharmacy</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-400/30 -rotate-1"></span>
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-white leading-relaxed opacity-95">
                Authentic specialty & chronic disease medications with up to 70% savings, expert pharmacist support, and 24-48 hour doorstep delivery.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#categories"
                  className="group relative bg-white text-primary px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 text-center overflow-hidden btn-premium"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <SearchIcon className="w-5 h-5" />
                    Browse Medicines
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
                <Link
                  href="/upload-prescription"
                  className="group border-2 border-white/50 text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-primary transition-all duration-300 text-center backdrop-blur-sm"
                >
                  <span className="flex items-center justify-center gap-2">
                    <UploadIcon className="w-5 h-5" />
                    Upload Prescription
                  </span>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Authentic Medicines
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Up to 70% Savings
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Licensed Pharmacists
                </div>
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className={`hidden lg:block ${mounted ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
              <div className="relative">
                {/* Main Card */}
                <div className="glass p-8 rounded-3xl backdrop-blur-lg border-2 border-white/20 shadow-2xl">
                  <div className="text-center">
                    <div className="text-7xl font-bold mb-4 animate-pulse-subtle">5,000+</div>
                    <div className="text-2xl font-semibold mb-2">Medicines Available</div>
                    <div className="text-blue-200">Authentic & Quality Assured</div>

                    <div className="grid grid-cols-2 gap-4 mt-8">
                      <div className="bg-white/10 p-4 rounded-xl">
                        <div className="text-3xl font-bold">70%</div>
                        <div className="text-sm text-blue-200">Max Savings</div>
                      </div>
                      <div className="bg-white/10 p-4 rounded-xl">
                        <div className="text-3xl font-bold">24-48hr</div>
                        <div className="text-sm text-blue-200">Delivery</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-yellow-400 text-primary px-4 py-2 rounded-full font-bold shadow-lg animate-float" style={{animationDelay: '0.5s'}}>
                  Licensed Pharmacy ✓
                </div>
                <div className="absolute -bottom-6 -left-6 bg-green-400 text-primary px-4 py-2 rounded-full font-bold shadow-lg animate-float" style={{animationDelay: '1s'}}>
                  98% Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Stats Section */}
      <section className="py-16 bg-white relative -mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-2xl card-shadow-lg hover:card-shadow-xl transition-all duration-300 hover:-translate-y-1 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-900 font-semibold">{stat.label}</div>
                <div className="text-sm text-gray-800">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Medical Condition */}
      <section id="categories" className="py-24 bg-gradient-to-b from-white to-novo-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              BROWSE BY CONDITION
            </div>
            <h2 className="text-5xl font-bold mb-6">
              <span className="gradient-text">Shop by Medical Condition</span>
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Find authentic specialty and chronic disease medications for your specific health needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MEDICAL_CATEGORIES.map((category, index) => (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className={`group relative bg-gradient-to-br ${category.gradientFrom} ${category.gradientTo} p-8 rounded-2xl text-white overflow-hidden hover:scale-105 transition-all duration-300 card-shadow-lg hover:card-shadow-xl ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
                  <category.Icon className="w-40 h-40" />
                </div>
                <div className="relative z-10">
                  <div className="mb-4">
                    <category.Icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{category.name}</h3>
                  <p className="text-white/90 leading-relaxed mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">{category.medicineCount}+ Medicines</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300 group"
            >
              <span>View all medicine categories</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works - Premium Design */}
      <section className="py-24 bg-gradient-to-b from-white to-novo-gray relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: 'radial-gradient(circle, #0F3F77 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              SIMPLE PROCESS
            </div>
            <h2 className="text-5xl font-bold mb-6">
              <span className="gradient-text">How Medshood Works</span>
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Get your medicines delivered in 4 simple steps with expert pharmacist support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className={`relative ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: `${index * 0.15}s`}}>
                <div className="bg-white p-8 rounded-2xl card-shadow hover:card-shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full">
                  {/* Step Number */}
                  <div className="text-6xl font-bold text-primary/10 mb-4 group-hover:text-primary/20 transition-colors" aria-hidden="true">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300 text-primary">
                    <step.Icon className="w-16 h-16" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-800 leading-relaxed">{step.description}</p>
                  
                  {/* Arrow for non-last items */}
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary/30">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/how-we-work" 
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300 group"
            >
              <span>Learn more about our process</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits - Modern Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              WHY CHOOSE US
            </div>
            <h2 className="text-5xl font-bold mb-6">
              <span className="gradient-text">Everything you need to succeed</span>
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Comprehensive support for sustainable, long-term weight loss
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`group relative bg-gradient-to-br ${benefit.color} p-8 rounded-2xl text-white overflow-hidden hover:scale-105 transition-all duration-300 card-shadow-lg hover:card-shadow-xl ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
                  <benefit.Icon className="w-40 h-40" />
                </div>
                <div className="relative z-10">
                  <div className="mb-4">
                    <benefit.Icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-white/90 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium Design */}
      <section className="py-24 bg-gradient-to-br from-primary via-secondary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block bg-yellow-400 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
            GET STARTED TODAY
          </div>

          <h2 className="text-5xl font-bold mb-6">
            Need medicines delivered?
          </h2>

          <p className="text-2xl mb-10 text-blue-100 leading-relaxed">
            Upload your prescription or search for medicines - delivered to your doorstep within 24-48 hours
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/upload-prescription"
              className="group bg-white text-primary px-10 py-5 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 text-lg btn-premium inline-flex items-center justify-center gap-2"
            >
              <UploadIcon className="w-6 h-6" />
              <span>Upload Prescription</span>
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="#categories"
              className="border-2 border-white/50 text-white px-10 py-5 rounded-xl font-bold hover:bg-white hover:text-primary transition-all duration-300 text-lg backdrop-blur-sm inline-flex items-center justify-center gap-2"
            >
              <SearchIcon className="w-6 h-6" />
              Browse Medicines
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-sm text-blue-200">Medicines Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-sm text-blue-200">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24-48hr</div>
              <div className="text-sm text-blue-200">Fast Delivery</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
