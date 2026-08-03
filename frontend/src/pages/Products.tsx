import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { 
  CheckCircle2, 
  MonitorSmartphone, 
  ShieldCheck, 
  AlertTriangle, 
  TrendingDown, 
  Wifi, 
  BatteryCharging, 
  LineChart, 
  Lock, 
  Database,
  Smartphone,
  ArrowRight,
  ArrowLeft,
  Settings,
  Building,
  Building2,
  Home,
  Users,
  BugOff,
  Recycle,
  CloudFog,
} from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';

const productsData = {
  commercial: {
    id: 'commercial',
    // SECTION 1: HERO
    hero: {
      name: 'Commercial Smart Bin',
      headline: 'Enterprise Smart Bins for Commercial Infrastructure',
      description: 'Intelligent waste sorting, capacity monitoring, and automated ESG reporting designed to optimize facility management and reduce operational overhead.',
      cta: 'Request a Demo',
      image: '/commercial-bin-v0.0.1.png'
    },
    // SECTION 2: PROBLEM
    problem: {
      title: 'The High Cost of Inefficiency',
      description: 'Traditional waste management in large facilities relies on blind collection schedules, leading to massive inefficiencies.',
      points: [
        'Overflowing bins causing poor hygiene and pest risks in premium spaces',
        'Manual monitoring resulting in wasted janitorial hours',
        'High operational costs due to unoptimized collection routes',
        'Lack of accurate data for ESG and sustainability reporting',
        'Cross-contamination of recyclables due to poor segregation'
      ]
    },
    // SECTION 3: SOLUTION
    solution: {
      title: 'Automated Facility Management',
      description: 'XelCo Commercial Bins eliminate the guesswork. Our intelligent hardware and software ecosystem optimizes janitorial routes, provides multi-stream segregation, and automates your corporate sustainability reporting in real-time.',
      benefits: [
        'Overflow prevention through real-time monitoring',
        'Automated route optimization for janitorial staff',
        'Multi-stream segregation at the source',
        'Instant ESG data analytics and reporting'
      ]
    },
    // SECTION 4: HOW IT WORKS
    howItWorks: [
      { step: 1, title: 'Waste Deposited', desc: 'User deposits waste into segregated compartments.' },
      { step: 2, title: 'Sensor Detects Level', desc: 'Ultrasonic sensors measure capacity in real-time.' },
      { step: 3, title: 'Data Sent to Cloud', desc: 'Secure transmission via Wi-Fi/LTE to XelCo Cloud.' },
      { step: 4, title: 'Dashboard Updates', desc: 'Facility managers see live status of all bins.' },
      { step: 5, title: 'Alert Generated', desc: 'System triggers alerts when bins reach 85% capacity.' },
      { step: 6, title: 'Optimized Pickup', desc: 'Janitorial staff routed only to bins needing service.' }
    ],
    // SECTION 5: FEATURES
    features: [
      { icon: <MonitorSmartphone />, title: 'Real-Time Capacity Visibility', desc: 'High-precision ultrasonic sensors track waste levels 24/7, eliminating blind collection routes and saving labor hours.' },
      { icon: <LineChart />, title: 'Predictive Routing Intelligence', desc: 'AI algorithms forecast capacity breaches, allowing you to optimize janitorial schedules and cut operational costs.' },
      { icon: <Database />, title: 'Centralized Infrastructure Control', desc: 'Enterprise portal provides facility-wide visibility, generating instant ESG compliance and sustainability reports.' },
      { icon: <Settings />, title: 'Maximum Uptime Reliability', desc: 'Automated health checks detect hardware issues before failure, ensuring scalable and continuous operation.' },
      { icon: <Wifi />, title: 'Uninterrupted Connectivity', desc: 'Enterprise-grade Wi-Fi with LTE-M fallback guarantees your data flows securely without interruption.' },
      { icon: <Lock />, title: 'Asset Security & Protection', desc: 'Built-in accelerometers alert management to unauthorized access, protecting your infrastructure investment.' }
    ],
    // SECTION 6: BENEFITS
    benefitsLabel: 'For Commercial Properties',
    benefits: [
      'Reduce janitorial labor costs by up to 40%',
      'Eliminate overflowing bins in premium public areas',
      'Automate data collection for corporate ESG audits',
      'Improve recycling diversion rates and reduce landfill fees'
    ],
    // SECTION 7: ARCHITECTURE
    architecture: [
      'Commercial Smart Bin',
      'Enterprise Gateway',
      'XelCo Cloud Platform',
      'ESG Analytics Engine',
      'Facility Admin Dashboard',
      'Janitorial Staff App'
    ],
    // SECTION 8: ROI
    roi: [
      { value: '-40%', label: 'Reduced Collection Cost' },
      { value: '+65%', label: 'Increased Efficiency' },
      { value: '100%', label: 'Automated ESG Data' },
      { value: '< 12mo', label: 'Payback Period' }
    ],
    // SECTION 9: CASE STUDY
    caseStudy: {
      client: 'Global Tech Park, Bangalore',
      quote: "We reduced our janitorial rounds by 40% immediately. The ESG data generated by the smartBins made our annual sustainability reporting virtually effortless. The ROI on our 5-floor deployment was achieved in just 8 months.",
      author: 'Marcus Chen, Facilities Director',
      metrics: ['45,000 USD saved annually', 'Zero overflowing bins since deployment']
    }
  },
  residential: {
    id: 'residential',
    hero: {
      name: 'Residential Smart Bin',
      headline: 'Next-Generation Smart Bins for Modern Living',
      description: 'Touchless disposal, advanced odor control, and AI-powered sorting analytics designed to enforce segregation and optimize housekeeping routes in premium communities.',
      cta: 'Request a Demo',
      image: '/home-bin-v0.0.1.png'
    },
    problem: {
      title: 'The Challenge of Residential Waste',
      description: 'Modern housing societies face significant challenges maintaining hygiene and enforcing proper waste segregation.',
      points: [
        'Lingering odors and pest issues in shared corridors',
        'Poor compliance with municipal waste segregation mandates',
        'Lack of visibility into household carbon footprints',
        'Inefficient door-to-door collection schedules causing bottlenecks'
      ]
    },
    solution: {
      title: 'Clean, Odorless, Intelligent',
      description: 'XelCo Residential Smart Bins integrate seamlessly into modern homes and luxury societies. With touchless operation, active odor neutralization, and gamified sustainability tracking via mobile app, we make responsible waste management effortless.',
      benefits: [
        '100% Touchless hygienic operation',
        'Active carbon odor neutralization',
        'Mobile app for household recycling stats',
        'Integration with Smart Home ecosystems'
      ]
    },
    howItWorks: [
      { step: 1, title: 'Proximity Detection', desc: 'Lid opens automatically as user approaches.' },
      { step: 2, title: 'Waste Deposited', desc: 'User drops waste; bin automatically segregates.' },
      { step: 3, title: 'Odor Neutralization', desc: 'Active filters eliminate organic odors instantly.' },
      { step: 4, title: 'Data Synced', desc: 'Household recycling stats sync to mobile app.' },
      { step: 5, title: 'Collection Alert', desc: 'Society management notified when block bins are full.' },
      { step: 6, title: 'Optimized Pickup', desc: 'Housekeeping routes optimized block by block.' }
    ],
    features: [
      { icon: <ShieldCheck />, title: '100% Touchless Operation', desc: 'Advanced proximity sensors ensure hygienic, hands-free usage, elevating community health standards.' },
      { icon: <Smartphone />, title: 'Automated Compliance Tracking', desc: 'Monitor household recycling habits to ensure 100% compliance with municipal segregation mandates.' },
      { icon: <Wifi />, title: 'Smart Ecosystem Integration', desc: 'Connects to property networks for OTA updates and seamless management via the central Admin Portal.' },
      { icon: <BatteryCharging />, title: 'Low-Maintenance Power', desc: 'High-capacity rechargeable lithium-ion battery lasts 6 months, minimizing facilities maintenance.' },
      { icon: <AlertTriangle />, title: 'Active Odor Neutralization', desc: 'Built-in active carbon filters block odors and keep shared corridors fresh, eliminating resident complaints.' },
      { icon: <LineChart />, title: 'Actionable Waste Analytics', desc: 'Insights into waste generation patterns to optimize block-by-block housekeeping deployment.' }
    ],
    benefitsLabel: 'For Residential Communities',
    benefits: [
      'Maintain premium hygiene standards in corridors and homes',
      'Ensure 100% compliance with segregation mandates easily',
      'Gamify recycling to encourage responsible habits for children',
      'Optimize society housekeeping staff deployment'
    ],
    architecture: [
      'Residential Smart Bin',
      'Home Wi-Fi Network',
      'XelCo Consumer Cloud',
      'Gamification Engine',
      'Resident Mobile App',
      'Society Admin Portal'
    ],
    roi: [
      { value: '100%', label: 'Touchless Hygiene' },
      { value: '60%', label: 'Increase in Recycling' },
      { value: 'Zero', label: 'Odor Complaints' },
      { value: 'Smart', label: 'Home Integrated' }
    ],
    caseStudy: {
      client: 'Prestige Lakeside Habitat',
      quote: "It completely changed how our community recycles. Kids actually want to use the smartBin to see their stats go up on the app. The odor control in closed apartments is remarkable.",
      author: 'Sarah Jenkins, RWA President',
      metrics: ['60% reduction in plastic waste', '100% segregation compliance']
    }
  },
  municipal: {
    id: 'municipal',
    hero: {
      name: 'Municipal Smart Bin',
      headline: 'Civic Infrastructure for Smart Cities',
      description: 'Rugged, solar-powered compaction bins that eliminate overflows, optimize fleet routes, and drastically cut operational costs for metropolitan sanitation.',
      cta: 'Request a Pilot Deployment',
      image: '/municipal-bin-v0.0.1.png'
    },
    problem: {
      title: 'The Burden on Urban Sanitation',
      description: 'Rapid urbanization is breaking traditional municipal waste collection systems, draining civic budgets and worsening pollution.',
      points: [
        'Unoptimized, static collection routes wasting fuel and time',
        'Public bins overflowing before scheduled pickups, causing civic blight',
        'High operational costs dominating municipal budgets',
        'Significant carbon emissions from heavy sanitation fleets',
        'Vandalism and damage to standard public infrastructure'
      ]
    },
    solution: {
      title: 'Data-Driven Urban Sanitation',
      description: 'XelCo Municipal Smart Bins transform static bins into active IoT nodes. With built-in solar compaction increasing capacity by 5x, and AI dynamic routing directing trucks only where needed, cities can drastically cut costs while improving public cleanliness.',
      benefits: [
        '5x Waste compaction via solar power',
        'Dynamic AI route optimization for fleets',
        'Vandal-proof, ruggedized civic hardware',
        'Real-time civic data dashboard for city planners'
      ]
    },
    howItWorks: [
      { step: 1, title: 'Waste Deposited', desc: 'Citizens deposit waste in public areas.' },
      { step: 2, title: 'Solar Compaction', desc: 'Internal ram compacts waste, increasing capacity 5x.' },
      { step: 3, title: 'Data Sent to Cloud', desc: 'LoRa/GSM transmits fill levels to municipal servers.' },
      { step: 4, title: 'Fleet Routing', desc: 'AI calculates optimal collection route for the day.' },
      { step: 5, title: 'Driver Dispatched', desc: 'Sanitation trucks navigate via XelCo Driver App.' },
      { step: 6, title: 'Targeted Pickup', desc: 'Only full bins are serviced, saving massive time.' }
    ],
    features: [
      { icon: <Building />, title: 'Eliminate Civic Blight', desc: 'By preventing overflows, we restore public hygiene and eliminate complaints, improving overall city perception.' },
      { icon: <Users />, title: 'Community Engagement', desc: 'Customizable graphic wraps and digital message panels transform bins into active public communication nodes.' },
      { icon: <TrendingDown />, title: 'Cut Collections by 80%', desc: 'Real-time telemetry combined with 5x solar compaction means trucks only roll when bins are actually full.' },
      { icon: <BugOff />, title: 'Eradicate Pest Food Sources', desc: 'Fully enclosed, tamper-proof designs cut off urban pest food supplies, improving public health metrics.' },
      { icon: <Recycle />, title: 'Actionable Sustainability Data', desc: 'Achieve zero-waste goals with granular, block-level data on public recycling participation.' },
      { icon: <CloudFog />, title: 'Slash Fleet Emissions', desc: 'Dynamic AI routing reduces unnecessary truck mileage, cutting fuel consumption and fleet emissions by up to 70%.' }
    ],
    benefitsLabel: 'For Municipal Corporations',
    benefits: [
      'Reduce sanitation fleet fuel usage and carbon emissions',
      'Eliminate civic complaints regarding overflowing public bins',
      'Cut total waste management operational costs by up to 50%',
      'Make data-driven urban planning decisions based on real usage'
    ],
    architecture: [
      'Solar Compactor Bin',
      'Cellular/LoRa Network',
      'Municipal Secure Cloud',
      'AI Routing Engine',
      'City Command Center',
      'Sanitation Fleet App'
    ],
    roi: [
      { value: '5x', label: 'Increased Capacity' },
      { value: '-50%', label: 'Reduced Truck Rolls' },
      { value: '-45%', label: 'Fuel Usage Cut' },
      { value: 'Zero', label: 'Overflow Complaints' }
    ],
    caseStudy: {
      client: 'Dept of Public Works, Metro City',
      quote: "Deploying XelCo across downtown reduced overflowing bins to zero, significantly improving public perception. The reduction in truck rolls alone paid for the entire system within two budget cycles.",
      author: 'City Commissioner',
      metrics: ['Paid for itself in 24 months', '70% reduction in fuel costs']
    }
  }
};

type TabKey = keyof typeof productsData;

export default function Products() {
  const { productId } = useParams<{ productId?: string }>();
  const navigate = useNavigate();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  if (productId) {
    const validTabs = ['commercial', 'residential', 'municipal'];
    if (!validTabs.includes(productId)) {
      return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center font-display text-2xl text-dark-secondary gap-4 pt-24">
          <p>Product Not Found</p>
          <Button onClick={() => navigate('/products')}>Back to Products</Button>
        </div>
      );
    }
    const activeTab = productId as TabKey;
    const activeData = productsData[activeTab];

    return (
      <div className="pt-[72px] bg-white">
        {/* Back navigation */}
        <section className="w-full bg-white pt-4 pb-12 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button 
              onClick={() => navigate('/products')}
              className="flex items-center text-sm font-semibold text-primary hover:text-primary-hover transition-colors cursor-pointer group mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to All Products
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={productId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Section 1: Hero */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10">
                  <div className="max-w-xl">
                    <div className="text-[11px] tracking-[0.16em] uppercase text-primary-hover font-semibold mb-6">
                      {activeData.hero.name}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-[1.12] text-dark font-display tracking-tight mb-6">
                      {activeData.hero.headline}
                    </h1>
                    <p className="text-[15px] text-dark-secondary leading-relaxed mb-8">
                      {activeData.hero.description}
                    </p>
                    <Button size="lg" onClick={() => setIsQuoteModalOpen(true)} className="px-8 rounded-none">
                      {activeData.hero.cta}
                    </Button>
                  </div>
                  <div className="shrink-0 lg:w-[580px] aspect-[4/3] overflow-hidden bg-white flex items-center justify-center">
                    <img src={activeData.hero.image} alt={activeData.hero.name} className="w-full h-full object-contain" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Section 2: The Problem (grey) */}
        <section className="w-full bg-slate-50 py-20 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 lg:items-start">
              <div className="lg:col-span-7">
                <div className="text-[11px] tracking-[0.16em] uppercase text-red-500 font-semibold mb-6">
                  The cost of current operations
                </div>
                <h2 className="text-3xl md:text-[2.5rem] font-bold leading-[1.18] text-dark font-display tracking-tight">
                  {activeData.problem.title}
                </h2>
                <p className="text-[15px] text-dark-secondary leading-relaxed mt-6">
                  {activeData.problem.description}
                </p>
              </div>

              <div className="lg:col-span-5 border-t-2 border-dark">
                {activeData.problem.points.map((point: string, idx: number) => (
                  <div key={idx} className="py-4 border-b border-gray-200 flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                    <span className="text-[15px] text-dark-secondary">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Our Solution (white) */}
        <section className="w-full bg-white py-20 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 lg:items-start">
              <div className="lg:col-span-7">
                <div className="text-[11px] tracking-[0.16em] uppercase text-primary-hover font-semibold mb-6">
                  Our Solution
                </div>
                <h2 className="text-3xl md:text-[2.5rem] font-bold leading-[1.18] text-dark font-display tracking-tight">
                  {activeData.solution.title}
                </h2>
                <p className="text-[15px] text-dark-secondary leading-relaxed mt-6">
                  {activeData.solution.description}
                </p>
              </div>

              <div className="lg:col-span-5 border-t-2 border-dark">
                {activeData.solution.benefits.map((benefit: string, idx: number) => (
                  <div key={idx} className="py-4 border-b border-gray-200 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-[15px] text-dark">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: How It Works (grey) */}
        <section className="w-full bg-slate-50 py-20 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-16 lg:items-start mb-10">
              <div className="lg:col-span-7">
                <div className="text-[11px] tracking-[0.16em] uppercase text-primary-hover font-semibold mb-6">
                  Deployment path
                </div>
                <h2 className="text-3xl md:text-[2.5rem] font-bold leading-[1.18] text-dark font-display tracking-tight">
                  How it works
                </h2>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed lg:col-span-5 lg:text-right lg:pt-9">
                From installation to optimised operations in six steps.
              </p>
            </div>

            <div className="border-t-2 border-dark grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 md:divide-x divide-gray-200">
              {activeData.howItWorks.map((step: { step: number; title: string; desc: string }, idx: number) => (
                <div key={idx} className="pt-8 pb-4 md:px-5 first:pl-0 last:pr-0">
                  <div className="text-[11px] text-primary font-semibold mb-3">
                    {String(step.step).padStart(2, '0')}
                  </div>
                  <h3 className="text-base font-bold text-dark mb-2">{step.title}</h3>
                  <p className="text-sm text-dark-secondary leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Features / Operational Benefits (white) */}
        <section className="w-full bg-white py-20 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-16 lg:items-start mb-10">
              <div className="lg:col-span-7">
                <div className="text-[11px] tracking-[0.16em] uppercase text-primary-hover font-semibold mb-6">
                  Capabilities
                </div>
                <h2 className="text-3xl md:text-[2.5rem] font-bold leading-[1.18] text-dark font-display tracking-tight">
                  Operational benefits
                </h2>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed lg:col-span-5 lg:text-right lg:pt-9">
                Purpose-built technology delivering measurable outcomes.
              </p>
            </div>

            <div className="border-t-2 border-dark grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:divide-x divide-gray-200">
              {activeData.features.map((feature: { icon: React.ReactNode; title: string; desc: string }, idx: number) => (
                <div key={idx} className={`pt-8 pb-6 ${idx < 3 ? '' : 'border-t border-gray-200'} md:px-8 first:pl-0`}>
                  <div className="text-gray-800 mb-4">
                    {React.cloneElement(feature.icon as React.ReactElement<any>, { className: "w-6 h-6 stroke-[1.75]" })}
                  </div>
                  <h3 className="text-base font-bold text-dark mb-2">{feature.title}</h3>
                  <p className="text-sm text-dark-secondary leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Technical Specs (grey) */}
        <section className="w-full bg-slate-50 py-20 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 lg:items-start">

              {/* LEFT: Technical Specifications */}
              <div className="lg:col-span-7">
                <div className="text-[11px] tracking-[0.16em] uppercase text-primary-hover font-semibold mb-6">
                  Specifications
                </div>
                <h2 className="text-3xl md:text-[2.5rem] font-bold leading-[1.18] text-dark font-display tracking-tight mb-10">
                  Technical details
                </h2>

                {activeTab === 'municipal' ? (
                  <div className="border-t-2 border-dark">
                    <div className="py-4 border-b border-gray-200 flex justify-between">
                      <span className="text-sm font-bold text-dark">Capacity</span>
                      <span className="text-sm text-dark-secondary">Scalable Public to Subterranean</span>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex justify-between">
                      <span className="text-sm font-bold text-dark">Power</span>
                      <span className="text-sm text-dark-secondary">Off-grid, Solar-Powered</span>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex justify-between">
                      <span className="text-sm font-bold text-dark">Connectivity</span>
                      <span className="text-sm text-dark-secondary">5G, LoRaWAN, Wi-Fi</span>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex justify-between">
                      <span className="text-sm font-bold text-dark">Materials</span>
                      <span className="text-sm text-dark-secondary">Graffiti-resistant Steel, IK10 Rated</span>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex justify-between">
                      <span className="text-sm font-bold text-dark">Integrations</span>
                      <span className="text-sm text-dark-secondary">REST API, AWS IoT, Azure</span>
                    </div>
                  </div>
                ) : activeTab === 'commercial' ? (
                  <div className="border-t-2 border-dark">
                    <div className="py-4 border-b border-gray-200 flex justify-between">
                      <span className="text-sm font-bold text-dark">Capacity</span>
                      <span className="text-sm text-dark-secondary">Multi-stream, 45L / 60L per compartment</span>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex justify-between">
                      <span className="text-sm font-bold text-dark">Power</span>
                      <span className="text-sm text-dark-secondary">Rechargeable Li-ion, 6 months per charge</span>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex justify-between">
                      <span className="text-sm font-bold text-dark">Connectivity</span>
                      <span className="text-sm text-dark-secondary">Wi-Fi 2.4GHz, Bluetooth LE</span>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex justify-between">
                      <span className="text-sm font-bold text-dark">Materials</span>
                      <span className="text-sm text-dark-secondary">Fingerprint-resistant stainless steel, recycled ABS</span>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex justify-between">
                      <span className="text-sm font-bold text-dark">Integrations</span>
                      <span className="text-sm text-dark-secondary">REST API, Webhooks, AWS IoT</span>
                    </div>
                  </div>
                ) : (
                  <div className="border-t-2 border-dark">
                    <div className="py-4 border-b border-gray-200 flex justify-between">
                      <span className="text-sm font-bold text-dark">Capacity</span>
                      <span className="text-sm text-dark-secondary">Modular 120L / 240L / 360L stations</span>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex justify-between">
                      <span className="text-sm font-bold text-dark">Power</span>
                      <span className="text-sm text-dark-secondary">Mains AC or high-capacity battery packs</span>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex justify-between">
                      <span className="text-sm font-bold text-dark">Connectivity</span>
                      <span className="text-sm text-dark-secondary">Wi-Fi, LTE-M fallback, API integrations</span>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex justify-between">
                      <span className="text-sm font-bold text-dark">Materials</span>
                      <span className="text-sm text-dark-secondary">Heavy-duty steel, antimicrobial coatings</span>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex justify-between">
                      <span className="text-sm font-bold text-dark">Integrations</span>
                      <span className="text-sm text-dark-secondary">REST API, Webhooks, AWS IoT, Azure</span>
                    </div>
                  </div>
                )}
              </div>

              {/* RIGHT: ROI Metrics */}
              <div className="lg:col-span-5">
                <div className="text-[11px] tracking-[0.16em] uppercase text-primary-hover font-semibold mb-6">
                  Impact
                </div>
                <h2 className="text-3xl md:text-[2.5rem] font-bold leading-[1.18] text-dark font-display tracking-tight mb-10">
                  Measurable ROI
                </h2>

                <div className="border-t-2 border-dark">
                  {activeData.roi.map((item: { value: string; label: string }, idx: number) => (
                    <div key={idx} className="py-5 border-b border-gray-200">
                      <div className="text-2xl font-bold text-primary mb-1">{item.value}</div>
                      <div className="text-sm text-dark-secondary">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 7: Case Study (white) */}
        <section className="w-full bg-white py-20 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 lg:items-start">
              <div className="lg:col-span-7">
                <div className="text-[11px] tracking-[0.16em] uppercase text-primary-hover font-semibold mb-6">
                  Case study
                </div>
                <h2 className="text-3xl md:text-[2.5rem] font-bold leading-[1.18] text-dark font-display tracking-tight mb-8">
                  {activeData.caseStudy.client}
                </h2>
                <blockquote className="border-l-4 border-primary pl-6 mb-8">
                  <p className="text-lg text-dark-secondary leading-relaxed italic">
                    "{activeData.caseStudy.quote}"
                  </p>
                </blockquote>
                <p className="text-sm font-semibold text-dark">{activeData.caseStudy.author}</p>

                <div className="flex flex-wrap gap-3 mt-8">
                  {activeData.caseStudy.metrics.map((m: string, idx: number) => (
                    <span key={idx} className="px-4 py-2 bg-slate-50 border border-gray-200 text-sm font-medium text-dark">
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 aspect-[4/3] overflow-hidden bg-white flex items-center justify-center">
                <img src={activeData.hero.image} alt={activeData.caseStudy.client} className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: CTA (teal) */}
        <section className="w-full bg-[#009688] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-l-4 border-white/40 pl-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white font-display tracking-tight mb-2">
                  Ready for intelligent infrastructure?
                </h2>
                <p className="text-white/80 text-base">
                  Our {activeData.hero.name.toLowerCase()} experts are ready to build your custom deployment plan.
                </p>
              </div>
              <div className="flex items-center gap-6 shrink-0">
                <Button onClick={() => setIsQuoteModalOpen(true)} className="px-6 rounded-none bg-white text-[#009688] hover:bg-white/90 border-none">
                  {activeData.hero.cta}
                </Button>
                <button
                  onClick={() => navigate('/contact')}
                  className="text-sm font-semibold text-white border-b border-white/50 pb-0.5 hover:border-white transition-colors flex items-center gap-1 cursor-pointer"
                >
                  Talk to our experts <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} segment={activeTab} />
      </div>
    );
  }

  // If no productId in the URL, render the Product Index Page
  return (
    <div className="bg-white min-h-[70vh]">
      <section className="pt-8 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] tracking-[0.16em] uppercase text-primary-hover font-semibold mb-5">
            Services
          </div>

          <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-3 lg:gap-8 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-[1.12] text-dark font-display tracking-tight">
              What we run in each market
            </h1>
            <p className="text-sm text-gray-400 leading-relaxed shrink-0 lg:text-right lg:whitespace-nowrap">
              Same hardware and cloud stack, configured per buyer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-gray-200">
            {[
              {
                id: 'residential',
                name: 'Residential',
                tag: 'B2C',
                icon: <Home className="w-8 h-8 text-gray-500 stroke-[1.5]" />,
                items: [
                  'Touchless smart bins',
                  'Active odour neutralisation',
                  'Resident app & recycling stats',
                  'Housekeeping route planning',
                ],
                link: 'Residential Smart Bin',
              },
              {
                id: 'commercial',
                name: 'Commercial',
                tag: 'B2B',
                icon: <Building className="w-8 h-8 text-gray-500 stroke-[1.5]" />,
                items: [
                  'Multi-stream segregation bins',
                  'Facility-wide admin portal',
                  'ESG & compliance reporting',
                  'Janitorial route optimisation',
                ],
                link: 'Commercial Smart Bin',
              },
              {
                id: 'municipal',
                name: 'Municipal',
                tag: 'B2G',
                icon: <Building2 className="w-8 h-8 text-gray-500 stroke-[1.5]" />,
                items: [
                  'Solar compaction street bins',
                  'City command center',
                  'AI fleet routing',
                  'Driver dispatch app',
                ],
                link: 'Municipal Smart Bin',
              },
            ].map((col, i) => (
              <div key={col.id} className={`pt-8 pb-2 ${i === 0 ? 'md:pr-8' : 'md:px-8'}`}>
                <div className="flex items-center gap-4 pb-4">
                  {col.icon}
                  <div className="flex items-baseline gap-3">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark font-display tracking-tight">{col.name}</h2>
                    <span className="text-xs text-gray-400 font-semibold">{col.tag}</span>
                  </div>
                </div>

                {col.items.map((item) => (
                  <div key={item} className="py-3.5 text-[15px] text-dark-secondary">
                    {item}
                  </div>
                ))}

                <button
                  onClick={() => navigate(`/products/${col.id}`)}
                  className="text-sm text-primary-hover font-semibold flex items-center gap-1.5 mt-5 hover:text-dark transition-colors"
                >
                  {col.link} <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function QuoteModal({ isOpen, onClose, segment }: { isOpen: boolean; onClose: () => void; segment: string }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  const segmentName = segment === 'commercial' ? 'Commercial' : segment === 'residential' ? 'Residential' : 'Municipal';

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={submitted ? "Request Received" : segment === 'municipal' ? "Request a Pilot Deployment" : "Request a Demo"}>
      {submitted ? (
        <div className="text-center py-8">
          <div className="mx-auto w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <p className="text-lg text-dark-secondary">Thank you! Our {segmentName} infrastructure team will reach out shortly with technical specifications and pricing.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-dark-secondary text-sm mb-6">Fill out this quick form to receive detailed technical specifications, compliance documents, and tailored pricing.</p>
          <div className="grid grid-cols-2 gap-4">
            <Input label="First Name" required />
            <Input label="Last Name" required />
          </div>
          <Input label="Official Email Address" type="email" required />
          {segment !== 'residential' && (
            <Input label="Organization / Municipality" required />
          )}
          <Input label="Phone Number" type="tel" />
          <Textarea label="Deployment Scope" placeholder="E.g., Number of bins required, specific locations, timeline..." />
          <div className="pt-4 flex justify-end space-x-3">
            <Button type="button" variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              Submit Request
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
}
