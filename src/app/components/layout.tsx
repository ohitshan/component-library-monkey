import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CLM | Components",
  description: "About components",
};

const sideMenuList = [
  { name: "Button", href: "/components/button" },
  { name: "Table", href: "/components/table" },
  { name: "Input", href: "/components/input" },
  { name: "Select", href: "/components/select" },
  { name: "Checkbox", href: "/components/checkbox" },
  { name: "Radio", href: "/components/radio" },
];

export default function ComponentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex">
        <ul className="flex-[0_0_20%] border-r-[1px] border-[#FFFFFF]">
          {sideMenuList.map((menu) => (
            <Link href={menu.href} key={menu.href}>
              <li className="p-[12px] font-semibold text-center hover:bg-yellow-400  hover:border-r-[4px] rounded-[4px]">
                {menu.name}
              </li>
            </Link>
          ))}
        </ul>
        <div className="flex-[0_0_80%] px-[48px]">{children}</div>
      </div>
    </>
  );
}
