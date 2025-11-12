import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Reviews() {
  const reviews = [
    {
      name: "Priya M.",
      age: 34,
      location: "Mumbai",
      weightLoss: "18 kg in 10 months",
      rating: 5,
      review: "Medshood changed my life. After trying every diet and exercise programme, I finally found something that works. The GLP-1 medication combined with the coaching made all the difference. I've lost 18kg and feel healthier than ever!",
      beforeAfter: true
    },
    {
      name: "Rahul S.",
      age: 42,
      location: "Delhi",
      weightLoss: "22 kg in 12 months",
      rating: 5,
      review: "As someone with diabetes, losing weight was crucial for my health. My doctor at Medshood was fantastic - very supportive and knowledgeable. Not only did I lose weight, but my blood sugar is now well-controlled. Worth every rupee!",
      beforeAfter: true
    },
    {
      name: "Anjali K.",
      age: 29,
      location: "Bangalore",
      weightLoss: "15 kg in 8 months",
      rating: 5,
      review: "I was skeptical about online weight loss programmes, but Medshood exceeded all expectations. The convenience of telehealth consultations, medication delivery, and 24/7 support made it so easy to stick with. Highly recommend!",
      beforeAfter: false
    },
    {
      name: "Vikram P.",
      age: 38,
      location: "Hyderabad",
      weightLoss: "20 kg in 11 months",
      rating: 5,
      review: "The medication worked exactly as promised. I had minimal side effects and the appetite suppression was remarkable. Combined with the meal plans they provided, weight loss became effortless. Best decision I've made for my health.",
      beforeAfter: true
    },
    {
      name: "Sneha R.",
      age: 31,
      location: "Chennai",
      weightLoss: "16 kg in 9 months",
      rating: 5,
      review: "What I love most is the holistic approach. It's not just medication - they help with nutrition, exercise, and mental health. The support team is amazing and always available when I have questions. Couldn't have done it without them!",
      beforeAfter: false
    },
    {
      name: "Arjun T.",
      age: 45,
      location: "Pune",
      weightLoss: "25 kg in 13 months",
      rating: 5,
      review: "After struggling with my weight for 20 years, I finally found a solution that works. The doctors are professional, the process is straightforward, and most importantly - it works! My energy levels are through the roof now.",
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
            Real people. Real results.
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Read success stories from thousands of members who've transformed their lives with Medshood's medical weight loss programme.
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
            <h2 className="text-4xl font-bold text-primary mb-4">Success Stories</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover how Medshood has helped people across India achieve their weight loss goals
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

                {/* Weight Loss Badge */}
                <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Lost {review.weightLoss}
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
              All reviews are from verified Medshood members. Individual results may vary.
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
          <h2 className="text-4xl font-bold mb-6">Ready to write your success story?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of satisfied members who've achieved their weight loss goals with Medshood
          </p>
          <Link 
            href="/quiz" 
            className="inline-block bg-white text-primary px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition text-lg"
          >
            Check Your Eligibility
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
