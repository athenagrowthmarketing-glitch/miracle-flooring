import React from 'react';
import { Ruler, Activity, Wind, Sparkles, CheckCircle2 } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'In-Home Consultation & Moisture Assessment',
      icon: Ruler,
      desc: 'We visit your home in Cobb County or surrounding areas, measure every room with laser precision, inspect subfloor condition, and check ambient moisture levels. You receive an itemized, transparent written proposal.',
    },
    {
      num: '02',
      title: 'Surface Leveling & Wood Acclimation',
      icon: Activity,
      desc: 'Floors fail when rushed. We grind or self-level subfloor irregularities to strict 1/8" tolerances. Solid hardwoods acclimate inside your conditioned home to match seasonal humidity before installation starts.',
    },
    {
      num: '03',
      title: 'Master Installation or Dustless Sanding',
      icon: Wind,
      desc: 'Our dedicated technicians execute tight cuts around door casings, seamless plank alignment, or multi-stage sanding with commercial HEPA dust containment systems to protect your HVAC, walls, and furniture.',
    },
    {
      num: '04',
      title: 'Final Detailing & White-Glove Walkthrough',
      icon: Sparkles,
      desc: 'Shoe mouldings and transitions are securely installed, the entire workspace is vacuumed clean, and our lead craftsman walks the entire floor with you to ensure absolute perfection.',
    },
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-brand-stone/40 border-y border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs uppercase font-bold tracking-widest text-brand-red bg-brand-red/10 px-3 py-1 rounded-full inline-block">
            The Miracle Standard
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-navy">
            How True Craftsmanship Happens.
          </h2>
          <p className="text-brand-charcoalLight text-base sm:text-lg">
            No guessing, no shortcuts, and no surprises. A proven 4-stage process designed to protect your home and ensure floors that stay beautiful for decades.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 shadow-card border border-brand-charcoal/8 flex flex-col justify-between relative group hover:border-brand-navy transition-all duration-300"
              >
                {/* Step Number Background Accent */}
                <div className="text-4xl font-serif font-bold text-brand-charcoal/10 group-hover:text-brand-red/20 transition-colors">
                  {step.num}
                </div>

                <div className="my-6 space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-brand-navy/5 text-brand-navy flex items-center justify-center group-hover:bg-brand-navy group-hover:text-white transition-colors duration-200">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-brand-navy leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-charcoalLight leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-charcoal/8 flex items-center space-x-1.5 text-xs text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
