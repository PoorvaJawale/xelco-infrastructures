import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// ── Types ─────────────────────────────────────────────────
interface Stop {
  seq: string;
  binId: string;
  street: string;
  fill: number;
  cumKm: number;
  reason: 'fire' | 'mandatory' | 'included' | 'optional';
  seqHighlight?: boolean;
}

// ── Mock data ─────────────────────────────────────────────
const stops: Stop[] = [
  { seq: '01', binId: 'DB118', street: 'Bolinj Naka',       fill: 92, cumKm: 0.0,  reason: 'included' },
  { seq: '02', binId: 'DB121', street: 'Agashi Road',        fill: 88, cumKm: 1.4,  reason: 'included' },
  { seq: '03', binId: 'DB126', street: 'Viva College Road',  fill: 85, cumKm: 2.6,  reason: 'included' },
  { seq: '04', binId: 'DB214', street: 'Manvelpada Road',    fill: 76, cumKm: 4.1,  reason: 'fire',     seqHighlight: true },
  { seq: '05', binId: 'DB133', street: 'Yashwant Nagar',     fill: 96, cumKm: 5.8,  reason: 'included' },
  { seq: '06', binId: 'DB140', street: 'Phulpada Road',      fill: 83, cumKm: 7.2,  reason: 'included' },
  { seq: '07', binId: 'DB147', street: 'Chandansar Road',    fill: 64, cumKm: 9.0,  reason: 'optional' },
  { seq: '08', binId: 'DB152', street: 'Narangi Road',       fill: 91, cumKm: 11.3, reason: 'included' },
];

const reasonStyles: Record<Stop['reason'], { label: string; className: string }> = {
  fire:      { label: 'FIRE ALERT', className: 'font-bold text-[#DC2626]' },
  mandatory: { label: '≥80%',       className: 'font-semibold text-[#00796B]' },
  included:  { label: '≥80%',       className: 'font-semibold text-[#00796B]' },
  optional:  { label: 'OPTIONAL',   className: 'font-semibold text-[#B45309]' },
};

// ── MapPlaceholder ─────────────────────────────────────────
function MapPlaceholder({ onExpand }: { onExpand: () => void }) {
  return (
    <div className="border border-[#E5E7EB] mb-7 relative overflow-hidden" style={{ height: 250 }}>
      <svg viewBox="0 0 760 250" className="absolute inset-0 w-full h-full">
        <rect width="760" height="250" fill="#EDEFF1" />
        {/* Road grid */}
        <g stroke="#DFE3E6" strokeWidth="12" fill="none">
          <path d="M-20 70 H780" />
          <path d="M-20 180 H780" />
          <path d="M180 -20 V270" />
          <path d="M430 -20 V270" />
          <path d="M620 -20 V270" />
        </g>
        {/* Route polyline */}
        <path
          d="M90 200 L180 200 L180 75 L300 75 L300 180 L430 180 L430 70 L560 70 L560 195 L680 195"
          stroke="#2A9D8F"
          strokeWidth="4"
          fill="none"
        />
        {/* Stop markers */}
        <g fontFamily="Inter" fontSize="10" fontWeight="700">
          <circle cx="90"  cy="200" r="11" fill="#2A9D8F" /><text x="90"  y="204" fill="#fff" textAnchor="middle">1</text>
          <circle cx="180" cy="75"  r="13" fill="#DC2626" /><text x="180" y="79"  fill="#fff" textAnchor="middle">4</text>
          <circle cx="300" cy="180" r="11" fill="#2A9D8F" /><text x="300" y="184" fill="#fff" textAnchor="middle">6</text>
          <circle cx="430" cy="70"  r="11" fill="#D97706" /><text x="430" y="74"  fill="#fff" textAnchor="middle">7</text>
          <circle cx="560" cy="195" r="11" fill="#2A9D8F" /><text x="560" y="199" fill="#fff" textAnchor="middle">8</text>
          <circle cx="680" cy="195" r="11" fill="#1A1D1F" /><text x="680" y="199" fill="#fff" textAnchor="middle">9</text>
        </g>
      </svg>

      {/* Legend */}
      <div className="absolute top-3 left-3 flex flex-wrap gap-2">
        {[
          { color: '#DC2626', label: 'Fire alert' },
          { color: '#009688', label: '≥80% fill' },
          { color: '#D97706', label: 'Optional' },
          { color: '#1A1D1F', label: 'Depot / End' },
        ].map((l) => (
          <span
            key={l.label}
            className="flex items-center gap-1.5 bg-white border border-[#E5E7EB] px-2 py-1 font-['Inter'] text-[10px] font-semibold text-[#2D3139] leading-none"
          >
            <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: l.color }} />
            {l.label}
          </span>
        ))}
      </div>

      <button
        type="button"
        onClick={onExpand}
        className="absolute top-3 right-3 bg-white border border-[#E5E7EB] px-[11px] py-[7px] font-['Inter'] font-semibold text-[10px] leading-none tracking-[0.1em] text-[#2D3139] cursor-pointer hover:bg-[#F3F4F6] transition-colors"
      >
        EXPAND MAP
      </button>
      <p className="absolute bottom-[10px] left-3 font-['Inter'] font-normal text-[10px] leading-none text-[#9CA3AF] m-0">
        Leaflet · OpenStreetMap · placeholder geometry
      </p>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────
export default function RouteOptimisation() {
  const navigate = useNavigate();
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showAllStops, setShowAllStops] = useState(false);
  const [mapExpanded, setMapExpanded] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const visibleStops = showAllStops ? stops : stops.slice(0, 8);

  return (
    <div className="p-6 sm:p-8 lg:p-[36px_40px_48px] bg-white min-w-0 max-w-[1400px]">
      {/* Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1A1D1F] text-white px-4 py-3 rounded-[2px] shadow-lg flex items-center gap-3 font-['Inter'] text-[13px] border-l-4 border-[#009688]">
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-gray-400 hover:text-white text-xs cursor-pointer ml-2 bg-transparent border-none"
          >
            ✕
          </button>
        </div>
      )}

      {/* Expanded Map Modal */}
      {mapExpanded && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-4xl rounded-[2px] overflow-hidden">
            <div className="flex justify-between items-center px-5 py-3 border-b border-[#E5E7EB]">
              <span className="font-['Poppins'] font-bold text-[16px] text-[#1A1D1F]">
                R-1153 · Virar West — Route Map
              </span>
              <button
                type="button"
                onClick={() => setMapExpanded(false)}
                className="font-['Inter'] text-[12px] text-[#9CA3AF] hover:text-[#1A1D1F] cursor-pointer bg-transparent border-none"
              >
                ✕ Close
              </button>
            </div>
            <div style={{ height: 480 }} className="relative overflow-hidden bg-[#EDEFF1]">
              <svg viewBox="0 0 760 250" className="absolute inset-0 w-full h-full">
                <rect width="760" height="250" fill="#EDEFF1" />
                <g stroke="#DFE3E6" strokeWidth="12" fill="none">
                  <path d="M-20 70 H780" /><path d="M-20 180 H780" />
                  <path d="M180 -20 V270" /><path d="M430 -20 V270" /><path d="M620 -20 V270" />
                </g>
                <path d="M90 200 L180 200 L180 75 L300 75 L300 180 L430 180 L430 70 L560 70 L560 195 L680 195" stroke="#009688" strokeWidth="4" fill="none" />
                <g fontFamily="Inter" fontSize="10" fontWeight="700">
                  <circle cx="90"  cy="200" r="11" fill="#009688" /><text x="90"  y="204" fill="#fff" textAnchor="middle">1</text>
                  <circle cx="180" cy="75"  r="13" fill="#DC2626" /><text x="180" y="79"  fill="#fff" textAnchor="middle">4</text>
                  <circle cx="300" cy="180" r="11" fill="#009688" /><text x="300" y="184" fill="#fff" textAnchor="middle">6</text>
                  <circle cx="430" cy="70"  r="11" fill="#D97706" /><text x="430" y="74"  fill="#fff" textAnchor="middle">7</text>
                  <circle cx="560" cy="195" r="11" fill="#009688" /><text x="560" y="199" fill="#fff" textAnchor="middle">8</text>
                  <circle cx="680" cy="195" r="11" fill="#1A1D1F" /><text x="680" y="199" fill="#fff" textAnchor="middle">9</text>
                </g>
              </svg>
              <p className="absolute bottom-3 left-3 font-['Inter'] text-[10px] text-[#9CA3AF] m-0">
                Leaflet · OpenStreetMap · placeholder geometry
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── Header ─────────────────────────────────── */}
      <p className="font-['Inter'] font-semibold text-[11px] leading-none tracking-[0.16em] uppercase text-[#00796B] m-0 mb-[18px]">
        Route optimisation · result
      </p>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 sm:gap-6 mb-[34px]">
        <div>
          <h1 className="font-['Poppins'] font-bold text-[30px] sm:text-[34px] leading-[1.05] tracking-[-0.025em] text-[#1A1D1F] m-0 mb-[10px]">
            R-1153 · Virar West
          </h1>
          <p className="font-['Inter'] font-normal text-[13px] leading-none text-[#9CA3AF] m-0">
            Generated 14:20 from live fill data · valid for 45 minutes
          </p>
        </div>
        <div className="flex gap-[10px] shrink-0">
          <button
            type="button"
            onClick={() => showToast('Constraint editor coming soon.')}
            className="bg-white text-[#1A1D1F] border border-[#1A1D1F] px-[20px] py-[14px] font-['Inter'] font-semibold text-[12px] leading-none cursor-pointer hover:bg-[#F3F4F6] transition-colors"
          >
            Adjust constraints
          </button>
          <button
            type="button"
            onClick={() => showToast('Route R-1153 assigned to MH48-BK-2291 and dispatched.')}
            className="bg-[#009688] hover:bg-[#00796B] text-white border-none px-[22px] py-[14px] font-['Inter'] font-bold text-[12px] leading-none cursor-pointer transition-colors"
          >
            Assign &amp; dispatch
          </button>
        </div>
      </div>

      {/* ── KPI Strip ─────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 border-t-2 border-[#1A1D1F] border-b border-[#E5E7EB] mb-[40px]">
        <div className="py-5 sm:pr-6 border-b sm:border-b-0 border-[#E5E7EB]">
          <p className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.1em] uppercase text-[#9CA3AF] m-0 mb-[10px]">
            Stops
          </p>
          <span className="font-['Inter'] font-bold text-[32px] leading-none text-[#1A1D1F]">22</span>
        </div>
        <div className="py-5 sm:px-6 border-b sm:border-b-0 sm:border-l border-[#E5E7EB]">
          <p className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.1em] uppercase text-[#9CA3AF] m-0 mb-[10px]">
            Distance
          </p>
          <span className="font-['Inter'] font-bold text-[32px] leading-none text-[#1A1D1F]">
            18.4
            <span className="font-['Inter'] font-normal text-[13px] text-[#9CA3AF]"> km</span>
          </span>
        </div>
        <div className="py-5 sm:px-6 sm:border-l border-[#E5E7EB]">
          <p className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.1em] uppercase text-[#9CA3AF] m-0 mb-[10px]">
            Estimated time
          </p>
          <span className="font-['Inter'] font-bold text-[32px] leading-none text-[#1A1D1F]">2h 35m</span>
        </div>
        <div className="py-5 sm:px-6 sm:border-l border-[#E5E7EB]">
          <p className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.1em] uppercase text-[#9CA3AF] m-0 mb-[10px]">
            Saved vs fixed schedule
          </p>
          <span className="font-['Inter'] font-bold text-[32px] leading-none text-[#009688]">
            6.1
            <span className="font-['Inter'] font-normal text-[13px] text-[#9CA3AF]"> km</span>
          </span>
        </div>
      </div>

      {/* ── Main 2-col split ──────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* LEFT: Optimiser reasoning ──────────────── */}
        <div className="lg:col-span-5">
          <h2 className="font-['Poppins'] font-bold text-[20px] leading-[1.2] tracking-[-0.02em] text-[#1A1D1F] m-0 mb-[6px]">
            What the optimiser weighed
          </h2>
          <p className="font-['Inter'] font-normal text-[13px] leading-[1.6] text-[#2D3139] m-0 mb-[24px] max-w-[420px]">
            Every stop is here for a reason you can point at. Nothing was added by schedule.
          </p>

          <div className="border-t-2 border-[#1A1D1F]">
            {/* MANDATORY */}
            <div className="flex gap-[18px] py-[18px] border-b border-[#E5E7EB] items-start">
              <span className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.08em] text-white bg-[#DC2626] px-[7px] py-[5px] whitespace-nowrap mt-[2px] shrink-0">
                MANDATORY
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-['Inter'] font-semibold text-[15px] leading-[1.3] text-[#1A1D1F] m-0 mb-[6px]">
                  Fire or smoke detected
                </p>
                <p className="font-['Inter'] font-normal text-[13px] leading-[1.5] text-[#2D3139] m-0">
                  Always first in sequence regardless of fill or distance.
                </p>
              </div>
              <span className="font-['Inter'] font-bold text-[24px] leading-none text-[#1A1D1F] shrink-0">1</span>
            </div>

            {/* INCLUDED */}
            <div className="flex gap-[18px] py-[18px] px-2 -mx-2 border-b border-[#E5E7EB] items-start bg-[rgba(0,150,136,0.05)]">
              <span className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.08em] text-white bg-[#009688] px-[7px] py-[5px] whitespace-nowrap mt-[2px] shrink-0">
                INCLUDED
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-['Inter'] font-semibold text-[15px] leading-[1.3] text-[#1A1D1F] m-0 mb-[6px]">
                  Fill level at or above 80%
                </p>
                <p className="font-['Inter'] font-normal text-[13px] leading-[1.5] text-[#2D3139] m-0">
                  All qualifying bins in Virar West at generation time.
                </p>
              </div>
              <span className="font-['Inter'] font-bold text-[24px] leading-none text-[#1A1D1F] shrink-0">17</span>
            </div>

            {/* OPTIONAL */}
            <div className="flex gap-[18px] py-[18px] border-b border-[#E5E7EB] items-start">
              <span className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.08em] text-[#B45309] border border-[#D97706] bg-white px-[6px] py-[4px] whitespace-nowrap mt-[2px] shrink-0">
                OPTIONAL
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-['Inter'] font-semibold text-[15px] leading-[1.3] text-[#1A1D1F] m-0 mb-[6px]">
                  50–80% and within 300 m of the path
                </p>
                <p className="font-['Inter'] font-normal text-[13px] leading-[1.5] text-[#2D3139] m-0">
                  Picked up because the detour cost under 400 m each.
                </p>
              </div>
              <span className="font-['Inter'] font-bold text-[24px] leading-none text-[#1A1D1F] shrink-0">4</span>
            </div>

            {/* EXCLUDED */}
            <div className="flex gap-[18px] py-[18px] border-b border-[#E5E7EB] items-start">
              <span className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.08em] text-[#9CA3AF] bg-[#F3F4F6] px-[7px] py-[5px] whitespace-nowrap mt-[2px] shrink-0">
                EXCLUDED
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-['Inter'] font-semibold text-[15px] leading-[1.3] text-[#1A1D1F] m-0 mb-[6px]">
                  Below 50%, offline, or off-path
                </p>
                <p className="font-['Inter'] font-normal text-[13px] leading-[1.5] text-[#2D3139] m-0">
                  3 offline bins could not be assessed — flagged for maintenance.
                </p>
              </div>
              <span className="font-['Inter'] font-bold text-[24px] leading-none text-[#9CA3AF] shrink-0">28</span>
            </div>
          </div>

          {/* Assigned crew card */}
          <div className="border-l-[3px] border-[#009688] pl-[22px] py-[2px] mt-[32px]">
            <p className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.1em] uppercase text-[#9CA3AF] m-0 mb-[10px]">
              Assigned to
            </p>
            <p className="font-['Inter'] font-semibold text-[15px] leading-[1.6] text-[#1A1D1F] m-0">
              MH48-BK-2291 · 8 t compactor<br />
              Sunil Pawar · driver · shift 06:00–14:00<br />
              Ganesh Yadav, Kiran More · collectors
            </p>
          </div>
        </div>

        {/* RIGHT: Map + Stop sequence ──────────────── */}
        <div className="lg:col-span-7">
          {/* Map */}
          <MapPlaceholder onExpand={() => setMapExpanded(true)} />

          {/* Sequence table */}
          <p className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.14em] uppercase text-[#9CA3AF] m-0">
            Optimised sequence · 22 stops
          </p>
          <div className="mt-[10px] overflow-x-auto">
            <div className="min-w-[520px]">
              {/* Header */}
              <div className="grid grid-cols-[44px_1.1fr_2fr_0.8fr_0.8fr_1fr] pb-[9px] border-b-2 border-[#1A1D1F]">
                {['#', 'Bin ID', 'Street', 'Fill', 'Cum. km', 'Reason'].map((col, i) => (
                  <span
                    key={col}
                    className={`font-['Inter'] font-semibold text-[10px] leading-none tracking-[0.14em] uppercase text-[#9CA3AF] ${i >= 3 ? 'text-right' : ''}`}
                  >
                    {col}
                  </span>
                ))}
              </div>

              {/* Rows */}
              {visibleStops.map((stop) => {
                const isFire = stop.reason === 'fire';
                const style = reasonStyles[stop.reason];
                return (
                  <div
                    key={stop.seq}
                    className={`grid grid-cols-[44px_1.1fr_2fr_0.8fr_0.8fr_1fr] py-[13px] border-b border-[#E5E7EB] items-center ${
                      isFire ? 'bg-[rgba(220,38,38,0.05)]' : ''
                    }`}
                  >
                    <span
                      className={`font-['Inter'] font-bold text-[12px] leading-none ${
                        isFire ? 'text-[#DC2626]' : 'text-[#9CA3AF]'
                      }`}
                    >
                      {stop.seq}
                    </span>
                    <span className="font-['Inter'] font-bold text-[15px] leading-none text-[#1A1D1F]">
                      {stop.binId}
                    </span>
                    <span className="font-['Inter'] font-normal text-[15px] leading-none text-[#2D3139]">
                      {stop.street}
                    </span>
                    <span className="font-['Inter'] font-normal text-[15px] leading-none text-[#2D3139] text-right">
                      {stop.fill}%
                    </span>
                    <span className="font-['Inter'] font-normal text-[15px] leading-none text-[#2D3139] text-right">
                      {stop.cumKm.toFixed(1)}
                    </span>
                    <span className={`font-['Inter'] text-[10px] leading-none tracking-[0.06em] text-right ${style.className}`}>
                      {style.label}
                    </span>
                  </div>
                );
              })}

              {/* Show more / full sequence row */}
              <div className="flex justify-between items-center py-[16px]">
                <span className="font-['Inter'] font-normal text-[13px] leading-none text-[#9CA3AF]">
                  {showAllStops ? '8 of 22 shown (demo data)' : '14 further stops'}
                </span>
                <button
                  type="button"
                  onClick={() => setShowAllStops(!showAllStops)}
                  className="font-['Inter'] font-semibold text-[12px] leading-none text-[#00796B] hover:underline cursor-pointer bg-transparent border-none p-0"
                >
                  {showAllStops ? '← Collapse' : 'Show full sequence →'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
