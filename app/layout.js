
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./../components/header";
import Footer from "./../components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Brain | House",
  description: "Brainhouse website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
