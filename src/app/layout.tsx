import type { Metadata, Viewport } from "next";
import { Archivo, Inter, Libre_Baskerville, Manrope } from "next/font/google";
import { constructMetadata } from "@/lib/metadata";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { MotionProvider } from "@/components/providers/motion-provider";
import { HeroViewProvider } from "@/components/providers/hero-view-provider";
import { TypographySpotlight } from "@/components/ui/typography-spotlight";
import { GradualBlur } from "@/components/ui/gradual-blur";
import { JsonLd } from "@/components/seo/json-ld";
import "./globals.css";
import { Navbar1 } from "@/components/layout/navbar1";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

const LibreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libreBaskerville",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = constructMetadata();

export const viewport: Viewport = {
  themeColor: "#6355de",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable} ${LibreBaskerville.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-background font-body text-foreground antialiased selection:bg-accent-violet/15 selection:text-accent-violet -z-10">
        {/* Skip to Content for WCAG Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-surface-dark focus:px-6 focus:py-2.5 focus:text-foreground-inverse focus:shadow-pill focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Skip to content
        </a>

        {/* Global Structured Data */}
        <JsonLd type="LocalBusiness" />


        <SmoothScrollProvider>
          <MotionProvider>
            <HeroViewProvider>
              {children}
              <div className="hidden sm:block">

                <TypographySpotlight size={200} cornerRadius={100} opacity={0.08} />
              </div>

            </HeroViewProvider>
          </MotionProvider>
        </SmoothScrollProvider>

        {/* Gradual progressive blur at the bottom of viewport */}
        {/* <GradualBlur /> */}
      </body>
    </html>
  );
}

