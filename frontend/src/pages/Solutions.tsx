import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useNavigate, useLocation } from 'react-router-dom';

const sectors = [
  {
    id: 'municipal',
    sector: 'Municipal corporations',
    outcome: 'Solar compaction and dynamic routing cut fleet fuel usage 45% and end street overflow.',
    line: 'Municipal',
    href: '/products/municipal',
  },
  {
    id: 'smart-cities',
    sector: 'Smart cities',
    outcome: 'Open APIs feed bin telemetry into civic dashboards and 311 systems.',
    line: 'Municipal',
    href: '/products/municipal',
  },
  {
    id: 'railways',
    sector: 'Railways & transit',
    outcome: 'Vandal-proof high-capacity units for distributed, high-volume networks.',
    line: 'Municipal',
    href: '/products/municipal',
  },
  {
    id: 'commercial',
    sector: 'Commercial complexes',
    outcome: 'Multi-stream segregation with audit-ready ESG reporting per property.',
    line: 'Commercial',
    href: '/products/commercial',
  },
  {
    id: 'airports',
    sector: 'Airports',
    outcome: 'Janitorial staff routed only to bins that need emptying in high-footfall terminals.',
    line: 'Commercial',
    href: '/products/commercial',
  },
  {
    id: 'universities',
    sector: 'Universities',
    outcome: 'Campus recycling participation tracked block by block; facilities costs fall.',
    line: 'Commercial',
    href: '/products/commercial',
  },
  {
    id: 'hospitals',
    sector: 'Hospitals & healthcare',
    outcome: 'Touchless disposal with active odour neutralisation in public areas.',
    line: 'Commercial',
    href: '/products/commercial',
  },
  {
    id: 'industrial',
    sector: 'Industrial parks',
    outcome: 'Large-scale waste monitoring and heavy-truck collection scheduling.',
    line: 'Commercial',
    href: '/products/commercial',
  },
  {
    id: 'residential',
    sector: 'Residential communities',
    outcome: 'Segregation mandates enforced per household; housekeeping routes optimised.',
    line: 'Residential',
    href: '/products/residential',
  },
];

const phases = [
  {
    num: '01',
    title: 'Deploy',
    body: 'Install smart bins or retrofit sensors into existing infrastructure.',
  },
  {
    num: '02',
    title: 'Monitor',
    body: 'Fill levels stream to XelCo Cloud over cellular, NB-IoT or LoRa.',
  },
  {
    num: '03',
    title: 'Optimise',
    body: 'Daily routes issued to drivers; ESG and compliance reports generated from the same data.',
  },
];

export default function Solutions() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#sector-outcomes') {
      document.getElementById('sector-outcomes')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <div className="flex flex-col">
      {/* --- HERO --- */}
      <section className="w-full bg-white pt-16 pb-14 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] tracking-[0.16em] uppercase text-primary-hover font-semibold mb-6">
            Solutions
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-dark font-display tracking-tight max-w-4xl">
            Purpose-built for every sector
          </h1>
        </div>
      </section>

      {/* --- THE COST OF BLIND OPERATIONS --- */}
      <section className="w-full bg-white py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="text-[11px] tracking-[0.16em] uppercase text-red-700 font-semibold mb-6">
                The cost of blind operations
              </div>
              <h2 className="text-3xl md:text-[2.5rem] font-bold leading-[1.18] text-dark font-display tracking-tight">
                Static schedules make two mistakes at once: trucks drive to bins that are empty, and the full ones stay full.
              </h2>
            </div>

            <div className="lg:col-span-5 lg:pt-2">
              <div className="border-t-2 border-dark">
                {[
                  ['Fuel and labour on empty pickups', 'Fleet'],
                  ['Overflow in high-traffic locations', 'Hygiene'],
                  ['No audit trail for dispatch or productivity', 'Operations'],
                ].map(([label, tag]) => (
                  <div
                    key={tag}
                    className="flex items-center justify-between gap-6 py-4 border-b border-gray-200"
                  >
                    <span className="text-[15px] text-dark leading-snug">{label}</span>
                    <span className="text-sm text-gray-400 shrink-0">{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DEPLOYMENT PATH --- */}
      <section className="w-full bg-[#F8F9FA] py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] tracking-[0.16em] uppercase text-primary-hover font-semibold mb-6">
            Deployment path
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-dark font-display tracking-tight max-w-2xl">
              From survey to optimised routes in three phases
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs lg:text-right shrink-0">
              Retrofit existing bins or deploy new units. The platform side is identical.
            </p>
          </div>

          <div className="border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 lg:divide-x divide-gray-200">
            {phases.map((p, i) => (
              <div key={p.num} className={`pt-8 pb-2 ${i === 0 ? 'lg:pr-8' : 'lg:px-8'}`}>
                <div className="text-[11px] text-primary-hover font-semibold mb-4">{p.num}</div>
                <h3 className="text-xl font-bold text-dark mb-3 font-display tracking-tight">{p.title}</h3>
                <p className="text-[15px] text-dark-secondary leading-relaxed max-w-xs">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTOR-SPECIFIC OUTCOMES --- */}
      <section id="sector-outcomes" className="w-full bg-white py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-dark font-display tracking-tight">
            Sector-specific outcomes
          </h2>
          <p className="text-[15px] text-dark-secondary mb-10">
            What changes in each environment, and which bin does it.
          </p>

          {/* Header row */}
          <div className="hidden md:grid grid-cols-12 gap-6 border-b-2 border-dark pb-3">
            <span className="col-span-3 text-[10px] tracking-[0.14em] uppercase text-gray-400 font-semibold">
              Sector
            </span>
            <span className="col-span-6 text-[10px] tracking-[0.14em] uppercase text-gray-400 font-semibold">
              Outcome
            </span>
            <span className="col-span-3 text-[10px] tracking-[0.14em] uppercase text-gray-400 font-semibold">
              Product line
            </span>
          </div>

          {sectors.map((s, i) => (
            <div
              key={s.id}
              className={`grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 py-4 border-b border-gray-200 items-baseline ${
                i === 0 ? 'bg-primary/[0.05] md:-mx-4 md:px-4' : ''
              }`}
            >
              <span className="md:col-span-3 font-bold text-[15px] text-dark">{s.sector}</span>
              <span className="md:col-span-6 text-[15px] text-dark-secondary leading-relaxed">{s.outcome}</span>
              <button
                onClick={() => navigate(s.href)}
                className="md:col-span-3 text-sm text-primary-hover font-semibold flex items-center gap-1.5 hover:text-dark transition-colors justify-self-start"
              >
                {s.line} <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}

          <div className="flex flex-col sm:flex-row sm:items-center gap-5 mt-10">
            <Button onClick={() => navigate('/contact')} className="px-8 py-5 text-sm font-semibold shrink-0">
              Request a pilot deployment
            </Button>
            <span className="text-sm text-gray-400">Municipal pilots start at ward scale.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
