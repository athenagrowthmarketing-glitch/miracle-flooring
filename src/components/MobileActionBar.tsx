import React from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';

interface MobileActionBarProps {
  onOpenEstimate: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenEstimate }) => {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-brand-warmWhite/95 backdrop-blur-md border-t border-brand-charcoal/10 p-2.5 shadow-elevated">
      <div className="grid grid-cols-2 gap-2">
        <a
          href="tel:14703536909"
          className="flex items-center justify-center gap-1.5 py-3 px-3 bg-brand-stone hover:bg-brand-stoneDark text-brand-navy rounded-lg text-xs font-bold transition-colors border border-brand-charcoal/10"
        >
          <Phone className="w-3.5 h-3.5 text-brand-red" />
          <span>(470) 353-6909</span>
        </a>
        <button
          onClick={onOpenEstimate}
          className="flex items-center justify-center gap-1.5 py-3 px-3 bg-brand-red hover:bg-brand-redHover text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
        >
          <span>Free Estimate</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
