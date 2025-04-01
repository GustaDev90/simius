import { Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 border-t mt-32 bg-red-900 text-white">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {currentYear} Simius. All rights reserved.
          </p>
          
          <div className="flex items-center mt-4 md:mt-0">
            <Link 
              href="https://github.com/GustaDev90" 
              target="_blank"
              className="flex items-center gap-2"
            >
              <Github size={20} />
              <span className="text-sm">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}