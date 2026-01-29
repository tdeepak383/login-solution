import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_VERCEL_URL}/api/auth/forgot-password`,
        { email, password }
      );

      setMessage(data.message);

      // redirect after 2 seconds
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-20">
      <div className="w-96 max-w-[92%] mx-auto p-6 border rounded-lg shadow bg-white">
        <h2 className="text-xl font-bold text-center">Forgot Password</h2>
        <p className="text-sm text-center text-gray-500 mb-4">
          Enter email and new password
        </p>

        {message && <p className="text-green-600 text-sm mb-3">{message}</p>}
        {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="text-sm text-gray-500">Enter your email</label>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded-md"
          />
            
          <div>
            <label className="text-sm text-gray-500">Enter new password</label>
            <div className="relative">
              <input
                id="password"
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

          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 gradient text-white rounded-lg"
          >
            {loading ? "Updating..." : "Update Password"}
          </button>
        </form>
        <p className="text-sm text-center font-medium mt-4">
          <Link to="/login" className="text-blue-700 underline">
            Login to admin
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
