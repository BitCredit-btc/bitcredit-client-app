"use client";

import Navbar from "@/components/navbar";
import { UtxoProvider } from "@/hooks/useUtxos";
import dynamic from "next/dynamic";


const DynamicLasereyesProvider = dynamic(
  () => import('@omnisat/lasereyes').then((mod) => mod.LaserEyesProvider),
  { ssr: false }
)

const SwapPage = () => {
  return (
    <DynamicLasereyesProvider>
      <UtxoProvider>
        <div className="bg-black min-h-screen w-full relative flex">
          <div className="flex flex-col justify-between gap-[100px] relative w-full">
            <div>
              <div className="flex w-full h-[75px]">
                <div className="flex-1 md:block hidden shrink-0 h-full border border-gray-900 border-t-0 border-x-0"></div>
                <Navbar showXBorders={false} />
                <div className="flex-1 md:block hidden shrink-0 h-full border border-gray-900 border-t-0 border-x-0"></div>
              </div>
              <div />
            </div>
            <div className="  w-full border-t border-gray-900 ">
            </div>
          </div>
        </div>
      </UtxoProvider>
    </DynamicLasereyesProvider>
  );
};

export default SwapPage;
