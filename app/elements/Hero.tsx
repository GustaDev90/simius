import { FlipText } from "@/components/magicui/flip-text";
import { Button } from "@/components/ui/button";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="h-screen flex justify-center items-center -mt-40 flex-col gap-8 font-bold">
        <FlipText 
         className="text-5xl dark:text-white md:text-7xl md:leading-[5rem] text-black-800"
        >
          Welcome
        </FlipText>
        <FlipText 
          className="text-5xl -tracking-widest dark:text-white md:text-7xl md:leading-[5rem] text-black-800">
          to Simius
        </FlipText>
        <Link href="/Home">
         <Button 
          className="w-[250px] h-[50px] cursor-pointer bg-red-800 hover:bg-red-700" 
        >
          Get started
        </Button>
        </Link>
      </div>
      <div className="relative">
        <div className="absolute md:w-[350px] w-[50px] h-full left-0 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute md:w-[350px] w-[50px] h-full right-0 z-10 bg-gradient-to-l from-white to-transparent" />
        <Marquee className="-mt-28">
          <div className="space-x-20 flex">
            <Image src="/banana.png" alt="Logo" width={150} height={75} className="md:ml-20" />
            <Image src="/banana.png" alt="Logo" width={150} height={75} className="md:ml-20" />
            <Image src="/banana.png" alt="Logo" width={150} height={75} className="md:ml-20" />
            <Image src="/banana.png" alt="Logo" width={150} height={75} className="md:ml-20" />
            <Image src="/banana.png" alt="Logo" width={150} height={75} className="md:ml-20" />
            <Image src="/banana.png" alt="Logo" width={150} height={75} className="md:ml-20" />
            <Image src="/banana.png" alt="Logo" width={150} height={75} className="md:ml-20" />
          </div>
        </Marquee>
      </div>
    </>
  );
}
