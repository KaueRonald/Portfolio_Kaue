import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kauê Ronald",
  description: "Potfólio Kauê Ronald",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}> <ToastContainer />{children}</body>
    </html>
  );
}
