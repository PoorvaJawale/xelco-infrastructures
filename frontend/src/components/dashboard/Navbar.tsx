import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';
import { Menu, LogOut, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onMenuToggle: () => void;
}

export default function Navbar({ onMenuToggle }: NavbarProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const storedRole = localStorage.getItem('xelco_user_role');
  const roleLabel = user?.role || storedRole || 'Admin';
  const initial = roleLabel === 'Contractor' ? 'C' : 'A';

  return (
    <header className="h-[56px] bg-white border-b border-[#E5E7EB] flex items-center justify-between px-4 sm:px-6 shrink-0 sticky top-0 z-30">
      {/* Left side: Mobile menu toggle + Logo + Control Center + Municipality Pill */}
      <div className="flex items-center gap-3 sm:gap-6">
        <button
          type="button"
          onClick={onMenuToggle}
          className="lg:hidden text-[#1A1D1F] hover:text-[#009688] p-1 transition-colors cursor-pointer"
          aria-label="Toggle navigation"
        >
          <Menu className="w-5 h-5" />
        </button>

        <Link
          to="/"
          className="flex items-baseline gap-[10px] no-underline group cursor-pointer"
          title="XelCo Home"
        >
          <span className="font-['Poppins'] font-bold text-[17px] leading-none tracking-[-0.02em] text-[#1A1D1F]">
            XELCO
          </span>
          <span className="w-[1px] h-[14px] bg-[#E5E7EB]"></span>
          <span className="font-['Inter'] font-medium text-[13px] leading-none text-[#9CA3AF] hidden sm:inline">
            Control Center
          </span>
        </Link>

        {/* Municipality Pill */}
        <div className="flex items-center gap-[7px] px-[10px] py-[5px] border border-[#E5E7EB] bg-[#F8F9FA] rounded-[2px]">
          <span className="w-[6px] h-[6px] bg-[#009688] rounded-full shrink-0 animate-pulse"></span>
          <span className="font-['Inter'] font-semibold text-[11px] leading-none text-[#2D3139] whitespace-nowrap">
            VVMC · All 6 zones
          </span>
        </div>
      </div>

      {/* Right side: Demo Data Badge + User Avatar / Menu */}
      <div className="flex items-center gap-3 sm:gap-4 relative">
        <div className="font-['Inter'] font-semibold text-[10px] leading-none tracking-[0.1em] text-[#9CA3AF] border border-[#E5E7EB] px-[9px] py-[6px] rounded-[2px] hidden sm:block">
          DEMO DATA
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 cursor-pointer bg-transparent border-none p-1 hover:opacity-80 transition-opacity"
          >
            <span className="w-[26px] h-[26px] bg-[#1A1D1F] text-white font-['Inter'] font-bold text-[11px] flex items-center justify-center rounded-[2px]">
              {initial}
            </span>
            <span className="font-['Inter'] font-semibold text-[12px] leading-none text-[#2D3139]">
              {roleLabel}
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-[#9CA3AF]" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-[#E5E7EB] shadow-lg rounded-[2px] py-1 z-50">
              <div className="px-3 py-2 border-b border-[#E5E7EB]">
                <p className="font-['Inter'] font-semibold text-[12px] text-[#1A1D1F] truncate">
                  {user?.name || (roleLabel === 'Contractor' ? 'GreenLine Operator' : 'VVMC Administrator')}
                </p>
                <p className="font-['Inter'] text-[10px] text-[#9CA3AF] truncate">
                  {user?.email || (roleLabel === 'Contractor' ? 'ops@greenline.co.in' : 'admin@vvmc.gov.in')}
                </p>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="w-full text-left px-3 py-2 font-['Inter'] text-[12px] text-[#DC2626] hover:bg-red-50 flex items-center gap-2 cursor-pointer transition-colors border-none bg-white"
              >
                <LogOut className="w-3.5 h-3.5" />
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
