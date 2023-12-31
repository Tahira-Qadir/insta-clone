/* eslint-disable @next/next/no-img-element */
import { useSession, signOut } from "next-auth/react"
export default function MiniProfile() {
  const {data: session} = useSession()
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img src={session?.user.image}
            alt="User-Profile-Image" 
            className="h-16 cursor-pointer rounded-full border p-[2px]" />
            <div className="flex-1 ml-4">
                <h2 className="font-bold">{session?.user.username}</h2>
                <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
            </div>
            <button onClick={signOut} className="font-semibold text-blue-400">Sign Out</button>
    </div>
  )
}
