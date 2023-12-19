import Image from "next/image";

export default function Header() {
  return (
    <div>
      {/* Left */}

      <div className="flex items-center justify-between max-w-6xl"> 
        <div className="h-24 w-24 cursor-pointer relative hidden lg:inline-grid">
            <Image src="/logo.png" alt="Intagram-logo-1" layout="fill" className="object-contain" />
        </div>
        <div className="h-24 w-10 cursor-pointer relative  lg:hidden">
            <Image src="/logo2.png" alt="Intagram-logo-2" layout="fill" className="object-contain" />
        </div>
        <h1>Right Side</h1>
      </div>
      {/* Middle */}


      {/* Right */}
    </div>
  )
}
