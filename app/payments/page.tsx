import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <NavBar />
      <main className="px-6">
        <h2>Payment Instructions</h2>
        <div className="flex flex-col gap-14">
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
    </>
  );
}
