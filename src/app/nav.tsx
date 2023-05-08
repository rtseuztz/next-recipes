"use client"
import { useEffect, useState } from "react"
import { auth } from "../../config/firebase"
import { User } from "firebase/auth"

export default function Nav() {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            console.log(user)
            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }
        })
        return unsubscribe
    }, [])
    return (
        <nav className=" flex flex-row justify-center ">
            <div className="flex justify-center gap-5">
                <a href="/">Home</a>
                <a href="/login">Login</a>
            </div>
            <div className=" absolute right-5">
                {user?.email}
            </div>
        </nav>
    )
}