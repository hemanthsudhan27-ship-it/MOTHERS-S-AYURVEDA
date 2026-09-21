"use client";

import { useState } from "react";
import { generateWhatsAppMessage } from "@/lib/whatsapp";
import rooms from "@/data/rooms";

interface BookingFormProps {
  preselectedRoom?: string;
}

interface FormState {
  name: string;
  phone: string;
  checkin: string;
  checkout: string;
  guests: string;
  room: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function BookingForm({ preselectedRoom }: BookingFormProps) {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: "2",
    room: preselectedRoom || "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name.";
    if (!form.phone.trim()) newErrors.phone = "Please enter your phone number.";
    if (!form.checkin) newErrors.checkin = "Please select a check-in date.";
    if (!form.checkout) newErrors.checkout = "Please select a check-out date.";
    if (form.checkin && form.checkout && form.checkout <= form.checkin) {
      newErrors.checkout = "Check-out must be after check-in.";
    }
    if (!form.guests || parseInt(form.guests) < 1) newErrors.guests = "Please enter guest count.";
    if (!form.room) newErrors.room = "Please select a room.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    generateWhatsAppMessage({
      name: form.name,
      phone: form.phone,
      checkin: form.checkin,
      checkout: form.checkout,
      guests: form.guests,
      room: form.room,
      message: form.message,
    });
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const inputClass = (field: string) =>
    `w-full bg-transparent border-b ${
      errors[field] ? "border-red-400" : "border-[#E8DFC8]"
    } py-3 font-sans text-sm text-[#24211C] placeholder-[#A09A8E] focus:outline-none focus:border-[#F3BA2F] transition-colors duration-300`;

  const labelClass = "block font-sans text-[10px] tracking-[0.2em] uppercase text-[#6D665A] mb-2";

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-14 h-14 rounded-full bg-[#F3BA2F]/20 flex items-center justify-center mx-auto mb-6">
          <svg className="w-6 h-6 text-[#F3BA2F]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-[#24211C] mb-3">Enquiry Sent!</h3>
        <p className="font-sans text-sm text-[#6D665A] max-w-sm mx-auto leading-relaxed">
          Your WhatsApp message has been prepared. If it didn&apos;t open automatically, please
          check your browser&apos;s popup settings.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 font-sans text-xs tracking-[0.15em] uppercase text-[#F3BA2F] border-b border-[#F3BA2F] pb-0.5 hover:text-[#D9A21B] transition-colors"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Room booking enquiry form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Full Name */}
        <div>
          <label htmlFor="booking-name" className={labelClass}>
            Full Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="booking-name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            autoComplete="name"
            className={inputClass("name")}
            aria-required="true"
            aria-describedby={errors.name ? "booking-name-error" : undefined}
          />
          {errors.name && (
            <p id="booking-name-error" role="alert" className="mt-1.5 font-sans text-xs text-red-500">
              {errors.name}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="booking-phone" className={labelClass}>
            Phone Number <span aria-hidden="true">*</span>
          </label>
          <input
            id="booking-phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 00000 00000"
            autoComplete="tel"
            className={inputClass("phone")}
            aria-required="true"
            aria-describedby={errors.phone ? "booking-phone-error" : undefined}
          />
          {errors.phone && (
            <p id="booking-phone-error" role="alert" className="mt-1.5 font-sans text-xs text-red-500">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Check-in */}
        <div>
          <label htmlFor="booking-checkin" className={labelClass}>
            Check-in Date <span aria-hidden="true">*</span>
          </label>
          <input
            id="booking-checkin"
            type="date"
            name="checkin"
            value={form.checkin}
            min={today}
            onChange={handleChange}
            className={`${inputClass("checkin")} cursor-pointer`}
            aria-required="true"
            aria-describedby={errors.checkin ? "booking-checkin-error" : undefined}
          />
          {errors.checkin && (
            <p id="booking-checkin-error" role="alert" className="mt-1.5 font-sans text-xs text-red-500">
              {errors.checkin}
            </p>
          )}
        </div>

        {/* Check-out */}
        <div>
          <label htmlFor="booking-checkout" className={labelClass}>
            Check-out Date <span aria-hidden="true">*</span>
          </label>
          <input
            id="booking-checkout"
            type="date"
            name="checkout"
            value={form.checkout}
            min={form.checkin || today}
            onChange={handleChange}
            className={`${inputClass("checkout")} cursor-pointer`}
            aria-required="true"
            aria-describedby={errors.checkout ? "booking-checkout-error" : undefined}
          />
          {errors.checkout && (
            <p id="booking-checkout-error" role="alert" className="mt-1.5 font-sans text-xs text-red-500">
              {errors.checkout}
            </p>
          )}
        </div>

        {/* Guests */}
        <div>
          <label htmlFor="booking-guests" className={labelClass}>
            Number of Guests <span aria-hidden="true">*</span>
          </label>
          <input
            id="booking-guests"
            type="number"
            name="guests"
            value={form.guests}
            min={1}
            max={10}
            onChange={handleChange}
            className={inputClass("guests")}
            aria-required="true"
            aria-describedby={errors.guests ? "booking-guests-error" : undefined}
          />
          {errors.guests && (
            <p id="booking-guests-error" role="alert" className="mt-1.5 font-sans text-xs text-red-500">
              {errors.guests}
            </p>
          )}
        </div>

        {/* Room */}
        <div>
          <label htmlFor="booking-room" className={labelClass}>
            Room Category <span aria-hidden="true">*</span>
          </label>
          <select
            id="booking-room"
            name="room"
            value={form.room}
            onChange={handleChange}
            className={`${inputClass("room")} appearance-none cursor-pointer`}
            aria-required="true"
            aria-describedby={errors.room ? "booking-room-error" : undefined}
          >
            <option value="" disabled>
              Select a room
            </option>
            {rooms.map((r) => (
              <option key={r.id} value={r.name}>
                {r.name}
              </option>
            ))}
          </select>
          {errors.room && (
            <p id="booking-room-error" role="alert" className="mt-1.5 font-sans text-xs text-red-500">
              {errors.room}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="booking-message" className={labelClass}>
            Special Requests or Message
          </label>
          <textarea
            id="booking-message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={3}
            placeholder="Any special requirements, dietary needs, arrival time, etc."
            className={`${inputClass("message")} resize-none`}
          />
        </div>
      </div>

      {/* Submit */}
      <div className="mt-10">
        <button
          type="submit"
          id="booking-submit"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#F3BA2F] text-[#24211C] font-sans text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#D9A21B] transition-all duration-300 group"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Check Availability via WhatsApp
        </button>
        <p className="mt-4 font-sans text-xs text-[#A09A8E] leading-relaxed max-w-sm">
          This will open WhatsApp with your enquiry pre-filled. Our team will respond to confirm
          availability and details.
        </p>
      </div>
    </form>
  );
}
