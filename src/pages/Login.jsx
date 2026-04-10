import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogIn } from 'lucide-react';
import { useGoogleLogin } from '@react-oauth/google';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, googleLogin, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Login failed. Please check credentials.');
    }
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setError('');
      try {
        // Fetch user info from Google using the access token
        const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        });
        const profile = await res.json();
        await googleLogin({ credential: null, profile });
        navigate('/');
      } catch (err) {
        setError('Google login failed. Please try again.');
      }
    },
    onError: () => setError('Google login was cancelled or failed.'),
  });

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
        <div className="bg-primary/5 p-8 border-b border-slate-100 text-center">
          <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/30">
            <LogIn size={32} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Welcome Back</h2>
          <p className="text-slate-500 mt-2">Login to manage your orders</p>
        </div>
        
        <div className="p-8">
          {/* Google Sign-In Button */}
          <button
            id="google-signin-btn"
            type="button"
            onClick={() => handleGoogleLogin()}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold py-3 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md mb-6"
          >
            <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M47.532 24.552c0-1.636-.148-3.2-.422-4.704H24.48v8.898h12.954c-.558 3.01-2.25 5.562-4.794 7.278v6.046h7.762c4.542-4.18 7.13-10.338 7.13-17.518z" fill="#4285F4"/>
              <path d="M24.48 48c6.5 0 11.95-2.154 15.934-5.83l-7.762-6.046c-2.154 1.444-4.91 2.296-8.172 2.296-6.282 0-11.606-4.244-13.506-9.944H2.944v6.242C6.912 42.756 15.056 48 24.48 48z" fill="#34A853"/>
              <path d="M10.974 28.476A14.38 14.38 0 0 1 10.22 24c0-1.558.268-3.072.754-4.476V13.28H2.944A23.934 23.934 0 0 0 .48 24c0 3.864.924 7.524 2.464 10.718l8.03-6.242z" fill="#FBBC05"/>
              <path d="M24.48 9.58c3.54 0 6.716 1.218 9.216 3.608l6.904-6.904C36.42 2.376 30.97 0 24.48 0 15.056 0 6.912 5.244 2.944 13.28l8.03 6.244C12.874 13.824 18.198 9.58 24.48 9.58z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          {/* Divider */}
          <div className="relative flex items-center mb-6">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="mx-4 text-xs text-slate-400 font-medium uppercase tracking-wide">or sign in with email</span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm border border-red-100">
                {error}
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                placeholder="you@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-slate-700">Password</label>
                <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a>
              </div>
              <input
                type="password"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-xl transition-colors flex justify-center items-center"
            >
              {isLoading ? <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> : 'Sign In'}
            </button>
          </form>
          
          <div className="mt-6 text-center text-sm text-slate-600">
            Don't have an account? <Link to="/register" className="text-primary font-bold hover:underline">Register now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
