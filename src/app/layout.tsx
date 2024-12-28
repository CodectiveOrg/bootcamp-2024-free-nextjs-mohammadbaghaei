import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "دکترینو",
  description: "پلتفرم جامع جست و جو و رزرو نوبت دکتر",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body lang="fa" dir="rtl" className={vazirmatn.className}>
        {children}
      </body>
    </html>
  );
}
