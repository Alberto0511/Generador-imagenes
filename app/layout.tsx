import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/NavBar/ResponsiveNav";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Home/Footer/Footer";

const font = Roboto({
  weight:['100','300','400','500','700','900'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Generadosr de imagenes",
  description: "Generador de imagenes usando IA y hecho con Nextjs y TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      <body className={`${font.className} bg-gradient-to-r from-black via-blue-950 to-purple-950  antialiased`}>
        <ResponsiveNav/>
        {children}
        <Toaster/>
        <Footer/>
      </body>
    </html>
  );
}
