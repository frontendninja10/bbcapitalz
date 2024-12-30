import Image from "next/image";
import Header from "../components/Header";
import CopyTraders from "../ui/components/CopyTraders";
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
      {/* <Footer /> */}
    </main>
  );
}
