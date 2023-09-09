"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "../ThemeToggle";
import UserAccountNav from "./UserAccountNav";
import SignInButton from "../SignInButton";
import { ChevronDown } from "lucide-react";
import GsapMagnetic from "../GsapMagnetic";

type Props = {
  session: any;
};

const NavbarMenu: React.FC<Props> = ({ session }) => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const setShowHandler = setTimeout(() => setShow(false), 13000);

    return () => {
      clearTimeout(setShowHandler);
    };
  }, [show]);

  return (
    <>
      <GsapMagnetic
        onClick={() => setShow(!show)}
        className="cursor-pointer bg-gray-500/90 opacity-20 hover:opacity-80 p-1 rounded-full"
      >
        <ChevronDown />
      </GsapMagnetic>
      {show && (
        <div className="flex items-center justify-center h-full gap-2 px-8 mx-auto sm:justify-between max-w-7xl">
          <div className="flex items-center">
            <div className="flex items-center bg-accent rounded-lg p-2 pl-5 gap-2">
              <Link
                href="/gallery"
                className="mr-3"
                onClick={() => setShow(!show)}
              >
                Gallery
              </Link>
              {session?.user && (
                <>
                  <Link
                    href="/create"
                    className="mr-3"
                    onClick={() => setShow(!show)}
                  >
                    Create Course
                  </Link>
                  <Link
                    href="/settings"
                    className="mr-3"
                    onClick={() => setShow(!show)}
                  >
                    Settings
                  </Link>
                </>
              )}
            </div>
            <ThemeToggle className="ml-2 mr-1" />
            <div className="flex items-center ml-2">
              {session?.user ? (
                <UserAccountNav user={session.user} />
              ) : (
                <SignInButton />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarMenu;
