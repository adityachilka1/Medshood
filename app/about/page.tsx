import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function About() {
  const team = [
    {
      name: "Dr. Sarah Patel",
      role: "Chief Medical Officer",
      credentials: "MD, Board Certified Endocrinologist",
      description: "15+ years experience in obesity medicine and metabolic disorders"
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Medical Director",
      credentials: "MBBS, MD Internal Medicine",
      description: "Specialist in diabetes care and weight management"
    },
    {
      name: "Priya Sharma",
      role: "Head of Nutrition",
      credentials: "MSc Nutrition, Registered Dietitian",
      description: "Expert in personalized nutrition and behavioral change"
    },
    {
      name: "Amit Verma",
      role: "Lead Fitness Coach",
      credentials: "Certified Personal Trainer, Exercise Physiologist",
      description: "10+ years coaching clients through weight loss journeys"
    }
  ];

  const values = [
    {
      title: "Patient-First",
      description: "Every decision we make puts patient health, safety, and success at the center",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Evidence-Based",
      description: "We rely on clinical research and medical science to guide our treatments",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Transparent",
      description: "Clear pricing, honest communication, and no hidden fees or surprises",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: "Accessible",
      description: "Making medical weight loss treatment available and affordable for all",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Transforming lives through accessible medical weight loss
            </h1>
            <p className="text-xl text-blue-100">
              We're on a mission to help people achieve sustainable weight loss with evidence-based treatments, expert medical care, and comprehensive support.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Medshood was founded in 2023 by a team of doctors, healthcare professionals, and technologists who saw the need for accessible, affordable, and effective weight loss solutions in India.
                </p>
                <p>
                  We recognized that while GLP-1 medications represented a breakthrough in obesity treatment, many people couldn't access them due to cost, convenience, or lack of awareness. We set out to change that.
                </p>
                <p>
                  Today, we've helped over 10,000 members lose weight and improve their health through our comprehensive telehealth platform. Our approach combines FDA-approved medications with personalized medical care, nutrition coaching, and lifestyle support.
                </p>
                <p>
                  We believe everyone deserves access to safe, effective weight loss treatment. That's why we've made it our mission to deliver medical weight loss care that's convenient, affordable, and results-driven.
                </p>
              </div>
            </div>
            <div className="bg-novo-gray rounded-lg h-96 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl font-bold text-primary mb-4">10,000+</div>
                <div className="text-xl text-gray-700">Members Served</div>
                <div className="text-sm text-gray-600 mt-2">and growing every day</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-novo-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-3xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To make medical weight loss treatment accessible, affordable, and effective for everyone in India through innovative telehealth solutions and evidence-based care.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-3xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                A future where obesity is treated as the medical condition it is, with compassionate, comprehensive care that addresses both physical and mental health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Values</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-novo-gray rounded-lg">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Team */}
      <section className="py-20 bg-novo-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Meet Our Medical Team</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Expert healthcare professionals dedicated to your success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl text-white font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <div className="text-primary font-semibold mb-2">{member.role}</div>
                <div className="text-sm text-gray-600 mb-3">{member.credentials}</div>
                <p className="text-sm text-gray-700">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10,000+</div>
              <div className="text-blue-200">Members Served</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">85%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Medical Professionals</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">4.8/5</div>
              <div className="text-blue-200">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">Join thousands who've transformed their lives</h2>
          <p className="text-xl text-gray-700 mb-8">
            Start your weight loss journey with expert medical support
          </p>
          <Link 
            href="/quiz" 
            className="inline-block bg-primary text-white px-8 py-4 rounded-md font-semibold hover:bg-secondary transition text-lg"
          >
            Check Your Eligibility
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
