import React from 'react';
import { NavLink } from 'react-router-dom';
import { X } from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

interface NavSection {
  title: string;
  items: {
    label: string;
    path: string;
    badge?: number | string;
    end?: boolean;
  }[];
}

const navSections: NavSection[] = [
  {
    title: 'OVERVIEW',
    items: [
      { label: 'Dashboard', path: '/dashboard', end: true },
      { label: 'Live City Map', path: '/dashboard/live-map' },
    ],
  },
  {
    title: 'OPERATIONS',
    items: [
      { label: 'Smart Bins', path: '/dashboard/smartbins' },
      { label: 'Waste Collection', path: '/dashboard/collections' },
      { label: 'Route Management', path: '/dashboard/routes' },
      { label: 'Fleet Management', path: '/dashboard/fleet' },
      { label: 'Wards & Zones', path: '/dashboard/zones' },
    ],
  },
  {
    title: 'PEOPLE',
    items: [
      { label: 'Contractors', path: '/dashboard/contractors' },
      { label: 'Drivers', path: '/dashboard/drivers' },
      { label: 'Waste Collectors', path: '/dashboard/collectors' },
      { label: 'User Management', path: '/dashboard/users' },
    ],
  },
  {
    title: 'OVERSIGHT',
    items: [
      { label: 'Alerts', path: '/dashboard/alerts', badge: 27 },
      { label: 'Complaints', path: '/dashboard/complaints' },
      { label: 'Analytics', path: '/dashboard/analytics' },
      { label: 'Reports', path: '/dashboard/reports' },
    ],
  },
  {
    title: 'SYSTEM',
    items: [{ label: 'Settings', path: '/dashboard/settings' }],
  },
];

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const content = (
    <div className="w-[214px] shrink-0 border-r border-[#E5E7EB] py-5 pb-10 bg-[#FAFBFC] select-none h-full overflow-y-auto">
      {navSections.map((section, idx) => (
        <div key={section.title} className={idx > 0 ? 'mt-5' : ''}>
          <p className="font-['Inter'] font-bold text-[9px] leading-none tracking-[0.14em] uppercase text-[#9CA3AF] mb-2 px-[18px]">
            {section.title}
          </p>
          <div className="flex flex-col">
            {section.items.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                onClick={() => {
                  // close mobile drawer if open
                  if (!collapsed && window.innerWidth < 1024) {
                    onToggle();
                  }
                }}
                className={({ isActive }) =>
                  `flex items-center justify-between font-['Inter'] text-[13px] leading-none transition-colors cursor-pointer no-underline ${
                    isActive
                      ? 'font-semibold text-[#00796B] py-[9px] px-[18px] border-l-[3px] border-[#009688] bg-[rgba(0,150,136,0.05)]'
                      : 'font-normal text-[#2D3139] py-[9px] px-[21px] hover:bg-[#F3F4F6] border-l-[3px] border-transparent'
                  }`
                }
              >
                <span>{item.label}</span>
                {item.badge !== undefined && (
                  <span className="font-['Inter'] font-bold text-[10px] leading-none text-white bg-[#DC2626] px-[5px] py-[3px]">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* Desktop permanent sidebar */}
      <aside className="hidden lg:block h-[calc(100vh-56px)] sticky top-[56px] shrink-0 z-20">
        {content}
      </aside>

      {/* Mobile drawer backdrop and sidebar */}
      {!collapsed && (
        <div className="fixed inset-0 z-40 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={onToggle}
          />
          <div className="relative z-50 bg-[#FAFBFC] shadow-xl flex flex-col h-full">
            <div className="p-3 border-b border-[#E5E7EB] flex justify-end">
              <button
                type="button"
                onClick={onToggle}
                className="p-1 text-[#1A1D1F] hover:text-[#009688] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">{content}</div>
          </div>
        </div>
      )}
    </>
  );
}
