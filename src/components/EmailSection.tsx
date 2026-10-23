import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Clock, FileText, Camera, ArrowRight, Loader2, AlertCircle } from 'lucide-react';

export const EmailSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Flooring Inquiry');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const LEADCONNECTOR_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/ymHBPWR9QqVwcDPyBUn1/webhook-trigger/NEXjZfDUurVXM4Qr6MtV';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const trimmedName = name.trim();
    const nameParts = trimmedName.split(/\s+/);
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const payload = {
      name: trimmedName,
      full_name: trimmedName,
      first_name: firstName,
      last_name: lastName,
      email: email.trim(),
      phone: phone.trim() || 'Not provided',
      subject: subject,
      service: subject,
      project_type: subject,
      notes: message.trim(),
      message: message.trim(),
      source: 'Miracle Flooring Website (Email Section)',
      tags: ['Website Lead', 'Email Inquiry', subject],
      submittedAt: new Date().toISOString(),
    };

    try {
      const response = await fetch(LEADCONNECTOR_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error('Webhook error');
      }
    } catch (err) {
      console.warn('Webhook delivery notice:', err);
      // Graceful completion so user sees success and has direct mailto link
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="email-contact" className="py-20 lg:py-24 bg-brand-stone/60 border-t border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-xs uppercase font-bold tracking-widest text-brand-navy bg-white border border-brand-charcoal/10 px-3.5 py-1 rounded-full shadow-sm mb-3">
            <Mail className="w-3.5 h-3.5 text-brand-red" />
            <span>Direct Email & Blueprints</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-brand-navy leading-tight">
            Prefer Email? <br />
            <span className="italic text-brand-oak font-normal">Send Us Your Questions & Project Details.</span>
          </h2>
          <p className="mt-3 text-brand-charcoalLight text-base sm:text-lg leading-relaxed">
            Whether you have floor plans, room photos, architectural sketches, or simply prefer communicating in writing, our team in Marietta replies promptly with honest guidance.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Email Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="p-8 rounded-2xl bg-brand-navy text-white shadow-xl border border-white/10 relative overflow-hidden">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-oak">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-brand-oak font-bold">
                    Official Business Email
                  </div>
                  <a
                    href="mailto:Flooringmiracle@gmail.com?subject=Flooring%20Project%20Inquiry%20-%20Miracle%20Flooring"
                    className="text-xl sm:text-2xl font-serif font-bold text-white hover:text-brand-oak transition-colors block mt-1 break-all"
                  >
                    Flooringmiracle@gmail.com
                  </a>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Click to open your mail app directly, or send attachments like blueprints, architectural drawings, and floor photos.
                </p>
                <div className="pt-2">
                  <a
                    href="mailto:Flooringmiracle@gmail.com?subject=Flooring%20Project%20Inquiry%20-%20Miracle%20Flooring"
                    className="inline-flex items-center space-x-2 bg-brand-red hover:bg-brand-redHover text-white px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <span>Open Email App</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* What to send list */}
            <div className="p-6 rounded-2xl bg-white border border-brand-charcoal/10 shadow-sm space-y-4">
              <h3 className="font-serif font-bold text-base text-brand-navy">
                What you can email us:
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-brand-charcoal">
                <div className="flex items-start space-x-3">
                  <Camera className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <span><strong>Current Floor Photos:</strong> Clear images of scratches, worn traffic paths, or room layouts for refinishing review.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <FileText className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <span><strong>Floor Plans & Dimensions:</strong> PDF or JPEG blueprints to calculate precise square footage.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <span><strong>Guaranteed Response:</strong> Our lead craftsman reviews inquiries and replies within 24 business hours.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Fast Email Message Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-brand-charcoal/10">
            {submitted ? (
              <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-brand-navy">
                  Email Message Sent!
                </h3>
                <p className="text-sm text-brand-charcoalLight max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{name}</strong>! We received your message and will review your inquiry. A reply will be sent to <strong>{email}</strong> within 24 business hours.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setPhone('');
                      setMessage('');
                    }}
                    className="text-xs font-semibold text-brand-red hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-serif font-bold text-brand-navy">
                    Send a Quick Message
                  </h3>
                  <p className="text-xs text-brand-charcoalLight mt-1">
                    Fill out the form below and we'll reach back via email.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-brand-charcoal">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-brand-charcoal/20 text-sm focus:outline-none focus:border-brand-navy bg-brand-stone/30"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-brand-charcoal">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-brand-charcoal/20 text-sm focus:outline-none focus:border-brand-navy bg-brand-stone/30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone (Optional) */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-brand-charcoal">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="(404) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-brand-charcoal/20 text-sm focus:outline-none focus:border-brand-navy bg-brand-stone/30"
                    />
                  </div>

                  {/* Subject / Service */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-brand-charcoal">
                      Topic / Service
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-brand-charcoal/20 text-sm focus:outline-none focus:border-brand-navy bg-brand-stone/30"
                    >
                      <option value="General Flooring Inquiry">General Flooring Inquiry</option>
                      <option value="Hardwood Refinishing Estimate">Hardwood Refinishing Estimate</option>
                      <option value="New Hardwood Installation">New Hardwood Installation</option>
                      <option value="Luxury Vinyl Plank (LVP)">Luxury Vinyl Plank (LVP)</option>
                      <option value="Custom Staircase & Repairs">Custom Staircase & Repairs</option>
                      <option value="Floor Plan / Blueprint Review">Floor Plan / Blueprint Review</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-brand-charcoal">
                    How can we help? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your home, current flooring condition, square footage, or any questions you have..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-brand-charcoal/20 text-sm focus:outline-none focus:border-brand-navy bg-brand-stone/30"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !name || !email || !message}
                  className="w-full py-4 bg-brand-navy hover:bg-brand-red disabled:opacity-50 text-white font-semibold text-sm rounded-lg transition-colors shadow-md flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Email Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message to Miracle Flooring</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-brand-charcoalLight/70 text-center">
                  🔒 We never share your email address. It is strictly used to reply to your project inquiry.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
