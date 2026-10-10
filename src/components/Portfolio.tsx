import React, { useState } from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';

interface PortfolioProps {
  onOpenEstimate: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenEstimate }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'hardwood', label: 'Hardwood Installation' },
    { id: 'refinishing', label: 'Dustless Refinishing' },
    { id: 'lvp', label: 'LVP & Laminate' },
    { id: 'stairs', label: 'Stairs & Detailing' },
  ];

  const projects = [
    {
      id: 1,
      category: 'hardwood',
      title: 'East Cobb Natural Oak Great Room',
      location: 'Marietta, GA',
      material: '3¼" Solid White Oak • Site-Finished Satin',
      image: '/images/site_img_01.jpg',
      highlight: 'Continuous run through open living area with flush baseboards',
    },
    {
      id: 2,
      category: 'refinishing',
      title: 'Historic Oak Sanding & Restoration',
      location: 'Roswell, GA',
      material: 'Multi-Stage Sanding • Provincial Stain • Commercial Poly',
      image: '/images/site_img_02.jpg',
      highlight: '30-year-old scratched floor restored to showroom finish',
    },
    {
      id: 3,
      category: 'lvp',
      title: 'Waterproof Luxury Vinyl Multi-Room Overhaul',
      location: 'Kennesaw, GA',
      material: '9" Wide Plank Rigid Core SPC • 20mil Wear Layer',
      image: '/images/site_img_07.jpg',
      highlight: 'Seamless transition across kitchen, living room & hallway',
    },
    {
      id: 4,
      category: 'stairs',
      title: 'Carpet-to-Hardwood Staircase Remodel',
      location: 'Marietta, GA',
      material: 'Solid Red Oak Treads • White Enamel Risers',
      image: '/images/site_img_20.jpg',
      highlight: 'Tread stain color-matched precisely to main floor hardwood',
    },
    {
      id: 5,
      category: 'hardwood',
      title: 'Wide-Plank Engineered Hardwood Install',
      location: 'Alpharetta, GA',
      material: '7" European White Oak • Wire-Brushed Matte',
      image: '/images/site_img_10.jpg',
      highlight: 'Subfloor leveled to 1/8" tolerance before glued installation',
    },
    {
      id: 6,
      category: 'refinishing',
      title: 'Dining Room & Foyer Surface Revival',
      location: 'Sandy Springs, GA',
      material: 'Dust-Controlled Sanding • Natural Matte Finish',
      image: '/images/site_img_08.jpg',
      highlight: 'Odorless waterborne finish allowed family to remain in home',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-brand-warmWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-6 md:space-y-0">
          <div className="max-w-2xl space-y-4">
            <div className="text-xs uppercase font-bold tracking-widest text-brand-red">
              Recent Work in Georgia
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-navy">
              Crafted in Homes Across Metro Atlanta.
            </h2>
            <p className="text-brand-charcoalLight text-base sm:text-lg">
              Explore authentic completed projects. Every photo showcases real installations, dustless refinishing, and architectural transitions performed by our crew.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
                  activeFilter === cat.id
                    ? 'bg-brand-navy text-white shadow-sm'
                    : 'bg-brand-stone text-brand-charcoal hover:bg-brand-stoneDark'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-card border border-brand-charcoal/8 flex flex-col group hover:shadow-elevated transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-brand-navy/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-md flex items-center space-x-1.5 border border-white/20">
                  <MapPin className="w-3 h-3 text-brand-oak" />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-serif text-brand-navy leading-snug">
                    {project.title}
                  </h3>
                  <div className="text-xs font-semibold text-brand-red uppercase tracking-wide">
                    {project.material}
                  </div>
                  <p className="text-xs sm:text-sm text-brand-charcoalLight leading-relaxed">
                    {project.highlight}
                  </p>
                </div>

                <div className="pt-3 border-t border-brand-charcoal/8 flex justify-between items-center text-xs">
                  <button
                    onClick={onOpenEstimate}
                    className="text-brand-navy group-hover:text-brand-red font-bold flex items-center space-x-1 transition-colors"
                  >
                    <span>Request Similar Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-brand-charcoalLight/70">Verified Project</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
