"use client"
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import NavBar from "@/components/NavBar";
import Performance from "@/components/Performance";
import ProductViewer from "@/components/product-viewer";
import ShowCase from "@/components/show-case";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
      <ShowCase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  );
}
