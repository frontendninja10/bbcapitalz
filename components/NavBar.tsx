import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Handshake, Banknote, GraduationCap } from "lucide-react";

export default function NavBar() {
  return (
    <nav className="bg-white fixed top-0 w-full z-10 text-slate-300 flex justify-between items-center p-4 lg:px-20">
      <div className="text-2xl font-bold text-black">BBCapitalz</div>
      <div className="lg:flex space-x-20 text-black items-center hidden">
        <Link href="/" className="hover:text-green-500">
          Home
        </Link>

        <NavigationMenu className="max-w-3xl">
          <NavigationMenuList className="">
            <NavigationMenuItem className="">
              <NavigationMenuTrigger>Company</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white text-black flex flex-col p-4">
                <NavigationMenuLink
                  href="/company"
                  className="hover:text-[#0099e6] mb-2 flex items-center"
                >
                  <Handshake className="w-4 h-4 mr-2" />
                  Why BBCapitalz
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="/company"
                  className="hover:text-[#0099e6] mb-2 flex items-center"
                >
                  <Banknote className="w-4 h-4 mr-2" />
                  Our Money Management Plan
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="/company"
                  className="hover:text-[#0099e6] mb-2 flex items-center"
                >
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Master Accounts Trading Performance
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Link href="/faqs" className="hover:text-green-500">
          FAQs
        </Link>
        <Link href="/" className="hover:text-green-500">
          Payments{" "}
        </Link>
      </div>
      <div className="hidden lg:flex space-x-4">
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
