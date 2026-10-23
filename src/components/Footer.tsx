import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-8 sm:pt-12 pb-20 lg:pb-12 px-4 sm:px-6 lg:px-8 text-sm">
      <div className="max-w-7xl mx-auto bg-brand-navyDark text-slate-300 rounded-3xl sm:rounded-[2.5rem] border border-white/15 shadow-2xl p-8 sm:p-12 lg:p-14">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Craftsmanship Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Logo Emblem Card */}
            <div className="flex items-center">
              <div className="bg-white rounded-2xl p-3 sm:p-3.5 shadow-md border border-white/20 inline-flex items-center justify-center">
                <img
                  src="/images/logo_white_bg.png"
                  alt="Miracle Flooring"
                  className="h-16 sm:h-20 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Dedicated flooring artisans providing precision hardwood installation, dust-controlled sanding & refinishing, and seamless luxury vinyl plank (LVP) across Cobb County and North Metro Atlanta.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-brand-oak shrink-0" />
                <span>Moisture-Tested Subfloor Preparation & Acclimation</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-brand-oak shrink-0" />
                <span>Commercial Dust Containment Vacuum Technology</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services Sitemap (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-serif font-bold text-base tracking-wide">
              Flooring Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#hardwood" className="hover:text-brand-oak transition-colors">
                  Hardwood Installation (Solid & Engineered)
                </a>
              </li>
              <li>
                <a href="#refinishing" className="hover:text-brand-oak transition-colors">
                  Dust-Controlled Sanding & Refinishing
                </a>
              </li>
              <li>
                <a href="#lvp" className="hover:text-brand-oak transition-colors">
                  Luxury Vinyl Plank (LVP) Flooring
                </a>
              </li>
              <li>
                <a href="#stairs-repairs" className="hover:text-brand-oak transition-colors">
                  Custom Staircases (Treads & Risers)
                </a>
              </li>
              <li>
                <a href="#stairs-repairs" className="hover:text-brand-oak transition-colors">
                  Floor Patching & Board Weaving Repairs
                </a>
              </li>
              <li>
                <a href="#email-contact" className="hover:text-brand-oak transition-colors">
                  Direct Email & Floor Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Areas (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-serif font-bold text-base tracking-wide">
              Service Areas
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>Marietta, GA (Base)</li>
              <li>East Cobb, GA</li>
              <li>Kennesaw, GA</li>
              <li>Roswell, GA</li>
              <li>Alpharetta, GA</li>
              <li>Sandy Springs, GA</li>
              <li>Woodstock, GA</li>
              <li>Smyrna / Vinings, GA</li>
            </ul>
          </div>

          {/* Col 4: Contact & Operations (3 cols - wide so email never breaks) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-serif font-bold text-base tracking-wide">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href="tel:14703536909"
                className="flex items-center space-x-2 text-white hover:text-brand-oak transition-colors font-semibold"
              >
                <Phone className="w-4 h-4 text-brand-red shrink-0" />
                <span>(470) 353-6909</span>
              </a>

              <a
                href="mailto:Flooringmiracle@gmail.com"
                className="flex items-center space-x-2 text-slate-200 hover:text-brand-oak transition-colors font-medium whitespace-nowrap"
              >
                <Mail className="w-4 h-4 text-brand-oak shrink-0" />
                <span>Flooringmiracle@gmail.com</span>
              </a>

              <div className="flex items-start space-x-2 text-slate-300">
                <MapPin className="w-4 h-4 text-brand-oak shrink-0 mt-0.5" />
                <span>4107 Christacy Way, Marietta, GA 30066</span>
              </div>

              <div className="flex items-start space-x-2 text-slate-300">
                <Clock className="w-4 h-4 text-brand-oak shrink-0 mt-0.5" />
                <span>Mon–Sat: 8:00 AM – 6:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal Links & Mandatory Athena Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex items-center space-x-4">
            <span>© {new Date().getFullYear()} Miracle Flooring. All rights reserved.</span>
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-white underline transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-white underline transition-colors"
            >
              Terms of Service
            </button>
          </div>

          {/* Mandatory Athena Growth Marketing Credit */}
          <div className="text-slate-300">
            Developed by: <a href="https://athenagrowthmarketing.com" target="_blank" rel="noopener" className="text-white hover:text-brand-oak underline transition-colors font-medium">Athena Growth Marketing</a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
