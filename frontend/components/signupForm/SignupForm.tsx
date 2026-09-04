"use client";

import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  FocusEvent,
} from "react";

// --- Type definitions ---
interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Errors {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Touched {
  name: boolean;
  email: boolean;
  password: boolean;
  confirmPassword: boolean;
}

interface ToastState {
  show: boolean;
  message: string;
  type: "error" | "success";
}

export default function SignUp() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Errors>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [touched, setTouched] = useState<Touched>({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [toast, setToast] = useState<ToastState>({
    show: false,
    message: "",
    type: "error",
  });
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // --- Validation functions ---
  const validateName = (name: string): string => {
    if (!name.trim()) return "Name is required";
    if (name.trim().length < 2) return "Name must be at least 2 characters";
    return "";
  };

  const validateEmail = (email: string): string => {
    const emailRegex =
      /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return "";
  };

  const validatePassword = (password: string): string => {
    if (!password) return "Password is required";
    if (password.length < 8)
      return "Password must be at least 8 characters long";
    if (!/[a-z]/.test(password))
      return "Password must contain at least one lowercase letter";
    if (!/[A-Z]/.test(password))
      return "Password must contain at least one uppercase letter";
    if (!/\d/.test(password))
      return "Password must contain at least one number";
    if (!/[!@#$%^&*()_+\-=\[\]{};:'",.<>?/\\|`~]/.test(password)) {
      return "Password must contain at least one special character";
    }
    return "";
  };

  const validateConfirmPassword = (
    confirmPassword: string,
    password: string,
  ): string => {
    if (!confirmPassword) return "Please confirm your password";
    if (confirmPassword !== password) return "Passwords do not match";
    return "";
  };

  const validateField = (name: keyof FormData, value: string): string => {
    switch (name) {
      case "name":
        return validateName(value);
      case "email":
        return validateEmail(value);
      case "password":
        return validatePassword(value);
      case "confirmPassword":
        return validateConfirmPassword(value, formData.password);
      default:
        return "";
    }
  };

  // --- Handlers ---
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as { name: keyof FormData; value: string };
    setFormData((prev) => ({ ...prev, [name]: value }));

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

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      password: true,
      confirmPassword: true,
    });

    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    const confirmPasswordError = validateConfirmPassword(
      formData.confirmPassword,
      formData.password,
    );

    setErrors({
      name: nameError,
      email: emailError,
      password: passwordError,
      confirmPassword: confirmPasswordError,
    });

    if (nameError || emailError || passwordError || confirmPasswordError) {
      const messages: string[] = [];
      if (nameError) messages.push(`Name: ${nameError}`);
      if (emailError) messages.push(`Email: ${emailError}`);
      if (passwordError) messages.push(`Password: ${passwordError}`);
      if (confirmPasswordError)
        messages.push(`Confirm: ${confirmPasswordError}`);
      showToast(messages.join(" • "), "error");
      return;
    }

    // Success – in a real app, send data to your backend
    showToast("Account created successfully! Redirecting...", "success");
    // Optionally reset form
    // setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    // setErrors({ name: "", email: "", password: "", confirmPassword: "" });
    // setTouched({ name: false, email: false, password: false, confirmPassword: false });
  };

  const togglePassword = (): void => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPassword = (): void => {
    setShowConfirmPassword((prev) => !prev);
  };

  // --- Toast system ---
  const showToast = (
    message: string,
    type: "error" | "success" = "error",
  ): void => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
      toastTimeoutRef.current = null;
    }

    setToast({ show: true, message, type });

    toastTimeoutRef.current = setTimeout(() => {
      setToast({ show: false, message: "", type: "error" });
      toastTimeoutRef.current = null;
    }, 4000);
  };

  const dismissToast = (): void => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
      toastTimeoutRef.current = null;
    }
    setToast({ show: false, message: "", type: "error" });
  };

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  // --- Helper for dynamic input classes ---
  const getInputClassName = (field: keyof FormData): string => {
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6 font-sans">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50 transition-colors duration-200">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1 tracking-tight">
          Create Account
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Join us today
        </p>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {/* Name */}
          <div className="space-y-1.5">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-gray-800 dark:text-gray-200"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={getInputClassName("name")}
              placeholder="John Doe"
              autoComplete="name"
              aria-invalid={!!errors.name && touched.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {touched.name && errors.name && (
              <p id="name-error" className="text-sm text-red-500 mt-0.5">
                {errors.name}
              </p>
            )}
          </div>

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
                autoComplete="new-password"
                aria-invalid={!!errors.password && touched.password}
                aria-describedby={
                  errors.password ? "password-error" : undefined
                }
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label={showPassword ? "Hide password" : "Show password"}
                tabIndex={0}
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

          {/* Confirm Password */}
          <div className="space-y-1.5">
            <label
              htmlFor="confirmPassword"
              className="text-sm font-semibold text-gray-800 dark:text-gray-200"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${getInputClassName("confirmPassword")} pr-12`}
                placeholder="Confirm your password"
                autoComplete="new-password"
                aria-invalid={
                  !!errors.confirmPassword && touched.confirmPassword
                }
                aria-describedby={
                  errors.confirmPassword ? "confirm-password-error" : undefined
                }
              />
              <button
                type="button"
                onClick={toggleConfirmPassword}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
                tabIndex={0}
              >
                {showConfirmPassword ? (
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
            {touched.confirmPassword && errors.confirmPassword && (
              <p
                id="confirm-password-error"
                className="text-sm text-red-500 mt-0.5"
              >
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-500/50 active:scale-[0.98]"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-5">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Log in
          </a>
        </p>
      </div>

      {/* Toast */}
      {toast.show && (
        <div
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 max-w-md w-[calc(100%-2rem)] px-5 py-3.5 rounded-xl flex items-center gap-3 shadow-lg text-sm border backdrop-blur-sm animate-[toastIn_0.35s_cubic-bezier(0.21,1.02,0.73,1)] z-50 ${
            toast.type === "success"
              ? "bg-green-50 dark:bg-green-950/80 border-green-200/80 dark:border-green-800/50 text-green-800 dark:text-green-300"
              : "bg-red-50 dark:bg-red-950/80 border-red-200/80 dark:border-red-800/50 text-red-800 dark:text-red-300"
          }`}
          role="alert"
          aria-live="polite"
        >
          <span
            className={`text-lg font-bold ${
              toast.type === "success"
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400"
            }`}
          >
            {toast.type === "success" ? "✓" : "✕"}
          </span>
          <span className="flex-1 leading-relaxed">{toast.message}</span>
          <button
            type="button"
            onClick={dismissToast}
            className="text-xl leading-none opacity-60 hover:opacity-100 transition-opacity"
            aria-label="Dismiss notification"
          >
            ×
          </button>
        </div>
      )}

      <style jsx>{`
        @keyframes toastIn {
          0% {
            opacity: 0;
            transform: translateX(-50%) translateY(1.5rem) scale(0.96);
          }
          100% {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
