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


import dynamic from 'next/dynamic';
import Link from 'next/link';

const BitcoinScene = dynamic(() => import('../components/threejs/BitcoinScene'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="h-screen w-screen bg-black text-white relative">
      <BitcoinScene >
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 animate-gradient">
              Bitcredit is The First MEV-Protected DEX on Bitcoin
            </h1>
            <p className="text-lg md:text-2xl mb-8 text-orange-100/80">
              Trade with confidence on Bitcoin&apos;s most secure decentralized exchange
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-orange-500/20">
                <div className="text-orange-500 text-xl mb-2">🛡️ MEV Protection</div>
                <p className="text-gray-300">
                  Advanced order routing and privacy features prevent frontrunning and sandwich attacks
                </p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-orange-500/20">
                <div className="text-orange-500 text-xl mb-2">⚡ Native Bitcoin</div>
                <p className="text-gray-300">
                  Built directly on Bitcoin&apos;s network for maximum security and true decentralization
                </p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-orange-500/20">
                <div className="text-orange-500 text-xl mb-2">🔒 Non-Custodial</div>
                <p className="text-gray-300">
                  Maintain full control of your assets with secure wallet integration
                </p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-orange-500/20">
                <div className="text-orange-500 text-xl mb-2">💰 Zero Value Extracted</div>
                <p className="text-gray-300">
                  Fair trading environment where your trades execute at the best possible price
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/swap">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg font-bold text-black hover:opacity-90 transition-opacity">
                  Start Trading
                </button>
              </Link>
              <button className="px-8 py-4 border-2 border-orange-500 rounded-lg font-bold hover:bg-orange-500/20 transition-colors">
                Learn About MEV Protection
              </button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8">
              <div className="bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-orange-500 font-bold">Protected Volume:</span>
                <span className="ml-2">$1.2B+</span>
              </div>
              <div className="bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-orange-500 font-bold">MEV Attacks Prevented:</span>
                <span className="ml-2">50K+</span>
              </div>
              <div className="bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-orange-500 font-bold">Savings for Traders:</span>
                <span className="ml-2">$8.5M+</span>
              </div>
            </div>
          </div>
        </div>
      </BitcoinScene>
    </div>
  );
}
