import { ToastProvider } from "@/app/context/ToastContext";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          <CartProvider>{children}</CartProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
