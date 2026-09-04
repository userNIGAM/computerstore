import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero/HeroSection";
// import Footer from "@/components/Footer"; // optional – you can create one

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <HeroSection />
      </main>

      {/* <Footer /> */}
    </div>
  );
}
