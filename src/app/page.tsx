"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <img src="/images/Penguin.png" alt="banner" />
      <div className="w-[65dvw] max-md:w-[100dvw] mt-[2rem] max-md:mt-[1rem] mx-auto">
        <div className="max-md:mx-[1rem] text-center h-auto w-auto mx-auto rounded-lg py-[1rem]">
          <p className="text-center md:text-xl">
            🐧企鵝窩〡競賽社群
            <br />
            <br />
            你想要交友、找人玩遊戲、打比賽嗎?
            <br />
            那你來對地方了!! 本群是個競賽社群
            <br />
            歡迎揪團一起打GAME、聊聊天等等哦 ~
            <br />
            另外我們還會不定時舉辦比賽及抽獎活動哦🎉
            <br />
            🐧企鵝窩競賽社群 歡迎您 (👉ﾟヮﾟ)👉
            <br />
            <br />
            🎮本群主要是一個遊戲同樂群🎮
            <br />
            ⭐歡迎加入與我們玩遊戲、聊聊天、打比賽哦
            <br />
            <br />
            🔗Discord群連結🔗
            <br />
            <Link href={"https://discord.gg/PSefukqYyb"} target="_blenk">https://discord.gg/PSefukqYyb</Link>
          </p>
        </div>
      </div>
      <div className="text-center justify-center align-middle mt-[2rem] mx-[1rem] mb-[2rem] md:text-lg">
        <Link className="py-2 px-5 bg-[#355581] rounded-full" href={"https://discord.gg/PSefukqYyb"} target="_blenk">加入 Discord 群組</Link>
      </div>
      <div className="w-full text-center mt-[5rem] flex flex-col mb-[5rem]">
        <h1 className="text-[2rem] font-extrabold underline">合作廠商</h1>
        <div className="flex gap-5 mx-auto max-sm:flex-col mt-[1rem]">
          <div className="w-[15rem] h-[5rem] bg-white rounded-lg flex px-5">
            <img src="/images/lazco-logo.png" className="my-auto" alt="lazco" />
          </div>
          <div className="w-[15rem] h-[5rem] bg-white rounded-lg flex px-5">
            <img src="/images/lunarhosts-logo.png" className="my-auto" alt="lunarhosts" />
          </div>
        </div>
      </div>
    </div>
  );
}
