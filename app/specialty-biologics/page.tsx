import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function SpecialtyBiologics() {
  const studies = [
    {
      title: "ACR20 Response in RA (Adalimumab)",
      results: "59-65% response rate",
      participants: "3,000+ patients",
      duration: "24 weeks",
      findings: "Patients treated with adalimumab achieved significant improvement in ACR20 response compared to placebo. Disease activity scores showed sustained reduction with combination methotrexate therapy."
    },
    {
      title: "PRISM Study (Ankylosing Spondylitis)",
      results: "61% ASAS20 response",
      participants: "1,200+ patients",
      duration: "12 weeks",
      findings: "TNF inhibitor therapy demonstrated rapid onset with significant improvement in spinal mobility, pain scores, and inflammatory markers within 2 weeks of treatment initiation."
    },
    {
      title: "UNITI Clinical Program (Crohn's Disease)",
      results: "Clinical remission in 53%",
      participants: "1,400+ patients",
      duration: "44 weeks",
      findings: "Ustekinumab showed sustained clinical remission and mucosal healing in moderate-to-severe Crohn's disease patients who failed conventional therapy and anti-TNF agents."
    }
  ];

  const mechanisms = [
    {
      title: "TNF-α Inhibition",
      description: "Blocks tumor necrosis factor-alpha, a key inflammatory cytokine driving joint destruction and systemic inflammation in autoimmune diseases",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "IL-17 Targeting",
      description: "Neutralizes interleukin-17, a critical cytokine in psoriatic disease pathophysiology and inflammatory cascade amplification",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "IL-12/23 Blockade",
      description: "Inhibits interleukin-12 and 23 pathways, preventing T-cell activation and reducing inflammatory bowel disease severity",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "JAK Pathway Inhibition",
      description: "Targets intracellular JAK-STAT signaling, blocking multiple cytokine pathways simultaneously for broad immunomodulation",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    }
  ];

  const benefits = [
    {
      metric: "Disease Remission",
      value: "50-70%",
      description: "Clinical remission rates in rheumatoid arthritis"
    },
    {
      metric: "Radiographic Progression",
      value: "80%",
      description: "Reduction in joint damage progression"
    },
    {
      metric: "Quality of Life",
      value: "60-75%",
      description: "Improvement in physical function scores"
    },
    {
      metric: "Mucosal Healing",
      value: "40-50%",
      description: "Endoscopic remission in IBD patients"
    },
    {
      metric: "PASI-90 Response",
      value: "70-80%",
      description: "Psoriasis Area Severity Index improvement"
    },
    {
      metric: "Work Productivity",
      value: "45%",
      description: "Reduction in work disability"
    }
  ];

  const biologicClasses = [
    {
      class: "TNF Inhibitors",
      medications: "Adalimumab, Etanercept, Infliximab, Golimumab, Certolizumab",
      indications: "RA, PsA, AS, Crohn's, UC, Psoriasis"
    },
    {
      class: "IL-17 Inhibitors",
      medications: "Secukinumab, Ixekizumab, Brodalumab",
      indications: "Psoriatic Arthritis, Ankylosing Spondylitis, Plaque Psoriasis"
    },
    {
      class: "IL-12/23 Inhibitors",
      medications: "Ustekinumab, Risankizumab, Guselkumab",
      indications: "Crohn's Disease, Psoriasis, Psoriatic Arthritis"
    },
    {
      class: "IL-6 Inhibitors",
      medications: "Tocilizumab, Sarilumab",
      indications: "Rheumatoid Arthritis, Giant Cell Arteritis"
    },
    {
      class: "JAK Inhibitors",
      medications: "Tofacitinib, Baricitinib, Upadacitinib",
      indications: "Rheumatoid Arthritis, Psoriatic Arthritis, Ulcerative Colitis"
    },
    {
      class: "B-Cell Depletion",
      medications: "Rituximab, Ocrelizumab",
      indications: "Rheumatoid Arthritis, MS, Vasculitis"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              The science behind specialty biologic therapies
            </h1>
            <p className="text-xl mb-8 text-white/95">
              Discover how targeted biologic medications revolutionize treatment for rheumatoid arthritis, inflammatory bowel disease, psoriasis, and other autoimmune conditions with precision immunomodulation.
            </p>
            <Link
              href="/upload-prescription"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300"
            >
              Upload Your Prescription
            </Link>
          </div>
        </div>
      </section>

      {/* What are Biologics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">What are biologic therapies?</h2>
              <div className="space-y-4 text-gray-900">
                <p>
                  Biologic medications are engineered proteins derived from living cells that target specific components of the immune system. Unlike conventional immunosuppressants, biologics precisely modulate inflammatory pathways with reduced systemic toxicity.
                </p>
                <p>
                  These therapies work by neutralizing pro-inflammatory cytokines (TNF-α, IL-17, IL-12/23), depleting pathogenic B-cells, or inhibiting intracellular signaling cascades (JAK-STAT pathway). This precision targeting achieves disease remission while preserving overall immune function.
                </p>
                <p>
                  Developed through recombinant DNA technology and monoclonal antibody engineering, biologics represent the pinnacle of modern immunology-based therapeutics for autoimmune and inflammatory diseases.
                </p>
              </div>
            </div>
            <div className="bg-novo-gray p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-6">Key Facts</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-gray-900">FDA Approved</div>
                    <div className="text-sm text-gray-900">Rigorous regulatory approval for multiple autoimmune indications</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Extensively Studied</div>
                    <div className="text-sm text-gray-900">Decades of clinical trials with over 100,000 patient-years of safety data</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Disease-Modifying</div>
                    <div className="text-sm text-gray-900">Prevents irreversible joint damage and organ complications</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Cold Chain Required</div>
                    <div className="text-sm text-gray-900">Temperature-controlled storage (2-8°C) to maintain protein stability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How They Work */}
      <section className="py-20 bg-novo-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Mechanisms of action</h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              Biologics work through targeted immunomodulation at the molecular level
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mechanisms.map((mechanism, index) => (
              <div key={index} className="bg-white p-8 rounded-lg text-center">
                <div className="text-primary mb-6 flex justify-center">
                  {mechanism.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{mechanism.title}</h3>
                <p className="text-gray-900 text-sm leading-relaxed">{mechanism.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Biologic Classes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Biologic medication classes</h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              Different therapeutic targets for various autoimmune conditions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {biologicClasses.map((biologic, index) => (
              <div key={index} className="bg-novo-gray p-6 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-bold text-primary mb-3">{biologic.class}</h3>
                <div className="space-y-2">
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Medications:</div>
                    <div className="text-sm text-gray-900">{biologic.medications}</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Indications:</div>
                    <div className="text-sm text-gray-900">{biologic.indications}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Studies */}
      <section className="py-20 bg-novo-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Clinical evidence</h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              Robust clinical trials demonstrating efficacy and safety across autoimmune conditions
            </p>
          </div>
          <div className="space-y-8">
            {studies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-lg">
                <div className="grid md:grid-cols-4 gap-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{study.title}</h3>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{study.results}</div>
                    <div className="text-sm text-gray-900 mt-1">Primary Outcome</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{study.participants}</div>
                    <div className="text-sm text-gray-900 mt-1">Study Size</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{study.duration}</div>
                    <div className="text-sm text-gray-900 mt-1">Duration</div>
                  </div>
                </div>
                <p className="text-gray-900">{study.findings}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Clinical outcomes</h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              Biologic therapies provide transformative outcomes backed by clinical data
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-novo-gray p-8 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary mb-3">{benefit.value}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.metric}</h3>
                <p className="text-gray-900 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-20 bg-novo-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Safety & monitoring</h2>
            <p className="text-xl text-gray-900 max-w-3xl mx-auto">
              Understanding risks and clinical monitoring protocols
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 border-2 border-green-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Common Manageable Risks</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-gray-900">
                    <span className="font-semibold">Injection site reactions</span> - Local erythema, mild discomfort (usually resolves within 3-5 days)
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-gray-900">
                    <span className="font-semibold">Upper respiratory infections</span> - Increased susceptibility, typically mild
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-gray-900">
                    <span className="font-semibold">Infusion reactions</span> - Managed with premedication protocols
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-gray-900">
                    <span className="font-semibold">Mild laboratory abnormalities</span> - Monitored through routine blood work
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-yellow-50 border-2 border-yellow-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-900 mb-4">Serious Risks Requiring Monitoring</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div className="text-gray-900">
                    <span className="font-semibold">Serious infections</span> - TB screening required; monitor for opportunistic infections
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div className="text-gray-900">
                    <span className="font-semibold">Hepatitis B reactivation</span> - Screening and prophylaxis for at-risk patients
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div className="text-gray-900">
                    <span className="font-semibold">Malignancy risk</span> - Long-term surveillance for lymphoma and solid tumors
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div className="text-gray-900">
                    <span className="font-semibold">Cardiovascular events</span> - Risk assessment for JAK inhibitors (black box warning)
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-gray-900 text-center">
              <strong>Clinical Monitoring Protocol:</strong> Regular laboratory monitoring including CBC, liver function, lipid panel, and infection screening ensures early detection and management of potential adverse effects.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Access specialty biologic therapies</h2>
          <p className="text-xl mb-8 text-white/95">
            Expert clinical support, cold chain delivery, and prior authorization assistance for your specialty medication
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/upload-prescription"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300"
            >
              Upload Your Prescription
            </Link>
            <Link
              href="/reviews"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 backdrop-blur-sm"
            >
              Read Patient Stories
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
