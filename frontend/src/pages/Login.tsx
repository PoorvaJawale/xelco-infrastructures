import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';
import { Mail, Lock, CircuitBoard, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function Login() {
  const navigate = useNavigate();
  const { loginPassword, error: authError, clearError } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    setFormErrors({});

    const errors: Record<string, string> = {};
    if (!email) {
      errors.email = 'Official Email is required.';
    }
    if (!password) {
      errors.password = 'Password is required.';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setLoading(true);
    const result = await loginPassword(email, password);
    setLoading(false);

    if (result.success) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      {/* Top Bar with back link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 flex justify-between items-center">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-dark-secondary hover:text-dark transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-semibold">Home page</span>
        </button>
        <img src="/logo.png" alt="XelCo InfraTechnologies" className="h-10 object-contain" />
      </div>

      {/* Main split section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 flex-1 flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 w-full items-center">
          
          {/* Left Column: Editorial message */}
          <div className="lg:col-span-5 max-w-xl">
            <div className="text-[11px] tracking-[0.16em] uppercase text-primary-hover font-semibold mb-6">
              Access Control
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-[1.12] text-dark font-display tracking-tight mb-6">
              XIT Terminal Access
            </h1>
            <p className="text-[15px] text-dark-secondary leading-relaxed">
              Official gateway for XelCo operators, dispatch officers, and municipal directors. Authenticate with your organization credentials to access active maps, telemetry data, and ESG reports.
            </p>
          </div>

          {/* Right Column: Clean borderless Form */}
          <div className="lg:col-span-7 bg-slate-50 p-8 md:p-12 border border-gray-200">
            <div className="max-w-md mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-dark font-display tracking-tight">Operator Login</h2>
                <p className="text-xs text-gray-400 mt-1">Authenticate to access the XIT terminal</p>
              </div>

              {/* Validation & Auth Errors */}
              {(authError || formErrors.general) && (
                <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-500 rounded-none text-xs leading-normal flex items-start space-x-2">
                  <svg className="w-4 h-4 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>{authError || formErrors.general}</span>
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-6">
                {/* Official Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-600 block">Official Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      placeholder="operator@xelco.in"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`flex h-11 w-full rounded-none border bg-white px-10 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-all ${
                        formErrors.email ? 'border-red-400' : 'border-slate-200'
                      }`}
                      required
                    />
                  </div>
                  {formErrors.email && <span className="text-xs text-red-500">{formErrors.email}</span>}
                </div>

                {/* Password */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-600 block">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="password"
                      placeholder="••••••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`flex h-11 w-full rounded-none border bg-white px-10 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-all ${
                        formErrors.password ? 'border-red-400' : 'border-slate-200'
                      }`}
                      required
                    />
                  </div>
                  {formErrors.password && <span className="text-xs text-red-500">{formErrors.password}</span>}
                </div>

                <Button
                  type="submit"
                  className="w-full justify-center bg-primary hover:bg-primary-hover text-white rounded-none h-11 text-xs font-semibold cursor-pointer duration-200 transition-colors"
                  isLoading={loading}
                  disabled={loading}
                >
                  Secure Login
                </Button>
              </form>

              {/* Registration Link */}
              <div className="text-center mt-6">
                <button
                  onClick={() => navigate('/register')}
                  className="text-xs font-semibold text-primary-hover hover:underline cursor-pointer"
                >
                  Need access credentials? Request Provisioning
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer copyright */}
      <footer className="w-full bg-slate-50 border-t border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-[10px] text-slate-400 gap-3">
          <p>© 2026 XelCo InfraTechnologies Pvt. Ltd. (XIT). All rights reserved.</p>
          <p className="flex items-center space-x-1">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 inline-block"></span>
            <span>Secure Access Gateway</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
