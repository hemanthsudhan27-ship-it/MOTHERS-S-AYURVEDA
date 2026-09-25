"use client";

import { useState } from "react";
import { siteConfig } from "@/data/config";

interface EnquireNowButtonProps {
  roomName: string;
  className?: string;
  variant?: "primary" | "outline";
  id?: string;
  label?: string;
}

export default function EnquireNowButton({ roomName, className = "", variant = "primary", id, label }: EnquireNowButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    checkin: "",
  });
  const [errors, setErrors] = useState<{ name?: string; phone?: string; checkin?: string }>({});

  const today = new Date().toISOString().split("T")[0];

  const validate = () => {
    const newErrors: any = {};
    if (!form.name.trim()) newErrors.name = "Required";
    if (!form.phone.trim()) newErrors.phone = "Required";
    if (!form.checkin) newErrors.checkin = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    const message = `Hello Mother's Inn Homestay,

I am interested in the *${roomName}*.

*Name:* ${form.name}
*Phone:* ${form.phone}
*Check-in:* ${form.checkin}

Is this available at the moment?`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  const baseBtnClass = "inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase transition-all duration-300 px-5 py-2.5";
  const variants = {
    primary: "bg-[#F3BA2F] text-[#24211C] hover:bg-[#D9A21B] border border-[#F3BA2F]",
    outline: "border border-[#E8DFC8] text-[#24211C] hover:border-[#F3BA2F] hover:bg-[#F3BA2F]",
  };

  return (
    <>
      <button
        id={id}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(true);
        }}
        className={`${baseBtnClass} ${variants[variant]} ${className}`}
        aria-label={`Enquire about ${roomName}`}
      >
        {label || "Enquire Now"}
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(false);
          }}
        >
          <div 
            className="bg-[#FFFDF7] w-full max-w-md p-8 relative shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-[#6D665A] hover:text-[#24211C] transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <h3 className="font-serif text-2xl text-[#24211C] mb-2">Enquire Now</h3>
            <p className="font-sans text-sm text-[#6D665A] mb-6">
              Check availability for <strong>{roomName}</strong>.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="enq-name" className="block font-sans text-[10px] tracking-[0.2em] uppercase text-[#6D665A] mb-2">
                  Name *
                </label>
                <input
                  id="enq-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  className={`w-full bg-transparent border-b ${errors.name ? "border-red-400" : "border-[#E8DFC8]"} py-2 font-sans text-sm focus:outline-none focus:border-[#F3BA2F]`}
                />
              </div>
              
              <div>
                <label htmlFor="enq-phone" className="block font-sans text-[10px] tracking-[0.2em] uppercase text-[#6D665A] mb-2">
                  Phone Number *
                </label>
                <input
                  id="enq-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => {
                    setForm({ ...form, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: undefined });
                  }}
                  className={`w-full bg-transparent border-b ${errors.phone ? "border-red-400" : "border-[#E8DFC8]"} py-2 font-sans text-sm focus:outline-none focus:border-[#F3BA2F]`}
                />
              </div>

              <div>
                <label htmlFor="enq-checkin" className="block font-sans text-[10px] tracking-[0.2em] uppercase text-[#6D665A] mb-2">
                  Check-in Date *
                </label>
                <input
                  id="enq-checkin"
                  type="date"
                  min={today}
                  value={form.checkin}
                  onChange={(e) => {
                    setForm({ ...form, checkin: e.target.value });
                    if (errors.checkin) setErrors({ ...errors, checkin: undefined });
                  }}
                  className={`w-full bg-transparent border-b ${errors.checkin ? "border-red-400" : "border-[#E8DFC8]"} py-2 font-sans text-sm focus:outline-none focus:border-[#F3BA2F]`}
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-sans text-xs tracking-[0.15em] uppercase px-6 py-3 hover:bg-[#1da851] transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Send via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
