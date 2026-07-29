import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-800 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          <div className="space-y-4 md:col-span-1">
            <Link to="/" className="inline-block">
              <img src="/logo.png" alt="XelCo InfraTechnologies" className="h-10 object-contain invert brightness-200" />
            </Link>
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
              Intelligent waste management solutions and urban technology for a sustainable future.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">Products</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><Link to="/products" className="hover:text-primary transition-colors">smartBins for Homes</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">smartBins for Commercial</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">smartBins for Municipal</Link></li>
              <li><Link to="/solutions" className="hover:text-primary transition-colors">View All Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300 mb-4">Legal</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} XelCo InfraTechnologies Pvt. Ltd. All rights reserved.</p>
        <button onClick={scrollToTop} className="flex items-center hover:text-white transition-colors mt-4 md:mt-0 cursor-pointer">
          Back to top <ArrowUp className="ml-1 h-3.5 w-3.5" />
        </button>
      </div>
    </footer>
  );
}
