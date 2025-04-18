
import { HeroSection } from "@/components/ui/hero-section";
import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
