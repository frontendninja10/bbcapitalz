import Image from "next/image";
import Header from "../ui/components/Header";
import CopyTraders from "../ui/components/CopyTraders";
import Footer from "../ui/components/Footer";
export default function Home() {
  return (
    <main>
      <Header />
      <CopyTraders />
      <section className="py-10 bg-gray-900 text-white">
        <h2 className="text-3xl font-bold text-center mb-6">
          OUR COPYTRADING MODELS
        </h2>
        <p className="text-center mb-8 max-w-2xl mx-auto">
          At BBCapitalz, We Understand That Every Investor Has Unique Needs And
          Varying Investment Amounts. To Accommodate This, We Offer Two Distinct
          Copytrading Models Designed To Empower Our Clients At Different
          Investment Levels.
        </p>
        <div className="flex flex-col lg:flex-row justify-center max-w-6xl mx-auto gap-8">
          <div className=" bg-gray-800 p-6 rounded-lg shadow-lg flex-1">
            <h3 className="text-2xl font-semibold mb-4">SOLO MODEL</h3>
            <p>
              Our Autonomous Trading Model allows investors to take full control
              of their trading experience. In this model, you deposit funds
              directly into your own trading account, giving you the flexibility
              to manage your investments as you see fit.
            </p>
          </div>
          <div className=" bg-gray-800 p-6 rounded-lg shadow-lg flex-1">
            <h3 className="text-2xl font-semibold mb-4">COLLECTIVE MODEL</h3>
            <p>
              For those who may not yet meet the minimum deposit requirement for
              copying any master account, our Collaborative Investment Model
              offers a solution. In this model, investors deposit their funds
              with us. We pool and lock these funds until the total reaches the
              minimum investment threshold, allowing you to participate in
              copy-trading without the immediate requirement of a larger
              deposit.
            </p>
            <p>
              This model is temporary, and once your investment meets the
              minimum deposit requirement, you will transition to the Solo
              model.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
