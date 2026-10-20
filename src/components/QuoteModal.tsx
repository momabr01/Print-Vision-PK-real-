import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { SITE_CONFIG, SERVICES_DATA } from '../config/siteConfig.ts';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    serviceId: initialServiceId || 'corporate-printing',
    budgetRange: 'PKR 500,000 – 1,500,000',
    deadline: '',
    description: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.company.trim()) errs.company = 'Company name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone or WhatsApp number is required';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Please provide a valid contact number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Work email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.description.trim()) {
      errs.description = 'Please outline your project scope or specifications';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleWhatsAppSend = () => {
    const selectedService =
      SERVICES_DATA.find((s) => s.id === formData.serviceId)?.title || 'Corporate Advertising Solutions';
    const message = encodeURIComponent(
      `Hello PrintVision Team (Lahore),\n\nI would like to request a quotation for: ${selectedService}\n\nClient: ${formData.name || 'Corporate Inquirer'}\nCompany: ${formData.company || 'N/A'}\nContact: ${formData.phone || 'N/A'}\nEmail: ${formData.email || 'N/A'}\nEstimated Budget: ${formData.budgetRange}\nTarget Timeline: ${formData.deadline || 'To be discussed'}\n\nProject Brief:\n${formData.description || 'Looking to discuss specifications and pricing.'}\n\nPlease let me know when we can connect.`
    );
    window.open(`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${message}`, '_blank');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      serviceId: 'corporate-printing',
      budgetRange: 'PKR 500,000 – 1,500,000',
      deadline: '',
      description: '',
    });
    setErrors({});
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-3xl shadow-2xl border border-[#E5DFD3] overflow-hidden my-8">
        {/* Header */}
        <div className="bg-[#16130F] text-[#F3EFE7] px-6 py-5 flex items-center justify-between border-b border-[#26201A]">
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-[#E8791F] mb-1">
              PrintVision Commercial Enquiry · Est. 1997 Lahore
            </div>
            <h2 className="text-xl font-bold text-white">Request a Formal Project Quotation</h2>
          </div>
          <button
            onClick={onClose}
            className="text-[#F3EFE7]/60 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-[#16130F]">
                Quotation Request Staged
              </h3>
              <p className="text-[#16130F]/75 max-w-md mx-auto text-sm leading-relaxed">
                Thank you, <span className="font-semibold text-[#16130F]">{formData.name}</span>. Your enquiry for <span className="font-semibold text-[#16130F]">{formData.company}</span> has been validated for review by our Lahore technical desk.
              </p>

              <div className="bg-[#F3EFE7] border border-[#E5DFD3] rounded-xl p-4 text-left text-xs text-[#16130F]/80 max-w-md mx-auto space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-[#E8791F]">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Production Handshake Notice</span>
                </div>
                <p>
                  This frontend interface has staged your brief. For instant correspondence, transmit your details directly to our WhatsApp project desk in Lahore.
                </p>
              </div>

              {/* Quick WhatsApp Connect */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleWhatsAppSend}
                  className="px-5 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp to Team</span>
                </button>
                <button
                  onClick={handleReset}
                  className="px-5 py-3 text-sm font-semibold text-[#16130F] bg-white border border-[#E5DFD3] hover:bg-[#F3EFE7] rounded-xl transition-colors cursor-pointer"
                >
                  Submit Another Project
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-3 text-sm font-semibold text-[#16130F]/60 hover:text-[#16130F] transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#16130F] mb-1">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Asad Siddiqui"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#16130F] bg-white placeholder-[#16130F]/40 focus:outline-none focus:ring-2 ${
                      errors.name
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-[#E5DFD3] focus:border-[#E8791F] focus:ring-[#E8791F]/15'
                    }`}
                  />
                  {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#16130F] mb-1">
                    Company / Organisation <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Packages Limited / Retail Brand"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#16130F] bg-white placeholder-[#16130F]/40 focus:outline-none focus:ring-2 ${
                      errors.company
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-[#E5DFD3] focus:border-[#E8791F] focus:ring-[#E8791F]/15'
                    }`}
                  />
                  {errors.company && <p className="text-red-600 text-xs mt-1">{errors.company}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone or WhatsApp */}
                <div>
                  <label className="block text-xs font-semibold text-[#16130F] mb-1">
                    Phone or WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +92 300 4567890"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#16130F] bg-white placeholder-[#16130F]/40 focus:outline-none focus:ring-2 ${
                      errors.phone
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-[#E5DFD3] focus:border-[#E8791F] focus:ring-[#E8791F]/15'
                    }`}
                  />
                  {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold text-[#16130F] mb-1">
                    Official Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. marketing@company.com.pk"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#16130F] bg-white placeholder-[#16130F]/40 focus:outline-none focus:ring-2 ${
                      errors.email
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-[#E5DFD3] focus:border-[#E8791F] focus:ring-[#E8791F]/15'
                    }`}
                  />
                  {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Services Dropdown */}
                <div>
                  <label className="block text-xs font-semibold text-[#16130F] mb-1">
                    Primary Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.serviceId}
                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5DFD3] bg-white text-sm text-[#16130F] focus:outline-none focus:border-[#E8791F] focus:ring-2 focus:ring-[#E8791F]/15 cursor-pointer"
                  >
                    {SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={srv.id}>
                        {srv.orderNumber}. {srv.title}
                      </option>
                    ))}
                    <option value="multi-package">Multiple Services / Integrated 360° Campaign</option>
                  </select>
                </div>

                {/* Approximate Budget */}
                <div>
                  <label className="block text-xs font-semibold text-[#16130F] mb-1">
                    Estimated Budget Range (Optional)
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5DFD3] bg-white text-sm text-[#16130F] focus:outline-none focus:border-[#E8791F] focus:ring-2 focus:ring-[#E8791F]/15 cursor-pointer"
                  >
                    <option value="Under PKR 250,000">Under PKR 250,000</option>
                    <option value="PKR 250,000 – 500,000">PKR 250,000 – 500,000</option>
                    <option value="PKR 500,000 – 1,500,000">PKR 500,000 – 1,500,000</option>
                    <option value="PKR 1,500,000 – 4,000,000">PKR 1,500,000 – 4,000,000</option>
                    <option value="PKR 4,000,000+">PKR 4,000,000+ (Enterprise Campaign)</option>
                    <option value="Needs Consultation">Flexible / Requires Estimator Consultation</option>
                  </select>
                </div>
              </div>

              {/* Deadline */}
              <div>
                <label className="block text-xs font-semibold text-[#16130F] mb-1">
                  Target Deadline or Event Date (Optional)
                </label>
                <input
                  type="text"
                  value={formData.deadline}
                  onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                  placeholder="e.g. Lahore Expo Centre - Nov 20th, or Store Rollout within 2 weeks"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E5DFD3] bg-white text-sm text-[#16130F] placeholder-[#16130F]/40 focus:outline-none focus:border-[#E8791F] focus:ring-2 focus:ring-[#E8791F]/15"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-semibold text-[#16130F] mb-1">
                  Project Scope & Brief <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Tell us about your print run volume, stall dimensions, store count, or launch specifications..."
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#16130F] bg-white placeholder-[#16130F]/40 focus:outline-none focus:ring-2 ${
                    errors.description
                      ? 'border-red-400 focus:ring-red-200'
                      : 'border-[#E5DFD3] focus:border-[#E8791F] focus:ring-[#E8791F]/15'
                  }`}
                />
                {errors.description && (
                  <p className="text-red-600 text-xs mt-1">{errors.description}</p>
                )}
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 py-3 px-5 text-sm font-bold text-white bg-[#E8791F] hover:bg-[#D66B15] active:bg-[#C45E0F] rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Validating Brief...' : 'Submit Commercial Enquiry'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full sm:w-auto py-3 px-4 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Direct WhatsApp Inquiry</span>
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#16130F]/50 pt-2 border-t border-[#E5DFD3]">
                <span>PrintVision Technical Desk · Lahore</span>
                <span>Response turnaround: &le; 24 business hours</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
