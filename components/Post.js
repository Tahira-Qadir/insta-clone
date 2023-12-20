/* eslint-disable @next/next/no-img-element */

import { DotsHorizontalIcon } from "@heroicons/react/outline";


export default function Post({img, userImg, caption, userName, id}) {
  return (
    <div className="bg-white my-7 border rounded-md">

      {/* Post Header */}

      <div className="flex items-center p-5">
        <img 
        className="h-12 rounded-full object-cover border p-1 mr-3"
        src={userImg} 
        alt="User-Profile-Image" 
         />
        <p className="font-bold flex-1">{userName}</p>
        <DotsHorizontalIcon className="h-7" />
      </div>

      {/* Post Image */}

      <img className="object-cover w-full" src= {img} alt="" />
    </div>
  )
}
