import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Medshood</h3>
            <p className="text-gray-400">
              Medical weight loss programme with GLP-1 treatments, doctor consultations, and ongoing support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Programme</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/weight-loss" className="hover:text-white transition">Weight Loss</Link></li>
              <li><Link href="/how-we-work" className="hover:text-white transition">How We Work</Link></li>
              <li><Link href="/the-science-glp" className="hover:text-white transition">The Science</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition">Pricing</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/faqs" className="hover:text-white transition">FAQs</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link href="/support" className="hover:text-white transition">Help Center</Link></li>
              <li><Link href="/reviews" className="hover:text-white transition">Reviews</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="hover:text-white transition">Medical Disclaimer</Link></li>
              <li><Link href="/cookies" className="hover:text-white transition">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Medshood. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Medshood is a telehealth platform. Always consult with your healthcare provider before starting any treatment.
          </p>
        </div>
      </div>
    </footer>
  );
}
