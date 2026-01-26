import { Metadata } from "next";
import Header from "../components/header/Header";
import "./globals.css";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my personal portfolio website.",
};

export const viewport = {
  inicialScale: 1,
  width: "device-width",
  height: 1080,
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
