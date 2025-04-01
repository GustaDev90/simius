"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center">
      <Image 
        src="/simius.png" alt="Logo" 
        width={100} height={50} 
        className="cursor-pointer md:ml-20" 
      />
      <div className="ml-auto md:mr-20 mr-6 flex gap-4">
        <Link href="/chat">
         <Button 
           variant="outline" 
           className="md:w-[150px] h-[50px] cursor-pointer text-red-800 border-3 border-red-800 font-bold hover:text-red-800"
         >
           Talk to Simius
         </Button>
        </Link>
      </div>
    </nav>
  );
}
