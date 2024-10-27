import React from "react";
import Image from "next/image";
import { Command, ShieldCheck, ChartCandlestick } from "lucide-react";
export default function Header() {
  return (
    <header className="bg-[#F5F4F6] py-20">
      <div className="max-w-6xl mx-auto flex gap-32 items-center">
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
      <div className="flex justify-around gap-4 mt-14 max-w-6xl mx-auto">
        <div className="flex items-center bg-green-100 flex-1 p-4 rounded-lg">
          <Command className="w-8 h-8 mr-2 flex-shrink-0 text-green-500" />
          <p className="">
            Emulate traders who have a proven track record in trading Real
            Stocks, Forex, CFDs & more
          </p>
        </div>
        <div className="flex items-center bg-orange-100 flex-1 p-4 rounded-lg">
          <ShieldCheck className="w-8 h-8 mr-2 flex-shrink-0 text-orange-500" />
          <p className="">Transparency and trust</p>
        </div>
        <div className="flex items-center bg-blue-100 flex-1 p-4 rounded-lg">
          <ChartCandlestick className="w-8 h-8 mr-2 flex-shrink-0 text-blue-500" />
          <p className="">Risk & money management</p>
        </div>
      </div>
    </header>
  );
}
