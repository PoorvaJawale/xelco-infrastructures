import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { 
  ArrowRight, Cloud, Wifi, MapPin, Trash2, Building2,
  Map, Activity, Zap, Leaf, Plane, Train, Briefcase, 
  Stethoscope, Building, Users, Home as HomeIcon, Settings, Truck, AlertTriangle,
  BarChart3, LineChart, Search, Bell, ChevronDown, FileText, CheckCircle2
} from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* --- HERO SECTION --- */}
      <section className="w-full relative pt-12 md:pt-20 pb-20 bg-white border-b border-gray-100">
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
      <section className="w-full relative text-white py-32 border-b border-gray-800 overflow-hidden">
        {/* Background Image */}
        <img 
          src="/problem-bg.jpg" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

      {/* --- SOLUTION SECTION with Seamless Brand Luminous Accent --- */}
      <section className="w-full bg-[#FAFBFD] py-32 border-b border-gray-100 relative overflow-hidden">
        {/* Subtle background ambient teal glow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2/3 h-full bg-radial from-primary/[0.04] via-transparent to-transparent pointer-events-none" />

        {/* Logo in Exact #1a1d1f Color */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-full lg:w-2/3 pointer-events-none select-none overflow-hidden flex items-center justify-end z-0"
          aria-hidden="true"
        >
          <div 
            className="h-[135%] w-auto aspect-[1.4] translate-x-[28%] translate-y-[1%] -rotate-[3.5deg] bg-[#1a1d1f]"
            style={{
              maskImage: 'url(/company-logo.png)',
              WebkitMaskImage: 'url(/company-logo.png)',
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskPosition: 'right center',
              WebkitMaskPosition: 'right center',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat'
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-dark font-display tracking-tight">
              One Intelligent Platform. <span className="text-primary">Complete Waste Visibility.</span>
            </h2>
            <p className="text-dark-secondary text-base leading-relaxed">
              From smartSensors and IoT gateways to cloud analytics and driver dispatch, XelCo automates every step of modern sanitation operations.
            </p>
          </div>

          {/* Workflow Steps - Thicker Dividers, Raw Big Dark Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x-2 divide-gray-300 py-4">
            {/* Step 1 */}
            <div className="flex flex-row items-center gap-4 lg:px-6 first:pl-0">
              <Trash2 className="w-8 h-8 text-gray-800 shrink-0 stroke-[1.75]" />
              <div>
                <h3 className="font-bold text-sm text-dark mb-0.5">Smart Bins</h3>
                <p className="text-xs text-gray-500 leading-relaxed">Ultrasound Fill Sensors</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-row items-center gap-4 lg:px-6">
              <Wifi className="w-8 h-8 text-gray-800 shrink-0 stroke-[1.75]" />
              <div>
                <h3 className="font-bold text-sm text-dark mb-0.5">IoT Gateway</h3>
                <p className="text-xs text-gray-500 leading-relaxed">Cellular / NBIoT Sync</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-row items-center gap-4 lg:px-6">
              <Cloud className="w-8 h-8 text-gray-800 shrink-0 stroke-[1.75]" />
              <div>
                <h3 className="font-bold text-sm text-dark mb-0.5">Cloud Platform</h3>
                <p className="text-xs text-gray-500 leading-relaxed">Central Data Hub</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-row items-center gap-4 lg:px-6">
              <LineChart className="w-8 h-8 text-gray-800 shrink-0 stroke-[1.75]" />
              <div>
                <h3 className="font-bold text-sm text-dark mb-0.5">Analytics Engine</h3>
                <p className="text-xs text-gray-500 leading-relaxed">Predictive Routing AI</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-row items-center gap-4 lg:px-6">
              <Truck className="w-8 h-8 text-gray-800 shrink-0 stroke-[1.75]" />
              <div>
                <h3 className="font-bold text-sm text-dark mb-0.5">Fleet Crew</h3>
                <p className="text-xs text-gray-500 leading-relaxed">Turn-by-turn Navigation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CENTRALIZED CONTROL SECTION (Full-Width Dark Section) --- */}
      <section className="w-full bg-[#181B1E] text-white py-24 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white">
                Manage Every Bin from One Command Center
              </h2>
              <p className="text-base text-gray-300 mb-10 leading-relaxed">
                Gain instant visibility across thousands of smart bins. Receive predictive overflow alerts, track live fleet routes, and export compliance reports seamlessly.
              </p>
              
              <div className="grid grid-cols-2 gap-3.5">
                <div className="bg-[#212529] border border-gray-800/80 px-4 py-3 rounded-lg flex items-center gap-3 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-semibold text-sm text-gray-200">Live Monitoring</span>
                </div>
                <div className="bg-[#212529] border border-gray-800/80 px-4 py-3 rounded-lg flex items-center gap-3 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-semibold text-sm text-gray-200">Analytics & Reports</span>
                </div>
                <div className="bg-[#212529] border border-gray-800/80 px-4 py-3 rounded-lg flex items-center gap-3 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-semibold text-sm text-gray-200">Route Optimization</span>
                </div>
                <div className="bg-[#212529] border border-gray-800/80 px-4 py-3 rounded-lg flex items-center gap-3 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-semibold text-sm text-gray-200">Asset Tracking</span>
                </div>
                <div className="bg-[#212529] border border-gray-800/80 px-4 py-3 rounded-lg flex items-center gap-3 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-semibold text-sm text-gray-200">Predictive Alerts</span>
                </div>
                <div className="bg-[#212529] border border-gray-800/80 px-4 py-3 rounded-lg flex items-center gap-3 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-semibold text-sm text-gray-200">Team Management</span>
                </div>
              </div>
            </div>

            {/* Right Dashboard Mockup (Clean Rectangular Container) */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-gray-200 shadow-xl overflow-hidden flex flex-col rounded-xl">
                {/* Dashboard Top Bar */}
                <div className="h-14 border-b border-gray-100 flex items-center justify-between px-6 bg-gray-50">
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-bold text-lg">XelCo</span>
                    <span className="text-xs text-gray-400 pl-2 border-l border-gray-200">Control Center</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 text-[10px] text-gray-400 w-44 shrink-0 rounded-md">
                    <Search className="w-3 h-3 text-gray-400" />
                    <span className="truncate">Search bin network...</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="text-gray-400 hover:text-gray-600 relative p-0.5">
                      <Bell className="w-4 h-4" />
                      <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-primary rounded-full"></span>
                    </button>
                    <div className="flex items-center gap-2 border-l border-gray-200 pl-3">
                      <div className="w-6 h-6 bg-primary text-white text-[10px] font-bold flex items-center justify-center rounded-full">A</div>
                      <span className="text-[11px] font-semibold text-dark">Admin</span>
                      <ChevronDown className="w-3 h-3 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div className="flex h-[440px]">
                  {/* Dashboard Sidebar */}
                  <div className="w-40 border-r border-gray-100 bg-white p-3 flex flex-col gap-1 shrink-0">
                    <div className="flex items-center gap-2 px-3 py-2 bg-primary/10 text-primary text-xs font-bold border-l-2 border-primary">
                      <Activity className="w-3.5 h-3.5"/> 
                      <span>Dashboard</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 text-gray-500 hover:bg-gray-50 text-xs font-medium">
                      <Trash2 className="w-3.5 h-3.5"/> 
                      <span>Bins</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 text-gray-500 hover:bg-gray-50 text-xs font-medium">
                      <Truck className="w-3.5 h-3.5"/> 
                      <span>Collections</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 text-gray-500 hover:bg-gray-50 text-xs font-medium">
                      <Map className="w-3.5 h-3.5"/> 
                      <span>Routes</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 text-gray-500 hover:bg-gray-50 text-xs font-medium">
                      <AlertTriangle className="w-3.5 h-3.5"/> 
                      <span>Alerts</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 text-gray-500 hover:bg-gray-50 text-xs font-medium">
                      <BarChart3 className="w-3.5 h-3.5"/> 
                      <span>Analytics</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 text-gray-500 hover:bg-gray-50 text-xs font-medium">
                      <FileText className="w-3.5 h-3.5"/> 
                      <span>Reports</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 text-gray-500 hover:bg-gray-50 text-xs font-medium">
                      <Settings className="w-3.5 h-3.5"/> 
                      <span>Settings</span>
                    </div>
                  </div>

                  {/* Dashboard Main Content */}
                  <div className="flex-1 p-4 bg-gray-50/60 overflow-hidden flex flex-col">
                    <h3 className="font-bold text-dark text-xs mb-3">Live Fleet Overview</h3>
                    
                    {/* Top Stats */}
                    <div className="grid grid-cols-4 gap-2 mb-3">
                      <div className="bg-white p-2.5 border border-gray-100 shadow-sm rounded-lg">
                        <div className="text-[9px] font-bold text-gray-400">Total Bins</div>
                        <div className="text-base font-bold text-dark leading-tight mt-0.5">Active</div>
                      </div>
                      <div className="bg-white p-2.5 border border-gray-100 shadow-sm rounded-lg">
                        <div className="text-[9px] font-bold text-gray-400">Avg Fill</div>
                        <div className="text-base font-bold text-dark leading-tight mt-0.5">Optimal</div>
                      </div>
                      <div className="bg-white p-2.5 border border-gray-100 shadow-sm rounded-lg">
                        <div className="text-[9px] font-bold text-gray-400">Dispatches</div>
                        <div className="text-base font-bold text-dark leading-tight mt-0.5">On Schedule</div>
                      </div>
                      <div className="bg-white p-2.5 border border-gray-100 shadow-sm rounded-lg">
                        <div className="text-[9px] font-bold text-gray-400">Fleet Status</div>
                        <div className="text-base font-bold text-dark leading-tight mt-0.5">Online</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 gap-3 flex-1 min-h-0">
                      {/* Donut Chart Mockup */}
                      <div className="bg-white p-3 border border-gray-100 col-span-5 shadow-sm flex flex-col rounded-lg">
                        <div className="text-[10px] font-bold text-dark mb-2">Capacity Monitor</div>
                        <div className="flex-1 flex items-center justify-between gap-2">
                          <div className="relative flex items-center justify-center shrink-0">
                            <div className="w-16 h-16 border-[8px] border-t-primary/90 border-r-primary/60 border-b-primary/30 border-l-primary flex items-center justify-center">
                              <div className="w-10 h-10 bg-white"></div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-1.5 text-[9px] font-bold text-gray-400 flex-1 pl-1">
                            <div className="flex items-center justify-between border-b border-gray-50 pb-1">
                              <span className="text-gray-600">Critical</span>
                              <span className="text-primary">High</span>
                            </div>
                            <div className="flex items-center justify-between border-b border-gray-50 pb-1">
                              <span className="text-gray-600">Moderate</span>
                              <span className="text-primary/70">Normal</span>
                            </div>
                            <div className="flex items-center justify-between pb-1">
                              <span className="text-gray-600">Clear</span>
                              <span className="text-primary/40">Low</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Map/Routes Mockup */}
                      <div className="bg-white p-3 border border-gray-100 col-span-7 shadow-sm flex flex-col relative overflow-hidden rounded-lg">
                        <div className="text-[10px] font-bold text-dark mb-2 z-10">Active Collection Map</div>
                        <div className="flex-1 bg-emerald-50/20 border border-gray-100 relative overflow-hidden flex items-center justify-center rounded-md">
                          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0" y1="20" x2="300" y2="20" stroke="#E6ECE9" strokeWidth="1" />
                            <line x1="0" y1="50" x2="300" y2="50" stroke="#E6ECE9" strokeWidth="1" />
                            <line x1="0" y1="80" x2="300" y2="80" stroke="#E6ECE9" strokeWidth="1" />
                            <line x1="0" y1="100" x2="300" y2="100" stroke="#E6ECE9" strokeWidth="1" />
                            
                            <line x1="40" y1="0" x2="40" y2="120" stroke="#E6ECE9" strokeWidth="1" />
                            <line x1="100" y1="0" x2="100" y2="120" stroke="#E6ECE9" strokeWidth="1" />
                            <line x1="160" y1="0" x2="160" y2="120" stroke="#E6ECE9" strokeWidth="1" />
                            <line x1="220" y1="0" x2="220" y2="120" stroke="#E6ECE9" strokeWidth="1" />
                            <line x1="280" y1="0" x2="280" y2="120" stroke="#E6ECE9" strokeWidth="1" />

                            <path d="M40,80 L100,30 L160,50 L220,20 L280,70" fill="none" stroke="#009688" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

                            <circle cx="40" cy="80" r="4" fill="#009688" />
                            <circle cx="100" cy="30" r="4" fill="#009688" />
                            <circle cx="160" cy="50" r="4" fill="#009688" />
                            <circle cx="220" cy="20" r="4" fill="#009688" />
                            <circle cx="280" cy="70" r="4" fill="#009688" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- INDUSTRIES WE SERVE (Full-Width Slate Section) --- */}
      <section className="w-full bg-slate-50 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-3">Built for Every Environment</h2>
            <p className="text-gray-500 text-sm">Deployable across public, commercial, and institutional infrastructure.</p>
          </div>

          {/* 6 Elements with Vertical Dividers and No Boxes */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-0 lg:divide-x-2 divide-gray-300 py-4 max-w-6xl mx-auto">
            {/* 1 */}
            <div className="flex flex-col items-center text-center lg:px-4">
              <Building2 className="w-8 h-8 text-gray-800 mb-3 stroke-[1.75]" />
              <span className="text-sm font-bold text-dark">Municipalities</span>
            </div>

            {/* 2 */}
            <div className="flex flex-col items-center text-center lg:px-4">
              <Plane className="w-8 h-8 text-gray-800 mb-3 stroke-[1.75]" />
              <span className="text-sm font-bold text-dark">Airports</span>
            </div>

            {/* 3 */}
            <div className="flex flex-col items-center text-center lg:px-4">
              <Train className="w-8 h-8 text-gray-800 mb-3 stroke-[1.75]" />
              <span className="text-sm font-bold text-dark">Railways</span>
            </div>

            {/* 4 */}
            <div className="flex flex-col items-center text-center lg:px-4">
              <Briefcase className="w-8 h-8 text-gray-800 mb-3 stroke-[1.75]" />
              <span className="text-sm font-bold text-dark">Universities</span>
            </div>

            {/* 5 */}
            <div className="flex flex-col items-center text-center lg:px-4">
              <Stethoscope className="w-8 h-8 text-gray-800 mb-3 stroke-[1.75]" />
              <span className="text-sm font-bold text-dark">Hospitals</span>
            </div>

            {/* 6 */}
            <div className="flex flex-col items-center text-center lg:px-4">
              <Wifi className="w-8 h-8 text-gray-800 mb-3 stroke-[1.75]" />
              <span className="text-sm font-bold text-dark">Smart Cities</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRE-FOOTER CTA (Full-Width Primary Teal Section) --- */}
      <section className="w-full bg-[#009688] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white leading-tight">
                Ready to Transform Your Waste Management?
              </h2>
              <p className="text-white/70 text-base">
                Join leading facility managers and forward-thinking municipalities in the transition to intelligent sanitation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Button onClick={() => navigate('/contact')} className="px-8 py-6 text-base font-semibold border-white bg-white hover:bg-gray-100 text-dark">
                Request a Demo <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" onClick={() => navigate('/contact')} className="px-8 py-6 text-base font-semibold border-white text-white bg-transparent hover:bg-white/10">
                Talk to Our Experts
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
