// Modules
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="items-center h-[4rem]">
      <nav className="bg-[#355581] bg-opacity-80 backdrop-blur-xl flex items-center justify-between shadow-2xl transition-all py-2 px-5">
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