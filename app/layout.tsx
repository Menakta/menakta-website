import type { Metadata } from "next";
import Navbar from "./(components)/Navbar";
import Footer from "./(components)/Footer";
import SplashScreen from "./(components)/SplashScreen";
import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Menakta Tech',
  description: 'Menakta Tech - We build software that makes a difference',
  icons: {
    icon: '/logos/Menakta_Favicon.png',
    apple: '/logos/Menakta_Favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-theme-bg-primary transition-colors duration-300">
        <ThemeProvider>
          <SplashScreen />
          <Navbar/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
