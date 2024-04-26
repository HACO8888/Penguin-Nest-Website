// Modules
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="container fixed left-0 right-0 top-0 z-50 items-center mx-auto max-lg:px-3">
      <nav className="bg-[#355581] bg-opacity-80 backdrop-blur-xl rounded-xl py-3 px-6 mt-4 lg:py-3 lg:px-10 lg:mt-8 flex items-center justify-between shadow-2xl transition-all">
        <a className="font-bold flex hover:cursor-pointer" href="/">
          <Image src={"/images/logo.png"} height={50} width={50} alt="logo" />
          <p className="text-white font-bold text-xl my-auto ml-3">企鵝窩</p>
        </a>
        <div className="space-x-4 flex">
          {/* <a className="text-white hover:text-[#5fad87] font-bold" href="/register">報名活動</a> */}
          <a className="text-white font-bold bg-[#162438] py-3 px-5 rounded-xl hover:cursor-pointer hover:scale-95" href="/register">報名活動</a>
        </div>
      </nav>
    </div>
  );
}