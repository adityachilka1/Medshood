import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function About() {
  const team = [
    {
      name: "Dr. Anil Kumar",
      role: "Chief Pharmacist",
      credentials: "PharmD, Board Certified Specialty Pharmacist",
      description: "20+ years experience in biologic therapies and rare disease management"
    },
    {
      name: "Dr. Meera Reddy",
      role: "Clinical Director",
      credentials: "MBBS, MD Oncology",
      description: "Specialist in oncology medications and targeted cancer therapies"
    },
    {
      name: "Ravi Sharma",
      role: "Head of Cold Chain Operations",
      credentials: "B.Pharm, WHO-GDP Certified",
      description: "Expert in temperature-controlled logistics and pharmaceutical distribution"
    },
    {
      name: "Priya Patel",
      role: "Patient Assistance Manager",
      credentials: "MBA Healthcare, Patient Advocacy Certified",
      description: "15+ years helping patients access specialty medications"
    }
  ];

  const values = [
    {
      title: "Patient-First Care",
      description: "Every patient receives personalized clinical support and medication counseling from our specialized pharmacists",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Quality Assurance",
      description: "WHO-GDP certified cold chain facilities with 24/7 temperature monitoring for biologic integrity",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Transparent Pricing",
      description: "Honest pricing with up to 85% savings through bulk procurement and patient assistance programs",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: "Nationwide Access",
      description: "Pan-India delivery with specialized cold chain logistics to metro and tier-2/3 cities",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/90 px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm text-primary border border-white/30 shadow-lg">
              ABOUT MEDSHOOD
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              India's Leading Specialty Pharmacy
            </h1>
            <p className="text-xl text-white leading-relaxed">
              Providing biologic therapies, rare disease medications, and imported specialty drugs with expert clinical support and nationwide cold chain delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-base max-w-prose">
                <p>
                  Medshood was founded in 2019 by a team of specialty pharmacists, clinicians, and healthcare technology experts who recognized a critical gap in India's pharmaceutical landscape.
                </p>
                <p>
                  While regular pharmacies could handle common medications, patients with complex conditions - cancer, rare diseases, autoimmune disorders - struggled to access the specialty medications they desperately needed. These biologic therapies required cold chain storage, expert handling, and clinical support that traditional pharmacies couldn't provide.
                </p>
                <p>
                  We built India's first super specialty pharmacy with WHO-GDP certified cold chain facilities, licensed pharmacists trained in biologic therapies, and a nationwide distribution network designed specifically for high-value, temperature-sensitive medications.
                </p>
                <p>
                  Today, we serve over 25,000 patients across India, providing 500+ specialty medications across 8 therapeutic areas. We've helped patients access life-saving rare disease treatments, reduced medication costs by up to 85% through patient assistance programs, and provided 24/7 clinical support to those managing complex conditions.
                </p>
                <p className="font-semibold text-primary">
                  Because every patient deserves access to the specialty medications they need, regardless of where they live or their financial situation.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl font-bold text-primary mb-4">25,000+</div>
                <div className="text-2xl font-bold text-gray-900 mb-2">Patients Served</div>
                <div className="text-gray-900">across India since 2019</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To make specialty and rare disease medications accessible across India through expert pharmaceutical care, cold chain excellence, patient assistance programs, and 24/7 clinical support.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                A future where every patient with complex medical conditions has seamless access to specialty medications, expert clinical guidance, and financial assistance - regardless of their location or economic status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The principles that guide our specialty pharmacy practice
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Expert specialty pharmacists and clinicians dedicated to your care
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl text-white font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <div className="text-primary font-semibold mb-2">{member.role}</div>
                <div className="text-sm text-gray-900 mb-3">{member.credentials}</div>
                <p className="text-sm text-gray-700 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-white leading-relaxed">Making specialty medications accessible across India</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-5xl font-bold mb-2">25,000+</div>
              <div className="text-white/90">Patients Served</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-white/90">Specialty Medications</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-5xl font-bold mb-2">85%</div>
              <div className="text-white/90">Average Cost Savings</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-white/90">Clinical Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Therapeutic Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Specialty Areas</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Comprehensive coverage across 8 therapeutic areas
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Rheumatology', icon: '🦴' },
              { name: 'Rare Diseases', icon: '🧬' },
              { name: 'Cancer Care', icon: '🎗️' },
              { name: 'Neurology', icon: '🧠' },
              { name: 'Gastroenterology', icon: '💊' },
              { name: 'Cardiology', icon: '❤️' },
              { name: 'Respiratory', icon: '🫁' },
              { name: 'Endocrinology', icon: '⚕️' }
            ].map((area, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all">
                <div className="text-4xl mb-3">{area.icon}</div>
                <h3 className="font-bold text-gray-900">{area.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Specialty Medications?</h2>
          <p className="text-xl text-white mb-8 leading-relaxed max-w-3xl mx-auto">
            Our specialty pharmacists are available 24/7 to help you access the medications you need
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/upload-prescription"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              Upload Prescription
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 backdrop-blur-sm"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
