import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState({});
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPw, setShowPw] = useState(false);

  const onChange = (k, v) => {
    setForm(prev => ({ ...prev, [k]: v }));
    setError('');
    setSuccess('');
  };

  // basic validation
  const isValidEmail = (email) =>
    /^\S+@\S+\.\S+$/.test(email.trim());

  const minPwLen = 5;
  const isValid =
    form.name.trim().length >= 2 &&
    isValidEmail(form.email) &&
    form.password.length >= minPwLen;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, password: true });
    if (!isValid) return;

    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const res = await axios.post(`${import.meta.env.VITE_VERCEL_URL}/api/auth/register`, {
        name: form.name.trim(),
        email: form.email.trim(),
        password: form.password,
      });
      if (res.data?.success) {
        setSuccess('Account created! Redirecting to login…');
        setForm({ name: '', email: '', password: '' });
        // redirect after a moment
        setTimeout(() => navigate('/login', { replace: true }), 3000);  
      } else {
        setError(res.data?.message || 'Could not register. Please try again.');
      }
    } catch (err) {
      // handle common server messages (e.g., duplicate email)
      const msg =
        err?.response?.data?.message ||
        (err?.response?.status === 409
          ? 'This email is already registered.'
          : err?.message) ||
        'Something went wrong.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-20">
      <div className="w-96 max-w-[92%] mx-auto p-5 shadow-lg border rounded-lg bg-white">
        <h2 className="text-center text-xl font-bold mb-2">Create your account</h2>
        <p className="text-center text-sm text-gray-500 mb-5">
          Sign up to access the admin dashboard
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={e => onChange('name', e.target.value)}
              onBlur={() => setTouched(t => ({ ...t, name: true }))}
              placeholder="Your name"
              className="w-full border border-gray-300 p-2 rounded-md"
              autoComplete="name"
              minLength={2}
              required
            />
            {touched.name && form.name.trim().length < 2 && (
              <p className="text-red-600 text-xs mt-1">Please enter at least 2 characters.</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={e => onChange('email', e.target.value)}
              onBlur={() => setTouched(t => ({ ...t, email: true }))}
              placeholder="Your email"
              className="w-full border border-gray-300 p-2 rounded-md"
              autoComplete="email"
              required
            />
            {touched.email && !isValidEmail(form.email) && (
              <p className="text-red-600 text-xs mt-1">Enter a valid email address.</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPw ? 'text' : 'password'}
                value={form.password}
                onChange={e => onChange('password', e.target.value)}
                onBlur={() => setTouched(t => ({ ...t, password: true }))}
                placeholder="••••••••"
                className="w-full border border-gray-300 p-2 rounded-md pr-10"
                autoComplete="new-password"
                required
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-blue-700"
                onClick={() => setShowPw(s => !s)}
                aria-label={showPw ? 'Hide password' : 'Show password'}
              >
                {showPw ? 'Hide' : 'Show'}
              </button>
            </div>
            {touched.password && form.password.length < minPwLen && (
              <p className="text-red-600 text-xs mt-1">
                Password must be at least {minPwLen} characters.
              </p>
            )}
          </div>

          {/* Alerts */}
          {error && (
            <div className="bg-red-50 text-red-700 border border-red-200 text-sm px-3 py-2 rounded">
              {error}
            </div>
          )}
            {success && (
            <div className="bg-green-50 text-green-700 border border-green-200 text-sm px-3 py-2 rounded">
              {success}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 gradient text-white font-medium rounded-lg shadow-md hover:opacity-90 transition cursor-pointer"
            disabled={loading || !isValid}
          >
            {loading ? 'Signing up…' : 'Sign Up'}
          </button>
        </form>

        <p className="text-sm text-center font-medium mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-700 underline">
            Login
          </Link>
        </p>

        <p className="text-[11px] text-gray-500 text-center mt-2">
          By signing up, you agree to our Terms & Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Register;

