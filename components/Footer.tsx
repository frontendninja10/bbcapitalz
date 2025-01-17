// ui/components/Footer.tsx
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 text-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col gap-6 justify-between items-start">
          <div className="mb-4">
            <div className="text-2xl font-bold text-black">
              <Image
                src="/bbcapitalz-logo.png"
                width={150}
                height={50}
                alt="Logos"
              />
            </div>
            <p className="mt-2">
              At BBCapitalz, our vision is to create a world where lack of
              expertise no longer hinders individuals from building successful
              trading portfolios. Developed by traders who comprehend the
              intricacies of trading and investing, and are committed to
              assisting investors effectively.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-20">
            <div>
              <h3 className="font-semibold">LEGAL</h3>
              <ul className="mt-2 lg:space-y-2">
                <li>
                  <a href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">CUSTOMER SERVICE</h3>
              <ul className="mt-2 lg:space-y-2">
                <li>
                  <a href="/faqs" className="hover:underline">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="/livechat" className="hover:underline">
                    LiveChat
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">MORE RESOURCES</h3>
              <ul className="mt-2 lg:space-y-2">
                <li>
                  <a href="/why-bbcapitalz" className="hover:underline">
                    Why BBCapitalz
                  </a>
                </li>
                <li>
                  <a href="/money-management" className="hover:underline">
                    Our Money Management Plan
                  </a>
                </li>
                <li>
                  <a href="/master-accounts" className="hover:underline">
                    Master Accounts
                  </a>
                </li>
                <li>
                  <a href="/performance" className="hover:underline">
                    Performance
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <p className="text-center text-xs lg:max-w-[80%] lg:mx-auto">
          Risk Warning: Trading CFDs involves inherent risks that should be
          carefully considered. CFDs are complex financial instruments and come
          with the potential for significant losses. The high leverage offered
          in CFDs trading can amplify both profits and losses. Investors should
          be aware that they may lose more than their initial investment. It is
          crucial to have a solid understanding of the underlying assets, market
          conditions, and risk management strategies before engaging in CFDs
          trading. Past performance is not indicative of future results.It is
          recommended to seek professional advice and only trade with funds that
          one can afford to lose.
        </p>
      </div>
    </footer>
  );
}
