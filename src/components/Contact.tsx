import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Send,
  MessageSquare,
  Copy,
  Check,
  ExternalLink,
  Loader2,
  AlertCircle,
  Phone,
} from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface ContactProps {
  profile: ProfileData;
  prefilledSubject?: string;
}

export const Contact: React.FC<ContactProps> = ({ profile, prefilledSubject = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: prefilledSubject,
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedModalOpen, setSubmittedModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Update subject if parent changes it
  React.useEffect(() => {
    if (prefilledSubject) {
      setFormData((prev) => ({ ...prev, subject: prefilledSubject }));
    }
  }, [prefilledSubject]);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format (e.g. name@domain.com).';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please write a message before sending.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Message must be at least 15 characters long.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    // Simulate sending delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedModalOpen(true);
    }, 800);
  };

  const handleCopyEmail = () => {
    if (profile.email) {
      navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const triggerDirectMailto = () => {
    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-xl mb-14">
          <p className="text-xs uppercase font-mono tracking-widest text-indigo-400 mb-2">
            Get In Touch
          </p>
          <h2 className="font-['Outfit'] font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Let's Build Something Exceptional
          </h2>
          <p className="text-sm text-slate-400 mt-2 font-light">
            Available for technical advising, design systems engineering, and full-stack contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Left Column: Direct channels and coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Email direct copy box */}
              <div className="p-6 rounded-2xl bg-[#0E1118] border border-white/[0.06] hover:border-white/[0.12] transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-indigo-400 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" />
                    Direct Email
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 text-xs text-slate-400 hover:text-white hover:bg-white/[0.06] rounded flex items-center gap-1 transition-colors"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-mono text-[11px]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${profile.email}`}
                  className="font-['Outfit'] text-lg sm:text-xl font-bold text-white hover:text-indigo-300 transition-colors block break-all"
                >
                  {profile.email || '[YOUR EMAIL]'}
                </a>
                <p className="text-xs text-slate-400 mt-2 font-light">
                  Direct inquiries typically answered within 24 business hours.
                </p>
              </div>

              {/* Location Card */}
              <div className="p-6 rounded-2xl bg-[#0E1118] border border-white/[0.06]">
                <span className="text-xs font-mono text-indigo-400 flex items-center gap-1.5 mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  Primary Location
                </span>
                <p className="font-['Outfit'] text-lg font-bold text-white">
                  {profile.location || '[YOUR CITY]'}
                </p>
                <p className="text-xs text-slate-400 mt-1 font-light">
                  Indian Standard Time (IST / UTC+5:30) · Open to global remote collaboration.
                </p>
              </div>

              {/* Optional WhatsApp Link */}
              {profile.whatsapp && (
                <div className="p-6 rounded-2xl bg-[#0E1118] border border-white/[0.06] flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 mb-1">
                      <MessageSquare className="w-3.5 h-3.5" />
                      Instant Messaging
                    </span>
                    <p className="text-sm font-semibold text-white">WhatsApp Chat</p>
                    <p className="text-xs text-slate-400 font-light">Direct messaging for urgent inquiries</p>
                  </div>
                  <a
                    href={`https://wa.me/${profile.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 rounded-lg hover:bg-emerald-900/50 transition-colors"
                  >
                    <span>Chat Now</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>

            {/* Response Time Guarantee */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-white/[0.05] text-xs text-slate-400 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span>Current Status: Accepting new client projects & technical advisory roles.</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl bg-[#0E1118] border border-white/[0.08] shadow-xl">
              <h3 className="font-['Outfit'] font-bold text-xl text-white mb-6">
                Send a Direct Message
              </h3>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-slate-300 mb-1.5"
                    >
                      Your Name <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className={`w-full px-3.5 py-2.5 bg-[#090A0F] border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-rose-500/80 focus:border-rose-400'
                          : 'border-white/[0.08] focus:border-indigo-500'
                      }`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-slate-300 mb-1.5"
                    >
                      Your Email <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className={`w-full px-3.5 py-2.5 bg-[#090A0F] border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-rose-500/80 focus:border-rose-400'
                          : 'border-white/[0.08] focus:border-indigo-500'
                      }`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-medium text-slate-300 mb-1.5"
                  >
                    Subject <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="E.g., Design System Architecture / Consulting"
                    className={`w-full px-3.5 py-2.5 bg-[#090A0F] border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.subject
                        ? 'border-rose-500/80 focus:border-rose-400'
                        : 'border-white/[0.08] focus:border-indigo-500'
                    }`}
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-slate-300 mb-1.5"
                  >
                    Message Details <span className="text-indigo-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your project, timelines, and requirements..."
                    className={`w-full px-3.5 py-2.5 bg-[#090A0F] border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                      errors.message
                        ? 'border-rose-500/80 focus:border-rose-400'
                        : 'border-white/[0.08] focus:border-indigo-500'
                    }`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-600/50 rounded-lg shadow-md transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Validating & Preparing...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Accurate Form Delivery Modal (No fake success claiming email sent when backend is not hooked up) */}
      {submittedModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
        >
          <div className="bg-[#0E1118] border border-white/[0.12] rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <Check className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h4 className="font-['Outfit'] font-bold text-lg text-white">
                  Message Ready to Transmit
                </h4>
                <p className="text-xs text-slate-400 font-mono">
                  Frontend Demonstration & Fallback State
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              Your inquiry has been formatted. Because this frontend environment does not have a live server-side SMTP gateway attached, we provide a 100% reliable direct fallback so no communication is lost:
            </p>

            <div className="p-3.5 rounded-lg bg-black/50 border border-white/[0.06] text-xs text-slate-300 font-mono space-y-1">
              <div><strong className="text-indigo-300">From:</strong> {formData.name} ({formData.email})</div>
              <div><strong className="text-indigo-300">Subject:</strong> {formData.subject}</div>
              <div className="truncate"><strong className="text-indigo-300">Body:</strong> {formData.message}</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={triggerDirectMailto}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open in Email App</span>
              </button>

              <button
                onClick={() => {
                  setSubmittedModalOpen(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                Close & Return
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
