import Link from "next/link";

export default function Main() {
  return (
    <div className="flex max-w-[1110px] overflow-hidden items-center h-full flex-col md:flex-row mx-auto w-full pt-[68px] md:pt-[48px] p-[24px] md:p-[48px] border border-gray-900 border-t-0 border-b-0">
      <div className="max-w-[345px] md:max-w-[532px]">
        <h1 className="text-white md:text-[40px] text-center text-[32px] font-normal md:text-left uppercase">
          Bitcredit
        </h1>
        <p className="text-white mt-5 md:text-xl text-sm lg:max-w-full md:max-w-[400px]  md:text-justify text-center font-light text-[##F6F8F8CC] text-opacity-80">
          Bitcredit is a credit protocol that allows users to borrow and lend
          credit.
        </p>
        <Link href="/swap">
          <button className="w-[80%] h-[50px] bg-primary-500 md:block hidden -ml-3 relative mt-10">
            <div className="absolute top-1/2 uppercase font-bold left-1/2 text-black  -translate-x-1/2 -translate-y-1/2">
              BitCredit
            </div>
          </button>
        </Link>
        <div
          className="md:hidden  mt-8 flex items-center justify-center space-x-4"
        >
          <Link href="/swap" className="w-[90%] mx-auto relative h-[80px]">
            <div className="absolute top-1/2 uppercase text-sm font-bold left-1/2 text-black  -translate-x-1/2 -translate-y-1/2">
              BitCredit
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
