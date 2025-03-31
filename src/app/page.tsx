import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Banner from "@/app/components/Banner";
import Gallery from "@/app/components/Gallery";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Banner />
      <Gallery />
      <Footer />
    </main>
  );
}
