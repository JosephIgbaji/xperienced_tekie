'use client';
import { useState } from "react";
import Link from "next/link";
import "../globals.css"

import Image from "next/image"
import X from "../../../public/assets/images/X.png"

type Props = {}

export default function PrimaryNavbar({}: Props) {
    const [showDropDown, setShowDropDown] = useState(false)


  return (<nav className="flex justify-between md:px-10 items-center ">
    <div>
        <Link href="/">
            <Image src={X} width="100" height="100" alt="Xperienced Tekie logo"/>
        </Link>
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
            <Link href="/dashboard">
            
            <li className="rounded-lg bg-blue-950 text-white p-2 hover:bg-blue-700 cursor-pointer">Dashboard</li>
            </Link>
        </ul>
       { showDropDown && (<ul className="absolute z-20 top-10 left-10 bg-blue-900 text-white flex flex-col gap-2">
            <li onClick={() => setShowDropDown(!showDropDown)} className="cursor-pointer hover:bg-blue-950 p-2">Frontend Internship</li>
            <li onClick={() => setShowDropDown(!showDropDown)} className="cursor-pointer hover:bg-blue-950 p-2">Backend Internship</li>
        </ul> )}
    </div>
    <div className="md:hidden">
    <svg width="40" height="34" viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.33337 8.50001C3.33337 7.71761 4.07957 7.08334 5.00004 7.08334H35C35.9205 7.08334 36.6667 7.71761 36.6667 8.50001C36.6667 9.28241 35.9205 9.91668 35 9.91668H5.00004C4.07957 9.91668 3.33337 9.28241 3.33337 8.50001Z" fill="#00234E"/>
  <path d="M3.33337 17C3.33337 16.2176 4.07957 15.5833 5.00004 15.5833H35C35.9205 15.5833 36.6667 16.2176 36.6667 17C36.6667 17.7824 35.9205 18.4167 35 18.4167H5.00004C4.07957 18.4167 3.33337 17.7824 3.33337 17Z" fill="#00234E"/>
  <path d="M5.00004 24.0833C4.07957 24.0833 3.33337 24.7176 3.33337 25.5C3.33337 26.2824 4.07957 26.9167 5.00004 26.9167H35C35.9205 26.9167 36.6667 26.2824 36.6667 25.5C36.6667 24.7176 35.9205 24.0833 35 24.0833H5.00004Z" fill="#00234E"/>
</svg>
    </div>
  </nav>
  )
}