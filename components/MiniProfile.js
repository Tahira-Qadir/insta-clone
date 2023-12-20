/* eslint-disable @next/next/no-img-element */


export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img src="/profile.png" 
            alt="User-Profile-Image" 
            className="h-16 cursor-pointer rounded-full border p-[2px]" />
            <div className="flex-1 ml-4">
                <h2 className="font-bold">Tahira Qadir</h2>
                <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
            </div>
            <button className="font-semibold text-blue-400">Sign Out</button>
    </div>
  )
}
