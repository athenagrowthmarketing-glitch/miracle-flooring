import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-brand-charcoal/15 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-brand-charcoal/10 flex items-center justify-between bg-brand-stone/50">
          <div className="flex items-center gap-2 text-brand-navy">
            {type === 'privacy' ? <ShieldCheck className="w-5 h-5 text-brand-red" /> : <FileText className="w-5 h-5 text-brand-red" />}
            <h3 className="text-base font-serif font-bold text-brand-navy">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-brand-charcoalLight hover:text-brand-navy hover:bg-brand-stone transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-4 text-xs sm:text-sm text-brand-charcoalLight leading-relaxed font-sans">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>Last Updated: October 2026</strong>
              </p>
              <p>
                This Privacy Policy explains how <strong>Miracle Flooring</strong> ("we", "us", or "our"), located in Marietta, Georgia, collects, uses, and safeguards personal information provided by homeowners across North Metro Atlanta when visiting our website or submitting estimate requests.
              </p>
              <h4 className="font-bold text-brand-navy font-serif text-sm">1. Information We Collect</h4>
              <p>
                We collect personal information that you voluntarily supply when requesting a project consultation, including your name, telephone number, email address, physical location or ZIP code, and flooring specifications.
              </p>
              <h4 className="font-bold text-brand-navy font-serif text-sm">2. Use of Information</h4>
              <p>
                Information collected is utilized strictly to provide flooring estimates, schedule in-home measurements, communicate regarding installation schedules, and provide customer support. We do not sell, rent, or lease homeowner contact information to any third-party marketing companies.
              </p>
              <h4 className="font-bold text-brand-navy font-serif text-sm">3. Contact Information</h4>
              <p>
                For questions regarding this policy or your personal data, contact us directly at:
                <br />
                <strong>Miracle Flooring</strong>
                <br />
                4107 Christacy Way, Marietta, GA 30066
                <br />
                Phone: (470) 353-6909
                <br />
                Email: Flooringmiracle@gmail.com
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Last Updated: October 2026</strong>
              </p>
              <p>
                By requesting an estimate or contracting services with <strong>Miracle Flooring</strong>, you agree to the following terms and operational conditions.
              </p>
              <h4 className="font-bold text-brand-navy font-serif text-sm">1. Estimates and Proposals</h4>
              <p>
                Initial in-home estimates are provided free of charge for qualifying residential properties within our Metro Atlanta service radius. Proposals are based on visible site conditions at the time of measurement. Any unforeseen structural subfloor damage (such as hidden moisture rotted joists) discovered during demolition will be presented in writing before additional work proceeds.
              </p>
              <h4 className="font-bold text-brand-navy font-serif text-sm">2. Site Preparation & Acclimation</h4>
              <p>
                Solid and engineered hardwood products must acclimate in the conditioned home environment according to NWFA guidelines prior to fastening. Homeowners are responsible for maintaining normal indoor relative humidity (35%–55%) and temperature prior to, during, and after installation.
              </p>
              <h4 className="font-bold text-brand-navy font-serif text-sm">3. Direct Oversight</h4>
              <p>
                All installation, dustless sanding, staining, and finishing work is supervised directly by our experienced lead technicians based out of Marietta, GA.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-brand-charcoal/10 bg-brand-stone/30 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-brand-navy text-white text-xs font-semibold rounded-md hover:bg-brand-red transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
