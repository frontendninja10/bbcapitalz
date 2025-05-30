"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../app/globals.css";
import { ChevronRightIcon } from "lucide-react";

const SoloModelTabData = [
  {
    id: "smes",
    title: "Step I",
    heading: "Find a signal (master account)  in the Copy-Trading Homepage",
    description: (
      <>
        Check out each signal (master account) performance, detailed metrics,
        asset class, asset allocation and more. Find the one(s) for you{" "}
        <Link href="https://signal.bbcapitalz.com/" className="text-btnPrimary">
          here
        </Link>{" "}
        for you to follow.
      </>
    ),
    imageSrc: "/tabPhotos/sm-step-1.jpeg",
    imageAlt: "Woman knitting",
  },
  {
    id: "salary-earners",
    title: "Step II",
    heading: "Open a brokerage account and deposit your investment amount",
    description: (
      <>
        Open an account with a broker based on your desired master account asset
        class and deposit your investment amount. Note: (master account&apos;s
        asset class and brokers can be found in the{" "}
        <Link href="https://signal.bbcapitalz.com/" className="text-btnPrimary">
          copy-trading homepage
        </Link>
        ). There are in-depth tutorial videos on our{" "}
        <Link
          href="https://www.youtube.com/channel/UC5E-TwepS1rzYOZKeM_FeQA?sub_confirmation=1&sub_confirmation=1"
          className="text-btnPrimary"
        >
          YouTube channel
        </Link>{" "}
        on how to go about this.
      </>
    ),
    imageSrc: "/tabPhotos/sm-step-2.jpeg",
    imageAlt: "Woman writing",
  },
  {
    id: "farmers",
    title: "Step III",
    heading: "Enroll for an Account",
    description:
      "Contact us via Live Chat to access your BBCapitalz Copy-Trader dashboard where you can start copy-trading seamlessly. Enrollment for new clients is open only from the 20th to the 31st of every month.",
    imageSrc: "/tabPhotos/sm-step-3.png",
    imageAlt: "Woman knitting",
  },
  {
    id: "energy",
    title: "Step IV",
    heading: "Connect your trading account",
    description:
      "You have to follow a signal to connect your trading account in your dashboard, please utilize the trading account ID and password provided in your client area with your broker. This will allow you to link your MT4/MT5 account to your investor dashboard. Watch this short video on how to go about it.",
    imageSrc: "/tabPhotos/sm-step-4.jpeg",
    imageAlt: "Woman knitting",
  },
  {
    id: "women",
    title: "Step V",
    heading: "Create a copier",
    description:
      "When creating a copier for your trading account, you will need to confirm the copier settings and ensure they are accurately configured based on the ratio of your account size to that of the master account you want to auto copy. Please review this instructional video for additional insights on the setup process.",
    imageSrc: "/tabPhotos/sm-step-5.jpeg",
    imageAlt: "Woman knitting",
  },
  {
    id: "liquidity",
    title: "Step VI",
    heading: "Start earning",
    description:
      "Alright, all the hard work is done, time to kick back and let the money start rolling in! But don't forget to occasionally peek in on your trading account status through your investor dashboard. Gotta make sure everything is uptight.",
    imageSrc: "/tabPhotos/sm-step-6.jpeg",
    imageAlt: "Woman knitting",
  },
];

const CollectiveModelTabData = [
  {
    id: "smes",
    title: "Step I",
    heading: "Find a signal (master account) in the Copy-Trading Homepage",
    description: (
      <>
        Check out each signal (master account) performance,detailed metrics,
        asset class, asset allocation and more. Find the one(s) for you here.
        Move to step 2 if your investment amount is less than the minimum
        deposit required. Check{" "}
        <Link href="https://signal.bbcapitalz.com/" className="text-btnPrimary">
          here
        </Link>{" "}
        for minimum amount for each master account.
      </>
    ),
    imageSrc: "/tabPhotos/sm-step-1.jpeg",
    imageAlt: "Woman knitting",
  },
  {
    id: "salary-earners",
    title: "Step II",
    heading: "Enroll For an Account",
    description: (
      <>
        Contact us via Live Chat to deposit your funds with us. Minimum deposit
        amount is $200. Deposits are only accepted at the end of every month
        from the 20th till the last day of the month and trading starts at the
        beginning of the next month.
      </>
    ),
    imageSrc: "/tabPhotos/sm-step-3.png",
    imageAlt: "Woman writing",
  },
  {
    id: "farmers",
    title: "Step III",
    heading: "Track the Master trading Account",
    description:
      "Upon confirming your deposit, you will receive your BBcapitalz dashboard login details. This dashboard provides full visibility into the activities of the master account where your funds have been allocated.",
    imageSrc: "/tabPhotos/sm-step-3.png",
    imageAlt: "Woman knitting",
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState(SoloModelTabData[0]);
  // const activeTabData = SoloModelTabData.find((tab) => tab.id === activeTab.id);
  return (
    <section className="p-6 lg:px-10 lg:py-4 lg:pt-10 mb-20">
      <div className="lg:max-w-6xl lg:mx-auto">
        <h3 className="text-lg font-bold text-btnPrimary">Solo Model</h3>
        <div className="overflow-x-auto invisible-scrollbar">
          <div className="flex space-x-4 mb-8 mt-10 whitespace-nowrap border-b-2 border-gray-200 min-w-max">
            {SoloModelTabData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm whitespace-nowrap border-b-2 -mb-[2px] ${
                  activeTab.id === tab.id
                    ? "text-btnPrimary border-btnPrimary font-bold"
                    : "text-[#8D8D8D] border-transparent hover:border-gray-300"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:flex lg:justify-between lg:items-center mb-20"
          >
            <div className="max-w-sm lg:max-w-2xl">
              <h2 className="text-3xl lg:text-4xl font-semibold text-btnPrimary mb-4">
                {activeTab.heading}
              </h2>
              <p className="py-4 text-[#8D8D8D] font-['Arial']">
                {activeTab.description}
              </p>
              <Link
                href="https://signal.bbcapitalz.com/register"
                className="inline-flex items-center gap-2 my-5 rounded-md px-4 py-4 bg-btnPrimary text-white text-md"
              >
                <p className="font-bold text-sm">Get Started</p>
                <ChevronRightIcon className="w-4 h-4" stroke="white" />
              </Link>
            </div>
            <div className="lg:mt-0">
              <Image
                src={activeTab.imageSrc}
                alt={activeTab.imageAlt}
                width={355}
                height={450}
                className="rounded-lg w-full h-auto"
                quality={100}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <CollectiveModel />
    </section>
  );
}

function CollectiveModel() {
  const [activeTab, setActiveTab] = useState(CollectiveModelTabData[0]);
  return (
    <div className="lg:max-w-6xl lg:mx-auto">
      <h3 className="text-lg font-bold text-btnPrimary">Collective Model</h3>
      <div className="overflow-x-auto invisible-scrollbar">
        <div className="flex space-x-4 mb-8 mt-10 whitespace-nowrap border-b-2 border-gray-200 min-w-max">
          {CollectiveModelTabData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm whitespace-nowrap border-b-2 -mb-[2px] ${
                activeTab.id === tab.id
                  ? "text-btnPrimary border-btnPrimary font-bold"
                  : "text-[#8D8D8D] border-transparent hover:border-gray-300"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="lg:flex lg:justify-between lg:items-center mb-20"
        >
          <div className="max-w-sm lg:max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-semibold text-btnPrimary mb-4">
              {activeTab.heading}
            </h2>
            <p className="py-4 text-[#8D8D8D] font-['Arial']">
              {activeTab.description}
            </p>
            <Link
              href="https://signal.bbcapitalz.com/register"
              className="inline-flex items-center gap-2 my-5 rounded-md px-4 py-4 bg-btnPrimary text-white text-md"
            >
              <p className="font-bold text-sm">Get Started</p>
              <ChevronRightIcon className="w-4 h-4" stroke="white" />
            </Link>
          </div>
          <div className="lg:mt-0">
            <Image
              src={activeTab.imageSrc}
              alt={activeTab.imageAlt}
              width={355}
              height={450}
              className="rounded-lg w-full h-auto"
              quality={100}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
