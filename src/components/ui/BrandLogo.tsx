export default function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 font-sans select-none ${compact ? "scale-90" : ""}`}>
      {/* Icon Emblem: Streaming Globe / Location Radar */}
      <div className="relative flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-[#00E5FF] to-[#0088FF] p-[1.5px] shadow-[0_0_20px_rgba(0, 229, 255,0.35)]">
        <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#070A0F]">
          <svg className="h-5 w-5 text-[#00E5FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        </div>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1 text-xl sm:text-2xl font-black tracking-tight text-white">
          <span>IPTV</span>
          <span className="bg-gradient-to-r from-[#00E5FF] to-[#0088FF] bg-clip-text text-transparent">MAP</span>
          <span className="inline-flex items-center rounded-full bg-[#00E5FF]/10 px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-widest text-[#00E5FF] border border-[#00E5FF]/30 ml-0.5">
            4K
          </span>
        </div>
        <span className="text-[9.5px] font-bold uppercase tracking-[0.22em] text-stone-400 mt-0.5">
          GLOBAL STREAMING
        </span>
      </div>
    </div>
  );
}
