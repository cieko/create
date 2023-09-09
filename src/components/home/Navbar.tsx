import Link from "next/link";
import React from "react";
import { getAuthSession } from "@/lib/auth";
import Image from "next/image";
import NavbarMenu from "./NavbarMenu";

type Props = {};

const Navbar = async (props: Props) => {
  const session = await getAuthSession();

  return (
    <nav className="fixed inset-x-0 top-0 bg-white/25 dark:bg-gray-950/25 z-[10] h-fit border-b border-transparent py-2 flex flex-col justify-center items-center gap-2">
      <span className="flex gap-2">
        <Link href="/gallery" className="items-center hidden gap-2 sm:flex">
          <Image src="/Create.svg" alt="" width={80} height={80} />
        </Link>
      </span>
      <NavbarMenu session={session} />
    </nav>
  );
};

export default Navbar;
