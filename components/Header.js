
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { HomeIcon, PlusCircleIcon, SearchIcon } from "@heroicons/react/outline"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRecoilState } from "recoil"
import { modalState } from "@/atom/modalAtom"
import { useRouter } from "next/router";
export default function Header() {
    const {data: session} = useSession();
    const [open, setOpen] = useRecoilState(modalState)
    const router = useRouter()
    // console.log(session)
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30">
        <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto mt-4">
        {/* Left */}
            <div className="h-24 w-24 cursor-pointer relative hidden lg:inline-grid">
                <Image src="/logo.png" alt="Intagram-logo-1" layout="fill" className="object-contain" onClick={() =>router.push('/')} />
            </div>
            <div className="h-24 w-10 cursor-pointer relative  lg:hidden">
                <Image src="/logo2.png" alt="Intagram-logo-2" layout="fill" className="object-contain" onClick={() =>router.push('/')} />
            </div>
            
        {/* Middle */}

            <div className="relative mt-1">
                <div className="absolute top-3 left-3">
                    <SearchIcon className="h-5 text-gray-500" />
                </div>
                <input type="text" placeholder="Search Here" className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus: focus:border-black rounded-md" />
            </div>

        {/* Right */}

            <div>
                <div className="flex space-x-5 items-center">
                <HomeIcon className="h-6 hidden md:inline-flex cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" onClick={() =>router.push('/')} />
                {session? (
                    <>
                        <PlusCircleIcon onClick={() =>setOpen(true)} className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
                        <img 
                        onClick={signOut}
                        src={session.user.image}
                        alt="user-image"
                        className="h-10 cursor-pointer rounded-full" />
                    </>
                ): (
                    <button onClick={signIn}>Sign In</button>
                )}
               
                </div>
            </div>
        </div>
    </div>
  )
}
