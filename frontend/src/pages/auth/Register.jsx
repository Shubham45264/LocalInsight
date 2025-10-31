import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import { useAuth } from "../../context/auth";

const Register = () => {
  const [name, setName] = useState(""); // ✅ new
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) return setError("Passwords do not match");

    try {
      setError("");
      setLoading(true);
      await signUp(email, password, name); // ✅ send name to context
      navigate("/dashboard");
    } catch (err) {
      setError("Failed to create an account. Please try again.");
      console.error("Registration Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="flex justify-center items-center min-h-screen">
        <div className="group rounded-[22px] bg-gray-900 transition-all duration-500 hover:bg-gradient-to-tr hover:from-green-400 hover:to-blue-600 hover:shadow-[0_0_30px_1px_rgba(0,255,117,0.3)]">
          <div className="rounded-2xl bg-neutral-900 transition-all duration-200 group-hover:scale-98">
            <form
              className="flex w-[400px] flex-col gap-2.5 px-8 pb-2"
              onSubmit={handleSubmit}
            >
              <p className="my-8 text-center text-xl text-white">
                Create an Account
              </p>
              <p className="-mt-6 mb-4 text-center text-sm text-neutral-400">
                Get started with LocalInsights AI.
              </p>

              {error && (
                <p className="rounded-md bg-red-500/10 p-3 text-center text-sm text-red-400">
                  {error}
                </p>
              )}

              {/* ✅ Full Name Field with User Icon */}
              <div className="flex items-center gap-2 rounded-full bg-neutral-900 p-2.5 shadow-[inset_2px_5px_10px_rgb(5,5,5)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"
                  />
                </svg>
                <input
                  type="text"
                  className="w-full border-none bg-transparent text-base text-neutral-300 outline-none focus:outline-none focus:ring-0"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Email Field */}
              <div className="flex items-center gap-2 rounded-full bg-neutral-900 p-2.5 shadow-[inset_2px_5px_10px_rgb(5,5,5)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75l-9 5.25-9-5.25M3 6.75v10.5a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 17.25V6.75"
                  />
                </svg>
                <input
                  type="email"
                  className="w-full border-none bg-transparent text-base text-neutral-300 outline-none focus:outline-none focus:ring-0"
                  placeholder="you@example.com"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password Field */}
              <div className="flex items-center gap-2 rounded-full bg-neutral-900 p-2.5 shadow-[inset_2px_5px_10px_rgb(5,5,5)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 00-9 0v3.75m11.25 0h-13.5a.75.75 0 00-.75.75v7.5a.75.75 0 00.75.75h13.5a.75.75 0 00.75-.75v-7.5a.75.75 0 00-.75-.75z"
                  />
                </svg>
                <input
                  type="password"
                  className="w-full border-none bg-transparent text-base text-neutral-300 outline-none focus:outline-none focus:ring-0"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Confirm Password */}
              <div className="flex items-center gap-2 rounded-full bg-neutral-900 p-2.5 shadow-[inset_2px_5px_10px_rgb(5,5,5)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 00-9 0v3.75m11.25 0h-13.5a.75.75 0 00-.75.75v7.5a.75.75 0 00.75.75h13.5a.75.75 0 00.75-.75v-7.5a.75.75 0 00-.75-.75z"
                  />
                </svg>
                <input
                  type="password"
                  className="w-full border-none bg-transparent text-base text-neutral-300 outline-none focus:outline-none focus:ring-0"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              {/* Terms */}
              <div className="mt-2 flex items-center text-sm">
                <label
                  htmlFor="terms"
                  className="flex cursor-pointer items-center gap-1.5 text-neutral-300"
                >
                  <input type="checkbox" id="terms" className="cursor-pointer" required />
                  I agree to the{" "}
                  <span className="font-bold text-green-400">Terms & Conditions</span>
                </label>
              </div>

              <div className="mt-10 flex justify-center">
                <button
                  type="submit"
                  className="w-full cursor-pointer rounded-md border-none bg-neutral-800 py-2 text-white transition duration-300 ease-in-out hover:enabled:bg-neutral-950 disabled:cursor-not-allowed disabled:bg-neutral-900 disabled:text-neutral-600"
                  disabled={loading}
                >
                  {loading ? "Creating Account..." : "Register"}
                </button>
              </div>

              <button
                type="button"
                className="mb-12 mt-4 w-full cursor-pointer rounded-md border-none bg-neutral-800 py-2 text-white transition duration-300 ease-in-out hover:bg-red-600"
                onClick={() => navigate("/login")}
              >
                Already have an account? Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register;
