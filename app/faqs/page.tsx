import React from "react";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "./ui/accordion";
// import Link from "next/link";
// import { Button } from "./ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/components/ui/accordion";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function FAQS() {
  return (
    <section className="px-4 py-14">
      <NavBar />
      <div className="max-w-4xl mx-auto py-4 lg:py-8">
        <h1 className="text-gray-800 text-center font-bold text-3xl lg:text-4xl leading-10 mb-14">
          Frequently Asked Questions
        </h1>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Copy Trading?</AccordionTrigger>
            <AccordionContent>
              Copy trading is a method of investing where individuals replicate
              the trades of experienced traders, allowing them to potentially
              profit from their expertise and market insights.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Are there risks involved in Copy Trading?
            </AccordionTrigger>
            <AccordionContent>
              Yes, like all investments, copy trading carries risks, including
              the possibility of losses. That&apos;s why at BBCapitalz we
              implement a professional money management plan to safeguard your
              assets. It&apos;s also crucial to conduct thorough research and
              understand the realities of trading. For this reason, at
              BBCapitalz we have educational videos,content and resources on our
              social media channels enlightening and preparing you for
              copy-trading.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Who is Copy Trading for?</AccordionTrigger>
            <AccordionContent>
              Copy trading is very much suitable for beginners as it allows them
              to emulate the strategies of experienced traders, while expert
              traders can also benefit from copying others to diversify their
              portfolio and gain new insights into different trading approaches.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              What are the risks involved with the collective model?
            </AccordionTrigger>
            <AccordionContent>
              Yes, there are risks associated with the collective model,
              primarily related to the potential loss of funds. These risks can
              be categorized into two types: external risks and internal risks.
              To mitigate these risks, we require participants to only deposit
              an amount they are willing to lose, which should be no more than
              10% of their intended capital. Since the minimum deposit is $200,
              your 10% deposit must be at least $200. It&apos;s essential to
              understand these risks before proceeding. For a detailed
              explanation of the two types of risks, please refer to this link.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              How does withdrawal work with the collective model?
            </AccordionTrigger>
            <AccordionContent>
              Clients in the Collective Investment Model can request withdrawals
              under the condition below: Minimum Deposit Requirement: Clients
              can fully withdraw their investments after their capital have
              reached the minimum deposit requirement for. This policy
              encourages investors to build sufficient capital for effective
              copy trading.
              <h3 className="font-bold">Additional Information:</h3>
              After any withdrawal, clients will not be eligible to rejoin the
              Collective Investment Model for a period of three months. Once
              investors reach the minimum threshold, they will receive an email
              notification indicating that they are eligible for the withdrawal
              phase.
              <h3 className="font-bold">Important Considerations:</h3>
              The joint account consists of contributions from multiple
              investors. We advise all participants to adopt an emotionally
              detached approach to trading. Only invest amounts you are
              comfortable with potentially losing.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              How does BBCapitalz ensure trader reliability?
            </AccordionTrigger>
            <AccordionContent>
              BBCapitalz assesses traders based on their historical performance,
              consistency, and risk management strategies, providing you with a
              selection of reliable traders with a proven track record to
              auto-copy.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              Is there any fee associated with the copy trading service?
            </AccordionTrigger>
            <AccordionContent>
              For the Solo Model, there is a cheap and cost-effective $15
              monthly fee per account added on the platform, ensuring that we
              can sustainably maintain and enhance the copy trading services
              provided, along with a 30% performance fee on all profits
              generated on each account added. For the Collective Model, there
              is no monthly fee at all, just a 40% performance fee on all
              profits made on your deposit amount.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>
              Why is there a monthly fee for the Solo model?
            </AccordionTrigger>
            <AccordionContent>
              Simple, BBCapitalz maintains a connection with your trading
              account 24/7, waiting for any trades from the master account that
              will be replicated and ready to be executed on your trading
              account within a few milliseconds. If we do not maintain a
              connection 24/7, this would not be possible. With this, comes
              costs, the trading terminal runs in the cloud, every account we
              connect is a new terminal connection that we must maintain,
              without the correct pricing we could not offer the exceptional
              service we do.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>
              What happens if I don&apos;t pay the monthly fee?
            </AccordionTrigger>
            <AccordionContent>
              Simple, If for any reason you fail to pay the monthly fee, then
              your trading account will be temporarily removed from the
              company&apos;s database. And when you pay again,it will be added
              back.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>
              What happens if I don&apos;t pay the performance fee?
            </AccordionTrigger>
            <AccordionContent>
              Note, if for any reason you fail to pay the performance fee or you
              pay it partially,then a reminder email will be sent to you, but if
              it&apos;s to no avail, then your account will be Permanently
              removed from the company&apos;s database and LEGAL ACTION will be
              taken. If for any reason you are having issues with withdrawals
              and payments, don&apos;t hesitate to reach out. We are one chat
              away.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11">
            <AccordionTrigger>
              Is there a minimum investment amount required for copy trading?
            </AccordionTrigger>
            <AccordionContent>
              Yes, For the Solo Model, there is a minimum investment requirement
              per master trader to start copy trading. Specific amounts can
              vary, so it&apos;s best to check the copy-trading homepage for the
              latest details. Click{" "}
              <Link href="https://signal.bbcapitalz.com/">here</Link> to check
              Whilst for the Collective Model, the minimum deposit amount is
              $200.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-12">
            <AccordionTrigger>
              How can I choose which trader to copy?
            </AccordionTrigger>
            <AccordionContent>
              To choose which traders to copy, start by reviewing their
              performance metrics, including historical returns, risk levels,
              worst trade, best trade, win rate, loss rate. The goal is to use
              these data calculate each trader&apos;s expected profitability
              potential.Watch this video on how to do that. Additionally,
              consider factors such as the investor’s trading frequency and
              market expertise to ensure their style aligns with your investment
              goals.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-13">
            <AccordionTrigger>What is a Lot Multiplier?</AccordionTrigger>
            <AccordionContent>
              Lot Multiplier is a risk type settings that determines how the
              Master’s Trade size will be copied to your trading account. Please
              note that Lot multiplier is a mandatory setting for the trades to
              copy. Watch this VIDEO for more in-depth explanation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-14">
            <AccordionTrigger>Which brokers do you support?</AccordionTrigger>
            <AccordionContent>
              BBCapitalz offers a cloud-based copy-trading platform designed for
              High-Frequency Trading to manage multiples accounts and support
              any Forex and CFDs brokers around the globe. We also support all
              brokers. If you have a broker that is not on our list yet, please
              don’t hesitate to contact us via Live-Chat. We can add them for
              you.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-15">
            <AccordionTrigger>
              What specific expertise do the professional traders possess?
            </AccordionTrigger>
            <AccordionContent>
              The professional traders at BBcapitalz possess a diverse range of
              expertise in the financial markets. They have in-depth knowledge
              and experience in areas such as technical analysis, fundamental
              analysis,trading psychology, risk management, and market trends.
              Additionally, they stay updated with the latest market
              developments and employ sophisticated trading strategies to
              maximize returns while managing risk effectively. Their expertise
              allows them to make informed decisions, identify profitable
              trading opportunities, and adapt to changing market conditions.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Footer />
    </section>
  );
}
