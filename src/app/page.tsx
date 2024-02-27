"use client";
import { Sidebar } from "./components/sidebar";
import { FaArrowUp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { NavBar } from "./components/navbar";
import { MobileNavbar } from "./components/navbarmobile";

export default function Home() {
  return (
    <div className="flex flex-row bg-[#212121] h-[100dvh] w-full ">
      <Sidebar />
      <div className="flex flex-col w-full">
        <NavBar />
        <MobileNavbar />
        <div className="flex-1 overflow-auto flex-col flex">
          <span>Messages and other data</span>
        </div>
        <div className="w-full px-4 lg:pl-0">
          <div>Most commonly used?</div>
          <div className="flex flex-row pt-2">
            <Textarea
              placeholder="Message ChatGPT..."
              className="resize-none border-[1px] hover:border-muted-foreground/40 focus:border-muted-foreground/40 pr-10"
            />
            <Button className="flex absolute right-5 translate-y-1 opacity-20 m-0 px-2 py-2 cursor-default">
              <FaArrowUp className="w-4 h-4" />
            </Button>
          </div>
          <div className="relative px-2 py-2 text-center text-xs text-muted-foreground">
            <span>
              ChatGPT can make mistakes. Consider checking important
              information.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
