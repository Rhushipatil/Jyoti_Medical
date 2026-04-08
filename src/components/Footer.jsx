// Footer.jsx
import logo from '../assets/jyoti-medical-logo.svg';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6 inline-flex items-center rounded-xl bg-white/95 px-3 py-2 shadow-sm">
              <img
                src={logo}
                alt="Jyoti Medical"
                className="h-10 w-auto max-w-[220px] object-contain"
              />
            </div>
            <p className="text-slate-400 mb-6">Your trusted online pharmacy. Delivering genuine medicines to your doorstep quickly and safely.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Browse Medicines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Upload Prescription</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Health Articles</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Fever & Pain</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Diabetes Care</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Heart Health</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vitamins & Supplements</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>1800-123-4567</li>
              <li>support@jyotimedical.com</li>
              <li>123 Healthcare Avenue, Mumbai, India</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Jyoti Medical. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
