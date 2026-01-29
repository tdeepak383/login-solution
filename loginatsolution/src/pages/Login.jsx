import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [email, setEmail] = useState(() => localStorage.getItem('remember_email') || '');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [remember, setRemember] = useState(!!localStorage.getItem('remember_email'));
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const emailRef = useRef(null);
  const pwRef = useRef(null);

  useEffect(() => {
    // focus first empty field
    if (!email && emailRef.current) emailRef.current.focus();
    else if (pwRef.current) pwRef.current.focus();
  }, []);

  const isValidEmail = (v) => /^\S+@\S+\.\S+$/.test(v.trim());
  const isValid = isValidEmail(email) && password.length >= 5;

  const handlelogin = async (e) => {
    e.preventDefault();
    setError('');
    if (!isValid) return;

    setLoading(true);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_VERCEL_URL}/api/auth/login`,
        { email, password }
      );
      // import.meta.env.VITE_API_URL?.replace(/\/$/, '') + '/api/auth/login' || 

      if (data?.success) {
        // remember email
        if (remember) localStorage.setItem('remember_email', email);
        else localStorage.removeItem('remember_email');

        login(data.token);
        const to = location.state?.from?.pathname || '/admin';
        navigate(to, { replace: true });
      } else {
        setError(data?.message || 'Invalid email or password');
      }
    } catch (err) {
      setError(err?.response?.data?.message || 'Unable to login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-20">
      <div className="w-96 max-w-[92%] mx-auto p-6 shadow-lg border rounded-lg bg-white">
        <h2 className="text-center text-xl font-bold">Login to Admin</h2>
        <p className="text-center text-sm text-gray-500 mb-5">Use your registered email and password</p>

        {error && (
          <div
            role="alert"
            className="mb-4 rounded border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
          >
            {error}
          </div>
        )}

        <form className="flex flex-col gap-4" onSubmit={handlelogin} noValidate>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              id="email"
              ref={emailRef}
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md"
              autoComplete="email"
              required
              aria-invalid={email && !isValidEmail(email) ? 'true' : 'false'}
            />
            {email && !isValidEmail(email) && (
              <p className="mt-1 text-xs text-red-600">Enter a valid email address.</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                id="password"
                ref={pwRef}
                type={showPw ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-md pr-12"
                autoComplete="current-password"
                required
                minLength={5}
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-blue-700"
                onClick={() => setShowPw((s) => !s)}
                aria-label={showPw ? 'Hide password' : 'Show password'}
              >
                {showPw ? 'Hide' : 'Show'}
              </button>
            </div>
            {!!password && password.length < 5 && (
              <p className="mt-1 text-xs text-red-600">Password must be at least 5 characters.</p>
            )}
          </div>

          {/* Extras */}
          <div className="flex items-center justify-between text-sm">
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="accent-blue-700"
              />
              Remember me
            </label>
            <Link to="/forgot-password" className="text-blue-700 underline">
              Forgot password?
            </Link>
          </div>
 
          {/* Submit */}
          <button
            type="submit"
            disabled={loading || !isValid}
            className="w-full md:w-auto px-8 py-3 gradient text-white font-medium rounded-lg shadow-md hover:opacity-90 transition cursor-pointer"
          >
            {loading ? 'Logging in…' : 'Login'}
          </button>
        </form>

        {/* <p className="text-sm text-center font-medium mt-4">
          New here?{' '}
          <Link to="/register" className="text-blue-700 underline">
            Create an account
          </Link>
        </p> */}
      </div>
    </div>
  );
}

export default Login;
