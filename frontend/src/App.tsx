/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Component, ErrorInfo, ReactNode, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { AuthProvider } from './lib/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import DashboardLayout from './layouts/DashboardLayout';
import {
  Trash2, MapPin, Truck, Bell, BarChart3, Users, Settings, UserCircle
} from 'lucide-react';

// Public pages
import Home from './pages/Home';
import Products from './pages/Products';
import Solutions from './pages/Solutions';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Login from './pages/Login';
import Register from './pages/Register';

// Dashboard pages
import Dashboard from './pages/Dashboard';
import PlaceholderPage from './pages/PlaceholderPage';

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean, error: Error | null }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div style={{ padding: '20px', color: 'red' }}>
        <h1>Something went wrong.</h1>
        <pre>{this.state.error?.toString()}</pre>
        <pre>{this.state.error?.stack}</pre>
      </div>;
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Auth Pages (no layout) */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Dashboard (protected) */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="live-map" element={<PlaceholderPage title="Live City Map" description="Real-time map of all 452 smart bins and collection vehicles in Vasai-Virar." icon={<MapPin className="w-12 h-12" />} />} />
              <Route path="smartbins" element={<PlaceholderPage title="Smart Bins" description="Manage, search, and monitor all smart bins across six zones." icon={<Trash2 className="w-12 h-12" />} />} />
              <Route path="collections" element={<PlaceholderPage title="Waste Collection" description="View collection schedules, history, and assigned workers." icon={<Truck className="w-12 h-12" />} />} />
              <Route path="routes" element={<PlaceholderPage title="Route Management" description="Generate, re-run, and assign collection routes." icon={<Truck className="w-12 h-12" />} />} />
              <Route path="fleet" element={<PlaceholderPage title="Fleet Management" description="Monitor collection vehicles, fuel, and telemetry." icon={<Truck className="w-12 h-12" />} />} />
              <Route path="zones" element={<PlaceholderPage title="Wards & Zones" description="Vasai-Virar municipal wards, zones, and territory boundaries." icon={<MapPin className="w-12 h-12" />} />} />
              <Route path="contractors" element={<PlaceholderPage title="Contractors" description="Manage collection operators, SLAs, and performance scores." icon={<Users className="w-12 h-12" />} />} />
              <Route path="drivers" element={<PlaceholderPage title="Drivers" description="Driver rosters, route assignments, and shift activity." icon={<Users className="w-12 h-12" />} />} />
              <Route path="collectors" element={<PlaceholderPage title="Waste Collectors" description="Ground personnel shifts, attendance, and zone assignments." icon={<Users className="w-12 h-12" />} />} />
              <Route path="users" element={<PlaceholderPage title="User Management" description="Create, edit, and assign roles to municipal users." icon={<Users className="w-12 h-12" />} />} />
              <Route path="alerts" element={<PlaceholderPage title="Alerts" description="Critical fire detected, overflow, route deviation, and battery alerts." icon={<Bell className="w-12 h-12" />} />} />
              <Route path="complaints" element={<PlaceholderPage title="Complaints" description="Citizen grievance tracking, SLA breach monitors, and resolution workflows." icon={<Bell className="w-12 h-12" />} />} />
              <Route path="analytics" element={<PlaceholderPage title="Analytics" description="Executive trends, collection score history, and waste volume analytics." icon={<BarChart3 className="w-12 h-12" />} />} />
              <Route path="reports" element={<PlaceholderPage title="Reports" description="Export daily, weekly, and monthly municipal compliance reports." icon={<BarChart3 className="w-12 h-12" />} />} />
              <Route path="settings" element={<PlaceholderPage title="Settings" description="Configure municipality settings, alert thresholds, and system integration." icon={<Settings className="w-12 h-12" />} />} />
              <Route path="profile" element={<PlaceholderPage title="Profile" description="View and update your administrator profile." icon={<UserCircle className="w-12 h-12" />} />} />
              <Route path="*" element={<PlaceholderPage title="Module Coming Soon" description="This module is under construction for the Vasai-Virar Control Center." />} />
            </Route>

            {/* Public Pages (with marketing layout) */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="products/:productId" element={<Products />} />
              <Route path="solutions" element={<Solutions />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="privacy" element={<Privacy />} />
              <Route path="terms" element={<Terms />} />
              <Route path="*" element={<div className="min-h-[50vh] flex items-center justify-center font-display text-2xl text-dark-secondary">Coming Soon</div>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ErrorBoundary>
  );
}
