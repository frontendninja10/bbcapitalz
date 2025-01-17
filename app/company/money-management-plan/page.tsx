import NavBar from "@/components/NavBar";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/components/ui/accordion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <section className="px-4 pt-14">
        <NavBar />
        <main className="mt-14 lg:max-w-5xl lg:mx-auto">
          <h1 className="text-3xl font-semibold mb-10">
            Money Mastery Since 2020
          </h1>
          <p className="mb-6">
            BBCapitalz uses a money management plan that utilizes the concept of
            capital partitioning. Capital partitioning with the use of leverage
            and compound interest. This money management model helps both the
            Over-capitalized and Under-capitalized individual. You as a
            Investor/Copy-trader have to know whether you are Over-capitalized
            or Under-capitalized.
          </p>
          <Accordion
            type="single"
            collapsible
            className="lg:max-w-4xl lg:mx-auto"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Note</AccordionTrigger>
              <AccordionContent>
                <p>
                  Let&apos;s take for example: An investor has $100,000 he or
                  she wants to trade. The typical and naive move will be to
                  deposit 100% of the capital and not take into consideration
                  leverage. This comes with a lot of unnecessary risks like:
                </p>
                <ol className="list-decimal pl-5">
                  <li>
                    <strong>Internal risks:</strong> which in essence just means
                    mistakes that can be made by the trader which includes but
                    isn&apos;t limited to:
                    <ul className="list-disc pl-5">
                      <li>Over-leveraging</li>
                      <li>
                        Inadvertently executing a buy order instead of the
                        intended sell order and vice-versa.
                      </li>
                      <li>
                        Unintentionally inputting inaccurate parameters or
                        figures when placing orders or determining lot sizes.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>External risks:</strong> which just simply means
                    things that can happen that are out of your control which
                    includes but isn&apos;t limited to:
                    <ul className="list-disc pl-5">
                      <li>
                        Brokerage firms experience business failures or cease
                        operations.
                      </li>
                      <li>Brokerage firm gets liquidated.</li>
                      <li>
                        The brokerage firm is facing regulatory sanctions and
                        has been ordered to pay monetary fines, resulting in the
                        suspension of all withdrawal and deposit activities.
                      </li>
                      <li>
                        Market volatility, including periods of significant
                        market declines or crashes.
                      </li>
                    </ul>
                  </li>
                </ol>
                <p>
                  But the smarter investor will use our money management model
                  where he will only have to deposit a particular portion of
                  his/her capital and the remainder of the capital will be kept
                  safe.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                For the over-capitalized Investor
              </AccordionTrigger>
              <AccordionContent>
                <h2>
                  The goal of an over-capitalized investor is to minimize risk.
                </h2>
                <p>
                  For this reason, this investor will only need to deposit a
                  particular portion of his/her capital and the remainder of the
                  capital will be used as he/she sees fit. For example,
                </p>
                <p>
                  For a <strong>10% Threshold</strong>,
                </p>
                <ul className="list-disc pl-5">
                  <li>
                    If this individual wants to invest <strong>$100,000</strong>
                    , then the investor will just have to deposit{" "}
                    <strong>$10,000</strong> into his/her trading account, which
                    is just <strong>10%</strong>.
                  </li>
                  <li>
                    If this individual wants to invest <strong>$50,000</strong>,
                    then the investor will just have to deposit{" "}
                    <strong>$5,000</strong> into the trading account, which is
                    just <strong>10%</strong>.
                  </li>
                  <li>
                    If this individual wants to invest <strong>$20,000</strong>,
                    then the investor will have to deposit just{" "}
                    <strong>$2,000</strong> into the trading account, which is
                    just <strong>10%</strong>.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                For the under-capitalized Investor
              </AccordionTrigger>
              <AccordionContent>
                <h2>
                  The goal of an under-capitalized investor is to maximize
                  return.
                </h2>
                <p>
                  This investor will only need to deposit the amount he/she has
                  and it will be treated as 10% of the AUM (Asset Under
                  Management).
                </p>
                <p>For Example,</p>
                <p>
                  For a <strong>10% Threshold</strong>
                </p>
                <ul className="list-disc pl-5">
                  <li>
                    If the investor has only <strong>$1,000</strong> to invest
                    and is also willing to risk the entire amount, then the
                    actual AUM he/she will trade that <strong>$1,000</strong>{" "}
                    as, will be <strong>$10,000</strong>, because{" "}
                    <strong>10%</strong> of <strong>$10,000</strong> is the
                    trader&apos;s <strong>$1,000</strong>.
                  </li>
                  <li>
                    If the investor has only <strong>$3,000</strong> to invest
                    and is also willing to risk the entire amount, then the
                    actual AUM he/she will trade that <strong>$3,000</strong>{" "}
                    as, will be <strong>$30,000</strong>, because{" "}
                    <strong>10%</strong> of <strong>$30,000</strong> is the
                    trader&apos;s <strong>$3,000</strong>.
                  </li>
                  <li>
                    If the investor has only <strong>$5,000</strong> to invest
                    and is also willing to risk the entire amount, then the
                    actual AUM he/she will trade that <strong>$5,000</strong>{" "}
                    as, will be <strong>$50,000</strong>, because{" "}
                    <strong>10%</strong> of <strong>$50,000</strong> is the
                    trader&apos;s <strong>$5,000</strong>.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Link
            href="https://1887.3cx.cloud/callus/#bbcapitalz"
            target="_blank"
            className="flex justify-center mb-10"
          >
            <Button className="mt-10 text-white bg-[#0099e6]">
              Enroll for an Account
            </Button>
          </Link>
          <h2 className="text-2xl my-5 mt-10 font-semibold">The Prop Firm</h2>
          <Image
            src={"/prop-firm.jpg"}
            className="w-full h-auto lg:max-w-[600px] self-center lg:mx-auto"
            alt="logo"
            width={250}
            height={250}
          />
          <div>
            <h3 className="text-xl font-semibold mt-5 mb-3">IN FACT,</h3>
            <p>
              The prop space is mainly known for helping traders access more
              capital.{" "}
              <strong>BUT THE TRUTH IS THAT THIS IS THE MODEL THEY USE.</strong>
            </p>
            <p>
              You are to pay a small fee to prove that you can handle a
              particular funded account and if you successfully pass the
              evaluation, then you are to trade a live account.
            </p>
            <p>
              But the rules for this model is that you aren&apos;t to lose{" "}
              <strong>10%</strong> of your whole capital.
            </p>
            <p>
              Meaning in actuality you do not have access to the full trading
              capital but only <strong>10%</strong>.
            </p>
            <p>
              Meaning, you are to trade <strong>10%</strong> like a{" "}
              <strong>100%</strong> without blowing a <strong>10%</strong>.
            </p>
            <p>
              Making sure that the prop trading company&apos;s exposure is just{" "}
              <strong>10%</strong>.... i.e. they have a threshold of{" "}
              <strong>10%</strong>.
            </p>
          </div>
          <div className="mt-6">
            <h2 className="font-semibold">
              FORMULA FOR THE MONEY MANAGEMENT PLAN
            </h2>
            <p>
              A = AUM (The total amount the trading capital is to be traded as){" "}
              <br />
              C = Trading Capital (The amount needed to be deposited into a
              trading account which is only used to facilitate trading, nothing
              more.) <br />T = Threshold / Risk Tolerance Percentage (we as a
              company use only 10%)
            </p>
            <h3>A = C/T</h3>

            <h4>Using the Formula for an Over-Capitalized Investor</h4>
            <ol>
              <li>
                If the initial amount this investor has is{" "}
                <strong>$100,000</strong>, then the trader will have to
                calculate his trading capital using a <strong>10%</strong>{" "}
                threshold.
                <br />
                So,
                <br />
                A = 100,000, C = ?, T = 10%
                <br />
                Using the formula <strong>A = C/T</strong>
                <br />
                100,000 = C / 10%
                <br />C = 100,000 × 10% = <strong>10,000</strong>
                <br />
                Therefore, the trading capital to be deposited into the trading
                account should be <strong>$10,000</strong>.
              </li>
            </ol>

            <h4>Using the Formula for an Under-Capitalized Investor</h4>
            <ol>
              <li>
                If an investor has only <strong>$3,000</strong> to invest and is
                also willing to risk the entire amount, then the trader will
                have to calculate his AUM using a <strong>10%</strong>{" "}
                threshold.
                <br />
                So,
                <br />
                A = ?, C = 3,000, T = 10%
                <br />
                Using the formula <strong>A = C/T</strong>
                <br />
                A = 3,000 / 10%
                <br />A = <strong>30,000</strong>
                <br />
                Therefore, the AUM that the <strong>$3,000</strong> dollars will
                be traded as is <strong>$30,000</strong>.
              </li>
            </ol>
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
}
