import { Metadata } from "next";
import { Bangers } from "next/font/google";
import clsx from "clsx";
import "./globals.css";


const bangers = Bangers({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bangers", 
})
export const metadata: Metadata = {
  title: "TrumpAgentz",
  description:
    "TrumpAgentz (TAGZ) is a meme + AI utility token that lets you command freelance AI agents to do your digital tasks — from research to design to writing — all executed on-chain, directly from your wallet.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "relative antialiased bg-[#EAEEFE]",bangers.variable)}>
        {/* Layer tambahan untuk efek transparan atau background lainnya */}
        <div className="main-overflow" />
        {children}
      </body>
    </html>
  );
}
