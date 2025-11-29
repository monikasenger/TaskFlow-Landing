import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";


export default function Home() {
  return (
   <>
  <Head>
        <title>TaskFlow — AI Productivity Tool</title>
        <meta name="description" content="Organize work, boost productivity with AI suggestions."/>
      </Head>

      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
   </>
  );
}
