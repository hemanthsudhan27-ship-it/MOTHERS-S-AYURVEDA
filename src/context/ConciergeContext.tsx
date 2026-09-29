"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface OpenConciergeOptions {
  tab?: "room" | "ayurveda";
  room?: string;
  treatment?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  lockRoom?: boolean;
}

interface ConciergeContextType {
  isOpen: boolean;
  activeTab: "room" | "ayurveda";
  selectedRoom: string;
  selectedTreatment: string;
  checkInDate: string;
  checkOutDate: string;
  guests: number;
  isRoomLocked: boolean;
  openConcierge: (options?: OpenConciergeOptions) => void;
  closeConcierge: () => void;
  setActiveTab: (tab: "room" | "ayurveda") => void;
  setSelectedRoom: (room: string) => void;
  setSelectedTreatment: (treatment: string) => void;
  setCheckInDate: (date: string) => void;
  setCheckOutDate: (date: string) => void;
  setGuests: (guests: number) => void;
  setIsRoomLocked: (locked: boolean) => void;
}

const ConciergeContext = createContext<ConciergeContextType | undefined>(undefined);

export function ConciergeProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"room" | "ayurveda">("room");
  const [selectedRoom, setSelectedRoom] = useState("Classic Room");
  const [selectedTreatment, setSelectedTreatment] = useState("General Ayurveda Consultation");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState(2);
  const [isRoomLocked, setIsRoomLocked] = useState(false);

  const openConcierge = (options?: OpenConciergeOptions) => {
    if (options?.tab) setActiveTab(options.tab);
    if (options?.room) setSelectedRoom(options.room);
    if (options?.treatment) setSelectedTreatment(options.treatment);
    if (options?.checkIn) setCheckInDate(options.checkIn);
    if (options?.checkOut) setCheckOutDate(options.checkOut);
    if (options?.guests) setGuests(options.guests);
    setIsRoomLocked(Boolean(options?.lockRoom));
    setIsOpen(true);
  };

  const closeConcierge = () => {
    setIsOpen(false);
  };

  return (
    <ConciergeContext.Provider
      value={{
        isOpen,
        activeTab,
        selectedRoom,
        selectedTreatment,
        checkInDate,
        checkOutDate,
        guests,
        isRoomLocked,
        openConcierge,
        closeConcierge,
        setActiveTab,
        setSelectedRoom,
        setSelectedTreatment,
        setCheckInDate,
        setCheckOutDate,
        setGuests,
        setIsRoomLocked,
      }}
    >
      {children}
    </ConciergeContext.Provider>
  );
}

export function useConcierge() {
  const context = useContext(ConciergeContext);
  if (!context) {
    throw new Error("useConcierge must be used within a ConciergeProvider");
  }
  return context;
}
