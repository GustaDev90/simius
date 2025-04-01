import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <Image 
        src="/simius.png" alt="404" 
        width={400} 
        height={400} 
      />
      <h1 className="text-4xl font-medium">I"m working in that : )</h1>
    </div>
  );
}