import NavBar from "@/components/NavBar";
import Image from "next/image";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@/components/ui/accordion";

export default function Page() {
  return (
    <>
      <NavBar />
      <main className="px-6 py-24">
        <h2 className="text-3xl lg:text-4xl font-bold text-center">
          Payment Instructions
        </h2>
        <p className="text-center py-6 max-w-2xl mx-auto">
          Following our payment instructions is crucial for ensuring accuracy,
          timeliness, and security. Adhering to these guidelines helps prevent
          errors, avoids late fees, and protects your financial information.
          Always read and follow this payment instructions carefully to ensure
          smooth transactions.
        </p>
        <Accordion
          type="single"
          collapsible
          className="lg:max-w-4xl lg:mx-auto"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>COLLECTIVE MODEL</AccordionTrigger>
            <AccordionContent>
              <p>
                When making your payment, please write the amount you are
                depositing and the master account you want to connect it to in
                the comment section. This will be treated as 10% of your
                capital, which is your maximum draw-down. This amount, you must
                be willing to lose.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>SUBSCRIPTION FEE</AccordionTrigger>
            <AccordionContent>
              <p>
                During payment, please ensure that you include the number of
                accounts you are paying for.
              </p>
              <p>
                <strong>NOTE: </strong>Payments should only be made from the
                20th to the last day of every month.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>PERFORMANCE FEE</AccordionTrigger>
            <AccordionContent>
              <p>
                When making your payment, please in the comment section provide
                the following accurate information: 30% of Profit Made on Each
                Account Connected and the Total Profit Fee to be paid. Be sure
                to double-check your figures to ensure accuracy. All info will
                be checked
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="flex py-20 flex-col lg:flex-row lg:gap-14 lg:max-w-6xl lg:mx-auto gap-14">
          <div className="bg-[#f7f7f7]">
            <div className="bg-[#0099e6] py-7 text-center text-white">
              <h3 className="italic text-2xl font-semibold">
                Collective Model
              </h3>
              <p className="font-semibold">Payment</p>
            </div>
            <Image
              src="/collective-model-card.jpeg"
              alt=""
              width={400}
              height={400}
              className="w-full"
            />
            <div className="text-center py-6">
              <p>From</p>
              <h3 className="py-1">$200</h3>
              <p className="py-2">
                Here, payments should only be made from the 20th to the last day
                of every month.
              </p>
              <button className="bg-[#0099e6] mt-12 py-3 px-7 rounded-xl uppercase text-white font-semibold">
                Pay Now
              </button>
            </div>
          </div>
          <div className="bg-[#f7f7f7]">
            <div className="bg-[#0099e6] py-7 text-center text-white">
              <h3 className="italic text-2xl font-semibold">
                Subscription Fee
              </h3>
              <p className="font-semibold">Payment</p>
            </div>
            <Image
              src="/solo-model-card.jpeg"
              alt=""
              width={400}
              height={400}
              className="w-full"
            />
            <div className="text-center py-6">
              <p>From</p>
              <h3 className="py-1">$200</h3>
              <p className="py-2">
                Here, payments should only be made from the 20th to the last day
                of every month.
              </p>
              <button className="bg-[#0099e6] mt-12 py-3 px-7 rounded-xl uppercase text-white font-semibold">
                Pay Now
              </button>
            </div>
          </div>
          <div className="bg-[#f7f7f7]">
            <div className="bg-[#0099e6] py-7 text-center text-white">
              <h3 className="italic text-2xl font-semibold">Performance Fee</h3>
              <p className="font-semibold">Payment</p>
            </div>
            <Image
              src="/performance-fee-card.jpeg"
              alt=""
              width={400}
              height={400}
              className="w-full"
            />
            <div className="text-center py-6">
              <p>From</p>
              <h3 className="py-1">$200</h3>
              <p className="py-2">
                Here, payments should only be made from the 20th to the last day
                of every month.
              </p>
              <button className="bg-[#0099e6] mt-12 py-3 px-7 rounded-xl uppercase text-white font-semibold">
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
