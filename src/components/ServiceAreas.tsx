import React from 'react';
import { MapPin, Navigation, Phone, CheckCircle2 } from 'lucide-react';

interface ServiceAreasProps {
  onOpenEstimate: () => void;
}

export const ServiceAreas: React.FC<ServiceAreasProps> = ({ onOpenEstimate }) => {
  const cities = [
    { name: 'Marietta, GA', area: 'Downtown, West Cobb & Historic District', zip: '30060, 30062, 30064, 30066' },
    { name: 'East Cobb, GA', area: 'Walton, Pope & Wheeler High Districts', zip: '30062, 30067, 30068' },
    { name: 'Kennesaw, GA', area: 'Kennesaw Mountain, Legacy Park & North Cobb', zip: '30144, 30152' },
    { name: 'Roswell, GA', area: 'Historic Roswell, River Falls & North Fulton', zip: '30075, 30076' },
    { name: 'Alpharetta, GA', area: 'Downtown, Windward & Crabapple Border', zip: '30004, 30005, 30009, 30022' },
    { name: 'Sandy Springs, GA', area: 'North Springs, Riverside & Perimeter', zip: '30328, 30350' },
    { name: 'Woodstock, GA', area: 'Towne Lake, Downtown & South Cherokee', zip: '30188, 30189' },
    { name: 'Smyrna / Vinings, GA', area: 'Market Village, King Springs & Cumberland', zip: '30080, 30082' },
  ];

  return (
    <section id="service-areas" className="py-20 lg:py-28 bg-brand-stone/40 border-t border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 text-xs uppercase font-bold tracking-widest text-brand-navy bg-brand-navy/10 px-3.5 py-1 rounded-full">
            <Navigation className="w-3.5 h-3.5 text-brand-red" />
            <span>North Metro Atlanta Service Area</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-navy">
            Flooring Craftsmanship in Your Neighborhood.
          </h2>
          <p className="text-brand-charcoalLight text-base sm:text-lg">
            Based at 4107 Christacy Way in Marietta, we dispatch our dedicated flooring crew across Cobb, North Fulton, and Cherokee counties.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cities.map((city, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 shadow-card border border-brand-charcoal/8 hover:border-brand-navy transition-all duration-200"
            >
              <div className="flex items-center space-x-2 text-brand-navy font-serif font-bold text-lg">
                <MapPin className="w-4 h-4 text-brand-red shrink-0" />
                <span>{city.name}</span>
              </div>
              <p className="text-xs text-brand-charcoalLight mt-1.5 leading-relaxed">
                {city.area}
              </p>
              <div className="mt-3 pt-3 border-t border-brand-charcoal/8 text-[11px] text-brand-charcoalLight/70 font-mono">
                ZIPs: {city.zip}
              </div>
            </div>
          ))}
        </div>

        {/* Local Dispatch Box */}
        <div className="bg-brand-navy text-white rounded-2xl p-8 sm:p-10 shadow-elevated flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-serif text-white">
              Not sure if your home is in our service radius?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Give us a quick call or submit your ZIP code in our estimate form. We travel throughout North Metro Atlanta for qualifying hardwood and flooring projects.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="tel:14703536909"
              className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded font-bold text-sm border border-white/20 transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 text-brand-oak" />
              <span>(470) 353-6909</span>
            </a>
            <button
              onClick={onOpenEstimate}
              className="w-full sm:w-auto px-6 py-3.5 bg-brand-red hover:bg-brand-redHover text-white rounded font-bold text-sm transition-colors shadow-md"
            >
              Check My ZIP Code
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
