import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Medshood</h3>
            <p className="text-gray-400 mb-4">
              India's leading super specialty pharmacy providing biologic therapies, rare disease medications, and clinical support for complex conditions.
            </p>
            <div className="text-sm text-gray-500 space-y-1">
              <p className="font-semibold text-gray-300">Operating Hours:</p>
              <p>24/7 Customer Support</p>
              <p>Pharmacy: Mon-Sat 9 AM - 9 PM IST</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Pharmacy Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/categories" className="hover:text-white transition">Therapeutic Areas</Link></li>
              <li><Link href="/specialty-biologics" className="hover:text-white transition">The Science</Link></li>
              <li><Link href="/upload-prescription" className="hover:text-white transition">Upload Prescription</Link></li>
              <li><Link href="/patient-assistance" className="hover:text-white transition">Patient Assistance</Link></li>
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

        {/* Pharmacy License & Compliance Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* Pharmacy License */}
            <div className="text-center md:text-left">
              <p className="text-sm font-semibold text-gray-300 mb-2">Licensed Pharmacy</p>
              <p className="text-xs text-gray-500">License No: DL-XXX-XXXXX-XXXX</p>
              <p className="text-xs text-gray-500">Issued by: Drug Controller, Govt. of India</p>
            </div>

            {/* Physical Address */}
            <div className="text-center md:text-left">
              <p className="text-sm font-semibold text-gray-300 mb-2">Registered Address</p>
              <p className="text-xs text-gray-500">
                Medshood Specialty Pharmacy<br />
                [Address Line 1]<br />
                [City, State - Pincode], India
              </p>
            </div>

            {/* Compliance Badges */}
            <div className="text-center md:text-right">
              <p className="text-sm font-semibold text-gray-300 mb-2">Security & Compliance</p>
              <div className="flex flex-wrap justify-center md:justify-end gap-2 text-xs">
                <span className="bg-green-900/30 text-green-400 px-2 py-1 rounded border border-green-800">
                  🔒 HIPAA Compliant
                </span>
                <span className="bg-blue-900/30 text-blue-400 px-2 py-1 rounded border border-blue-800">
                  🔐 256-bit Encryption
                </span>
                <span className="bg-purple-900/30 text-purple-400 px-2 py-1 rounded border border-purple-800">
                  ✓ FDA Registered
                </span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 pt-6 border-t border-gray-800">
            <p>&copy; {new Date().getFullYear()} Medshood. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Medshood is a specialty pharmacy platform. All medications require a valid prescription. Always consult with your healthcare provider before starting any specialty medication.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
