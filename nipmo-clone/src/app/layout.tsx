import type { Metadata } from "next"
import "./globals.css"
import ClientBody from "./ClientBody"

export const metadata: Metadata = {
  title: "NIPMO - National Intellectual Property Management Office",
  description: "NIPMO ensures that IP emanating from publicly financed research and development is leveraged for national benefit while promoting compliance, transparency and innovation.",
}

// Critical images that should be preloaded
const criticalImages = [
  "https://ext.same-assets.com/4026891959/1483683087.jpeg", // Government Logo
  "https://ext.same-assets.com/4026891959/2039865706.jpeg", // NIPMO Logo
  "https://ext.same-assets.com/4026891959/2874773214.png", // Research Ecosystem
  "https://ext.same-assets.com/4026891959/1746930974.jpeg", // Hero Background
  "https://ext.same-assets.com/4026891959/2183930946.png", // About Image
  "https://ext.same-assets.com/4026891959/3989894248.png", // KIMS Laptop
  "https://ext.same-assets.com/4026891959/1299496361.png", // KIMS Dashboard
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical images */}
        {criticalImages.map((src, index) => (
          <link
            key={index}
            rel="preload"
            as="image"
            href={src}
            crossOrigin="anonymous"
          />
        ))}
        {/* DNS prefetch for image domains */}
        <link rel="dns-prefetch" href="//ext.same-assets.com" />
        <link rel="dns-prefetch" href="//ugc.same-assets.com" />
        <link rel="dns-prefetch" href="//same-assets.com" />
        {/* Preconnect to image domains */}
        <link rel="preconnect" href="https://ext.same-assets.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://ugc.same-assets.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://same-assets.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  )
}
