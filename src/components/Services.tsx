import React from 'react';
import { ArrowRight, Check, Sparkles, Layers, ShieldCheck, Hammer } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const servicesList = [
    {
      id: 'hardwood',
      title: 'Hardwood Flooring Installation',
      subtitle: 'Solid & Engineered Hardwood Specialists',
      desc: 'Permanent value, timeless character, and authentic warmth. We install solid pre-finished and site-finished hardwood, as well as wide-plank engineered systems engineered for Georgia climate resilience.',
      image: '/images/site_img_03.jpg',
      points: [
        'Subfloor moisture testing & plywood preparation',
        'Acclimation in conditioned indoor environment',
        'Tight undercut door casings & custom baseboard fitting',
        'Oak, Hickory, Walnut & specialty American hardwoods',
      ],
      tag: 'Core Authority',
    },
    {
      id: 'refinishing',
      title: 'Dust-Controlled Sanding & Refinishing',
      subtitle: 'Bring Original Hardwood Back to Life',
      desc: 'Scratched, yellowed, or faded floors? Do not tear them out. Our multi-stage dust-controlled sanding strips away years of wear and applies modern, durable commercial-grade waterborne polyurethane or custom stains.',
      image: '/images/site_img_08.jpg',
      points: [
        'Commercial dust containment protecting walls & HVAC',
        'Custom on-site stain testing directly on your floor',
        'Odorless, fast-drying commercial satin/matte topcoats',
        'Deep scratch, pet stain & traffic lane elimination',
      ],
      tag: 'Highest ROI',
    },
    {
      id: 'lvp',
      title: 'Luxury Vinyl Plank (LVP) & Laminate',
      subtitle: '100% Waterproof, Modern Seamless Living',
      desc: 'High-traffic households with kids and pets demand extreme durability without sacrificing luxury aesthetics. We install rigid core SPC vinyl plank and high-density laminate with authentic wood grain and zero hollow clicking.',
      image: '/images/site_img_07.jpg',
      points: [
        'Continuous multi-room runs through kitchens & baths',
        'Commercial 20mil+ ceramic-bead wear layers',
        'Subfloor grinding & self-leveling to prevent bounce',
        'Authentic embossed-in-register (EIR) matte textures',
      ],
      tag: 'Family & Pet Favorite',
    },
    {
      id: 'stairs-repairs',
      title: 'Custom Staircases & Precision Repairs',
      subtitle: 'Architectural Details & Flawless Integration',
      desc: 'The staircase is the focal point of the home. We craft custom hardwood treads and risers that match your main floors, and weave new wood boards into damaged floors with invisible transitions.',
      image: '/images/site_img_20.jpg',
      points: [
        'Carpet-to-hardwood staircase conversions',
        'Precision nosing, risers & exact stain matching',
        'Water-damage board lacing & structural patch repairs',
        'Flush fireplace hearth & tile transition thresholds',
      ],
      tag: 'Craftsmanship Proof',
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-brand-stone/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs uppercase font-bold tracking-widest text-brand-red bg-brand-red/10 px-3 py-1 rounded-full">
            <span>Specialized Flooring Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-navy">
            Crafted for Beauty. Built for Daily Life.
          </h2>
          <p className="text-brand-charcoalLight text-base sm:text-lg">
            We don’t offer generic remodeling. Every tool, technician, and process at Miracle Flooring is dedicated to one thing: delivering flawless floors across Marietta and Metro Atlanta.
          </p>
        </div>

        {/* Services Grid (2x2 High Craft Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {servicesList.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-white rounded-2xl overflow-hidden shadow-card border border-brand-charcoal/8 flex flex-col group hover:shadow-elevated transition-all duration-300"
            >
              {/* Image Header with Tag */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-brand-navy/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                  {service.tag}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="text-xs uppercase font-bold tracking-wider text-brand-red">
                    {service.subtitle}
                  </div>
                  <h3 className="text-2xl font-serif text-brand-navy leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-brand-charcoalLight leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Bullet Checklist */}
                  <div className="pt-3 space-y-2.5">
                    {service.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-brand-charcoal font-medium">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-4 border-t border-brand-charcoal/8 flex items-center justify-between">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="text-brand-navy group-hover:text-brand-red font-bold text-sm flex items-center space-x-2 transition-colors"
                  >
                    <span>Get Estimate for {service.title.split(' ')[0]}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <a
                    href="tel:14703536909"
                    className="text-xs text-brand-charcoalLight font-semibold hover:text-brand-navy"
                  >
                    Direct: (470) 353-6909
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
