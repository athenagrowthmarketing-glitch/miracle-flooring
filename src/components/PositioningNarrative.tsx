import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface PositioningNarrativeProps {
  onOpenEstimate: () => void;
}

export const PositioningNarrative: React.FC<PositioningNarrativeProps> = ({ onOpenEstimate }) => {
  return (
    <section className="py-20 lg:py-28 bg-brand-warmWhite border-b border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs uppercase font-bold tracking-widest text-brand-red">
              Architectural Craftsmanship
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-navy leading-tight">
              The Floor Changes How the Entire Home Feels.
            </h2>

            <p className="text-base sm:text-lg text-brand-charcoalLight leading-relaxed">
              Floors take 100% of the daily traffic in your home. They frame every room, reflect every ray of natural light, and define how comfortable, quiet, and elevated your space truly feels.
            </p>

            <p className="text-sm sm:text-base text-brand-charcoalLight leading-relaxed">
              At Miracle Flooring, we don't treat flooring as a fast, cheap subcontract. Whether we are installing solid site-finished white oak, custom-staining historic hardwoods, or running seamless waterproof LVP across an open layout, our work is defined by precision: tight perimeters, clean door casing undercuts, perfectly flat subfloors, and flawless transitions into staircases and fireplaces.
            </p>

            <div className="pt-4 flex items-center space-x-6">
              <div>
                <div className="text-2xl sm:text-3xl font-serif text-brand-navy font-bold">100%</div>
                <div className="text-xs text-brand-charcoalLight uppercase tracking-wider font-semibold mt-0.5">
                  Flooring Focus
                </div>
              </div>
              <div className="w-px h-10 bg-brand-charcoal/15" />
              <div>
                <div className="text-2xl sm:text-3xl font-serif text-brand-navy font-bold">Marietta</div>
                <div className="text-xs text-brand-charcoalLight uppercase tracking-wider font-semibold mt-0.5">
                  Local Cobb County Team
                </div>
              </div>
              <div className="w-px h-10 bg-brand-charcoal/15" />
              <div>
                <div className="text-2xl sm:text-3xl font-serif text-brand-navy font-bold">Clean</div>
                <div className="text-xs text-brand-charcoalLight uppercase tracking-wider font-semibold mt-0.5">
                  Dust Containment
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Column (Dual Architectural Photography) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden shadow-card border border-brand-charcoal/10 aspect-[3/4] bg-slate-100">
                <img
                  src="/images/site_img_02.jpg"
                  alt="Precision hardwood installation in North Atlanta"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3 bg-brand-stone rounded-lg text-xs text-brand-charcoal font-medium">
                <span className="font-bold text-brand-navy">Tight Transitions:</span> Seamless alignment between plank runs and wall baseboards.
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="p-3 bg-brand-navy text-white rounded-lg text-xs">
                <span className="font-bold text-brand-oak">Restoration Standard:</span> Multi-stage grit progression for a glass-smooth satin finish.
              </div>
              <div className="rounded-xl overflow-hidden shadow-card border border-brand-charcoal/10 aspect-[3/4] bg-slate-100">
                <img
                  src="/images/site_img_10.jpg"
                  alt="Finished living space with natural flooring"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
