import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';

const principles = [
  {
    title: 'ISO-certified manufacturing',
    body: 'Units engineered for extreme urban conditions, 99.9% uptime target.',
  },
  {
    title: 'Deployment specialists on site',
    body: 'Named team through survey, install and handover, not a reseller channel.',
  },
  {
    title: 'Sustainability claims with the data behind them',
    body: 'ESG reports generated from bin-level telemetry, not estimates.',
  },
];

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {/* --- HERO --- */}
      <section className="w-full bg-white pt-8 pb-14 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] tracking-[0.16em] uppercase text-primary-hover font-semibold mb-6">
            About XelCo
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-dark font-display tracking-tight max-w-4xl">
            Building the digital backbone of urban sanitation
          </h1>
        </div>
      </section>

      {/* --- HOW WE WORK --- */}
      <section className="w-full bg-[#F8F9FA] py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="text-[11px] tracking-[0.16em] uppercase text-primary-hover font-semibold mb-6">
                How we work
              </div>
              <h2 className="text-3xl md:text-[2.5rem] font-bold leading-[1.18] text-dark font-display tracking-tight mb-8">
                We build hardware for the street and software that proves what it did, then we hand you the report.
              </h2>
              <p className="text-[15px] text-dark-secondary leading-relaxed max-w-xl">
                Founded on a simple realisation: the technology to fix waste collection already existed, the
                industrial application did not. Our team comes from hardware manufacturing, cloud architecture
                and civic logistics.
              </p>
            </div>

            <div className="lg:col-span-5 lg:pt-2">
              <div className="border-t-2 border-dark">
                {principles.map((p) => (
                  <div key={p.title} className="py-5 border-b border-gray-200">
                    <h3 className="font-bold text-[15px] text-dark mb-1.5 leading-snug">{p.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="w-full bg-[#009688] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 border-l-[3px] border-white/40 pl-6 md:pl-8">
            <div className="max-w-lg">
              <h2 className="text-2xl md:text-[2rem] font-bold mb-2 text-white leading-[1.18] font-display tracking-tight">
                Partner with us on civic infrastructure
              </h2>
              <p className="text-white/80 text-base">
                One campus or one metro area, same team either way.
              </p>
            </div>

            <div className="flex items-center gap-7 shrink-0">
              <Button onClick={() => navigate('/contact')} className="px-8 py-5 text-sm font-semibold bg-white text-[#009688] hover:bg-white/90 border-none">
                Request a demo
              </Button>
              <button
                onClick={() => navigate('/contact')}
                className="text-sm font-semibold text-white border-b border-white/50 pb-1.5 flex items-center gap-1.5 hover:border-white transition-colors cursor-pointer"
              >
                Talk to our experts <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
