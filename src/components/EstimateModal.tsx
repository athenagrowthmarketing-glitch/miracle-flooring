import React from 'react';
import { X } from 'lucide-react';
import { EstimateSection } from './EstimateSection.tsx';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  service?: string;
}

export const EstimateModal: React.FC<EstimateModalProps> = ({ isOpen, onClose, service }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-brand-navy rounded-3xl overflow-hidden shadow-2xl border border-white/20 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Reuse the inner structure */}
        <div className="p-2 sm:p-4">
          <EstimateSection initialService={service} />
        </div>

      </div>
    </div>
  );
};
