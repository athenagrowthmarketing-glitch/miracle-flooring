import React from 'react';
import { Ruler, Wind, Sparkles, Layers, ShieldCheck, MapPin } from 'lucide-react';

export const ProofStrip: React.FC = () => {
  const proofs = [
    {
      icon: Ruler,
      title: 'Precision In-Home Measurement',
      desc: 'Transparent, itemized quotes without hidden fees',
    },
    {
      icon: Wind,
      title: 'Dust-Controlled Sanding',
      desc: 'Commercial containment protecting your home & HVAC',
    },
    {
      icon: Layers,
      title: 'Subfloor Leveling & Prep',
      desc: 'Moisture-tested base to eliminate hollows & squeaks',
    },
    {
      icon: MapPin,
      title: 'Local Marietta, GA Base',
      desc: 'Dedicated local crew serving North Metro Atlanta',
    },
  ];

  return (
    <section className="bg-brand-navy text-white py-8 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {proofs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-start space-x-3.5 group">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-brand-oak shrink-0 group-hover:bg-brand-red group-hover:text-white transition-colors duration-200">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold tracking-wide text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
