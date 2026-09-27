"use client";

import { useState } from "react";
import { siteConfig } from "@/data/config";

interface AyurvedaEnquiryButtonProps {
  treatmentName?: string;
  className?: string;
  variant?: "primary" | "outline" | "gold";
  id?: string;
  label?: string;
}

const treatmentOptions = [
  "General Ayurveda Consultation",
  "Panchakarma Detox Program",
  "Uzhichil Traditional Oil Massage",
  "Prasava Raksha (Afterbirth Care)",
  "Yoga & Meditation Retreat",
  "Shirodhara Therapy",
  "Kizhi / Podikizhi Herbal Therapy",
  "3-Day Rejuvenation Weekend",
  "7-Day Complete Panchakarma Cleanse",
  "14-Day Deep Healing Retreat",
];

export default function AyurvedaEnquiryButton({
  treatmentName,
  className = "",
  variant = "primary",
  id,
  label,
}: AyurvedaEnquiryButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    guests: "1",
    treatment: treatmentName || "Panchakarma Detox Program",
    notes: "",
  });
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    date?: string;
  }>({});

  const today = new Date().toISOString().split("T")[0];

  const validate = () => {
    const newErrors: { name?: string; phone?: string; date?: string } = {};
    if (!form.name.trim()) newErrors.name = "Required";
    if (!form.phone.trim()) newErrors.phone = "Required";
    if (!form.date) newErrors.date = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = `Hello Mother's Ayurveda Resort,

I would like to enquire about your Ayurvedic wellness treatments.

*Treatment / Program:* ${form.treatment}
*Name:* ${form.name}
*Phone:* ${form.phone}
*Preferred Starting Date:* ${form.date}
*Number of Guests:* ${form.guests}${
      form.notes
        ? `
*Notes / Health Goals:* ${form.notes}`
        : ""
    }

Could you please confirm package details, physician availability, and rates?

Thank you!`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  const baseBtnClass =
    "inline-flex items-center justify-center gap-2 font-sans text-xs tracking-[0.15em] uppercase transition-all duration-300 px-6 py-3 cursor-pointer";
  const variants = {
    primary:
      "bg-[#F3BA2F] text-[#24211C] hover:bg-[#D9A21B] border border-[#F3BA2F] font-medium shadow-sm hover:shadow",
    gold:
      "bg-[#24211C] text-[#F3BA2F] border border-[#F3BA2F] hover:bg-[#F3BA2F] hover:text-[#24211C] font-medium",
    outline:
      "border border-[#E8DFC8] text-[#24211C] hover:border-[#F3BA2F] hover:bg-[#F3BA2F] font-medium",
  };

  return (
    <>
      <button
        id={id}
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(true);
        }}
        className={`${baseBtnClass} ${variants[variant]} ${className}`}
        aria-label={`Enquire about ${treatmentName || "Mother's Ayurveda"}`}
      >
        {label || "Enquire Now"}
        <span aria-hidden="true" className="text-sm">→</span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(false);
          }}
        >
          <div
            className="bg-[#FFFDF7] w-full max-w-lg p-6 sm:p-8 relative shadow-2xl border border-[#E8DFC8] max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-[#6D665A] hover:text-[#24211C] transition-colors p-1"
              aria-label="Close enquiry modal"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#F3BA2F] block mb-1">
              Ayurvedic Resort Wellness
            </span>
            <h3 className="font-serif text-2xl lg:text-3xl text-[#24211C] mb-2">
              Plan Your Healing Journey
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#6D665A] mb-6 leading-relaxed">
              Experience traditional Panchakarma, Uzhichil, and Yoga tailored by qualified Ayurvedic Vaidyas at Mother&apos;s Ayurveda.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="ayur-treatment"
                  className="block font-sans text-[10px] tracking-[0.2em] uppercase text-[#6D665A] mb-1.5"
                >
                  Treatment or Package *
                </label>
                <select
                  id="ayur-treatment"
                  value={form.treatment}
                  onChange={(e) => setForm({ ...form, treatment: e.target.value })}
                  className="w-full h-10 bg-transparent border-b border-[#E8DFC8] py-2 font-sans text-sm focus:outline-none focus:border-[#F3BA2F] transition-colors cursor-pointer"
                >
                  {treatmentOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#FFFDF7] text-[#24211C]">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="ayur-name"
                  className="block font-sans text-[10px] tracking-[0.2em] uppercase text-[#6D665A] mb-1.5"
                >
                  Your Full Name *
                </label>
                <input
                  id="ayur-name"
                  type="text"
                  placeholder="e.g. Maya Sharma"
                  value={form.name}
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  className={`w-full h-10 bg-transparent border-b ${
                    errors.name ? "border-red-400" : "border-[#E8DFC8]"
                  } py-2 font-sans text-sm focus:outline-none focus:border-[#F3BA2F] transition-colors`}
                />
                {errors.name && (
                  <p className="mt-1 font-sans text-[11px] text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="ayur-phone"
                  className="block font-sans text-[10px] tracking-[0.2em] uppercase text-[#6D665A] mb-1.5"
                >
                  Phone / WhatsApp Number *
                </label>
                <input
                  id="ayur-phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={(e) => {
                    setForm({ ...form, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: undefined });
                  }}
                  className={`w-full h-10 bg-transparent border-b ${
                    errors.phone ? "border-red-400" : "border-[#E8DFC8]"
                  } py-2 font-sans text-sm focus:outline-none focus:border-[#F3BA2F] transition-colors`}
                />
                {errors.phone && (
                  <p className="mt-1 font-sans text-[11px] text-red-500">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                <div>
                  <label
                    htmlFor="ayur-date"
                    className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#6D665A] mb-1.5 sm:h-6 flex items-end"
                  >
                    Preferred Start Date *
                  </label>
                  <input
                    id="ayur-date"
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={(e) => {
                      setForm({ ...form, date: e.target.value });
                      if (errors.date) setErrors({ ...errors, date: undefined });
                    }}
                    className={`w-full h-10 bg-transparent border-b ${
                      errors.date ? "border-red-400" : "border-[#E8DFC8]"
                    } py-2 font-sans text-sm focus:outline-none focus:border-[#F3BA2F] transition-colors`}
                  />
                  {errors.date && (
                    <p className="mt-1 font-sans text-[11px] text-red-500">
                      {errors.date}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="ayur-guests"
                    className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#6D665A] mb-1.5 sm:h-6 flex items-end justify-between"
                  >
                    <span>Number of Guests *</span>
                  </label>
                  <input
                    id="ayur-guests"
                    type="number"
                    min={1}
                    max={10}
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    className="w-full h-10 bg-transparent border-b border-[#E8DFC8] py-2 font-sans text-sm focus:outline-none focus:border-[#F3BA2F] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="ayur-notes"
                  className="block font-sans text-[10px] tracking-[0.2em] uppercase text-[#6D665A] mb-1.5"
                >
                  Health Goals or Health Conditions (Optional)
                </label>
                <textarea
                  id="ayur-notes"
                  rows={2}
                  placeholder="e.g. Stress relief, back pain, joint stiffness, detox..."
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="w-full bg-transparent border-b border-[#E8DFC8] py-2 font-sans text-sm focus:outline-none focus:border-[#F3BA2F] transition-colors resize-none"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-sans text-xs tracking-[0.15em] uppercase px-6 py-3.5 hover:bg-[#1da851] transition-colors shadow-md"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Send via WhatsApp
                </button>
                <p className="text-center font-sans text-[10px] text-[#A09A8E] mt-2">
                  We reply directly via WhatsApp to confirm physician consultations and program details.
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
