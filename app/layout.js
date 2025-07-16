
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
  title: "Brainhouse.ai – AI Consulting, Generative AI, Agentic AI, Big Data, ML & Secure Cloud Solutions",
  description: "Brainhouse.ai delivers cutting-edge AI services: Generative AI, Agentic AI, custom AI applications, Big Data, ML, cloud security, and technical training. We serve fintech, healthcare, telecom, and more.",
  other: {
    keywords: "Generative AI, Agentic AI, AI agents, SYNTHex, SensiEYE, AI decision-making tool, AI monitoring application, AI reporting tool, AI data cleaning, AI data mining, AI reporting, AI training, AI technical demo, custom software development, custom AI application, AI for healthcare, AI in telecom, AI for travel industry, AI in entertainment, AI for fintech, AI for banking, AI for security, ChatGPT integration, large language models, prompt engineering, big data engineering, modern data architecture, data warehouse, data science services, business intelligence, AI readiness assessment, big data assessment, data mining tools, machine learning consulting, zero trust security, cloud security, Azure AI, AWS AI, Google Cloud AI, IBM Watson, custom AI development, multi-agent systems, AI consulting company Canada, AI integration services"
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
