import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/dashboard/Sidebar';
import Navbar from '@/components/dashboard/Navbar';

export default function DashboardLayout() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1A1D1F]">
      {/* Top Navbar */}
      <Navbar onMenuToggle={() => setMobileSidebarOpen(!mobileSidebarOpen)} />

      {/* Main split layout: Sidebar + Content */}
      <div className="flex-1 flex items-stretch min-w-0">
        <Sidebar
          collapsed={!mobileSidebarOpen}
          onToggle={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />
        <main className="flex-1 min-w-0 bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
