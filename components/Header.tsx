'use client';

import {useRouter} from "next/navigation";
import {twMerge} from "tailwind-merge";
import {RxCaretLeft, RxCaretRight} from "react-icons/rx";
import {HiHome} from "react-icons/hi";
import {BiSearch} from "react-icons/bi";
import Button from "@/components/Button";

interface HeaderProps{
    children: React.ReactNode;
    className?: string;
}

export default function Header({children, className} : HeaderProps){
    const router = useRouter();
    const handleLogout = () => {
        // handle logout in the future
    }
    return (
        <div className={twMerge(`
               h-fit
               bg-gradient-to-b
               from-emerald-800
               p-6`,
               className
            )}>
            <div className="w-full mb-4 flex items-center justify-between">
                <div className="hidden md:flex gap-x-2 items-center">
                    <button onClick={() => router.back()}
                        className="bg-black rounded-full flex items-center justify-center
                               hover:opacity-75 transition">
                        <RxCaretLeft size={35} className="text-white"/>
                    </button>
                    <button onClick={() => router.forward()}
                        className="bg-black rounded-full flex items-center justify-center
                               hover:opacity-75 transition">
                        <RxCaretRight size={35} className="text-white"/>
                    </button>
                </div>
                <div className="flex md:hidden gap-x-2 items-center">
                    <button className="bg-white rounded-full p-2 flex items-center justify-center
                                hover:opacity-75 transition">
                        <HiHome className="text-black" size={20}/>
                    </button>
                    <button className="bg-white rounded-full p-2 flex items-center justify-center
                                hover:opacity-75 transition">
                        <BiSearch className="text-black" size={20}/>
                    </button>
                </div>
                <div className="flex items-center justify-between gap-x-4">
                    <>
                        <div>
                            <Button onClick={() => {}} className="bg-transparent text-neutral-300 font-medium">
                                Sign Up
                            </Button>
                        </div>
                        <div>
                            <Button onClick={() => {}} className="px-6 py-2 bg-white">
                                Log In
                            </Button>
                        </div>
                    </>
                </div>
            </div>
            {children}
        </div>
    );
}