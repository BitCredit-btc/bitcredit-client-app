'use client'
import dynamic from 'next/dynamic'

import { UtxoProvider } from '@/hooks/useUtxos'

const DynamicLasereyesProvider = dynamic(
  () => import('@omnisat/lasereyes').then((mod) => mod.LaserEyesProvider),
  { ssr: false }
)

import Main from "@/components/main/Main"
import Navbar from "@/components/navbar"

const LandingPage = () => {
  return (
    <DynamicLasereyesProvider>
      <UtxoProvider>
        <div className="bg-black h-screen w-full relative flex">
          <div className="flex flex-col relative w-full">
            <div className="flex w-full">
              <div className="flex-1 md:block hidden shrink-0 h-full border border-gray-900 border-t-0 border-x-0"></div>
              <Navbar />
              <div className="flex-1 md:block hidden shrink-0 h-full border border-gray-900 border-t-0 border-x-0"></div>
            </div>
            <Main />
            <div className=" w-full md:flex hidden h-[180px] md:h-[96px]">
              <div className="flex-1 md:block hidden shrink-0 h-full  border border-gray-900 border-b-0"></div>
              <div className="max-w-[1108px] w-full h-full border border-gray-900 border-b-0 border-x-0"></div>
              <div className="flex-1 md:block hidden shrink-0 h-full  border border-gray-900 border-b-0"></div>
            </div>
          </div>
        </div>
      </UtxoProvider>
    </DynamicLasereyesProvider>
  );
};

export default LandingPage;
