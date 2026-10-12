import { Geist, Geist_Mono, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const banglaFont = Noto_Sans_Bengali({
  variable: "--font-bangla",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Bangla News 24",
  description: "Latest Bangla news",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light"
      lang="bn"
      className={`${geistSans.variable} ${geistMono.variable} ${banglaFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        
        {children}</body>
    </html>
  );
}
