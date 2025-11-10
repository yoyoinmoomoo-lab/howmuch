import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Footer from "../components/Footer";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "전·월세 주거비 계산기 – 월/총 비용 한눈에 비교 | moomoo",
  description: "전세/월세, 보증금·월세·관리비·대출이자·교통비까지 반영한 월/총 비용 비교 계산기. 기회비용 포함 결과도 제공합니다.",
  keywords: ["전세", "월세", "계산기", "주거비", "보증금", "관리비", "대출이자", "기회비용", "비교"],
  authors: [{ name: "moomoo" }],
  openGraph: {
    title: "전·월세 주거비 계산기 – 월/총 비용 한눈에 비교",
    description: "전세/월세, 보증금·월세·관리비·대출이자·교통비까지 반영한 월/총 비용 비교 계산기. 기회비용 포함 결과도 제공합니다.",
    type: "website",
    siteName: "moomoo",
  },
  twitter: {
    card: "summary_large_image",
    title: "전·월세 주거비 계산기 – 월/총 비용 한눈에 비교",
    description: "전세/월세, 보증금·월세·관리비·대출이자·교통비까지 반영한 월/총 비용 비교 계산기. 기회비용 포함 결과도 제공합니다.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${notoSansKR.variable} min-h-screen flex flex-col text-zinc-800 bg-white antialiased`}
      >
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
