import Header from "../components/Header";
// import CopyTraders from "../ui/components/CopyTraders";
import Footer from "../components/Footer";
import ObjectivesAccordion from "../components/ObjectivesAccordion";
import NavBar from "@/components/NavBar";
import CopyTradingModels from "@/components/CopyTradingModels";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Header />
      {/* <CopyTraders /> */}
      <CopyTradingModels />
      <ObjectivesAccordion />
      <VideoFromCEO />
      <Footer />
    </main>
  );
}

function VideoFromCEO() {
  return (
    <section className="bg-[#F0EFFF]">
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-center text-3xl font-bold pb-5 text-[#0A2540]">
          Official video from our CEO
        </h2>
        <p className="text-md text-center text-gray-600 mb-4">
          A Premier Copy Trading Firm dedicated to Client Success.
        </p>
        <iframe
          className="mt-4 mx-auto md:mt-0 max-w-[850px] w-full rounded-xl h-[400px] md:h-[550px] bg-white"
          src="https://youtu.be/bcp3ITh1bQg?si=nUQGqlGGzMYfvEDL"
          title="BBCapitalz explanatory video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
