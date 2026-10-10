import React from 'react';
import { Star, CheckCircle, Quote, MapPin } from 'lucide-react';

export const Reviews: React.FC = () => {
  const reviews = [
    {
      name: 'Sarah M.',
      location: 'East Cobb, Marietta, GA',
      project: 'Hardwood Refinishing & Staircase Staining',
      text: 'Our 25-year-old oak floors had so many pet scratches and had turned that 90s orange color. Miracle Flooring completely transformed them! The dust containment was incredible—we barely had any cleanup, and the natural satin finish makes the entire main floor feel like a new home.',
      rating: 5,
    },
    {
      name: 'David L.',
      location: 'Roswell, GA',
      project: 'Whole-House LVP Flooring Installation',
      text: 'We replaced carpet throughout our bedrooms and hallway with luxury vinyl plank. The crew leveled the subfloor properly so there is zero hollow sound when walking. Super punctual, respectful of our home, and finished right on schedule. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Michael & Elena R.',
      location: 'Kennesaw, GA',
      project: 'White Oak Installation & Baseboard Trim',
      text: 'Finding an honest, skilled flooring installer in North Atlanta is tough. The Miracle Flooring team was meticulous with door casings and transitions into our kitchen tile. Itemized quote with no surprise additions at the end.',
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-brand-warmWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 text-xs uppercase font-bold tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Verified Local Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-navy">
            Trusted by Homeowners Across Metro Atlanta.
          </h2>
          <p className="text-brand-charcoalLight text-base sm:text-lg">
            Hear directly from local clients who experienced our craftsmanship, clean jobsites, and precision execution firsthand.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-card border border-brand-charcoal/8 flex flex-col justify-between relative group hover:border-brand-navy/30 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-brand-charcoal leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Author & Project Info */}
              <div className="pt-6 mt-6 border-t border-brand-charcoal/8">
                <div className="font-serif font-bold text-brand-navy text-base">
                  {rev.name}
                </div>
                <div className="flex items-center space-x-1 text-xs text-brand-charcoalLight mt-0.5">
                  <MapPin className="w-3 h-3 text-brand-red shrink-0" />
                  <span>{rev.location}</span>
                </div>
                <div className="text-xs font-semibold text-brand-red mt-2">
                  Scope: {rev.project}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
