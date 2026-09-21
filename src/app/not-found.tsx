import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFFDF7] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#F3BA2F] mb-4">
          Page Not Found
        </p>
        <h1 className="font-serif text-[120px] leading-none text-[#E8DFC8] select-none mb-4">
          404
        </h1>
        <p className="font-serif text-2xl text-[#24211C] mb-4">
          This page doesn&apos;t seem to exist.
        </p>
        <p className="font-sans text-sm text-[#6D665A] leading-relaxed mb-10">
          You may have followed an outdated link. Let us guide you back home.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#F3BA2F] text-[#24211C] font-sans text-xs tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#D9A21B] transition-all duration-300"
          >
            Back to Home
          </Link>
          <Link
            href="/rooms"
            className="inline-flex items-center gap-2 border border-[#F3BA2F] text-[#24211C] font-sans text-xs tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#F3BA2F] transition-all duration-300"
          >
            View Rooms
          </Link>
        </div>
      </div>
    </div>
  );
}
