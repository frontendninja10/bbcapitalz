import React from "react";
import Image from "next/image";
import NavBar from "@/components/NavBar";

export default function Page() {
  return (
    <main>
      <NavBar />
      <header className="bg-gray-900 pt-20  h-screen">
        <div className="max-w-7xl mx-auto flex gap-32 items-center pt-20">
          <div className="max-w-xl">
            <h1 className="text-6xl text-slate-300 font-bold mb-16">
              Why {""}
              <span className="bg-gradient-to-r from-green-400 to-orange-500 bg-clip-text text-transparent">
                BBCapitalz?
              </span>
            </h1>

            <button className="bg-gradient-to-r from-green-400 to-orange-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg">
              Create an account — It’s free
            </button>
          </div>
          <Image src={"/girl.webp"} alt="logo" width={600} height={600} />
        </div>
      </header>
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg flex items-start">
            <Image src={"/image-2.png"} alt="logo" width={150} height={150} />
            <div className="text-3xl mr-4">✅</div>
            <div>
              <h3 className="font-bold">
                Trade most popular Stocks and derivatives across global markets
                🚀
              </h3>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg flex items-start">
            <Image src={"/phones.jpeg"} alt="logo" width={150} height={150} />
            <div className="text-3xl mr-4">✅</div>
            <div>
              <h3 className="font-bold">
                Advanced charts, price alerts and professional trading tools 🔥
              </h3>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg flex items-start">
            <div className="text-3xl mr-4">✅</div>
            <div>
              <h3 className="font-bold">
                0% Low trading fees and competitive spreads 👊
              </h3>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg flex items-start">
            <div className="text-3xl mr-4">✅</div>
            <div>
              <h3 className="font-bold">
                950+ Trading Instruments available for everyone 🙂
              </h3>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg flex items-start">
            <div className="text-3xl mr-4">✅</div>
            <div>
              <h3 className="font-bold">
                Easy-to-use intuitive interface and user-friendly experience 😊
              </h3>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg flex items-start">
            <div className="text-3xl mr-4">✅</div>
            <div>
              <h3 className="font-bold">Professional customer service 🙌</h3>
            </div>
          </div>
        </div>
      </section>
      {/* What Makes BBCapitalz different */}
      <section className="bg-white text-black py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            What makes BBCapitalz different?
          </h2>
          <p className="text-lg mb-10">
            The No 1 Copy-trading firm dedicated to client success
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center">
              <div className="bg-green-500 text-white rounded-full p-4 mb-4">
                <span className="text-2xl">0.0</span>
              </div>
              <h3 className="font-bold mb-2">
                Our Rigourous screening Process
              </h3>
              <p className="text-center">
                At BBCapitalz, we’ve got a secret sauce for success: our
                rigorous screening process! Think of it as your VIP pass to the
                world of verified pro traders who know how to dance with the
                financial markets. 💃🕺
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center">
              <div className="bg-green-500 text-white rounded-full p-4 mb-4">
                <span className="text-2xl">⏱️</span>
              </div>
              <h3 className="font-bold mb-2">
                Our Professional Moneymanagement plan
              </h3>
              <p className="text-center">
                At BBCapitalz, we empower you to trade wisely by allocating just
                10% of your Capital. And with rock-solid risk management, we
                turn that 10% into a powerhouse, protecting your investments
                while maximizing returns. Join us on this exciting journey to
                smarter investing!. All you need to risk is just 10%, Keep or
                use the remaining 90% as you see fit.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg flex flex-col items-center">
              <div className="bg-green-500 text-white rounded-full p-4 mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="font-bold mb-2">Advanced Trading Tools</h3>
              <p className="text-center">
                (BCT) &apos; BullCopytrade offers advanced trading tools
                including advanced order types, depth of market (DOM) and
                volume-weighted average price (VWAP) indicators, to help you
                make informed trading decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Why copy trading on BBCapitalz */}
      <section className="bg-black text-slate-300 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Why CopyTrade on BBCapitalz?
          </h2>
          <p className="text-lg mb-10">
            BBCapitalz has partnered with key providers to bring you a powerful
            and user-friendly platform designed to take your copytrading to the
            next level.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center">
              <div className="bg-green-500 text-white rounded-full p-4 mb-4">
                <span className="text-2xl">0.0</span>
              </div>
              <h3 className="font-bold mb-2">Performance Analytics</h3>
              <p className="text-center">
                Our software helps you can evaluate master accounts performance
                against benchmarks and goals. By analyzing key metrics like
                returns and risk, it provides insights that help improve
                decision-making.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center">
              <div className="bg-green-500 text-white rounded-full p-4 mb-4">
                <span className="text-2xl">⏱️</span>
              </div>
              <h3 className="font-bold mb-2">Real-time reports</h3>
              <p className="text-center">
                Our plaftorm provides you with up-to-the-minute insights into
                your account performance enabling you to make informed decisions
                quickly, ensuring transparency and boosts confidence.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center">
              <div className="bg-green-500 text-white rounded-full p-4 mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="font-bold mb-2">Live trading signals</h3>
              <p className="text-center">
                Our copier offer instant alerts for optimal buy and sell
                opportunities, enabling quick, informed decisions in real time.
                They maximize trading potential and enhance market
                responsiveness.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center">
              <div className="bg-green-500 text-white rounded-full p-4 mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-bold mb-2">Portfolio Management</h3>
              <p className="text-center">
                Our platform simplifies portfolio management by providing
                tailored strategies, real-time insights, and expert guidance. We
                help you optimize asset allocation, minimize risk, and maximize
                returns, ensuring your investments align with your goals
                effortlessly.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center">
              <div className="bg-green-500 text-white rounded-full p-4 mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-bold mb-2">Fast Trade Replication</h3>
              <p className="text-center">
                Our trade copier is the fastest copier in the market with an
                average replication speed of 3ms.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center">
              <div className="bg-green-500 text-white rounded-full p-4 mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="font-bold mb-2">Advanced Risk Management Tools</h3>
              <p className="text-center">
                BBCapitalz offers a suite of powerful risk management tools to
                help investors navigate the markets safely. These include
                real-time risk monitoring, customizable stop-loss orders, and
                many more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
