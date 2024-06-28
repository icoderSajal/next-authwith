"use client";
import React from "react";
import { signOut } from "next-auth/react";

import { FaPowerOff } from 'react-icons/fa6';

export default function SignoutButton({ type }: { type?: string }) {
  return (
    <div>
      <button
        className="px-4 py-2 bg-blue-200 font-bold text-lg  text-black rounded-md  flex items-center gap-2"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>

          signOut({
            callbackUrl: type == "Admin" ? "/admin/login" : "/login",
            redirect: true,
          })
        }
      >
        Logout<FaPowerOff size={25} />
      </button>
    </div >
  );
}
