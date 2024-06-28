

import SignoutButton from "@/_components/SignoutButton";
import Link from "next/link";
export default async function Home() {

  return (
    <>
      <div className="flex justify-between items-center gap-8 shadow-xl bg-blue-900 text-white h-[10vh]">
        <div>
          <h1 className="text-3xl px-4 py-2">Logo</h1>
        </div>

        <div className="flex justify-between items-center gap-4 text-2xl">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="bg-blue-400 px-4 py-1 mx-4 shadow-2xl rounded-lg hover:ring-4">
          <SignoutButton />
        </div>




      </div>


    </>

  );
}
