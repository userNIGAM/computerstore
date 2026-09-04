"use client";

import React, { useState, ChangeEvent, FocusEvent } from "react";
import { useToast } from "@/app/context/ToastContext";

interface FormData {
  email: string;
  password: string;
}

interface TouchedFields {
  email: boolean;
  password: boolean;
}

export default function Login() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormData>({
    email: "",
    password: "",
  });
  const [touched, setTouched] = useState<TouchedFields>({
    email: false,
    password: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const { showToast } = useToast();

  // ─── Validation ────────────────────────────────────────────────
  const validateEmail = (email: string): string => {
    if (!email) return "Email is required";
    const emailRegex =
      /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

  const validatePassword = (password: string): string => {
    if (!password) return "Password is required";
    if (password.length < 8)
      return "Password must be at least 8 characters long";
    if (!/[a-z]/.test(password)) return "Must contain a lowercase letter";
    if (!/[A-Z]/.test(password)) return "Must contain an uppercase letter";
    if (!/\d/.test(password)) return "Must contain a number";
    if (!/[!@#$%^&*()_+\-=\[\]{};:'",.<>?/\\|`~]/.test(password))
      return "Must contain a special character";
    return "";
  };

  const validateField = (name: keyof FormData, value: string): string => {
    switch (name) {
      case "email":
        return validateEmail(value);
      case "password":
        return validatePassword(value);
      default:
        return "";
    }
  };

  // ─── Handlers ──────────────────────────────────────────────────
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as { name: keyof FormData; value: string };
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Re‑validate in real time if touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target as { name: keyof FormData; value: string };
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Mark all as touched
    setTouched({ email: true, password: true });

    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    setErrors({ email: emailError, password: passwordError });

    if (emailError || passwordError) {
      const messages = [];
      if (emailError) messages.push(`Email: ${emailError}`);
      if (passwordError) messages.push(`Password: ${passwordError}`);
      showToast(messages.join(" • "), "error");
      return;
    }

    // Success
    showToast("Login successful! Redirecting...", "success");
  };

  const togglePassword = () => setShowPassword((prev) => !prev);

  // ─── Helper for dynamic classes ──────────────────────────────
  const getInputClassName = (field: keyof FormData) => {
    const base =
      "w-full px-4 py-3 text-base border-2 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 outline-none transition-all duration-200";
    const isTouched = touched[field];
    const error = errors[field];

    if (!isTouched) {
      return `${base} border-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20`;
    }
    if (error) {
      return `${base} border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/20`;
    }
    return `${base} border-green-500 focus:border-green-500 focus:ring-4 focus:ring-green-500/20`;
  };

  // ─── Render ────────────────────────────────────────────────────
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6 font-sans">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
          Welcome Back
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Sign in to your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {/* Email */}
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-800 dark:text-gray-200"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={getInputClassName("email")}
              placeholder="you@example.com"
              autoComplete="email"
              aria-invalid={!!errors.email && touched.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {touched.email && errors.email && (
              <p id="email-error" className="text-sm text-red-500 mt-0.5">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-gray-800 dark:text-gray-200"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${getInputClassName("password")} pr-12`}
                placeholder="••••••••"
                autoComplete="current-password"
                aria-invalid={!!errors.password && touched.password}
                aria-describedby={
                  errors.password ? "password-error" : undefined
                }
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                )}
              </button>
            </div>
            {touched.password && errors.password && (
              <p id="password-error" className="text-sm text-red-500 mt-0.5">
                {errors.password}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-500/50 active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-5">
          Don't have an account?{" "}
          <a
            href="#"
            className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
