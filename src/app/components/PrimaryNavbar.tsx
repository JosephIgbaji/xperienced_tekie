'use client';
import { useState } from "react";
import "../globals.css"

import Image from "next/image"
import X from "../../../public/assets/images/X.png"

type Props = {}

export default function PrimaryNavbar({}: Props) {
    const [showDropDown, setShowDropDown] = useState(false)


  return (<nav className="flex justify-between py-4 items-center ">
    <div>
        <Image src={X} width="100" height="100" alt="Xperienced Tekie logo"/>
    </div>
    <div className="relative hidden md:block font-semibold">
        <ul className="flex gap-4 items-center">
            <li className="cursor-pointer">Home</li>
            <li onClick={() => setShowDropDown(!showDropDown)} className="flex items-center cursor-pointer">Internship Path 
                <span>
                    <svg width="35" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6784 13.8215C11.0276 13.1706 9.97228 13.1706 9.32141 13.8215C8.67053 14.4724 8.67053 15.5276 9.32141 16.1785L19.3214 26.1785C19.9723 26.8294 21.0276 26.8294 21.6784 26.1785L31.6784 16.1785C32.3293 15.5276 32.3293 14.4724 31.6784 13.8215C31.0276 13.1706 29.9723 13.1706 29.3214 13.8215L20.4999 22.643L11.6784 13.8215Z" fill="#2D3648"/>
                    </svg>
                </span>
            </li>
            <li className="rounded-lg bg-blue-950 text-white p-2 hover:bg-blue-700 cursor-pointer">Dashboard</li>
        </ul>
       { showDropDown && (<ul className="absolute top-10 left-10 bg-blue-900 text-white flex flex-col gap-2">
            <li onClick={() => setShowDropDown(!showDropDown)} className="cursor-pointer hover:bg-blue-950 p-2">Frontend Internship</li>
            <li onClick={() => setShowDropDown(!showDropDown)} className="cursor-pointer hover:bg-blue-950 p-2">Backend Internship</li>
        </ul> )}
    </div>
  </nav>
  )
}