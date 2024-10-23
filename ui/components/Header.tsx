import React from "react";
import Image from "next/image";
export default function Header() {
  return (
    <header className="bg-[#F5F4F6] h-screen">
      <div className="max-w-6xl mx-auto flex gap-32 items-center pt-20">
        <div className="max-w-xl">
          <h1 className="text-6xl font-bold mb-6">
            When Experts Trade,{" "}
            <span className="bg-gradient-to-r from-green-400 to-orange-500 bg-clip-text text-transparent">
              You Earn
            </span>
          </h1>
          <p className="text-xl mb-10">
            Choose a Master account you’d like to Autocopy, deposit the amount
            of funds you’d like to allocate in your trading account and Autocopy
            starts when connected. You just started mirroring the Pro Trader’s
            positions automatically and in real time!
          </p>
          <button className="bg-gradient-to-r from-green-400 to-orange-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg">
            Create an account — It’s free
          </button>
        </div>
        <Image src={"/hero-img.jpeg"} alt="logo" width={400} height={400} />
      </div>
      <div className="flex justify-around mt-10 max-w-6xl mx-auto">
        <div className="flex items-center">
          <Image src={"/graph.svg"} alt="logo" width={40} height={40} />
          <p className="ml-2">
            Copy traders who trade Real Stocks, Forex, CFDs & more
          </p>
        </div>
        <div className="flex items-center">
          <Image src={"/graph.svg"} alt="logo" width={40} height={40} />
          <p className="ml-2">
            Copy traders who trade Real Stocks, Forex, CFDs & more
          </p>
        </div>
        <div className="flex items-center">
          <Image src={"/graph.svg"} alt="logo" width={40} height={40} />
          <p className="ml-2">
            Copy traders who trade Real Stocks, Forex, CFDs & more
          </p>
        </div>
      </div>
    </header>
  );
}
