import { Heart } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

type PostProps = {
  content: string;
};

export default function Post({ content }: PostProps) {
  const [liked, setLiked] = useState<boolean>(false);
  const [likes, setLikes] = useState<number>(0);

  const data: Date = new Date();
  const currentTime: string = data.getHours() + ":" + data.getMinutes(); 

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1); 

    } else {
      setLikes(likes + 1); 
    }
    
    setLiked(!liked);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border-3 border-red-800 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-3 mb-4">
       <div className="w-10 h-10 rounded-full">
        <Image 
         width={20} height={20} 
         src="/banana.png" alt="Profile" 
         className="w-full h-full rounded-full" 
        />
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Anonymous</h3>
          <p className="text-sm text-gray-500">{currentTime}</p>
        </div>
      </div>

      <p className="text-gray-700 mb-4 leading-relaxed">{content}</p>

      <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
        <Heart 
          className="w-5 h-5 text-red-500 cursor-pointer hover:scale-110 transition-transform" 
          onClick={handleLike}
        />
        <span className="text-sm text-red-500">{likes}</span>
      </div>
    </div>
  );
}