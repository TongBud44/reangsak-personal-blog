import { Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#EFEEEB] flex flex-col justify-between items-center gap-6 px-4 py-10 lg:flex-row lg:py-[60px] lg:px-[120px]">
      <div className="flex flex-col items-center space-y-4 sm:space-y-0">
        <div className="flex space-x-4">
          <span className="font-medium text-base text-[#43403B]">Get in touch</span>
          <div className="bg-[#43403B] rounded-full w-6 h-6 pl-1 pt-[3px]">
          <a href="#" className="hover:text-muted-foreground text-white">
            <Linkedin size={17} />
            <span className="sr-only">LinkedIn</span>
          </a>
          </div>
          <div className="bg-[#43403B] rounded-full w-6 h-6 pl-[3px] pt-[3px]">
          <a href="#" className="hover:text-muted-foreground text-white">
            <Github size={18} />
            <span className="sr-only">GitHub</span>
          </a>
          </div>
          <div className="bg-[#43403B] rounded-full w-6 h-6 pl-[3px] pt-[3px]">
          <a href="#" className="hover:text-muted-foreground text-white">
            <Mail size={18} />
            <span className="sr-only">Email</span>
          </a>
          </div>
        </div>
      </div>
      <a href="/" className="hover:text-muted-foreground font-medium underline text-base text-[#26231E]">
        Home page
      </a>
    </footer>
  );
}
