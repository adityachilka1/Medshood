import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Reviews() {
  const reviews = [
    {
      name: "Priya M.",
      age: 34,
      location: "Mumbai",
      condition: "Rheumatoid Arthritis",
      rating: 5,
      review: "Medshood's specialty pharmacy service has been life-changing. Managing my RA with biologic therapy was expensive and complex, but their clinical team handled all my prior authorizations and insurance coordination. The cold chain delivery ensures my medication arrives safely every time.",
      beforeAfter: true
    },
    {
      name: "Rahul S.",
      age: 42,
      location: "Delhi",
      condition: "Multiple Sclerosis",
      rating: 5,
      review: "As someone with MS, access to disease-modifying therapies is critical. Medshood's clinical pharmacists are incredible - they help me understand my treatment, monitor for side effects, and coordinate with my neurologist. The 24/7 support gives me peace of mind.",
      beforeAfter: true
    },
    {
      name: "Anjali K.",
      age: 29,
      location: "Bangalore",
      condition: "Crohn's Disease",
      rating: 5,
      review: "I was struggling to get my IBD medications covered by insurance. Medshood's prior authorization team handled everything - from documentation to appeals. Now I receive my biologic infusion medications on time, every time. The clinical support is exceptional!",
      beforeAfter: false
    },
    {
      name: "Vikram P.",
      age: 38,
      location: "Hyderabad",
      condition: "Hemophilia A",
      rating: 5,
      review: "Finding factor replacement therapy was always challenging until I found Medshood. They maintain perfect cold chain delivery and their specialty pharmacists understand bleeding disorders. The patient assistance program helped make my treatment affordable.",
      beforeAfter: true
    },
    {
      name: "Sneha R.",
      age: 31,
      location: "Chennai",
      condition: "Psoriatic Arthritis",
      rating: 5,
      review: "The clinical pharmacist team at Medshood is outstanding. They helped me transition to a new biologic, monitored my response, and coordinated with my rheumatologist. Temperature-controlled delivery ensures medication efficacy. Couldn't ask for better specialty pharmacy care!",
      beforeAfter: false
    },
    {
      name: "Arjun T.",
      age: 45,
      location: "Pune",
      condition: "Metastatic Cancer",
      rating: 5,
      review: "During my cancer treatment, Medshood provided essential support. From targeted therapy medications to supportive care, everything arrived on time with proper handling. The clinical team's knowledge of oncology medications and side effect management has been invaluable.",
      beforeAfter: true
    }
  ];

  const stats = [
    { value: "4.9/5", label: "Average Rating" },
    { value: "95%", label: "Would Recommend" },
    { value: "87%", label: "Achieved Goals" },
    { value: "10,000+", label: "Success Stories" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Real patients. Real specialty care.
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Read success stories from patients managing rare diseases and complex conditions with Medshood's specialty pharmacy services.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-novo-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Patient Success Stories</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover how Medshood's specialty pharmacy services help patients across India manage complex medical conditions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Condition Badge */}
                <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {review.condition}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-4 leading-relaxed">"{review.review}"</p>

                {/* Reviewer Info */}
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{review.name}, {review.age}</div>
                  <div className="text-sm text-gray-600">{review.location}</div>
                </div>

                {review.beforeAfter && (
                  <div className="mt-4">
                    <div className="bg-novo-gray p-3 rounded text-center">
                      <div className="text-sm font-semibold text-primary">Before & After Available</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              All reviews are from verified Medshood patients. Individual treatment outcomes may vary. Always consult your healthcare provider.
            </p>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Video Testimonials</h2>
            <p className="text-xl text-gray-700">
              Hear directly from our members about their experiences
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-novo-gray rounded-lg aspect-video flex items-center justify-center">
                <div className="text-center p-6">
                  <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
                  <div className="text-gray-700 font-semibold">Video Testimonial {i}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Get specialty pharmacy support for your condition</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join patients across India who trust Medshood for rare disease and complex specialty medications
          </p>
          <Link
            href="/upload-prescription"
            className="inline-block bg-white text-primary px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition text-lg"
          >
            Upload Your Prescription
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
