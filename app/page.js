import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import WordFadeIn from "@/components/ui/word-fade-in";
import Treatments from "@/components/Treatments";
import HowsItWork from "@/components/HowsItWork";

export default function Home() {
  return (
    <>
      <section className="container mx-auto my-20 sm:my-36">
        <div className="text-center text-slate-500">
          <div className="my-6">
            <WordFadeIn className="text-[#0096c7]" words="Transforming Healthcare with AI-Powered Solutions" />
          </div>
          <p className="text-xl w-10/12 mx-auto">Empower healthcare providers like Ravi with our innovative mobile health platform. Seamlessly manage patient care across locations, track chronic conditions, and access real-time data. Our AI-driven insights enhance decision-making, while features like remote monitoring and predictive analytics ensure proactive care, improving patient outcomes and streamlining workflows.</p></div>
      </section>
      <section className="container mx-auto my-36">
        <About />
      </section>
      <section className="container mx-auto my-36">
        <HowsItWork />
      </section>
      <section className="container mx-auto my-36">
        <Treatments />
      </section>
      <section className="container mx-auto my-36">
        <Services />
      </section>
      <section className="container mx-auto">
        <Contact />
      </section>
    </>
  );
}
