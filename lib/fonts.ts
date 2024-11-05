import {
  IBM_Plex_Mono as FontMono,
  IBM_Plex_Sans as FontSans,
  Rethink_Sans,
} from "next/font/google"

export const fontSans = FontSans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontRethink = Rethink_Sans({
  weight: ["500"],
  subsets: ["latin"],
  variable: "--font-rethink",
})
