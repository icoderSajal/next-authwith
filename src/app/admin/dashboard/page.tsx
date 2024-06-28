import {
  CustomSession,
  authOptions,
} from "@/app/api/auth/[...nextauth]/options";
import SignoutButton from "@/_components/SignoutButton"
import { getServerSession } from "next-auth";

import React from "react";

export default async function AdminDashboard() {
  const session: CustomSession | null = await getServerSession(authOptions);

  return (

    <>
      <div className="flex justify-between items-center gap-8 shadow-xl bg-blue-900 text-white h-[10vh]">
        <div>
          <h1 className="text-3xl px-4 py-2">Logo</h1>
        </div>

        <div className="flex justify-between items-center gap-4 text-2xl">
          <p>Welcome :{JSON.stringify(session?.user?.name)}</p>
        </div>
        <div className="bg-blue-400 px-4 py-1 mx-4 shadow-2xl rounded-lg hover:ring-4">

          <SignoutButton type="Admin" />
        </div>
      </div>
      <div className="container bg-slate-400 mx-auto rounded-lg mt-4 px-4 py-2">
        Welcome
      </div>

    </>

  );
}
