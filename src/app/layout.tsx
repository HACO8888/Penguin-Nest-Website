// Styles
import "./globals.css";

// Types
import type { Metadata } from "next";

// Components
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "企鵝窩〡競賽社群",
  description: "歡迎來到企鵝窩〡競賽社群，一個專為熱愛遊戲的玩家打造的共融平台。在這裡，我們匯聚了來自世界各地的遊戲愛好者，共同分享、學習和參與各式各樣的遊戲活動。無論你是尋求刺激的戰場英雄，還是策略遊戲的智慧玩家，企鵝窩都是你展現實力與熱情的最佳舞台。加入我們，讓每一次遊戲不僅僅是對戰，更是一場精彩的冒險旅程。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
