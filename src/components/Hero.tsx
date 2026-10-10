import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, MapPin, Phone } from 'lucide-react';

interface HeroProps {
  onOpenEstimate: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimate }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-brand-stone/50 via-brand-warmWhite to-brand-warmWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Strategic Positioning & Conversion */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center space-x-2 bg-brand-navy/5 border border-brand-navy/15 rounded-full px-4 py-1.5 text-xs font-semibold text-brand-navy uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span>Hardwood • Dustless Refinishing • LVP • Marietta, GA</span>
            </div>

            {/* Strategic Headline (Hero Option A) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-brand-navy leading-[1.1] tracking-tight">
              A Better Room Starts From the <span className="italic text-brand-red">Floor Up.</span>
            </h1>

            {/* Subheadline grounded in verified trade */}
            <p className="text-lg sm:text-xl text-brand-charcoalLight font-normal leading-relaxed max-w-2xl">
              Precision hardwood installation, dust-controlled sanding & refinishing, and architectural luxury vinyl plank crafted for Marietta and North Metro Atlanta homes.
            </p>

            {/* Trust Signals Under Headline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center space-x-2 text-sm text-brand-charcoal font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dust-Controlled Sanding Protocol</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-brand-charcoal font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Moisture-Tested Subfloor Preparation</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-brand-charcoal font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct Lead Craftsman Oversight</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-brand-charcoal font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Free In-Home Measurement & Quote</span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={onOpenEstimate}
                className="bg-brand-red hover:bg-brand-redHover text-white px-8 py-4 rounded font-semibold text-base transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 group"
              >
                <span>Request a Free Estimate</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="tel:14703536909"
                className="bg-white hover:bg-brand-stone border border-brand-charcoal/15 text-brand-navy px-6 py-4 rounded font-semibold text-base transition-all duration-200 flex items-center justify-center space-x-2.5"
              >
                <Phone className="w-4 h-4 text-brand-red" />
                <span>(470) 353-6909</span>
              </a>
            </div>

            {/* Micro-Trust Note */}
            <p className="text-xs text-brand-charcoalLight/80 pt-1">
              *Serving Marietta, East Cobb, Kennesaw, Roswell, Alpharetta, and surrounding communities.
            </p>
          </div>

          {/* Right Column: Hero Real Photography & Floating Trust Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Architectural Hero Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border-4 border-white bg-slate-100 aspect-[4/5]">
                <img
                  src="/images/site_img_01.jpg"
                  alt="Hardwood Floor Installation by Miracle Flooring in Marietta, GA"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Clean image without overlapping captions */}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
