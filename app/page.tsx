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
      <LiveChatButton />
    </main>
  );
}

function VideoFromCEO() {
  return (
    <section className="bg-[#F5F4F6]">
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-center text-3xl font-bold pb-5 text-[#0A2540]">
          Official video from our CEO
        </h2>
        <p className="text-md text-center text-gray-600 mb-4">
          A Premier Copy Trading Firm dedicated to Client Success.
        </p>
        <iframe
          className="mt-4 mx-auto md:mt-0 max-w-[850px] w-full rounded-xl h-[400px] md:h-[550px]"
          src="https://www.youtube.com/embed/2fVawRRmNMY"
          title="BBCapitalz explanatory video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

function LiveChatButton() {
  return (
    <button className="fixed bottom-6 right-6 bg-btnPrimary hover:bg-sky-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50 flex items-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
        />
      </svg>
      <span className="hidden md:inline">Chat with us</span>
    </button>
  );
}
