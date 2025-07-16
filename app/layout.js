
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
  title: "Generative AI, Custom Software & AI Consulting Company | Brainhouse Inc. Canada",
  description: "Brainhouse Inc. is a Canadian AI company offering Generative AI, machine learning, custom software, and cloud-native development for fintech, healthcare, and smart cities.",
  other: {
    keywords: "Generative AI Company Canada, AI Consulting and Development, Custom Software Development Canada, Machine Learning Services, Big Data Engineering, ChatGPT Integration for Business, AI Voice Agent Development, Smart City AI Solutions, Fintech AI Automation, Healthcare AI Analytics, AI Customer Experience Tools, Brainhouse AI Canada, AI for Logistics and Travel, Data Science and BI Services, AI Agent"
  }
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
