import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';

// ─── ADMIN DASHBOARD (OPTION 1a) ───────────────────────────
interface ZoneScore {
  name: string;
  score: number;
  color: string;
}

const zoneScores: ZoneScore[] = [
  { name: 'Virar West', score: 86, color: '#009688' },
  { name: 'Vasai West', score: 84, color: '#009688' },
  { name: 'Virar East', score: 81, color: '#009688' },
  { name: 'Nallasopara West', score: 79, color: '#14B8A6' },
  { name: 'Vasai East', score: 77, color: '#14B8A6' },
  { name: 'Nallasopara East', score: 71, color: '#D97706' },
];

type ComplaintTabKey = 'NEW' | 'ASSIGNED' | 'IN_PROG' | 'RESOLVED';

interface ComplaintTabConfig {
  key: ComplaintTabKey;
  label: string;
  medianTime: string;
  medianUnit: string;
  breachingSla: number;
  breachingColor?: string;
}

const complaintTabs: ComplaintTabConfig[] = [
  {
    key: 'NEW',
    label: 'NEW 12',
    medianTime: '6.2',
    medianUnit: 'hrs',
    breachingSla: 4,
    breachingColor: '#009688',
  },
  {
    key: 'ASSIGNED',
    label: 'ASSIGNED 31',
    medianTime: '4.8',
    medianUnit: 'hrs',
    breachingSla: 2,
    breachingColor: '#009688',
  },
  {
    key: 'IN_PROG',
    label: 'IN PROG 18',
    medianTime: '3.4',
    medianUnit: 'hrs',
    breachingSla: 1,
    breachingColor: '#009688',
  },
  {
    key: 'RESOLVED',
    label: 'RESOLVED 96',
    medianTime: '1.9',
    medianUnit: 'hrs',
    breachingSla: 0,
    breachingColor: '#009688',
  },
];

function AdminDashboardView({ onShowToast }: { onShowToast: (msg: string) => void }) {
  const navigate = useNavigate();
  const [selectedComplaintTab, setSelectedComplaintTab] = useState<ComplaintTabKey>('NEW');

  const currentComplaintData =
    complaintTabs.find((t) => t.key === selectedComplaintTab) || complaintTabs[0];

  return (
    <div className="p-6 sm:p-8 lg:p-[32px_40px_48px] bg-white min-w-0 max-w-[1400px]">
      {/* Header Tag */}
      <p className="font-['Inter'] font-semibold text-[11px] leading-none tracking-[0.16em] uppercase text-[#00796B] m-0 mb-[20px]">
        Executive overview
      </p>

      {/* Title & Live Status */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 sm:gap-6 mb-[36px]">
        <h1 className="font-['Poppins'] font-bold text-[30px] sm:text-[36px] leading-[1.05] tracking-[-0.025em] text-[#1A1D1F] m-0">
          Vasai-Virar city operations
        </h1>
        <span className="font-['Inter'] font-normal text-[12px] leading-none text-[#9CA3AF] whitespace-nowrap">
          Live · 30 Aug 2026, 14:20 IST
        </span>
      </div>

      {/* 2-Column Split: 7fr / 5fr */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* LEFT COLUMN (7 cols = ~58.3%) */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Section: Overall City Collection Score */}
          <div className="border-t-2 border-[#1A1D1F] pt-[20px]">
            <p className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.1em] uppercase text-[#9CA3AF] m-0 mb-[14px]">
              Overall city collection score
            </p>

            {/* Score Big Display */}
            <div className="flex items-baseline gap-4 mb-[22px]">
              <span className="font-['Inter'] font-bold text-[72px] sm:text-[92px] leading-[0.82] tracking-[-0.04em] text-[#1A1D1F]">
                82
              </span>
              <span className="font-['Inter'] font-medium text-[20px] leading-none text-[#9CA3AF] pb-2">
                / 100
              </span>
              <span className="font-['Inter'] font-semibold text-[13px] leading-none text-[#059669] pb-3 whitespace-nowrap">
                ▲ 4 pts vs last week
              </span>
            </div>

            {/* Zone Horizontal Bars */}
            <div className="flex flex-col gap-[9px] max-w-[460px] w-full">
              {zoneScores.map((z) => (
                <div key={z.name} className="flex items-center gap-3">
                  <span className="font-['Inter'] font-normal text-[11px] leading-none text-[#2D3139] w-[118px] shrink-0">
                    {z.name}
                  </span>
                  <span className="flex-1 h-[6px] bg-[#F3F4F6] block overflow-hidden rounded-none">
                    <span
                      className="block h-[6px]"
                      style={{ width: `${z.score}%`, backgroundColor: z.color }}
                    />
                  </span>
                  <span className="font-['Inter'] font-semibold text-[11px] leading-none text-[#1A1D1F] w-[26px] text-right shrink-0">
                    {z.score}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Callout Card */}
          <div className="border-l-[3px] border-[#009688] p-[4px_0_4px_24px] mt-[34px] flex flex-wrap sm:flex-nowrap items-center gap-6 sm:gap-7">
            <div>
              <p className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.1em] uppercase text-[#9CA3AF] m-0 mb-2">
                Bins requiring collection
              </p>
              <div className="flex items-baseline gap-2.5">
                <span className="font-['Inter'] font-bold text-[38px] sm:text-[46px] leading-none tracking-[-0.03em] text-[#1A1D1F]">
                  68
                </span>
                <span className="font-['Inter'] font-normal text-[13px] leading-none text-[#2D3139]">
                  of 452 bins
                </span>
              </div>
            </div>

            <div className="hidden sm:block w-[1px] self-stretch bg-[#E5E7EB]"></div>

            <div>
              <p className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.1em] uppercase text-[#9CA3AF] m-0 mb-2">
                Overflowing now
              </p>
              <div className="flex items-baseline gap-2.5">
                <span className="font-['Inter'] font-bold text-[38px] sm:text-[46px] leading-none tracking-[-0.03em] text-[#009688]">
                  14
                </span>
                <span className="font-['Inter'] font-normal text-[13px] leading-none text-[#2D3139]">
                  2 with fire alert
                </span>
              </div>
            </div>

            <div className="sm:ml-auto w-full sm:w-auto mt-2 sm:mt-0">
              <button
                type="button"
                onClick={() => onShowToast('Optimising collection routes for 14 overflowing bins...')}
                className="w-full sm:w-auto bg-[#009688] hover:bg-[#00796B] text-white border-none p-[13px_20px] font-['Inter'] font-semibold text-[12px] leading-none tracking-[0.02em] cursor-pointer whitespace-nowrap transition-colors"
              >
                Dispatch routes
              </button>
            </div>
          </div>

          {/* Section: Today · Fleet and Collection */}
          <p className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.14em] uppercase text-[#9CA3AF] mt-[44px] mb-0">
            Today · fleet and collection
          </p>
          <div className="border-t-2 border-[#1A1D1F] mt-[10px]">
            {/* Waste collected */}
            <div className="flex justify-between items-baseline py-[15px] border-b border-[#E5E7EB]">
              <span className="font-['Inter'] font-normal text-[15px] leading-none text-[#2D3139]">
                Waste collected today
              </span>
              <span className="font-['Inter'] font-bold text-[20px] leading-none text-[#1A1D1F]">
                214.6{' '}
                <span className="font-['Inter'] font-normal text-[12px] text-[#9CA3AF]">
                  tonnes
                </span>
              </span>
            </div>

            {/* Collection verified */}
            <div className="flex justify-between items-baseline py-[15px] px-2 -mx-2 border-b border-[#E5E7EB] bg-[rgba(0,150,136,0.05)]">
              <span className="font-['Inter'] font-semibold text-[15px] leading-none text-[#1A1D1F]">
                Collection verified{' '}
                <span className="font-['Inter'] font-normal text-[12px] text-[#9CA3AF]">
                  · sensor-confirmed, not driver-reported
                </span>
              </span>
              <span className="font-['Inter'] font-bold text-[20px] leading-none text-[#1A1D1F] pr-1">
                73%
              </span>
            </div>

            {/* Active routes */}
            <div className="flex justify-between items-baseline py-[15px] border-b border-[#E5E7EB]">
              <span className="font-['Inter'] font-normal text-[15px] leading-none text-[#2D3139]">
                Active routes
              </span>
              <span className="font-['Inter'] font-bold text-[20px] leading-none text-[#1A1D1F]">
                19{' '}
                <span className="font-['Inter'] font-normal text-[12px] text-[#9CA3AF]">
                  of 24 planned
                </span>
              </span>
            </div>

            {/* Collection vehicles */}
            <div className="flex justify-between items-baseline py-[15px] border-b border-[#E5E7EB]">
              <span className="font-['Inter'] font-normal text-[15px] leading-none text-[#2D3139]">
                Collection vehicles
              </span>
              <span className="font-['Inter'] font-bold text-[20px] leading-none text-[#1A1D1F]">
                54{' '}
                <span className="font-['Inter'] font-normal text-[12px] text-[#9CA3AF]">
                  41 on route
                </span>
              </span>
            </div>

            {/* Workers on shift */}
            <div className="flex justify-between items-baseline py-[15px] border-b border-[#E5E7EB]">
              <span className="font-['Inter'] font-normal text-[15px] leading-none text-[#2D3139]">
                Workers on shift
              </span>
              <span className="font-['Inter'] font-bold text-[20px] leading-none text-[#1A1D1F]">
                148{' '}
                <span className="font-['Inter'] font-normal text-[12px] text-[#9CA3AF]">
                  42 drivers
                </span>
              </span>
            </div>
          </div>

          {/* Section: Bin Fleet Health */}
          <p className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.14em] uppercase text-[#9CA3AF] mt-[36px] mb-0">
            Bin fleet health
          </p>
          <div className="border-t-2 border-[#1A1D1F] mt-[10px] grid grid-cols-5 divide-x divide-[#E5E7EB]">
            <div className="py-[18px] pr-2">
              <p className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.1em] uppercase text-[#9CA3AF] m-0 mb-[9px]">
                Full
              </p>
              <span className="font-['Inter'] font-bold text-[22px] sm:text-[26px] leading-none text-[#1A1D1F]">
                68
              </span>
            </div>

            <div className="py-[18px] px-3 sm:px-5">
              <p className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.1em] uppercase text-[#9CA3AF] m-0 mb-[9px]">
                Near-full
              </p>
              <span className="font-['Inter'] font-bold text-[22px] sm:text-[26px] leading-none text-[#1A1D1F]">
                96
              </span>
            </div>

            <div className="py-[18px] px-3 sm:px-5">
              <p className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.1em] uppercase text-[#9CA3AF] m-0 mb-[9px]">
                Normal
              </p>
              <span className="font-['Inter'] font-bold text-[22px] sm:text-[26px] leading-none text-[#1A1D1F]">
                288
              </span>
            </div>

            <div className="py-[18px] px-3 sm:px-5">
              <p className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.1em] uppercase text-[#9CA3AF] m-0 mb-[9px]">
                Low battery
              </p>
              <span className="font-['Inter'] font-bold text-[22px] sm:text-[26px] leading-none text-[#1A1D1F]">
                9
              </span>
            </div>

            <div className="py-[18px] pl-3 sm:pl-5">
              <p className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.1em] uppercase text-[#9CA3AF] m-0 mb-[9px]">
                Offline
              </p>
              <span className="font-['Inter'] font-bold text-[22px] sm:text-[26px] leading-none text-[#1A1D1F]">
                6
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (5 cols = ~41.7%) */}
        <div className="lg:col-span-5 flex flex-col">
          {/* Section: Open alerts */}
          <div className="border-t-2 border-[#1A1D1F] pt-[20px]">
            <div className="flex justify-between items-baseline mb-[18px]">
              <h2 className="font-['Poppins'] font-bold text-[20px] leading-[1.2] tracking-[-0.02em] text-[#1A1D1F] m-0">
                Open alerts
              </h2>
              <span className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.1em] text-[#9CA3AF]">
                27 UNRESOLVED
              </span>
            </div>

            <div className="flex flex-col">
              {/* Alert 1 */}
              <div className="border-l-[3px] border-[#DC2626] p-[12px_0_12px_16px] border-b border-[#E5E7EB]">
                <div className="flex justify-between items-baseline gap-3">
                  <span className="font-['Inter'] font-bold text-[12px] leading-none tracking-[0.06em] uppercase text-[#DC2626]">
                    Critical · fire detected
                  </span>
                  <span className="font-['Inter'] font-normal text-[11px] leading-none text-[#9CA3AF]">
                    2 min ago
                  </span>
                </div>
                <p className="font-['Inter'] font-normal text-[14px] leading-[1.4] text-[#1A1D1F] m-0 mt-2">
                  <span className="font-bold">DB214</span> — Manvelpada Road, Virar East
                </p>
                <button
                  type="button"
                  onClick={() => onShowToast('Escalated alert DB214 to Vasai-Virar Fire Services')}
                  className="font-['Inter'] font-normal text-[12px] leading-none text-[#00796B] hover:underline mt-2 p-0 bg-transparent border-none cursor-pointer block"
                >
                  Escalate to fire services →
                </button>
              </div>

              {/* Alert 2 */}
              <div className="border-l-[3px] border-[#DC2626] p-[12px_0_12px_16px] border-b border-[#E5E7EB]">
                <div className="flex justify-between items-baseline gap-3">
                  <span className="font-['Inter'] font-bold text-[12px] leading-none tracking-[0.06em] uppercase text-[#DC2626]">
                    Critical · overflow
                  </span>
                  <span className="font-['Inter'] font-normal text-[11px] leading-none text-[#9CA3AF]">
                    11 min ago
                  </span>
                </div>
                <p className="font-['Inter'] font-normal text-[14px] leading-[1.4] text-[#1A1D1F] m-0 mt-2">
                  <span className="font-bold">DB077</span> — Tulinj Road, Nallasopara East · 104%
                </p>
                <button
                  type="button"
                  onClick={() => onShowToast('DB077 added to Route R-1153 dispatch queue')}
                  className="font-['Inter'] font-normal text-[12px] leading-none text-[#00796B] hover:underline mt-2 p-0 bg-transparent border-none cursor-pointer block"
                >
                  Add to next route →
                </button>
              </div>

              {/* Alert 3 */}
              <div className="border-l-[3px] border-[#DC2626] p-[12px_0_12px_16px] border-b border-[#E5E7EB]">
                <div className="flex justify-between items-baseline gap-3">
                  <span className="font-['Inter'] font-bold text-[12px] leading-none tracking-[0.06em] uppercase text-[#DC2626]">
                    Critical · route deviation
                  </span>
                  <span className="font-['Inter'] font-normal text-[11px] leading-none text-[#9CA3AF]">
                    24 min ago
                  </span>
                </div>
                <p className="font-['Inter'] font-normal text-[14px] leading-[1.4] text-[#1A1D1F] m-0 mt-2">
                  <span className="font-bold">MH48-BK-2291</span> — off route R-1142 by 1.8 km
                </p>
                <button
                  type="button"
                  onClick={() => onShowToast('Contacting driver Sunil Pawar (+91 98201 44321)...')}
                  className="font-['Inter'] font-normal text-[12px] leading-none text-[#00796B] hover:underline mt-2 p-0 bg-transparent border-none cursor-pointer block"
                >
                  Contact driver →
                </button>
              </div>

              {/* Alert 4 */}
              <div className="border-l-[3px] border-[#D97706] p-[12px_0_12px_16px] border-b border-[#E5E7EB]">
                <div className="flex justify-between items-baseline gap-3">
                  <span className="font-['Inter'] font-bold text-[12px] leading-none tracking-[0.06em] uppercase text-[#B45309]">
                    Warning · task not accepted
                  </span>
                  <span className="font-['Inter'] font-normal text-[11px] leading-none text-[#9CA3AF]">
                    38 min ago
                  </span>
                </div>
                <p className="font-['Inter'] font-normal text-[14px] leading-[1.4] text-[#1A1D1F] m-0 mt-2">
                  Route R-1150 · driver Sunil Pawar
                </p>
              </div>

              {/* Alert 5 */}
              <div className="border-l-[3px] border-[#D97706] p-[12px_0_12px_16px] border-b border-[#E5E7EB]">
                <div className="flex justify-between items-baseline gap-3">
                  <span className="font-['Inter'] font-bold text-[12px] leading-none tracking-[0.06em] uppercase text-[#B45309]">
                    Warning · low battery
                  </span>
                  <span className="font-['Inter'] font-normal text-[11px] leading-none text-[#9CA3AF]">
                    1 hr ago
                  </span>
                </div>
                <p className="font-['Inter'] font-normal text-[14px] leading-[1.4] text-[#1A1D1F] m-0 mt-2">
                  9 bins below 15% · Vasai East cluster
                </p>
              </div>

              {/* Alert 6 */}
              <div className="border-l-[3px] border-[#3B82F6] p-[12px_0_12px_16px] border-b border-[#E5E7EB]">
                <div className="flex justify-between items-baseline gap-3">
                  <span className="font-['Inter'] font-bold text-[12px] leading-none tracking-[0.06em] uppercase text-[#3B82F6]">
                    Info · route completed
                  </span>
                  <span className="font-['Inter'] font-normal text-[11px] leading-none text-[#9CA3AF]">
                    1 hr ago
                  </span>
                </div>
                <p className="font-['Inter'] font-normal text-[14px] leading-[1.4] text-[#1A1D1F] m-0 mt-2">
                  R-1138 · Vasai West · 22 of 22 verified
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigate('/dashboard/alerts')}
              className="font-['Inter'] font-semibold text-[12px] leading-none text-[#00796B] hover:underline mt-[18px] p-0 bg-transparent border-none cursor-pointer flex items-center gap-1"
            >
              All alerts →
            </button>
          </div>

          {/* Section: Complaints */}
          <div className="border-t-2 border-[#1A1D1F] pt-[20px] mt-[40px]">
            <h2 className="font-['Poppins'] font-bold text-[20px] leading-[1.2] tracking-[-0.02em] text-[#1A1D1F] m-0 mb-4">
              Complaints
            </h2>

            {/* Status Pills Row */}
            <div className="flex items-center gap-1.5 mb-4">
              {complaintTabs.map((tab) => {
                const isActive = selectedComplaintTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setSelectedComplaintTab(tab.key)}
                    className={`flex-1 text-center font-['Inter'] font-bold text-[9px] leading-none tracking-[0.08em] py-[7px] border-none cursor-pointer transition-all ${
                      isActive
                        ? 'bg-[#1A1D1F] text-white shadow-xs'
                        : 'bg-[#F3F4F6] text-[#2D3139] hover:bg-gray-200/80'
                    }`}
                    style={
                      !isActive && tab.key === 'RESOLVED'
                        ? { background: 'rgba(0,150,136,0.09)', color: '#00796B' }
                        : undefined
                    }
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Complaints Metrics */}
            <div className="flex justify-between items-baseline py-[13px] border-b border-[#E5E7EB] transition-all">
              <span className="font-['Inter'] font-normal text-[14px] leading-none text-[#2D3139]">
                Median resolution time
              </span>
              <span className="font-['Inter'] font-bold text-[17px] leading-none text-[#1A1D1F]">
                {currentComplaintData.medianTime}{' '}
                <span className="font-['Inter'] font-normal text-[11px] text-[#9CA3AF]">
                  {currentComplaintData.medianUnit}
                </span>
              </span>
            </div>

            <div className="flex justify-between items-baseline py-[13px] border-b border-[#E5E7EB] transition-all">
              <span className="font-['Inter'] font-normal text-[14px] leading-none text-[#2D3139]">
                Breaching SLA
              </span>
              <span
                className="font-['Inter'] font-bold text-[17px] leading-none"
                style={{ color: currentComplaintData.breachingColor || '#009688' }}
              >
                {currentComplaintData.breachingSla}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── CONTRACTOR DASHBOARD (OPTION 1b) ─────────────────────
function ContractorDashboardView({ onShowToast }: { onShowToast: (msg: string) => void }) {
  const navigate = useNavigate();

  return (
    <div className="flex-1 min-w-0 bg-white">
      {/* 1. Score Band Across Top */}
      <div className="bg-[#009688] p-6 sm:p-8 lg:p-[34px_40px] flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-[48px]">
        {/* Overall Collection Score */}
        <div className="border-l-[3px] border-white/50 pl-[22px] shrink-0">
          <p className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.14em] uppercase text-white/75 m-0 mb-[10px]">
            Overall city collection score
          </p>
          <div className="flex items-baseline gap-3">
            <span className="font-['Inter'] font-bold text-[56px] sm:text-[68px] leading-[0.85] tracking-[-0.04em] text-white">
              82
            </span>
            <span className="font-['Inter'] font-medium text-[16px] leading-none text-white/70 pb-[6px]">
              / 100
            </span>
          </div>
          <p className="font-['Inter'] font-medium text-[12px] leading-none text-white/85 mt-[12px] mb-0">
            ▲ 4 pts vs last week · best Virar West 86 · lowest Nallasopara East 71
          </p>
        </div>

        {/* Vertical Divider */}
        <div className="hidden lg:block w-[1px] self-stretch bg-white/28 shrink-0"></div>

        {/* 4 Metric Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-[44px] flex-1">
          <div>
            <p className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.1em] uppercase text-white/70 m-0 mb-[10px]">
              Requiring collection
            </p>
            <span className="font-['Inter'] font-bold text-[28px] sm:text-[34px] leading-none text-white">
              68
            </span>
          </div>
          <div>
            <p className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.1em] uppercase text-white/70 m-0 mb-[10px]">
              Overflowing
            </p>
            <span className="font-['Inter'] font-bold text-[28px] sm:text-[34px] leading-none text-white">
              14
            </span>
          </div>
          <div>
            <p className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.1em] uppercase text-white/70 m-0 mb-[10px]">
              Verified today
            </p>
            <span className="font-['Inter'] font-bold text-[28px] sm:text-[34px] leading-none text-white">
              73%
            </span>
          </div>
          <div>
            <p className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.1em] uppercase text-white/70 m-0 mb-[10px]">
              Open alerts
            </p>
            <span className="font-['Inter'] font-bold text-[28px] sm:text-[34px] leading-none text-white">
              27
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="shrink-0">
          <button
            type="button"
            onClick={() => onShowToast('Contractor route dispatch running across assigned zones...')}
            className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#00796B] border-none p-[14px_22px] font-['Inter'] font-bold text-[12px] leading-none cursor-pointer whitespace-nowrap transition-colors"
          >
            Dispatch routes
          </button>
        </div>
      </div>

      {/* 2. Main Content Area Below the Band */}
      <div className="p-6 sm:p-8 lg:p-[34px_40px_48px] max-w-[1400px]">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 sm:gap-6 mb-[34px]">
          <div>
            <p className="font-['Inter'] font-semibold text-[11px] leading-none tracking-[0.16em] uppercase text-[#00796B] m-0 mb-[14px]">
              Executive overview
            </p>
            <h1 className="font-['Poppins'] font-bold text-[30px] sm:text-[34px] leading-[1.05] tracking-[-0.025em] text-[#1A1D1F] m-0">
              Vasai-Virar city operations
            </h1>
          </div>
          <span className="font-['Inter'] font-normal text-[12px] leading-none text-[#9CA3AF] whitespace-nowrap">
            Live · 30 Aug 2026, 14:20 IST
          </span>
        </div>

        {/* 2-Column Split: 7fr / 5fr */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT COLUMN (7 cols = ~58.3%) */}
          <div className="lg:col-span-7 flex flex-col">
            {/* 3x2 KPI Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 border-t-2 border-[#1A1D1F]">
              {/* Row 1 */}
              <div className="py-5 sm:pr-5 border-b border-[#E5E7EB]">
                <p className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.1em] uppercase text-[#9CA3AF] m-0 mb-[10px]">
                  Total smart bins
                </p>
                <span className="font-['Inter'] font-bold text-[28px] sm:text-[32px] leading-none text-[#1A1D1F]">
                  452
                </span>
              </div>
              <div className="py-5 sm:px-5 border-b border-[#E5E7EB] sm:border-l sm:border-[#E5E7EB]">
                <p className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.1em] uppercase text-[#9CA3AF] m-0 mb-[10px]">
                  Collection vehicles
                </p>
                <span className="font-['Inter'] font-bold text-[28px] sm:text-[32px] leading-none text-[#1A1D1F]">
                  54
                </span>
              </div>
              <div className="py-5 sm:px-5 border-b border-[#E5E7EB] sm:border-l sm:border-[#E5E7EB]">
                <p className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.1em] uppercase text-[#9CA3AF] m-0 mb-[10px]">
                  Waste collected
                </p>
                <span className="font-['Inter'] font-bold text-[28px] sm:text-[32px] leading-none text-[#1A1D1F]">
                  214.6
                  <span className="font-['Inter'] font-normal text-[12px] text-[#9CA3AF]">
                    {' '}
                    t
                  </span>
                </span>
              </div>

              {/* Row 2 */}
              <div className="py-5 sm:pr-5 border-b border-[#E5E7EB]">
                <p className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.1em] uppercase text-[#9CA3AF] m-0 mb-[10px]">
                  Active routes
                </p>
                <span className="font-['Inter'] font-bold text-[28px] sm:text-[32px] leading-none text-[#1A1D1F]">
                  19
                </span>
              </div>
              <div className="py-5 sm:px-5 border-b border-[#E5E7EB] sm:border-l sm:border-[#E5E7EB]">
                <p className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.1em] uppercase text-[#9CA3AF] m-0 mb-[10px]">
                  Workers on shift
                </p>
                <span className="font-['Inter'] font-bold text-[28px] sm:text-[32px] leading-none text-[#1A1D1F]">
                  148
                </span>
              </div>
              <div className="py-5 sm:px-5 border-b border-[#E5E7EB] sm:border-l sm:border-[#E5E7EB]">
                <p className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.1em] uppercase text-[#9CA3AF] m-0 mb-[10px]">
                  Critical bins
                </p>
                <span className="font-['Inter'] font-bold text-[28px] sm:text-[32px] leading-none text-[#009688]">
                  14
                </span>
              </div>
            </div>

            {/* Fill Level Distribution */}
            <p className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.14em] uppercase text-[#9CA3AF] mt-[40px] mb-0">
              Fill level distribution · 452 bins
            </p>
            <div className="border-t-2 border-[#1A1D1F] mt-[10px] pt-[20px]">
              {/* Stacked bar */}
              <div className="flex h-[34px] mb-[14px]">
                <div
                  style={{ width: '63.7%' }}
                  className="bg-[#009688] h-full"
                  title="Normal <40%: 288 bins (63.7%)"
                />
                <div
                  style={{ width: '21.2%' }}
                  className="bg-[#14B8A6] h-full"
                  title="Near-full 40–80%: 96 bins (21.2%)"
                />
                <div
                  style={{ width: '15.1%' }}
                  className="bg-[#D97706] h-full"
                  title="Full >80%: 68 bins (15.1%)"
                />
              </div>

              {/* Legend */}
              <div className="flex flex-wrap items-center gap-5 sm:gap-[28px]">
                <span className="font-['Inter'] font-normal text-[12px] leading-none text-[#2D3139] flex items-center">
                  <span className="inline-block w-[9px] h-[9px] bg-[#009688] mr-[7px] shrink-0"></span>
                  Normal &lt;40% · <b className="text-[#1A1D1F] font-bold ml-1">288</b>
                </span>
                <span className="font-['Inter'] font-normal text-[12px] leading-none text-[#2D3139] flex items-center">
                  <span className="inline-block w-[9px] h-[9px] bg-[#14B8A6] mr-[7px] shrink-0"></span>
                  Near-full 40–80% · <b className="text-[#1A1D1F] font-bold ml-1">96</b>
                </span>
                <span className="font-['Inter'] font-normal text-[12px] leading-none text-[#2D3139] flex items-center">
                  <span className="inline-block w-[9px] h-[9px] bg-[#D97706] mr-[7px] shrink-0"></span>
                  Full &gt;80% · <b className="text-[#1A1D1F] font-bold ml-1">68</b>
                </span>
              </div>
            </div>

            {/* Zone Performance Table */}
            <p className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.14em] uppercase text-[#9CA3AF] mt-[40px] mb-0">
              Zone performance
            </p>
            <div className="mt-[10px] overflow-x-auto">
              <div className="min-w-[480px]">
                <div className="grid grid-cols-[1.6fr_0.7fr_0.7fr_0.7fr_1fr] pb-[9px] border-b-2 border-[#1A1D1F]">
                  <span className="font-['Inter'] font-semibold text-[10px] leading-none tracking-[0.14em] uppercase text-[#9CA3AF]">
                    Zone
                  </span>
                  <span className="font-['Inter'] font-semibold text-[10px] leading-none tracking-[0.14em] uppercase text-[#9CA3AF] text-right">
                    Bins
                  </span>
                  <span className="font-['Inter'] font-semibold text-[10px] leading-none tracking-[0.14em] uppercase text-[#9CA3AF] text-right">
                    Critical
                  </span>
                  <span className="font-['Inter'] font-semibold text-[10px] leading-none tracking-[0.14em] uppercase text-[#9CA3AF] text-right">
                    Trucks
                  </span>
                  <span className="font-['Inter'] font-semibold text-[10px] leading-none tracking-[0.14em] uppercase text-[#9CA3AF] text-right">
                    Verified
                  </span>
                </div>

                {/* Virar West */}
                <div className="grid grid-cols-[1.6fr_0.7fr_0.7fr_0.7fr_1fr] py-[14px] border-b border-[#E5E7EB]">
                  <span className="font-['Inter'] font-bold text-[15px] leading-none text-[#1A1D1F]">
                    Virar West
                  </span>
                  <span className="font-['Inter'] font-normal text-[15px] leading-none text-[#2D3139] text-right">
                    450
                  </span>
                  <span className="font-['Inter'] font-normal text-[15px] leading-none text-[#2D3139] text-right">
                    28
                  </span>
                  <span className="font-['Inter'] font-normal text-[15px] leading-none text-[#2D3139] text-right">
                    12
                  </span>
                  <span className="font-['Inter'] font-semibold text-[15px] leading-none text-[#1A1D1F] text-right">
                    86%
                  </span>
                </div>

                {/* Vasai West */}
                <div className="grid grid-cols-[1.6fr_0.7fr_0.7fr_0.7fr_1fr] py-[14px] border-b border-[#E5E7EB]">
                  <span className="font-['Inter'] font-bold text-[15px] leading-none text-[#1A1D1F]">
                    Vasai West
                  </span>
                  <span className="font-['Inter'] font-normal text-[15px] leading-none text-[#2D3139] text-right">
                    88
                  </span>
                  <span className="font-['Inter'] font-normal text-[15px] leading-none text-[#2D3139] text-right">
                    9
                  </span>
                  <span className="font-['Inter'] font-normal text-[15px] leading-none text-[#2D3139] text-right">
                    9
                  </span>
                  <span className="font-['Inter'] font-semibold text-[15px] leading-none text-[#1A1D1F] text-right">
                    84%
                  </span>
                </div>

                {/* Virar East */}
                <div className="grid grid-cols-[1.6fr_0.7fr_0.7fr_0.7fr_1fr] py-[14px] border-b border-[#E5E7EB]">
                  <span className="font-['Inter'] font-bold text-[15px] leading-none text-[#1A1D1F]">
                    Virar East
                  </span>
                  <span className="font-['Inter'] font-normal text-[15px] leading-none text-[#2D3139] text-right">
                    74
                  </span>
                  <span className="font-['Inter'] font-normal text-[15px] leading-none text-[#2D3139] text-right">
                    11
                  </span>
                  <span className="font-['Inter'] font-normal text-[15px] leading-none text-[#2D3139] text-right">
                    8
                  </span>
                  <span className="font-['Inter'] font-semibold text-[15px] leading-none text-[#1A1D1F] text-right">
                    81%
                  </span>
                </div>

                {/* Nallasopara East (Active highlight) */}
                <div className="grid grid-cols-[1.6fr_0.7fr_0.7fr_0.7fr_1fr] py-[14px] px-2 -mx-2 border-b border-[#E5E7EB] bg-[rgba(0,150,136,0.05)]">
                  <span className="font-['Inter'] font-bold text-[15px] leading-none text-[#1A1D1F]">
                    Nallasopara East
                  </span>
                  <span className="font-['Inter'] font-normal text-[15px] leading-none text-[#2D3139] text-right">
                    71
                  </span>
                  <span className="font-['Inter'] font-semibold text-[15px] leading-none text-[#009688] text-right">
                    19
                  </span>
                  <span className="font-['Inter'] font-normal text-[15px] leading-none text-[#2D3139] text-right">
                    7
                  </span>
                  <span className="font-['Inter'] font-semibold text-[15px] leading-none text-[#1A1D1F] text-right">
                    71%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (5 cols = ~41.7%) */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Section: Open alerts */}
            <div className="border-t-2 border-[#1A1D1F] pt-[20px]">
              <div className="flex justify-between items-baseline mb-[18px]">
                <h2 className="font-['Poppins'] font-bold text-[20px] leading-[1.2] tracking-[-0.02em] text-[#1A1D1F] m-0">
                  Open alerts
                </h2>
                <span className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.1em] text-[#9CA3AF]">
                  27 UNRESOLVED
                </span>
              </div>

              <div className="flex flex-col">
                {/* Alert 1 */}
                <div className="border-l-[3px] border-[#DC2626] p-[12px_0_12px_16px] border-b border-[#E5E7EB]">
                  <div className="flex justify-between items-baseline gap-3">
                    <span className="font-['Inter'] font-bold text-[12px] leading-none tracking-[0.06em] uppercase text-[#DC2626]">
                      Critical · fire detected
                    </span>
                    <span className="font-['Inter'] font-normal text-[11px] leading-none text-[#9CA3AF]">
                      2 min
                    </span>
                  </div>
                  <p className="font-['Inter'] font-normal text-[14px] leading-[1.4] text-[#1A1D1F] m-0 mt-2">
                    <span className="font-bold">DB214</span> — Manvelpada Road, Virar East
                  </p>
                </div>

                {/* Alert 2 */}
                <div className="border-l-[3px] border-[#DC2626] p-[12px_0_12px_16px] border-b border-[#E5E7EB]">
                  <div className="flex justify-between items-baseline gap-3">
                    <span className="font-['Inter'] font-bold text-[12px] leading-none tracking-[0.06em] uppercase text-[#DC2626]">
                      Critical · overflow
                    </span>
                    <span className="font-['Inter'] font-normal text-[11px] leading-none text-[#9CA3AF]">
                      11 min
                    </span>
                  </div>
                  <p className="font-['Inter'] font-normal text-[14px] leading-[1.4] text-[#1A1D1F] m-0 mt-2">
                    <span className="font-bold">DB077</span> — Tulinj Road · 104%
                  </p>
                </div>

                {/* Alert 3 */}
                <div className="border-l-[3px] border-[#D97706] p-[12px_0_12px_16px] border-b border-[#E5E7EB]">
                  <div className="flex justify-between items-baseline gap-3">
                    <span className="font-['Inter'] font-bold text-[12px] leading-none tracking-[0.06em] uppercase text-[#B45309]">
                      Warning · above 80%
                    </span>
                    <span className="font-['Inter'] font-normal text-[11px] leading-none text-[#9CA3AF]">
                      26 min
                    </span>
                  </div>
                  <p className="font-['Inter'] font-normal text-[14px] leading-[1.4] text-[#1A1D1F] m-0 mt-2">
                    17 bins crossed threshold · Vasai East
                  </p>
                </div>

                {/* Alert 4 */}
                <div className="border-l-[3px] border-[#3B82F6] p-[12px_0_12px_16px] border-b border-[#E5E7EB]">
                  <div className="flex justify-between items-baseline gap-3">
                    <span className="font-['Inter'] font-bold text-[12px] leading-none tracking-[0.06em] uppercase text-[#3B82F6]">
                      Info · bin verified
                    </span>
                    <span className="font-['Inter'] font-normal text-[11px] leading-none text-[#9CA3AF]">
                      44 min
                    </span>
                  </div>
                  <p className="font-['Inter'] font-normal text-[14px] leading-[1.4] text-[#1A1D1F] m-0 mt-2">
                    DB301 emptied — sensor confirmed 4%
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => navigate('/dashboard/alerts')}
                className="font-['Inter'] font-semibold text-[12px] leading-none text-[#00796B] hover:underline mt-[18px] p-0 bg-transparent border-none cursor-pointer flex items-center gap-1"
              >
                All alerts →
              </button>
            </div>

            {/* Section: Today's collection */}
            <div className="border-t-2 border-[#1A1D1F] pt-[20px] mt-[40px]">
              <h2 className="font-['Poppins'] font-bold text-[20px] leading-[1.2] tracking-[-0.02em] text-[#1A1D1F] m-0 mb-1">
                Today's collection
              </h2>
              <p className="font-['Inter'] font-normal text-[12px] leading-[1.5] text-[#9CA3AF] m-0 mb-[14px]">
                Verified means the bin sensor confirmed it emptied.
              </p>

              {/* Ruled Rows */}
              <div className="flex justify-between items-baseline py-[13px] border-b border-[#E5E7EB]">
                <span className="font-['Inter'] font-normal text-[14px] leading-none text-[#2D3139]">
                  Assigned
                </span>
                <span className="font-['Inter'] font-bold text-[17px] leading-none text-[#1A1D1F]">
                  250
                </span>
              </div>

              <div className="flex justify-between items-baseline py-[13px] px-2 -mx-2 border-b border-[#E5E7EB] bg-[rgba(0,150,136,0.05)]">
                <span className="font-['Inter'] font-semibold text-[14px] leading-none text-[#1A1D1F]">
                  Verified
                </span>
                <span className="font-['Inter'] font-bold text-[17px] leading-none text-[#1A1D1F] pr-1">
                  182
                </span>
              </div>

              <div className="flex justify-between items-baseline py-[13px] border-b border-[#E5E7EB]">
                <span className="font-['Inter'] font-normal text-[14px] leading-none text-[#2D3139]">
                  Pending
                </span>
                <span className="font-['Inter'] font-bold text-[17px] leading-none text-[#1A1D1F]">
                  52
                </span>
              </div>

              <div className="flex justify-between items-baseline py-[13px] border-b border-[#E5E7EB]">
                <span className="font-['Inter'] font-normal text-[14px] leading-none text-[#2D3139]">
                  Skipped
                </span>
                <span className="font-['Inter'] font-bold text-[17px] leading-none text-[#1A1D1F]">
                  11
                </span>
              </div>

              <div className="flex justify-between items-baseline py-[13px] border-b border-[#E5E7EB]">
                <span className="font-['Inter'] font-normal text-[14px] leading-none text-[#2D3139]">
                  Verification failed
                </span>
                <span className="font-['Inter'] font-bold text-[17px] leading-none text-[#009688]">
                  5
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN DASHBOARD EXPORT ────────────────────────────────
export default function Dashboard() {
  const { user } = useAuth();
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const isContractor = user?.role === 'Contractor';

  return (
    <>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1A1D1F] text-white px-4 py-3 rounded-[2px] shadow-lg flex items-center gap-3 font-['Inter'] text-[13px] border-l-4 border-[#009688] animate-in fade-in slide-in-from-bottom-2">
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-gray-400 hover:text-white text-xs cursor-pointer ml-2"
          >
            ✕
          </button>
        </div>
      )}

      {/* Render 1b for Contractor, 1a for Admin */}
      {isContractor ? (
        <ContractorDashboardView onShowToast={showToast} />
      ) : (
        <AdminDashboardView onShowToast={showToast} />
      )}
    </>
  );
}
