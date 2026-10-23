import React, { useState, useEffect } from 'react';
import { ShieldCheck, Phone, CheckCircle2, ArrowRight, Clock, Sparkles, Loader2, AlertCircle } from 'lucide-react';

interface EstimateSectionProps {
  initialService?: string;
}

export const EstimateSection: React.FC<EstimateSectionProps> = ({ initialService }) => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(initialService || 'Hardwood Installation');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [zip, setZip] = useState('');
  const [sqft, setSqft] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    }
  }, [initialService]);

  const services = [
    'Hardwood Installation',
    'Dust-Controlled Refinishing',
    'Luxury Vinyl Plank (LVP)',
    'Custom Staircase',
    'Floor Repairs & Patching',
  ];

  const LEADCONNECTOR_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/ymHBPWR9QqVwcDPyBUn1/webhook-trigger/NEXjZfDUurVXM4Qr6MtV';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    let recaptchaToken = '';
    const siteKey = '6LfOpRctAAAAAOJmBcplr60CA0G3y-BnVhXrrFE-';

    if (typeof window !== 'undefined' && (window as any).grecaptcha) {
      try {
        await new Promise<void>((resolve) => {
          (window as any).grecaptcha.ready(() => resolve());
        });
        recaptchaToken = await (window as any).grecaptcha.execute(siteKey, { action: 'estimate_submit' });
      } catch (recaptchaErr) {
        console.warn('reCAPTCHA execution error:', recaptchaErr);
      }
    }

    const trimmedName = name.trim();
    const nameParts = trimmedName.split(/\s+/);
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const leadData = {
      name: trimmedName,
      full_name: trimmedName,
      first_name: firstName,
      last_name: lastName,
      email: email.trim(),
      phone: phone.trim(),
      postal_code: zip.trim(),
      zip: zip.trim(),
      service: selectedService,
      project_type: selectedService,
      sqft: sqft || 'Not specified',
      area_sqft: sqft || 'Not specified',
      notes: notes.trim(),
      message: notes.trim(),
      source: 'Miracle Flooring Website',
      tags: ['Website Lead', 'In-Home Estimate', selectedService],
      submittedAt: new Date().toISOString(),
      token: recaptchaToken,
    };

    try {
      // 1. Primary: Submit through Vercel serverless API (verifies reCAPTCHA & forwards to Webhook)
      const response = await fetch('/api/estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData),
      });

      const result = await response.json().catch(() => ({}));
      if (response.ok && result.success) {
        setSubmitted(true);
      } else {
        throw new Error(result.message || 'API submission fallback needed');
      }
    } catch (err) {
      console.warn('Vercel API route unavailable, delivering directly to LeadConnector Webhook:', err);
      // 2. Resilient Fallback: Deliver directly from client to LeadConnector Webhook
      try {
        await fetch(LEADCONNECTOR_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(leadData),
        });
      } catch (webhookErr) {
        console.error('LeadConnector direct webhook error:', webhookErr);
      }
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="estimate-section" className="py-20 lg:py-28 bg-brand-warmWhite border-t border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-navy rounded-3xl overflow-hidden shadow-2xl border border-white/10 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Why Request an Estimate */}
            <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 bg-gradient-to-br from-brand-navyDark to-brand-navy flex flex-col justify-between space-y-8 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 text-xs uppercase font-bold tracking-widest text-brand-oak bg-white/5 border border-white/10 px-3.5 py-1 rounded-full">
                  <Sparkles className="w-3.5 h-3.5 text-brand-red" />
                  <span>Transparent Pricing</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-serif text-white leading-tight">
                  Request Your Free In-Home Estimate.
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Every great floor starts with an honest conversation and an accurate measurement. We visit your home, inspect your subfloors, discuss wood species and finishes, and provide a clear, itemized proposal with zero hidden surprises.
                </p>
              </div>

              {/* Guarantees List */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Free, no-obligation measurement visit</span>
                </div>
                <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Itemized breakdown (materials, labor & prep)</span>
                </div>
                <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct communication with lead craftsman</span>
                </div>
              </div>

              {/* Fast Phone Option */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Prefer to speak right now?</div>
                  <div className="text-base font-bold text-white">(470) 353-6909</div>
                </div>
                <a
                  href="tel:14703536909"
                  className="p-3 bg-brand-red hover:bg-brand-redHover rounded-lg text-white transition-colors"
                  aria-label="Call Miracle Flooring"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Progressive 2-Step Form */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 bg-white text-brand-charcoal">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-brand-navy">
                    Estimate Request Received!
                  </h3>
                  <p className="text-sm text-brand-charcoalLight max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{name || 'Neighbor'}</strong>! Our lead craftsman in Marietta will review your details and call you at <strong>{phone}</strong> to confirm your in-home measurement window.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setStep(1);
                      setName('');
                      setPhone('');
                      setEmail('');
                      setZip('');
                      setNotes('');
                    }}
                    className="text-xs font-semibold text-brand-red underline hover:text-brand-navy pt-4"
                  >
                    Submit another project request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step Header Indicator */}
                  <div className="flex items-center justify-between border-b border-brand-charcoal/10 pb-4">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-brand-red">
                        Step {step} of 2
                      </div>
                      <div className="text-lg font-serif font-bold text-brand-navy">
                        {step === 1 ? 'Project Type & Contact Info' : 'Project Scope & Square Footage'}
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-brand-charcoalLight/70">
                      {step === 1 ? '50% Complete' : 'Nearly Done'}
                    </div>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {step === 1 ? (
                    <div className="space-y-5 animate-in fade-in duration-200">
                      {/* Select Project Type */}
                      <div className="space-y-2">
                        <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                          Select Project Type *
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {services.map((srv) => (
                            <button
                              type="button"
                              key={srv}
                              onClick={() => setSelectedService(srv)}
                              className={`text-left text-xs font-semibold p-3 rounded-lg border transition-all duration-150 ${
                                selectedService === srv
                                  ? 'bg-brand-navy text-white border-brand-navy shadow-sm'
                                  : 'bg-brand-stone text-brand-charcoal border-brand-charcoal/10 hover:border-brand-navy/50'
                              }`}
                            >
                              {srv}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Name & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="block text-xs font-semibold text-brand-charcoal">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-brand-charcoal/20 text-sm focus:outline-none focus:border-brand-navy bg-brand-stone/30"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="block text-xs font-semibold text-brand-charcoal">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="(404) 000-0000"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-brand-charcoal/20 text-sm focus:outline-none focus:border-brand-navy bg-brand-stone/30"
                          />
                        </div>
                      </div>

                      {/* Email & ZIP Code */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="block text-xs font-semibold text-brand-charcoal">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="john@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-brand-charcoal/20 text-sm focus:outline-none focus:border-brand-navy bg-brand-stone/30"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="block text-xs font-semibold text-brand-charcoal">
                            Metro Atlanta ZIP Code *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. 30066 (Marietta)..."
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-brand-charcoal/20 text-sm focus:outline-none focus:border-brand-navy bg-brand-stone/30"
                          />
                        </div>
                      </div>

                      <button
                        type="button"
                        disabled={!name || !phone || !email || !zip}
                        onClick={() => setStep(2)}
                        className="w-full py-4 bg-brand-navy hover:bg-brand-red disabled:opacity-50 disabled:hover:bg-brand-navy text-white font-semibold text-sm rounded-lg transition-colors flex items-center justify-center space-x-2 mt-2 shadow-md"
                      >
                        <span>Continue to Project Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-5 animate-in fade-in duration-200">
                      {/* Estimated SQFT */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-brand-charcoal">
                          Estimated Area / Square Footage (Optional)
                        </label>
                        <select
                          value={sqft}
                          onChange={(e) => setSqft(e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-brand-charcoal/20 text-sm focus:outline-none focus:border-brand-navy bg-brand-stone/30"
                        >
                          <option value="">I'm not sure / need measurement</option>
                          <option value="Under 500 sq ft">Under 500 sq ft (1 room or stairs)</option>
                          <option value="500 - 1,000 sq ft">500 – 1,000 sq ft (2–3 rooms)</option>
                          <option value="1,000 - 2,000 sq ft">1,000 – 2,000 sq ft (Entire main level)</option>
                          <option value="2,000+ sq ft">2,000+ sq ft (Whole house)</option>
                        </select>
                      </div>

                      {/* Project Notes */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-brand-charcoal">
                          Tell us about your project (Current floor, timeline, questions)
                        </label>
                        <textarea
                          rows={3}
                          placeholder="e.g., We have old carpet we want replaced with LVP, or our oak hardwood is scratched and needs sanding..."
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-brand-charcoal/20 text-sm focus:outline-none focus:border-brand-navy bg-brand-stone/30"
                        />
                      </div>

                      {/* Buttons */}
                      <div className="flex items-center space-x-3 pt-2">
                        <button
                          type="button"
                          disabled={isSubmitting}
                          onClick={() => setStep(1)}
                          className="w-1/3 py-4 bg-brand-stone hover:bg-brand-stoneDark text-brand-charcoal font-semibold text-sm rounded-lg transition-colors"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-2/3 py-4 bg-brand-red hover:bg-brand-redHover disabled:opacity-70 text-white font-semibold text-sm rounded-lg transition-colors shadow-md flex items-center justify-center space-x-2"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>Verifying & Sending...</span>
                            </>
                          ) : (
                            <>
                              <span>Confirm & Request Free Estimate</span>
                              <CheckCircle2 className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  <p className="text-[11px] text-brand-charcoalLight/70 text-center">
                    🔒 We respect your privacy. No spam. You will only receive a direct consultation call from our flooring lead.
                  </p>

                  <p className="text-[10px] text-brand-charcoalLight/50 text-center leading-relaxed">
                    This site is protected by reCAPTCHA and the Google{' '}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-navy">
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-navy">
                      Terms of Service
                    </a>{' '}
                    apply.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
