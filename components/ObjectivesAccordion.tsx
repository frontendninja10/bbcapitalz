import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Link from "next/link";
import { Button } from "./ui/button";

export default function ObjectivesAccordion() {
  return (
    <section className="px-4 py-14">
      <div className="max-w-4xl mx-auto py-4 lg:py-8">
        <h1 className="text-gray-800 text-center font-bold text-3xl lg:text-4xl leading-10 mb-14">
          OUR COPYTRADING OBJECTIVES
        </h1>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Maximum Drawdown</AccordionTrigger>
            <AccordionContent>
              The maximum allowable draw-down is limited to 20% of your capital,
              which must only be the amount deposited into the trading account.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Actual Amount in Trading Account
            </AccordionTrigger>
            <AccordionContent>
              The actual amount that must be in your trading account is 20% of
              your capital. While the specific details of each pro trader&apos;s
              risk management plan may vary, our goal is to trade your 20%
              trading capital as if it were 100% ,whilst managing the 20%
              capital professionally.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Profit Split</AccordionTrigger>
            <AccordionContent>
              <h3 className="font-bold">Solo Model</h3>
              The profit distribution between BBCapitalz and the investor is
              allocated at a ratio of 70% for the investor and 30% for the
              company.
              <h3 className="font-bold">Collective Model</h3>
              The profit distribution between BBCapitalz and the investor is
              allocated at a ratio of 60% for the investor and 40% for the
              company.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Monthly Fee Per Account</AccordionTrigger>
            <AccordionContent>
              <h3 className="font-bold">Solo Model</h3>
              The monthly fee per account connected is $15.
              <h3 className="font-bold">Collective Model</h3>
              There is no monthly fee.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Minimum Deposit Account</AccordionTrigger>
            <AccordionContent>
              <h3 className="font-bold">Solo Model</h3>
              The minimum deposit amount per account varies based on each
              desired master account.
              <h3 className="font-bold">Collective Model</h3>
              The minimum deposit amount is $200.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Time Limit</AccordionTrigger>
            <AccordionContent>
              <h3 className="font-bold">Solo Model</h3>
              Master Accounts are concluded every month. New monthly fees both
              for new and existing clients are to be paid around the end of each
              month which is specifically from the 20th - 31th. While for
              existing clients, Performance fees are to be paid at the beginning
              of the month from the 1st - 10th.
              <h3 className="font-bold">Collective Model</h3>
              Enrollment is open from the 20th to the 31st of every month,
              allowing you to start your copy-trading journey at the beginning
              of the following month. Please note that your funds will be locked
              in a joint account until the minimum deposit requirement is met.
              Withdrawals are not permitted during this period. If you are not
              comfortable with having your funds locked until they reach the
              minimum threshold, we recommend reconsidering participation in
              this model.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Performance Transparency</AccordionTrigger>
            <AccordionContent>
              Clients in the Collective model can monitor the performance of the
              master account their money is connected too through their
              dashboard, ensuring full transparency of their investment’s
              progress.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>Profit Target</AccordionTrigger>
            <AccordionContent>
              There is no specific profit target guaranteed.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>Disclaimer</AccordionTrigger>
            <AccordionContent>
              However, it&apos;s important to note that trading involves
              inherent risks, and even though we employ stringent risk and money
              management strategies, there is no guarantee of profits or
              complete elimination of losses. We strive to strike a balance
              between capital growth and risk control, and our experienced team
              of traders diligently follow risk and money management protocols
              to minimize the risk on your investments.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Link
          href="https://signal.bbcapitalz.com/register"
          target="_blank"
          className="flex justify-center"
        >
          <Button className="mt-10 bg-[#0099e6] text-white">
            Enroll for an Account
          </Button>
        </Link>
      </div>
    </section>
  );
}
