import Image from "next/image";
import { ReactNode } from "react";
import photo from '@/photo/netflix bg.jpg'
import Logo from '@/photo/netflix-2-logo-svgrepo-com.svg'

export default function AuthLayout({children}: {children: ReactNode}) {
    return(
        <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center
        md:bg-transparent">
            <Image src={photo} alt="background image" className="hidden sm:flex sm:object-cover -z-10
            brightness-50"
            priority
            fill
            
            />
            {children}
            <Image
            src={Logo}
            alt="Netflix Logo"
            className="absolute left-4 top-4 object-contain md:left-10 md:top-0"
            width={120}
            height={120}/>
        </div>
    )
} 