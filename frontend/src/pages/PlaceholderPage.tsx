import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

export default function PlaceholderPage({ title, description, icon }: PlaceholderPageProps) {
  const navigate = useNavigate();

  return (
    <div className="p-6 sm:p-8 lg:p-[32px_40px_48px] bg-white min-w-0 max-w-[1400px]">
      {/* Header Tag and Module Title */}
      <div className="border-t-2 border-[#1A1D1F] pt-[20px] mb-8">
        <p className="font-['Inter'] font-semibold text-[11px] leading-none tracking-[0.16em] uppercase text-[#00796B] mb-3">
          Control Center Module
        </p>
        <h1 className="font-['Poppins'] font-bold text-[30px] sm:text-[36px] leading-[1.05] tracking-[-0.025em] text-[#1A1D1F]">
          {title}
        </h1>
      </div>

      {/* Under Construction Container */}
      <div className="border border-[#E5E7EB] bg-[#FAFBFC] p-8 sm:p-14 flex flex-col items-center justify-center text-center rounded-[2px]">
        <div className="w-14 h-14 rounded-none bg-white border border-[#E5E7EB] flex items-center justify-center text-[#009688] mb-5 shadow-xs">
          {icon || <Clock className="w-7 h-7 text-[#009688]" />}
        </div>
        
        <span className="font-['Inter'] font-bold text-[10px] tracking-[0.14em] uppercase text-[#009688] bg-[rgba(0,150,136,0.08)] px-3 py-1 mb-3">
          Coming Soon
        </span>
        
        <h2 className="font-['Poppins'] font-bold text-2xl text-[#1A1D1F] mb-2">
          {title} is being configured
        </h2>
        
        <p className="font-['Inter'] text-[14px] leading-relaxed text-[#2D3139] max-w-md mb-6">
          {description ||
            'This operational module is scheduled for the upcoming Vasai-Virar municipal deployment phase.'}
        </p>

        <button
          type="button"
          onClick={() => navigate('/dashboard')}
          className="inline-flex items-center gap-2 bg-[#1A1D1F] hover:bg-[#2D3139] text-white px-5 py-3 font-['Inter'] font-semibold text-[12px] transition-colors cursor-pointer rounded-[2px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Executive Overview</span>
        </button>
      </div>
    </div>
  );
}
