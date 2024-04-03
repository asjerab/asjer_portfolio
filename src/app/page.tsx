import Image from "next/image";
import { Style } from "util"; "./src/app/global.css";

export default function Home() {
  return (
    <main className="">
      <div className="flex justify-between items-center w-full py-12 p-5 sm:p-12 xl:p-16">
        <h1 className="bauziet-regular text-slate-950 text-3xl font-normal">asjer bereket</h1>
        <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3.75 9H20.25M3.75 15.75H20.25" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </main>
  );
}
