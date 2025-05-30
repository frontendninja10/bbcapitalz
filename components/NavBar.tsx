"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import {
  X,
  House,
  HandCoins,
  Handshake,
  Banknote,
  GraduationCap,
  Menu,
  Building2,
  MessageCircleQuestion,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navList = [
    {
      href: "/",
      text: "Home",
      icon: <House className="w-4 h-4" />,
    },
    {
      href: "/company",
      text: "Company",
      icon: <Building2 className="w-4 h-4" />,
      subItems: [
        {
          href: "/company",
          label: "Why BBCapitalz",
          icon: <Handshake className="w-4 h-4" />,
        },
        {
          href: "/company/money-management-plan",
          label: "Our Money Management Plan",
          icon: <Banknote className="w-4 h-4" />,
        },
        {
          href: "https://signal.bbcapitalz.com/",
          label: "Master Accounts Trading Performance",
          icon: <GraduationCap className="w-4 h-4" />,
        },
      ],
    },
    {
      href: "/faqs",
      text: "FAQS",
      icon: <MessageCircleQuestion className="w-4 h-4" />,
    },
    {
      href: "/payments",
      text: "Payments",
      icon: <HandCoins className="w-4 h-4" />,
    },
  ];

  const closeDrawer = () => setIsOpen(false);
  const pathname = usePathname();
  return (
    <nav className="bg-white fixed top-0 w-full z-10 text-slate-300 flex justify-between items-center p-4 lg:px-20">
      <div className="text-2xl font-bold text-black">
        <Image src="/bbcapitalz-logo.png" width={150} height={50} alt="Logos" />
      </div>
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
                  href="/company/money-management-plan"
                  className="hover:text-[#0099e6] mb-2 flex items-center"
                >
                  <Banknote className="w-4 h-4 mr-2" />
                  Our Money Management Plan
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="https://signal.bbcapitalz.com/"
                  target="_blank"
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
        <Link href="/payments" className="hover:text-green-500">
          Payments{" "}
        </Link>
      </div>
      <div className="hidden lg:flex space-x-4">
        <button className="bg-[#0099e6] text-white py-2 px-4 rounded-lg">
          <Link href="https://signal.bbcapitalz.com/register">
            Open an Account
          </Link>
        </button>
        <button className="border border-[#0099e6] text-[#0099e6] py-2 px-4 rounded-lg">
          <Link href="https://signal.bbcapitalz.com/login">Client Login</Link>
        </button>
      </div>
      <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger>
          <Menu className="lg:hidden text-black" />
        </DrawerTrigger>
        <DrawerContent className="flex flex-col justify-start items-center p-6 bg-white w-[90%]">
          <DrawerClose className="ml-auto">
            <X className="w-8 h-8 text-black" />
          </DrawerClose>
          <DrawerHeader>
            <DrawerDescription>
              <ul className="flex mt-20 flex-col items-start w-full">
                {navList.map((item, index) => (
                  <li
                    key={index}
                    className={
                      index > 0 ? "pt-7 flex flex-col" : "flex flex-col"
                    }
                  >
                    <Link
                      href={item.href}
                      className="hover:text-[#161960] text-xl duration-200 pl-2 flex items-center gap-2"
                      onClick={closeDrawer}
                    >
                      {item.icon}
                      {item.text}
                    </Link>
                    {item.subItems && (
                      <ul className="ml-4 mt-2">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.label}>
                            <Link
                              href={subItem.href}
                              className={`flex gap-2 items-center py-2 text-md ${
                                pathname === subItem.href
                                  ? "underline underline-offset-4"
                                  : ""
                              }`}
                            >
                              {subItem.icon}
                              <span>{subItem.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col mt-20 gap-4">
                <button className="bg-[#0099e6] text-white py-2 px-4 rounded-lg">
                  <Link href="https://1887.3cx.cloud/callus/#bbcapitalz">
                    Open an Account
                  </Link>
                </button>
                <button className="border border-[#0099e6] text-[#0099e6] py-2 px-4 rounded-lg">
                  <Link href="https://signal.bbcapitalz.com/login">
                    Client Login
                  </Link>
                </button>
              </div>
            </DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </nav>
  );
}
