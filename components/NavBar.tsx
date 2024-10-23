import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-white fixed top-0 w-full z-10 text-slate-300 flex justify-between items-center p-4 px-20">
      <div className="text-2xl font-bold text-black">BBCapitalz</div>
      <div className="flex space-x-20 text-black">
        <Link href="/" className="hover:text-green-500">
          Home
        </Link>
        <Link href="/company" className="hover:text-green-500">
          Company
        </Link>
        <Link href="/faqs" className="hover:text-green-500">
          FAQs
        </Link>
      </div>
      <div className="flex space-x-4">
        <button className="bg-[#0099e6] text-white py-2 px-4 rounded-lg">
          Open an Account
        </button>
        <button className="border border-[#0099e6] text-[#0099e6] py-2 px-4 rounded-lg">
          Client Login
        </button>
      </div>
    </nav>
  );
}
