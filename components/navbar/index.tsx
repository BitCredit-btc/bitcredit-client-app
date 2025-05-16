"use client";
import { cn } from "@/lib/utils";
import { SUPPORTED_WALLETS, useLaserEyes } from "@omnisat/lasereyes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import WalletConnectButton from "../WalletConnectButton";
import CancelIcon from "./CancelIcon";
import MenuIcon from "./MenuIcon";


const wallet = SUPPORTED_WALLETS["oyl"]
export default function Navbar({
  showXBorders = true,
}: {
  showXBorders?: boolean;
}) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const {
    address,
    provider,
    network,
    paymentAddress,
    paymentPublicKey,
    getBalance,
    pushPsbt,
    publicKey,
    signPsbt,
    balance,
    switchNetwork,
    hasUnisat,
    signMessage,
    hasXverse,
    sendBTC,
    hasOyl,
    hasMagicEden,
    hasOkx,
    hasLeather,
    hasPhantom,
    hasWizz,
    hasSparrow,
    hasOrange,
    hasOpNet,
  } = useLaserEyes()
  const pathname = usePathname();

  const NAV_LINKS = [
    {
      label: "Swap",
      href: "/swap",
    },
  ]


  return (
    <div
      className={cn(
        "max-w-[1110px]  w-full py-4 relative h-full border border-gray-900 flex items-center justify-between border-t-0 px-4 md:px-10",
        isNavOpen ? "border-transparent" : "border-gray-900",
        !showXBorders ? "border-x-0" : "border-x",
      )}
    >
      <Link href="/" className="flex items-center h-full gap-2 justify-start">
        <Image
          src="/bitcredit-logo.png"
          alt="logo"
          width={48}
          height={48}
          className="md:w-[30px] md:h-[30px] w-[30px] aspect-[48/48] h-[30px]"
        />
        <p className="text-lg md:block hidden font-normal text-white leading-5 tracking-wider">
          Bitcredit
        </p>
      </Link>

      <div
        onClick={() => setIsNavOpen(false)}
        className={cn(
          "fixed top-[80px] left-0 w-full h-full bg-[#020D12CC]",
          "md:hidden block z-50",
          isNavOpen ? "block" : "hidden",
        )}
      >
        <div
          className={cn(
            "flex flex-col w-full bg-gray-1000",
            "divide-y divide-gray-900",
            "border border-x-0 border-gray-900",
          )}
        >
          <div className="flex items-center justify-end py-5 px-2">
            <WalletConnectButton wallet={wallet} key={wallet.name} />
          </div>
          {NAV_LINKS.map((link, index) => {
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "text-gray-300 w-full px-3 py-4 text-sm font-medium leading-5 tracking-tighter uppercase",
                  "hover:text-primary-500",
                  "text-center",
                  link.href === pathname && "text-primary-500",
                )}
                onClick={() => setIsNavOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-[64px]">
        {NAV_LINKS.map((link, index) => {
          const LinkComp = (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "text-gray-300 hidden md:block uppercase hover:text-primary-500 !text-sm font-medium leading-5 tracking-tighter",
                link.href === pathname &&
                "text-primary-500 underline underline-offset-4",
              )}
            >
              {link.label}
            </Link>
          );

          return LinkComp;
        })}
      </div>

      <div className="flex items-center gap-4">
        {!isNavOpen && <WalletConnectButton wallet={wallet} key={wallet.name} />
        }
        {isNavOpen ? (
          <CancelIcon onClick={() => setIsNavOpen(!isNavOpen)} />
        ) : (
          <MenuIcon onClick={() => setIsNavOpen(!isNavOpen)} />
        )}
      </div>
    </div>
  );
}
