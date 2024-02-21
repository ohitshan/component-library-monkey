import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import StyledComponentsRegistry from "./lib/registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Component-library-monkey",
  description: "Component library by monkey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <header className="p-[12px] border-b-[1px] border-b-[#FFFFFF] mb-[24px] flex items-center justify-between">
            <Link href={"/"}>
              <Image
                className="cursor-pointer"
                src="/monkey.jpeg"
                width={30}
                height={30}
                alt="Picture of the author"
              />
            </Link>
            <ul className="flex gap-[16px]">
              <Link href={"/installation"}>
                <li className="hover:scale-[1.1] hover:cursor-pointer hover:text-yellow-400">
                  Installation
                </li>
              </Link>
              <Link href={"/components"}>
                <li className="hover:scale-[1.1] hover:cursor-pointer hover:text-yellow-400">
                  Components
                </li>
              </Link>
            </ul>
          </header>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
