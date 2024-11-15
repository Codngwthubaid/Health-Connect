import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="container mx-auto my-36">
        <div className="text-center text-slate-500">
          <h1 className="text-[#0096c7] my-6">Transforming Healthcare with AI-Powered Solutions</h1>
          <p className="text-xl">Empower healthcare providers like Ravi with our innovative mobile health platform. Seamlessly manage patient care across locations, track chronic conditions, and access real-time data. Our AI-driven insights enhance decision-making, while features like remote monitoring and predictive analytics ensure proactive care, improving patient outcomes and streamlining workflows.</p></div>
      </section>
      <section className="container mx-auto my-36">
        <About />
      </section>
      <section className="container mx-auto my-36">
        <Services />
      </section>
      <section className="container mx-auto">
        <Contact />
      </section>
        <Footer />
    </>
  );
}
