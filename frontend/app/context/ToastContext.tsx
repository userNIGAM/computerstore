"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

type ToastType = "success" | "error";

interface ToastState {
  visible: boolean;
  message: string;
  type: ToastType;
}

interface ToastContextValue {
  showToast: (message: string, type: ToastType) => void;
  hideToast: () => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<ToastState>({
    visible: false,
    message: "",
    type: "error",
  });
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const hideToast = useCallback(() => {
    setToast((prev) => ({ ...prev, visible: false }));
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  }, [timeoutId]);

  const showToast = useCallback(
    (message: string, type: ToastType = "error") => {
      // Clear any existing timer
      if (timeoutId) {
        clearTimeout(timeoutId);
        setTimeoutId(null);
      }

      setToast({ visible: true, message, type });

      // Auto‑hide after 2 seconds
      const id = setTimeout(() => {
        setToast((prev) => ({ ...prev, visible: false }));
        setTimeoutId(null);
      }, 2000);
      setTimeoutId(id);
    },
    [timeoutId],
  );

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      {/* Toast render – fixed at top‑right */}
      {toast.visible && (
        <div
          className={`fixed top-6 right-6 max-w-sm w-full px-4 py-3 rounded-xl shadow-lg border backdrop-blur-sm text-sm z-50 transition-all duration-300 ease-in-out ${
            toast.type === "success"
              ? "bg-green-50 dark:bg-green-950/80 border-green-200/80 dark:border-green-800/50 text-green-800 dark:text-green-300"
              : "bg-red-50 dark:bg-red-950/80 border-red-200/80 dark:border-red-800/50 text-red-800 dark:text-red-300"
          }`}
          role="alert"
          aria-live="polite"
        >
          <div className="flex items-center gap-3">
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
              onClick={hideToast}
              className="text-xl leading-none opacity-60 hover:opacity-100 transition-opacity"
              aria-label="Dismiss notification"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextValue => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
