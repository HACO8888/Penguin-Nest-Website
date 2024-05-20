"use client"

export default function Register() {

    function handleFormSubmit() {
        console.log("Submit")
    }

    function handleLogoChange() {
        console.log("Change")
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
                                <input id="name" name="name" type="text" placeholder="香菜棒棒糖" required className="bg-white block w-full rounded-md border-0 px-2 py-1.5 text-black shadow-sm sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="logo" className="block text-sm font-medium leading-6 text-white">戰隊Logo (限制 <span className="bg-[#355581] rounded-sm font-bold px-[0.1rem]">128*128</span> )<span className="text-red-500 ml-[0.2rem]">*</span></label>
                            </div>
                            <div className="mt-2">
                                <input id="logo" name="logo" type="file" accept="image/*" onChange={handleLogoChange} required className="bg-white block w-full rounded-md border-0 px-2 py-1 text-black shadow-sm sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="leader" className="block text-sm font-medium leading-6 text-white">報團人兼團長 DC ID<span className="text-red-500 ml-[0.2rem]">*</span></label>
                            <div className="mt-2">
                                <input id="leader" name="leader" type="text" placeholder="mrbandi.dev" required className="bg-white block w-full rounded-md border-0 px-2 py-1.5 text-black shadow-sm sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="member1" className="block text-sm font-medium leading-6 text-white">團員一 DC ID<span className="text-red-500 ml-[0.2rem]">*</span></label>
                            <div className="mt-2">
                                <input id="member1" name="member1" type="text" placeholder="impenguintw" required className="bg-white block w-full rounded-md border-0 px-2 py-1.5 text-black shadow-sm sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="member2" className="block text-sm font-medium leading-6 text-white">團員二 DC ID<span className="text-red-500 ml-[0.2rem]">*</span></label>
                            <div className="mt-2">
                                <input id="member2" name="member2" type="text" placeholder="impenguintw" required className="bg-white block w-full rounded-md border-0 px-2 py-1.5 text-black shadow-sm sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="member3" className="block text-sm font-medium leading-6 text-white">團員三 DC ID<span className="text-red-500 ml-[0.2rem]">*</span></label>
                            <div className="mt-2">
                                <input id="member3" name="member3" type="text" placeholder="impenguintw" required className="bg-white block w-full rounded-md border-0 px-2 py-1.5 text-black shadow-sm sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="member4" className="block text-sm font-medium leading-6 text-white">團員四 DC ID<span className="text-red-500 ml-[0.2rem]">*</span></label>
                            <div className="mt-2">
                                <input id="member4" name="member4" type="text" placeholder="impenguintw" required className="bg-white block w-full rounded-md border-0 px-2 py-1.5 text-black shadow-sm sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="alternate1" className="block text-sm font-medium leading-6 text-white">候補團員一 DC ID</label>
                            <div className="mt-2">
                                <input id="alternate1" name="alternate1" type="text" placeholder="haco.tw" className="bg-white block w-full rounded-md border-0 px-2 py-1.5 text-black shadow-sm sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="alternate2" className="block text-sm font-medium leading-6 text-white">候補團員二 DC ID</label>
                            <div className="mt-2">
                                <input id="alternate2" name="alternate2" type="text" placeholder="haco.tw" className="bg-white block w-full rounded-md border-0 px-2 py-1.5 text-black shadow-sm sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <span className="text-red-500 ml-[0.2rem]">*</span>報名送出即同意所有比賽規則
                        <div>
                            <button type="submit" className="mt-[2rem] flex w-full justify-center rounded-md bg-[#355581] px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed" disabled>報名</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}