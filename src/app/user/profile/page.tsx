import React from 'react'
import { getServerSession } from "next-auth"
import { authOptions } from "../../../app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation"
export default async function page() {
    const session = await getServerSession(authOptions)
    if (!session) {
        redirect("/login")

    }
    return (
        <div>
            <h1>User Profile Page</h1>
        </div>
    )
}
