import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Command, ShieldCheck, ChartCandlestick } from "lucide-react";
export default function Header() {
  return (
    <header className="bg-[#F5F4F6] py-20">
      <div className="max-w-6xl gap-10 mx-auto flex lg:gap-32 lg:items-center flex-col lg:flex-row pt-20 px-6 lg:px-0">
        <div className="max-w-xl">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            When Experts Trade,{" "}
            <span className="bg-gradient-to-r from-green-400 to-orange-500 bg-clip-text text-transparent">
              You Earn
            </span>
          </h1>
          <p className="text-xl mb-10">
            Choose a Master account to Autocopy, deposit your funds, and start
            mirroring a Pro Trader&apos;s positions automatically
            and in real time!
          </p>
          <button className="bg-gradient-to-r from-green-400 to-orange-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg">
            <Link href="https://signal.bbcapitalz.com/">
              View Master Accounts Performance
            </Link>
          </button>
        </div>
        <Image
          src={"/hero-img.jpeg"}
          className="w-full h-auto lg:max-w-[400px] self-center"
          alt="logo"
          width={600}
          height={400}
          layout="responsive"
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-around gap-4 mt-20 max-w-6xl mx-auto px-6">
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
