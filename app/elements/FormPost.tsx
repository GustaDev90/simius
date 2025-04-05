"use client"

import { useState } from "react";
import Post from "./Post";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"

export default function FormPost() {
  const [posts, setPosts] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setPosts([...posts, input]);
    setInput("");
  };

  const handleDelete = (index: number) => {
    setPosts(posts.filter((_, i) => i !== index));
  }
  
  return (
    <div className="max-w-2xl mx-auto p-4 mt-20">
      <form onSubmit={handleSubmit} className="mb-8">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What's happening?"
          className="w-full p-4 rounded-lg h-32 border-3 border-red-800"
        />
        <Button
          type="submit"
          disabled={input.trim() === ""} 
          className="mt-4 bg-red-800 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors cursor-pointer w-full h-[40px]"
        >
          Post
        </Button>
      </form>

      <div className="space-y-4 mt-32">
        {posts.map((post, index) => (
          <Post 
            key={index} 
            content={post} 
            onDelete={() => handleDelete(index)} 
          />
        ))}
      </div>
    </div>
  );
}

