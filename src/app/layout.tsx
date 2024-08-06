import type { Metadata } from "next";
import {
  Stint_Ultra_Expanded,
  Pontano_Sans,
  Luxurious_Script,
  Familjen_Grotesk,
} from "next/font/google";
import "./globals.css";

const stintUltraExpanded = Stint_Ultra_Expanded({
  subsets: ["latin"],
  weight: "400",
});
const pontanoSans = Pontano_Sans({ subsets: ["latin"], weight: "400" });
const luxuriousScript = Luxurious_Script({ subsets: ["latin"], weight: "400" });
const familjenGrotesk = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Ciprian Ungureanu - Fade Academy - Curs Frizerie",
  description:
    "Curs frizerie oferit de un veteran in industrie, Ciprian Ungureanu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Stint+Ultra+Expanded&family=Pontano+Sans&family=Luxurious+Script&family=Familjen+Grotesk:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${stintUltraExpanded.className} ${pontanoSans.className} ${luxuriousScript.className} ${familjenGrotesk.className}`}
      >
        {children}
      </body>
    </html>
  );
}
