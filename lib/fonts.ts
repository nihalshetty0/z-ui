import {
  IBM_Plex_Sans as FontSans,
  IBM_Plex_Mono as FontMono,
} from "next/font/google";

export const fontSans = FontSans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});
