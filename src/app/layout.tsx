import { Metadata } from "next";
import Header from "../components/header/Header";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import AnimatedCursor from "react-animated-cursor";

export const metadata: Metadata = {
  title: "LeoSantos",
  description: "Portfólio de Leonardo Santos",
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
      <body className="h-screen flex flex-col justify-between">
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          outerStyle={{
            border: "3px solid #fff",
          }}
          innerStyle={{
            backgroundColor: "#fff",
          }}
        />
        <Header />
        <main className="flex-1 overflow-y-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
