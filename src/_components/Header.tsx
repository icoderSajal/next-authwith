import React from 'react'
import SignoutButton from './SignoutButton'
import { getServerSession } from "next-auth"
import { authOptions } from "../app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation"
import Link from 'next/link';


export default async function Header() {
    const session = await getServerSession(authOptions)
    if (!session) {
        redirect("/login")

    }
    const userLinks = [{
        id: 1,
        name: "Contact",
        path: "/contact",

    }, {
        id: 2,
        name: "Profile",
        path: "/user/profile",

    },
    {
        id: 3,
        name: "Policies",
        path: "/user/reports",

    }
    ]
    return (
        <header className='h-[10vh] bg-blue-900 text-bold text-white flex justify-between items-center px-8 py-4 shadow-xl'>

            <div>Logo</div>
            <div className='flex gap-2 font-bold text-xl '>

                {userLinks.map((link, i) => (
                    <ul key={i}>
                        <li className='hover:border-b-2 cursor-pointer flex items-center gap-2 hover:ring-4 hover:bg-blue-200 hover:rounded-lg hover:text-black duration-1000 px-4 py-2'><Link href={link.path}></Link>{link.name}</li>
                    </ul>
                ))}
            </div>
            <div className='flex justify-between items-center gap-4'>
                <p>Welcome :{JSON.stringify(session?.user?.name)}</p>
                <SignoutButton /></div>

        </header>
    )
}
