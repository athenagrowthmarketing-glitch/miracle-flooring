import React from 'react';
import { Sparkles, DollarSign, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

interface RefinishingFocusProps {
  onOpenEstimate: () => void;
}

export const RefinishingFocus: React.FC<RefinishingFocusProps> = ({ onOpenEstimate }) => {
  return (
    <section className="py-20 lg:py-24 bg-brand-navyDark text-white relative overflow-hidden">
      {/* Background Graphic Lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#C49A6C_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs uppercase font-bold tracking-widest text-brand-oak bg-white/10 px-3.5 py-1 rounded-full border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-brand-red" />
              <span>Restoration Intelligence</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white leading-tight">
              New Floors When You Need Them. <br />
              <span className="italic text-brand-oak">Restored Floors When You Don’t.</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              If your home already has solid hardwood underneath tired carpets or faded polyurethane, you are sitting on one of the most valuable structural assets in residential real estate. Refinishing costs up to 60% less than tearing out and replacing, while preserving tight-grain American lumber that cannot easily be bought today.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/15">
              <div className="space-y-1">
                <div className="text-2xl font-serif text-brand-oak font-bold">~60% Savings</div>
                <div className="text-xs text-slate-300">Compared to complete tear-out & new lumber</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-serif text-brand-oak font-bold">3–4 Days</div>
                <div className="text-xs text-slate-300">Average timeline with fast-curing poly</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-serif text-brand-oak font-bold">Low-VOC</div>
                <div className="text-xs text-slate-300">Odorless commercial waterborne finishes</div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEstimate}
                className="bg-brand-red hover:bg-brand-redHover text-white px-7 py-3.5 rounded font-semibold text-sm transition-all duration-200 flex items-center space-x-2"
              >
                <span>Check If Your Floors Can Be Refinished</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Feature Card */}
          <div className="lg:col-span-5">
            <div className="bg-white/5 border border-white/15 backdrop-blur-md rounded-2xl p-8 space-y-6">
              <h3 className="text-xl font-serif text-white">
                Our 4-Stage Refinishing Protocol
              </h3>

              <div className="space-y-4 text-sm text-slate-200">
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 rounded-full bg-brand-red text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                  <div>
                    <strong className="text-white block">Drum & Edge Leveling:</strong>
                    Coarse grit passes level uneven planks and remove old amber varnish.
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 rounded-full bg-brand-red text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                  <div>
                    <strong className="text-white block">Multi-Stage Rotary Screening:</strong>
                    Graduated grit disc buffers eliminate sanding marks and close the grain.
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 rounded-full bg-brand-red text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                  <div>
                    <strong className="text-white block">Custom Stain Swatches On-Site:</strong>
                    We apply live stain samples directly on your prepped floor for your approval.
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 rounded-full bg-brand-red text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>
                  <div>
                    <strong className="text-white block">Commercial-Grade Protective Coats:</strong>
                    Two to three coats of heavy-traffic polyurethane in matte, satin, or semi-gloss.
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10 text-xs text-brand-oak">
                💡 <strong>Homeowner Tip:</strong> Our commercial vacuum extractors connect directly to our sanders, keeping airborne wood particles out of your ducts and living areas.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
