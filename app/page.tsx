import AboutMe from "@/components/aboutme/AboutMe";
import HeaderSection from "@/components/headersection/HeaderSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeaderSection />
      <AboutMe />
    </main>
  );
}
