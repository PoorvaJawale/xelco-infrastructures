import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/lib/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const { loginPassword, error: authError, clearError } = useAuth();

  const [role, setRole] = useState<'Admin' | 'Contractor'>('Admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [forgotModalOpen, setForgotModalOpen] = useState(false);

  const handleRoleChange = (newRole: 'Admin' | 'Contractor') => {
    setRole(newRole);
    clearError();
    setErrorMessage(null);
  };

  const handleSelectDemoUser = (demoRole: 'Admin' | 'Contractor') => {
    setRole(demoRole);
    clearError();
    setErrorMessage(null);
    if (demoRole === 'Admin') {
      setEmail('admin@vvmc.gov.in');
      setPassword('admin');
    } else {
      setEmail('ops@greenline.co.in');
      setPassword('contractor');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    setErrorMessage(null);

    if (!email.trim()) {
      setErrorMessage('Please enter your work email.');
      return;
    }
    if (!password) {
      setErrorMessage('Please enter your password.');
      return;
    }

    setLoading(true);
    const result = await loginPassword(email, password, role);
    setLoading(false);

    if (result.success) {
      navigate('/dashboard');
    } else {
      setErrorMessage(result.error || 'Incorrect password. 4 attempts remaining.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#FAFBFC] selection:bg-[#009688]/20 selection:text-[#00796B]">
      {/* Left Column: Dark Brand Panel */}
      <div className="w-full lg:w-1/2 bg-[#1A1D1F] p-8 sm:p-12 lg:p-[56px_64px] flex flex-col justify-between shrink-0 min-h-[520px] lg:min-h-screen">
        {/* Top Logo */}
        <div>
          <Link
            to="/"
            className="inline-block no-underline group cursor-pointer"
            title="Return to Home"
          >
            <img
              src="/logo.png"
              alt="XelCo InfraTechnologies"
              className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
            />
          </Link>
        </div>

        {/* Center Editorial / Marketing & Demo Info */}
        <div className="my-10 lg:my-0">
          <p className="font-['Inter'] font-semibold text-[11px] leading-none tracking-[0.16em] uppercase text-[#14B8A6] m-0 mb-[22px]">
            Control Center
          </p>

          <h2 className="font-['Poppins'] font-bold text-[34px] sm:text-[40px] leading-[1.12] tracking-[-0.025em] text-white m-0 mb-[20px] max-w-[440px]">
            Every bin, every route, one screen.
          </h2>

          <p className="font-['Inter'] font-normal text-[15px] leading-[1.6] text-white/60 m-0 max-w-[400px]">
            Vasai-Virar Municipal Corporation · 452 smart bins across six zones.
          </p>

          {/* Demo access badge & interactive quick credentials */}
          <div className="border-l-[3px] border-[#009688] pl-[22px] mt-[44px]">
            <p className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.12em] uppercase text-white/45 m-0 mb-[10px]">
              Demo access · no backend connected
            </p>
            <div className="font-mono text-[13px] leading-[1.7] text-white/80 space-y-1">
              <div
                onClick={() => handleSelectDemoUser('Admin')}
                className="cursor-pointer hover:text-white transition-colors group flex items-center gap-2"
                title="Click to fill Admin demo credentials"
              >
                <span className="group-hover:underline">admin@vvmc.gov.in · admin</span>
                <span className="text-[10px] opacity-0 group-hover:opacity-100 text-[#14B8A6] font-sans">
                  (fill)
                </span>
              </div>
              <div
                onClick={() => handleSelectDemoUser('Contractor')}
                className="cursor-pointer hover:text-white transition-colors group flex items-center gap-2"
                title="Click to fill Contractor demo credentials"
              >
                <span className="group-hover:underline">ops@greenline.co.in · contractor</span>
                <span className="text-[10px] opacity-0 group-hover:opacity-100 text-[#14B8A6] font-sans">
                  (fill)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer copyright */}
        <p className="font-['Inter'] font-normal text-[11px] leading-none text-white/35 m-0">
          © 2026 XelCo InfraTechnologies Pvt. Ltd.
        </p>
      </div>

      {/* Right Column: Sign In Form */}
      <div className="flex-1 bg-white p-8 sm:p-12 lg:p-[56px_72px] flex flex-col justify-center items-center">
        <div className="max-w-[440px] w-full">
          {/* Subtitle */}
          <p className="font-['Inter'] font-semibold text-[11px] leading-none tracking-[0.16em] uppercase text-[#00796B] m-0 mb-[18px]">
            Sign in
          </p>

          {/* Heading */}
          <h1 className="font-['Poppins'] font-bold text-[30px] sm:text-[34px] leading-[1.1] tracking-[-0.025em] text-[#1A1D1F] m-0 mb-[40px]">
            Log in to the Control Center
          </h1>

          {/* Role Segmented Control */}
          <p className="font-['Inter'] font-bold text-[10px] leading-none tracking-[0.1em] uppercase text-[#9CA3AF] m-0 mb-[10px]">
            I am signing in as
          </p>

          <div className="flex border border-[#1A1D1F] mb-[12px]">
            <button
              type="button"
              onClick={() => handleRoleChange('Admin')}
              className={`flex-1 border-none py-[15px] font-['Inter'] text-[13px] leading-none transition-colors cursor-pointer ${
                role === 'Admin'
                  ? 'bg-[#009688] text-white font-bold border-r border-[#1A1D1F]'
                  : 'bg-white text-[#2D3139] font-medium border-r border-[#1A1D1F] hover:bg-gray-50'
              }`}
            >
              Admin
            </button>

            <button
              type="button"
              onClick={() => handleRoleChange('Contractor')}
              className={`flex-1 border-none py-[15px] font-['Inter'] text-[13px] leading-none transition-colors cursor-pointer ${
                role === 'Contractor'
                  ? 'bg-[#009688] text-white font-bold'
                  : 'bg-white text-[#2D3139] font-medium hover:bg-gray-50'
              }`}
            >
              Contractor
            </button>
          </div>

          {/* Role Helper Description */}
          <p className="font-['Inter'] font-normal text-[12px] leading-[1.5] text-[#9CA3AF] m-0 mb-[32px]">
            {role === 'Admin'
              ? 'Municipal corporation account — full oversight across all six zones.'
              : 'Collection operator account — analytics and route optimisation for assigned contract.'}
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate>
            {/* Work Email */}
            <div className="mb-[22px]">
              <label className="block font-['Inter'] font-semibold text-[12px] leading-none text-[#2D3139] mb-[8px]">
                Work email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrorMessage(null);
                }}
                className="w-full box-border border border-[#E5E7EB] p-[13px_14px] font-['Inter'] font-normal text-[15px] leading-none text-[#1A1D1F] rounded-[2px] bg-white outline-none focus:border-[#009688] transition-colors"
                placeholder={role === 'Admin' ? 'admin@vvmc.gov.in' : 'ops@greenline.co.in'}
                autoComplete="email"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-[10px]">
              <label className="block font-['Inter'] font-semibold text-[12px] leading-none text-[#2D3139] mb-[8px]">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorMessage(null);
                }}
                className={`w-full box-border border p-[13px_14px] font-['Inter'] font-normal text-[15px] leading-none text-[#1A1D1F] rounded-[2px] bg-white outline-none transition-colors ${
                  errorMessage || authError
                    ? 'border-[#DC2626] focus:border-[#DC2626]'
                    : 'border-[#E5E7EB] focus:border-[#009688]'
                }`}
                placeholder="••••••••"
                autoComplete="current-password"
                required
              />
              {(errorMessage || authError) && (
                <p className="font-['Inter'] font-normal text-[12px] leading-none text-[#DC2626] m-[8px_0_0]">
                  {errorMessage || authError}
                </p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center m-[24px_0_28px]">
              <label className="flex items-center gap-[9px] font-['Inter'] font-normal text-[13px] leading-none text-[#2D3139] cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={keepSignedIn}
                  onChange={(e) => setKeepSignedIn(e.target.checked)}
                  className="w-[15px] h-[15px] accent-[#009688] cursor-pointer"
                />
                Keep me signed in
              </label>
              <button
                type="button"
                onClick={() => setForgotModalOpen(true)}
                className="font-['Inter'] font-semibold text-[13px] leading-none text-[#00796B] hover:underline cursor-pointer bg-transparent border-none p-0"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#009688] hover:bg-[#00796B] active:bg-[#00695c] text-white border-none p-[17px_0] font-['Inter'] font-bold text-[14px] leading-none cursor-pointer transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Authenticating...' : `Log in as ${role}`}
            </button>
          </form>

          {/* Request Access Link */}
          <p className="font-['Inter'] font-normal text-[13px] leading-none text-[#2D3139] m-[26px_0_0] pt-[26px] border-t border-[#E5E7EB]">
            No account yet?{' '}
            <button
              type="button"
              onClick={() => navigate('/register')}
              className="font-semibold text-[#00796B] hover:underline cursor-pointer bg-transparent border-none p-0"
            >
              Request access
            </button>
          </p>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {forgotModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full p-6 shadow-xl border border-gray-200">
            <h3 className="font-['Poppins'] font-bold text-lg text-[#1A1D1F] mb-2">
              Password Recovery
            </h3>
            <p className="font-['Inter'] text-sm text-[#2D3139] mb-4 leading-relaxed">
              For demo accounts, use credentials listed on the brand panel:
            </p>
            <div className="bg-gray-50 p-3 font-mono text-xs text-gray-700 mb-5 border border-gray-200 space-y-1">
              <p>Admin: admin@vvmc.gov.in / admin</p>
              <p>Contractor: ops@greenline.co.in / contractor</p>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setForgotModalOpen(false)}
                className="bg-[#009688] hover:bg-[#00796B] text-white px-5 py-2.5 font-['Inter'] font-semibold text-xs transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
