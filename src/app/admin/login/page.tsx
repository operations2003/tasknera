'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { useAuth } from '@/contexts/AuthContext';

export default function AdminLoginPage() {
  const router = useRouter();
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!email.trim() || !password.trim()) {
      setError('Please enter your email and password.');
      return;
    }
    setLoading(true);
    try {
      await signIn(email.trim(), password);
      router.replace('/admin');
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Sign in failed. Please try again.';
      setError(message.includes('Invalid login credentials') ? 'Invalid email or password.' : message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] blob-teal animate-pulse-slow pointer-events-none opacity-30" style={{ transform: 'translate(30%, -30%)' }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 blob-coral animate-float-delayed pointer-events-none opacity-20" style={{ transform: 'translate(-30%, 40%)' }} />

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <Link href="/" className="flex items-center gap-2.5 group">
            <AppLogo
              src="/assets/images/logo_1-1786267820748.png"
              size={36}
              className="rounded-lg"
            />
            <span className="font-display font-700 text-xl text-white tracking-tight">
              TaskNera
            </span>
          </Link>
        </div>

        {/* Card */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-sm">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/25 rounded-full px-4 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs font-semibold text-accent tracking-widest uppercase">Admin Access</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-display font-700 text-white mb-2">
              Sign in to Admin
            </h1>
            <p className="text-white/50 text-sm">
              Restricted to authorised TaskNera team members only.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-white/60 text-xs font-medium mb-1.5">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@tasknera.com"
                autoComplete="email"
                className="w-full border border-white/15 focus:border-accent/60 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none transition-colors"
                style={{ background: 'rgba(255,255,255,0.06)' }}
              />
            </div>

            <div>
              <label className="block text-white/60 text-xs font-medium mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="current-password"
                className="w-full border border-white/15 focus:border-accent/60 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none transition-colors"
                style={{ background: 'rgba(255,255,255,0.06)' }}
              />
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-300 text-sm flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-accent text-accent-foreground font-semibold py-3.5 rounded-xl hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-xl shadow-accent/30 text-sm disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Signing in…
                </>
              ) : (
                <>
                  Sign in
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-white/30 text-xs">
            Access is restricted to authorised team members.{' '}
            <Link href="/" className="text-white/50 hover:text-white transition-colors">
              Return to site →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
