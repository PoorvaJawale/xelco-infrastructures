import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Trash2, Zap, Activity } from 'lucide-react';

/* Wayfinding label at the top of each narrative section. */
function SectionMarker({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <div
      className={`text-[11px] tracking-[0.16em] uppercase font-semibold mb-6 ${
        dark ? 'text-primary' : 'text-primary-hover'
      }`}
    >
      {label}
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* --- HERO SECTION --- */}
      <section className="w-full relative py-10 bg-white border-b border-gray-100 lg:min-h-[calc(100vh-6rem)] lg:flex lg:items-center">
        {/* Desktop right-side background graphic */}
        <div className="absolute right-0 top-0 bottom-0 w-[50%] hidden lg:block pointer-events-none z-0">
          <img 
            src="/hero-image.png" 
            alt="XelCo Intelligent Waste Management Network" 
            className="w-full h-full object-contain object-right" 
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 max-w-2xl">
              <h1 className="text-5xl lg:text-[4.25rem] leading-[1.1] font-bold text-dark mb-6 tracking-tight font-display">
                Waste Management<br />
                <span className="text-primary">Modernization</span><br />
                for Smart Cities.
              </h1>
              <p className="text-lg text-dark-secondary mb-8 leading-relaxed max-w-2xl">
                XelCo delivers enterprise-grade smart bins and AI routing platforms designed to optimize operational efficiency, cut fleet fuel consumption, and provide real-time infrastructure intelligence.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => navigate('/products')} className="px-8 py-6 text-base font-semibold shadow-md">
                  Request a Demo
                </Button>
                <Button variant="outline" onClick={() => navigate('/contact')} className="px-8 py-6 text-base font-semibold border-gray-300 bg-white hover:bg-gray-50 text-dark">
                  Talk to Our Experts
                </Button>
              </div>
            </div>

            {/* Mobile/Tablet inline visual */}
            <div className="lg:col-span-5 relative w-full flex items-center justify-center lg:hidden mt-6">
              <img 
                src="/hero-image.png" 
                alt="XelCo Intelligent Waste Management Network" 
                className="w-full h-auto max-h-[380px] object-contain" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- PROBLEM SECTION (Full-Width Dark Section with Background Image) --- */}
      <section className="w-full relative text-white py-24 border-b border-gray-800 overflow-hidden">
        {/* Background Image */}
        <img 
          src="/problem-bg.jpg" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionMarker label="The Problem" dark />
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white mb-4">
              Traditional Waste Collection is Costly, Reactive, and Inefficient
            </h2>
            <p className="text-gray-400 text-base">
              Outdated collection methods waste fuel, trigger citizen complaints, and leave operators blind to real-time field needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 flex flex-col justify-between">
              <div>
                <Trash2 className="w-10 h-10 text-primary mb-6" />
                <h3 className="font-bold text-lg mb-3 text-white">Overflowing Bins</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Unmonitored bins overflow rapidly during peak hours, causing environmental hazards and public health concerns.
                </p>
              </div>
            </div>

            <div className="p-8 flex flex-col justify-between">
              <div>
                <Zap className="w-10 h-10 text-primary mb-6" />
                <h3 className="font-bold text-lg mb-3 text-white">Unoptimized Routes & Fuel Costs</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Static collection schedules waste fuel sending trucks to half-empty bins while critical overflowing locations are skipped.
                </p>
              </div>
            </div>

            <div className="p-8 flex flex-col justify-between">
              <div>
                <Activity className="w-10 h-10 text-primary mb-6" />
                <h3 className="font-bold text-lg mb-3 text-white">Zero Real-Time Visibility</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Operations managers lack real-time data to audit fleet dispatch, measure worker productivity, or prevent overflow crises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PLATFORM PIPELINE SECTION --- */}
      <section className="w-full bg-[#F8F9FA] py-20 border-b border-gray-100 relative overflow-hidden">
        {/* Background company logo watermark - showing only the top portion */}
        <div 
          className="absolute right-[-80px] bottom-[-220px] w-[500px] h-[500px] pointer-events-none z-0"
          style={{
            backgroundImage: 'url(/company-logo.png)',
            backgroundSize: 'contain',
            backgroundPosition: 'top left',
            backgroundRepeat: 'no-repeat',
            opacity: 0.05,
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionMarker label="The Platform" />
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-[1.12] text-dark font-display tracking-tight">
                One intelligent platform.<br />
                <span className="text-primary">Complete waste visibility.</span>
              </h2>
              <p className="text-dark-secondary text-base leading-relaxed max-w-sm">
                Sensors report. The platform decides. Crews collect only what is full.
              </p>
            </div>
            <div className="text-[11px] tracking-[0.16em] uppercase text-gray-400 font-medium shrink-0 lg:pb-1">
              Bin &rarr; Dispatch
            </div>
          </div>

          {/* Pipeline: 01 → 02 → [03–04 merged] → 05 */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_2.5fr_auto_1fr] gap-y-10 items-stretch">
            <div className="lg:pt-10">
              <div className="text-[11px] text-gray-400 font-medium mb-3">01</div>
              <h3 className="font-bold text-base text-dark mb-1.5">Smart Bins</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Ultrasonic fill sensors</p>
            </div>

            <div className="hidden lg:flex items-center justify-center px-5 text-gray-300">
              <ArrowRight className="w-4 h-4 stroke-[1.5]" />
            </div>

            <div className="lg:pt-10">
              <div className="text-[11px] text-gray-400 font-medium mb-3">02</div>
              <h3 className="font-bold text-base text-dark mb-1.5">IoT Gateway</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Cellular / NB-IoT sync</p>
            </div>

            <div className="hidden lg:flex items-center justify-center px-5 text-gray-300">
              <ArrowRight className="w-4 h-4 stroke-[1.5]" />
            </div>

            {/* Merged 03–04 card */}
            <div className="flex flex-col lg:pt-10 lg:px-8">
              <div className="text-[11px] text-primary-hover font-semibold mb-3">03 &amp; 04</div>
              <h3 className="font-bold text-base text-dark mb-4 leading-tight">
                Cloud Platform + Analytics Engine
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-5 gap-y-2">
                <span className="text-sm text-gray-500 leading-relaxed">Central data hub</span>
                <span className="text-sm text-gray-500 leading-relaxed">Predictive overflow alerts</span>
                <span className="text-sm text-gray-500 leading-relaxed">Dynamic route optimisation</span>
                <span className="text-sm text-gray-500 leading-relaxed">ESG &amp; compliance reports</span>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center px-5 text-gray-300">
              <ArrowRight className="w-4 h-4 stroke-[1.5]" />
            </div>

            <div className="lg:pt-10">
              <div className="text-[11px] text-gray-400 font-medium mb-3">05</div>
              <h3 className="font-bold text-base text-dark mb-1.5">Fleet Crew</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Turn-by-turn navigation</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CENTRALIZED CONTROL SECTION --- */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionMarker label="The Control Center" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Content */}
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-[2.75rem] font-bold mb-5 leading-[1.12] text-dark font-display tracking-tight">
                Manage every bin from one command center
              </h2>
              <p className="text-base text-dark-secondary mb-10 leading-relaxed max-w-md">
                Thousands of bins, one screen, with the alerts and routes generated for you.
              </p>

              <div className="flex flex-col gap-7 mb-10">
                <div className="border-l-2 border-primary pl-5">
                  <h3 className="font-bold text-lg text-dark mb-1.5">Live monitoring</h3>
                  <p className="text-sm text-dark-secondary leading-relaxed">
                    Fill level and health for every bin on the network.
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-5">
                  <h3 className="font-bold text-lg text-dark mb-1.5">Route optimisation</h3>
                  <p className="text-sm text-dark-secondary leading-relaxed">
                    Daily routes built from actual fill data, not fixed schedules.
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="text-[10px] tracking-[0.14em] uppercase text-gray-400 font-medium mb-4">
                  Also in the platform
                </div>
                <div className="grid grid-cols-2 gap-y-3 gap-x-6 max-w-md">
                  <span className="text-[15px] text-dark">Predictive alerts</span>
                  <span className="text-[15px] text-dark">Analytics &amp; reports</span>
                  <span className="text-[15px] text-dark">Asset tracking</span>
                  <span className="text-[15px] text-dark">Team management</span>
                </div>
              </div>
            </div>

            {/* Right Dashboard Mockup */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-gray-200 shadow-sm overflow-hidden flex flex-col">
                {/* Dashboard Top Bar */}
                <div className="h-14 border-b border-gray-100 flex items-center justify-between px-5 gap-4">
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-primary font-bold text-base">XelCo</span>
                    <span className="text-xs text-gray-400 pl-2 border-l border-gray-200">Control Center</span>
                  </div>
                  <div className="hidden sm:flex items-center px-3 py-1.5 border border-gray-200 text-[10px] text-gray-400 flex-1 max-w-[220px] rounded-sm">
                    <span className="truncate">Search bin network...</span>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden sm:block text-[9px] tracking-[0.12em] uppercase text-gray-400 border border-gray-200 px-2 py-1 font-semibold">
                      Demo data
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-primary text-white text-[10px] font-bold flex items-center justify-center rounded-full">A</div>
                      <span className="text-[11px] font-semibold text-dark">Admin</span>
                    </div>
                  </div>
                </div>

                <div className="flex h-[440px]">
                  {/* Dashboard Sidebar */}
                  <div className="w-40 border-r border-gray-100 py-3 flex flex-col gap-0.5 shrink-0">
                    <div className="px-4 py-2 bg-primary/[0.07] text-primary text-xs font-bold border-l-2 border-primary">Dashboard</div>
                    <div className="px-4 py-2 text-gray-500 text-xs font-medium">Bins</div>
                    <div className="px-4 py-2 text-gray-500 text-xs font-medium">Collections</div>
                    <div className="px-4 py-2 text-gray-500 text-xs font-medium">Routes</div>
                    <div className="px-4 py-2 text-gray-500 text-xs font-medium">Alerts</div>
                    <div className="px-4 py-2 text-gray-500 text-xs font-medium">Analytics</div>
                    <div className="px-4 py-2 text-gray-500 text-xs font-medium">Reports</div>
                    <div className="px-4 py-2 text-gray-500 text-xs font-medium">Settings</div>
                  </div>

                  {/* Dashboard Main Content */}
                  <div className="flex-1 p-4 bg-gray-50/60 overflow-hidden flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-dark text-xs">Live fleet overview</h3>
                      <span className="text-[10px] text-gray-400">Today &middot; 09:41</span>
                    </div>

                    {/* Top Stats */}
                    <div className="grid grid-cols-4 gap-2 mb-3">
                      <div className="bg-white p-2.5 border border-gray-100">
                        <div className="text-[8px] font-bold text-gray-400 tracking-[0.1em] uppercase">Bins online</div>
                        <div className="text-lg font-bold text-dark leading-tight mt-1">1,284</div>
                      </div>
                      <div className="bg-white p-2.5 border border-gray-100">
                        <div className="text-[8px] font-bold text-gray-400 tracking-[0.1em] uppercase">Avg fill</div>
                        <div className="text-lg font-bold text-dark leading-tight mt-1">62%</div>
                      </div>
                      <div className="bg-white p-2.5 border border-gray-100">
                        <div className="text-[8px] font-bold text-gray-400 tracking-[0.1em] uppercase">Dispatched</div>
                        <div className="text-lg font-bold text-dark leading-tight mt-1">38</div>
                      </div>
                      <div className="bg-white p-2.5 border border-gray-100">
                        <div className="text-[8px] font-bold text-gray-400 tracking-[0.1em] uppercase">Alerts</div>
                        <div className="text-lg font-bold text-primary leading-tight mt-1">4</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 gap-3 flex-1 min-h-0">
                      {/* Capacity Donut */}
                      <div className="bg-white p-3 border border-gray-100 col-span-5 flex flex-col">
                        <div className="text-[10px] font-bold text-dark mb-2">Capacity monitor</div>
                        <div className="flex-1 flex items-center justify-between gap-3">
                          <svg viewBox="0 0 42 42" className="w-20 h-20 shrink-0 -rotate-90" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="21" cy="21" r="15.9" fill="none" stroke="#B2DFDB" strokeWidth="6" />
                            <circle cx="21" cy="21" r="15.9" fill="none" stroke="#009688" strokeWidth="6" strokeDasharray="34 66" />
                          </svg>
                          <div className="flex flex-col gap-2 text-[10px] flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-500">Critical</span>
                              <span className="font-bold text-dark">86</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-500">Moderate</span>
                              <span className="font-bold text-dark">512</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-500">Clear</span>
                              <span className="font-bold text-dark">686</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Route Map */}
                      <div className="bg-white p-3 border border-gray-100 col-span-7 flex flex-col overflow-hidden">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold text-dark">Active collection map</span>
                          <span className="text-[9px] text-gray-400">Route 12 &middot; 9 stops</span>
                        </div>
                        <div className="flex-1 border border-gray-100 relative overflow-hidden">
                          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0" y1="30" x2="300" y2="30" stroke="#F0F0F0" strokeWidth="1" />
                            <line x1="0" y1="60" x2="300" y2="60" stroke="#F0F0F0" strokeWidth="1" />
                            <line x1="0" y1="90" x2="300" y2="90" stroke="#F0F0F0" strokeWidth="1" />
                            <line x1="60" y1="0" x2="60" y2="120" stroke="#F0F0F0" strokeWidth="1" />
                            <line x1="120" y1="0" x2="120" y2="120" stroke="#F0F0F0" strokeWidth="1" />
                            <line x1="180" y1="0" x2="180" y2="120" stroke="#F0F0F0" strokeWidth="1" />
                            <line x1="240" y1="0" x2="240" y2="120" stroke="#F0F0F0" strokeWidth="1" />
                            <path d="M40,95 L100,35 L160,60 L215,22 L275,80" fill="none" stroke="#009688" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="40" cy="95" r="4" fill="#009688" />
                            <circle cx="100" cy="35" r="4" fill="#009688" />
                            <circle cx="160" cy="60" r="4" fill="#009688" />
                            <circle cx="215" cy="22" r="4" fill="#009688" />
                            <circle cx="275" cy="80" r="4" fill="#009688" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-gray-400 mt-3">XelCo Control Center &middot; illustrative data</p>
            </div>

          </div>
        </div>
      </section>

      {/* --- PRODUCTS: three bins, three markets --- */}
      <section className="w-full bg-[#f8f9fa] py-14 border-b border-gray-100 relative overflow-hidden">
        {/* Background company logo watermark - showing only the bottom portion at the top left */}
        <div 
          className="absolute left-[-80px] top-[-220px] w-[500px] h-[500px] pointer-events-none z-0"
          style={{
            backgroundImage: 'url(/company-logo.png)',
            backgroundSize: 'contain',
            backgroundPosition: 'bottom right',
            backgroundRepeat: 'no-repeat',
            opacity: 0.05,
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
            <div>
              <SectionMarker label="Products" />
              <h2 className="text-4xl md:text-5xl font-bold leading-[1.12] text-dark font-display tracking-tight">
                Three bins. Three markets.
              </h2>
            </div>
            <p className="text-[15px] text-dark-secondary leading-relaxed max-w-xs shrink-0 lg:pt-9">
              One platform behind all three: homes, enterprises and city corporations.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                id: 'residential',
                img: '/home-bin-v0.0.1.png',
                tag: 'B2C · Homes & societies',
                name: 'Residential Smart Bin',
                desc: 'Touchless, odour-free disposal with per-household segregation.',
                short: 'Residential',
              },
              {
                id: 'commercial',
                img: '/commercial-bin-v0.0.1.png',
                tag: 'B2B · Enterprises & facilities',
                name: 'Commercial Smart Bin',
                desc: 'Multi-stream segregation with audit-ready ESG data.',
                short: 'Commercial',
              },
              {
                id: 'municipal',
                img: '/municipal-bin-v0.0.1.png',
                tag: 'B2G · City corporations',
                name: 'Municipal Smart Bin',
                desc: 'Solar compaction and dynamic fleet routing for public bins.',
                short: 'Municipal',
              },
            ].map((p) => (
              <div key={p.id} className="bg-white border border-gray-200 flex flex-col">
                <div className="bg-white w-full h-[160px] flex items-center justify-center p-3">
                  <img
                    src={p.img}
                    alt={`XelCo ${p.name}`}
                    className="max-h-full w-auto object-contain"
                  />
                </div>
                <div className="p-5 bg-[#009688] flex flex-col flex-1 text-white">
                  <div className="text-[10px] tracking-[0.14em] uppercase text-white/70 font-semibold mb-2">
                    {p.tag}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-display tracking-tight">{p.name}</h3>
                  <p className="text-sm text-white/85 leading-relaxed mb-4">{p.desc}</p>
                  <button
                    onClick={() => navigate(`/products/${p.id}`)}
                    className="text-sm font-semibold flex items-center gap-1.5 mt-auto self-start border-b border-white/30 pb-0.5 hover:border-white transition-colors cursor-pointer"
                  >
                    {p.short} <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRE-FOOTER CTA --- */}
      <section className="w-full bg-[#009688] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 border-l-[3px] border-white/40 pl-6 md:pl-8">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-[2.5rem] font-bold mb-3 text-white leading-[1.15] font-display tracking-tight">
                Ready to modernise your waste operation?
              </h2>
              <p className="text-white/80 text-base">
                Start with one block, one campus, or one ward.
              </p>
            </div>

            <div className="flex items-center gap-7 shrink-0">
              <Button onClick={() => navigate('/contact')} className="px-8 py-5 text-sm font-semibold bg-white text-[#009688] hover:bg-white/90 border-none">
                Request a demo
              </Button>
              <button
                onClick={() => navigate('/contact')}
                className="text-sm font-semibold text-white border-b border-white/50 pb-1.5 flex items-center gap-1.5 hover:border-white transition-colors"
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
