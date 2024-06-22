import { Button } from "@/components/ui/button";
import React from "react";
import Image from 'next/image';

function LoginHeader() {
    return (
        <header className="min-h-[10vh] min-w-full flex items-center justify-between p-4 shadow-md">
            <span className="flex items-center px-2 gap-4">
                <Image src="/logo.png" alt="" width={25} height={25} />
                <a
                    href="/"
                    className="font-bold uppercase tracking-wide text-teal-500 text-xl"
                >
                    Home
                </a>
            </span>
        </header>
    );
}

export default LoginHeader;

