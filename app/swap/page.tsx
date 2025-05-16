// 'use client'
// import Main from "@/components/main/Main";
// import Navbar from "@/components/navbar";
// import DynamicLasereyesProvider from '@/components/providers/DynamicLasereyesProvider';

// const LandingPage = () => {
//   return (
//     <DynamicLasereyesProvider>
//       <div className="bg-black h-screen w-full relative flex">
//         <div className="flex flex-col relative w-full">
//           <div className="flex w-full">
//             <div className="flex-1 md:block hidden shrink-0 h-full border border-gray-900 border-t-0 border-x-0"></div>
//             <Navbar />
//             <div className="flex-1 md:block hidden shrink-0 h-full border border-gray-900 border-t-0 border-x-0"></div>
//           </div>
//           <Main />
//           <div className=" w-full md:flex hidden h-[180px] md:h-[96px]">
//             <div className="flex-1 md:block hidden shrink-0 h-full  border border-gray-900 border-b-0"></div>
//             <div className="max-w-[1108px] w-full h-full border border-gray-900 border-b-0 border-x-0"></div>
//             <div className="flex-1 md:block hidden shrink-0 h-full  border border-gray-900 border-b-0"></div>
//           </div>
//         </div>
//       </div>
//     </DynamicLasereyesProvider>
//   );
// };

// export default LandingPage;


import Navbar from '@/components/navbar';
import { SwapCard } from '@/components/swap/SwapCard';
import dynamic from 'next/dynamic';

const DynamicLasereyesProvider = dynamic(() => import('@/components/providers/DynamicLasereyesProvider'), {
  ssr: false,
});
const BitcoinScene = dynamic(() => import('@/components/threejs/BitcoinScene'), {
  ssr: false,
});

export default function Home() {
  return (
    <DynamicLasereyesProvider>
      <div className="h-screen w-screen bg-black text-white relative">
        <BitcoinScene >
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center z-10">
            <Navbar />
            <SwapCard />
          </div>
        </BitcoinScene>
      </div>
    </DynamicLasereyesProvider>
  );
}
