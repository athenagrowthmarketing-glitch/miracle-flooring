import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, ChevronDown, ShieldCheck, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenEstimate: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { title: 'Hardwood Installation', desc: 'Solid & engineered precision installation', href: '#hardwood' },
    { title: 'Dust-Controlled Refinishing', desc: 'Screening, custom stains & durable poly', href: '#refinishing' },
    { title: 'Luxury Vinyl Plank (LVP)', desc: '100% waterproof, seamless multi-room runs', href: '#lvp' },
    { title: 'Custom Staircases & Repairs', desc: 'Treads, risers, board weaving & transitions', href: '#stairs-repairs' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-brand-navyDark text-slate-300 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-brand-oak" />
              <span>4107 Christacy Way, Marietta, GA • Serving North Metro Atlanta</span>
            </span>
            <span className="flex items-center space-x-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-oak" />
              <span>In-Home Measurements & Transparent Proposals</span>
            </span>
          </div>
          <div className="flex items-center space-x-5">
            <a 
              href="mailto:Flooringmiracle@gmail.com" 
              className="flex items-center space-x-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-oak" />
              <span>Flooringmiracle@gmail.com</span>
            </a>
            <a 
              href="tel:14703536909" 
              className="flex items-center space-x-1.5 text-white font-semibold hover:text-brand-oak transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-oak" />
              <span>(470) 353-6909</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar with Rounded Border */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2.5 sm:pt-3">
        <nav className={`transition-all duration-300 rounded-2xl border border-brand-charcoal/10 px-4 sm:px-6 py-2 shadow-card ${
          isScrolled 
            ? 'bg-brand-warmWhite/95 backdrop-blur-md shadow-elevated' 
            : 'bg-brand-warmWhite/95 backdrop-blur-sm'
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo Emblem Card */}
            <a href="#" className="flex items-center group py-0.5">
              <div className="bg-white rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-sm border border-brand-charcoal/10 group-hover:border-brand-navy/30 transition-all duration-200 flex items-center justify-center">
                <img 
                  src="/images/logo_white_bg.png" 
                  alt="Miracle Flooring" 
                  className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
                />
              </div>
            </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-brand-charcoal">
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <a 
                href="#services"
                className="flex items-center space-x-1 py-2 hover:text-brand-red transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-brand-red' : ''}`} />
              </a>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white shadow-elevated rounded-lg border border-brand-charcoal/8 py-3 animate-in fade-in slide-in-from-top-2 duration-200">
                  {services.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      className="block px-4 py-2.5 hover:bg-brand-stone transition-colors group"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <div className="text-brand-navy font-semibold text-sm group-hover:text-brand-red transition-colors">
                        {item.title}
                      </div>
                      <div className="text-xs text-brand-charcoalLight mt-0.5">
                        {item.desc}
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#portfolio" className="hover:text-brand-red transition-colors">
              Projects
            </a>
            <a href="#process" className="hover:text-brand-red transition-colors">
              Our Standard
            </a>
            <a href="#reviews" className="hover:text-brand-red transition-colors">
              Reviews
            </a>
            <a href="#service-areas" className="hover:text-brand-red transition-colors">
              Service Areas
            </a>
            <a href="#email-contact" className="hover:text-brand-red transition-colors">
              Email Us
            </a>
          </div>

          {/* Right Action Button & Phone */}
          <div className="hidden sm:flex items-center space-x-4">
            <a 
              href="tel:14703536909"
              className="hidden xl:flex items-center space-x-2 text-brand-navy hover:text-brand-red transition-colors font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-brand-red" />
              <span>(470) 353-6909</span>
            </a>

            <button
              onClick={() => onOpenEstimate()}
              className="bg-brand-navy text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded hover:bg-brand-red transition-colors duration-200 shadow-sm flex items-center space-x-2"
            >
              <span>Get Free Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <a 
              href="tel:14703536909"
              className="p-2 text-brand-navy bg-brand-stone rounded-md sm:hidden"
              aria-label="Call Miracle Flooring"
            >
              <Phone className="w-5 h-5 text-brand-red" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-charcoal hover:text-brand-navy focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-brand-warmWhite border-t border-brand-charcoal/10 px-4 pt-4 pb-6 space-y-4 shadow-xl">
            <div className="space-y-1">
              <div className="text-xs uppercase tracking-wider text-brand-charcoalLight/70 font-bold px-3 py-1">
                Flooring Services
              </div>
              {services.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="block px-3 py-2 text-brand-navy font-medium rounded hover:bg-brand-stone"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-brand-charcoal/10 space-y-1">
              <a
                href="#portfolio"
                className="block px-3 py-2 text-brand-charcoal font-medium rounded hover:bg-brand-stone"
                onClick={() => setMobileMenuOpen(false)}
              >
                Project Gallery
              </a>
              <a
                href="#process"
                className="block px-3 py-2 text-brand-charcoal font-medium rounded hover:bg-brand-stone"
                onClick={() => setMobileMenuOpen(false)}
              >
                Craftsmanship Process
              </a>
              <a
                href="#reviews"
                className="block px-3 py-2 text-brand-charcoal font-medium rounded hover:bg-brand-stone"
                onClick={() => setMobileMenuOpen(false)}
              >
                Client Reviews
              </a>
              <a
                href="#service-areas"
                className="block px-3 py-2 text-brand-charcoal font-medium rounded hover:bg-brand-stone"
                onClick={() => setMobileMenuOpen(false)}
              >
                Service Areas (Marietta & Metro Atlanta)
              </a>
              <a
                href="#email-contact"
                className="block px-3 py-2 text-brand-charcoal font-medium rounded hover:bg-brand-stone"
                onClick={() => setMobileMenuOpen(false)}
              >
                Direct Email & Floor Plans
              </a>
            </div>

            <div className="pt-4 border-t border-brand-charcoal/10 flex flex-col space-y-3">
              <a
                href="tel:14703536909"
                className="w-full py-3 bg-brand-stone text-brand-navy font-bold text-center rounded flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 text-brand-red" />
                <span>Call (470) 353-6909</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimate();
                }}
                className="w-full py-3 bg-brand-navy text-white font-semibold text-center rounded hover:bg-brand-red transition-colors"
              >
                Request In-Home Estimate
              </button>
            </div>
          </div>
        )}
      </nav>
      </div>
    </header>
  );
};
