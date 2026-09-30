import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import ProductViewer from "@/components/product-viewer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <ProductViewer />
    </main>
  );
}
