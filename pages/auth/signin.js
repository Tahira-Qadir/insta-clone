/* eslint-disable @next/next/no-img-element */
import {getProviders, signIn} from "next-auth/react"
import Head from "../../components/Header"
export default function signin({providers}) {
  return (
    <>
      <Head />
      <div className="flex justify-center space-x-7 mt-20">
        <img className="hidden md:inline-flex object-cover rotate-6 md:w-48" src="/insta-img.png" alt="instagram-img"/>
        <div>
            {Object.values(providers).map((provider) =>(
                <div key={provider.name} className="flex flex-col items-center">
                    <img className="w-32 object-cover " src="/instagram.png" alt="instagram-img"  />
                    <p className="text-sm italic my-10 text-center">This App is created for learning purpose.</p>
                    <button onClick={() => signIn(provider.id, {callbackUrl: "/"})} className="bg-red-400 text-white hover:bg-red-500 rounded-lg p-3">Sign In with {provider.name}</button>
                </div>
            ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
    const providers = await getProviders();
    return {
        props: {providers}
    }
}