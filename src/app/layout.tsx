import "@/styles/globals.css"
import type { Metadata, Viewport } from "next"

export const metadata: Metadata = {
  title: "クソだねット",
  description: "クソだね。",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://kusoda.net"),
  openGraph: {
    title: "クソだねット",
    description: "クソだね。",
    url: "https://kusoda.net",
    images: [
      {
        url: "/kusoda.net.png",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  height: "device-height",
  themeColor: "#550000",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
