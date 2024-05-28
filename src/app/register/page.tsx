"use client";

// Modules
import { FormEvent, useState } from "react";
import React from "react";
import Swal from "sweetalert2";

// Styles
import "sweetalert2/src/sweetalert2.scss";

export default function Register() {
  const [disabled, setDisabled] = useState(false);

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    setDisabled(true);
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const logo = data.get("logo") as File;

    if (logo.size === 0) {

      return Swal.fire({
        title: "報名失敗",
        text: "您沒有選擇要上傳的戰隊 Logo，請選擇後再重新報名。",
        icon: "error",
        confirmButtonText: "OK"
      }).then(() => {
        setDisabled(false);
      });
    }

    const response = await fetch("/api/register", {
      method: "POST",
      body: data,
    });

    const response_data = await response.json();

    if (response_data.code === 1000) {
      return Swal.fire({
        title: response_data.title,
        html: response_data.message,
        icon: "success",
        confirmButtonText: "OK"
      });
    } else {
      return Swal.fire({
        title: response_data.title,
        html: response_data.message,
        icon: "error",
        confirmButtonText: "OK"
      }).then(() => {
        setDisabled(false);
      });
    }
  }


  return (
    <div>
      <img src="/images/studio_shodwe_1.gif" alt="banner" className="w-[100dvw] md:w-[40rem] md:mt-[2rem] mx-auto" />
      <div className="flex min-h-full flex-col justify-center px-6 lg:px-8 mt-[2rem] mb-[2rem]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-4" onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">戰隊名稱<span className="text-red-500 ml-[0.2rem]">*</span></label>
              <div className="mt-2">
                <input id="name" name="name" type="text" placeholder="香菜棒棒糖" required className="bg-white block w-full rounded-md border-0 px-2 py-1.5 text-black shadow-sm sm:text-sm sm:leading-6 disabled:opacity-50 disabled:cursor-not-allowed" disabled={disabled} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="logo" className="block text-sm font-medium leading-6 text-white">戰隊Logo (限制 <span className="bg-[#355581] rounded-sm font-bold px-[0.1rem]">128*128</span> )<span className="text-red-500 ml-[0.2rem]">*</span></label>
              </div>
              <div className="mt-2">
                <input id="logo" name="logo" type="file" accept="image/*" required className="bg-white block w-full rounded-md border-0 px-2 py-1 text-black shadow-sm sm:text-sm sm:leading-6 disabled:opacity-50 disabled:cursor-not-allowed" disabled={disabled} />
              </div>
            </div>
            <div>
              <label htmlFor="leader" className="block text-sm font-medium leading-6 text-white">報團人兼隊長 DC ID<span className="text-red-500 ml-[0.2rem]">*</span></label>
              <div className="mt-2">
                <input id="leader" name="leader" type="text" placeholder="mrbandi.dev" required className="bg-white block w-full rounded-md border-0 px-2 py-1.5 text-black shadow-sm sm:text-sm sm:leading-6 disabled:opacity-50 disabled:cursor-not-allowed" disabled={disabled} />
              </div>
            </div>
            <div>
              <label htmlFor="member1" className="block text-sm font-medium leading-6 text-white">隊員一 DC ID<span className="text-red-500 ml-[0.2rem]">*</span></label>
              <div className="mt-2">
                <input id="member1" name="member1" type="text" placeholder="impenguintw" required className="bg-white block w-full rounded-md border-0 px-2 py-1.5 text-black shadow-sm sm:text-sm sm:leading-6 disabled:opacity-50 disabled:cursor-not-allowed" disabled={disabled} />
              </div>
            </div>
            <div>
              <label htmlFor="member2" className="block text-sm font-medium leading-6 text-white">隊員二 DC ID<span className="text-red-500 ml-[0.2rem]">*</span></label>
              <div className="mt-2">
                <input id="member2" name="member2" type="text" placeholder="impenguintw" required className="bg-white block w-full rounded-md border-0 px-2 py-1.5 text-black shadow-sm sm:text-sm sm:leading-6 disabled:opacity-50 disabled:cursor-not-allowed" disabled={disabled} />
              </div>
            </div>
            <div>
              <label htmlFor="member3" className="block text-sm font-medium leading-6 text-white">隊員三 DC ID<span className="text-red-500 ml-[0.2rem]">*</span></label>
              <div className="mt-2">
                <input id="member3" name="member3" type="text" placeholder="impenguintw" required className="bg-white block w-full rounded-md border-0 px-2 py-1.5 text-black shadow-sm sm:text-sm sm:leading-6 disabled:opacity-50 disabled:cursor-not-allowed" disabled={disabled} />
              </div>
            </div>
            <div>
              <label htmlFor="member4" className="block text-sm font-medium leading-6 text-white">隊員四 DC ID<span className="text-red-500 ml-[0.2rem]">*</span></label>
              <div className="mt-2">
                <input id="member4" name="member4" type="text" placeholder="impenguintw" required className="bg-white block w-full rounded-md border-0 px-2 py-1.5 text-black shadow-sm sm:text-sm sm:leading-6 disabled:opacity-50 disabled:cursor-not-allowed" disabled={disabled} />
              </div>
            </div>
            <div>
              <label htmlFor="alternate1" className="block text-sm font-medium leading-6 text-white">候補隊員一 DC ID</label>
              <div className="mt-2">
                <input id="alternate1" name="alternate1" type="text" placeholder="haco.tw" className="bg-white block w-full rounded-md border-0 px-2 py-1.5 text-black shadow-sm sm:text-sm sm:leading-6 disabled:opacity-50 disabled:cursor-not-allowed" disabled={disabled} />
              </div>
            </div>
            <div>
              <label htmlFor="alternate2" className="block text-sm font-medium leading-6 text-white">候補隊員二 DC ID</label>
              <div className="mt-2">
                <input id="alternate2" name="alternate2" type="text" placeholder="haco.tw" className="bg-white block w-full rounded-md border-0 px-2 py-1.5 text-black shadow-sm sm:text-sm sm:leading-6 disabled:opacity-50 disabled:cursor-not-allowed" disabled={disabled} />
              </div>
            </div>
            <div>
              <label htmlFor="leader_r" className="block text-sm font-medium leading-6 text-white">報團人兼隊長 RiogGame ID<span className="text-red-500 ml-[0.2rem]">*</span></label>
              <div className="mt-2">
                <input id="leader_r" name="leader_r" type="text" placeholder="Haco#54088" required className="bg-white block w-full rounded-md border-0 px-2 py-1.5 text-black shadow-sm sm:text-sm sm:leading-6 disabled:opacity-50 disabled:cursor-not-allowed" disabled={disabled} />
              </div>
            </div>
            <div>
              <label htmlFor="member1_r" className="block text-sm font-medium leading-6 text-white">隊員一 RiogGame ID<span className="text-red-500 ml-[0.2rem]">*</span></label>
              <div className="mt-2">
                <input id="member1_r" name="member1_r" type="text" placeholder="MrBandi#30668" required className="bg-white block w-full rounded-md border-0 px-2 py-1.5 text-black shadow-sm sm:text-sm sm:leading-6 disabled:opacity-50 disabled:cursor-not-allowed" disabled={disabled} />
              </div>
            </div>
            <div>
              <label htmlFor="member2_r" className="block text-sm font-medium leading-6 text-white">隊員二 RiogGame ID<span className="text-red-500 ml-[0.2rem]">*</span></label>
              <div className="mt-2">
                <input id="member2_r" name="member2_r" type="text" placeholder="MrBandi#30668" required className="bg-white block w-full rounded-md border-0 px-2 py-1.5 text-black shadow-sm sm:text-sm sm:leading-6 disabled:opacity-50 disabled:cursor-not-allowed" disabled={disabled} />
              </div>
            </div>
            <div>
              <label htmlFor="member3_r" className="block text-sm font-medium leading-6 text-white">隊員三 RiogGame ID<span className="text-red-500 ml-[0.2rem]">*</span></label>
              <div className="mt-2">
                <input id="member3_r" name="member3_r" type="text" placeholder="MrBandi#30668" required className="bg-white block w-full rounded-md border-0 px-2 py-1.5 text-black shadow-sm sm:text-sm sm:leading-6 disabled:opacity-50 disabled:cursor-not-allowed" disabled={disabled} />
              </div>
            </div>
            <div>
              <label htmlFor="member4_r" className="block text-sm font-medium leading-6 text-white">隊員四 RiogGame ID<span className="text-red-500 ml-[0.2rem]">*</span></label>
              <div className="mt-2">
                <input id="member4_r" name="member4_r" type="text" placeholder="MrBandi#30668" required className="bg-white block w-full rounded-md border-0 px-2 py-1.5 text-black shadow-sm sm:text-sm sm:leading-6 disabled:opacity-50 disabled:cursor-not-allowed" disabled={disabled} />
              </div>
            </div>
            <div>
              <label htmlFor="alternate1_r" className="block text-sm font-medium leading-6 text-white">候補隊員一 RiogGame ID</label>
              <div className="mt-2">
                <input id="alternate1_r" name="alternate1_r" type="text" placeholder="Duck#1234" className="bg-white block w-full rounded-md border-0 px-2 py-1.5 text-black shadow-sm sm:text-sm sm:leading-6 disabled:opacity-50 disabled:cursor-not-allowed" disabled={disabled} />
              </div>
            </div>
            <div>
              <label htmlFor="alternate2_r" className="block text-sm font-medium leading-6 text-white">候補隊員二 RiogGame ID</label>
              <div className="mt-2">
                <input id="alternate2_r" name="alternate2_r" type="text" placeholder="Duck#1234" className="bg-white block w-full rounded-md border-0 px-2 py-1.5 text-black shadow-sm sm:text-sm sm:leading-6 disabled:opacity-50 disabled:cursor-not-allowed" disabled={disabled} />
              </div>
            </div>
            <span className="text-red-500 ml-[0.2rem]">*</span>報名送出即同意所有比賽規則
            <div>
              <button type="submit" className="mt-[2rem] flex w-full justify-center rounded-md bg-[#355581] px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed" disabled={disabled}>報名</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}