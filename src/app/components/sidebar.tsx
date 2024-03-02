"use client";
import { cn } from "@/lib/utils";
import { PiSquaresFourLight } from "react-icons/pi";
import { BsPersonGear } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { RiUserStarLine } from "react-icons/ri";
import { LuSettings2 } from "react-icons/lu";
import { BiEdit } from "react-icons/bi";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Logo } from "./logo";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import { sidebarCollapsed } from "../atom";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {HistoryItem} from "@/app/components/item";
export function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useAtom(sidebarCollapsed);
  const collapse = () => setSidebarOpen(!isSidebarOpen);
  return (
    <div className="flex-row lg:items-center flex space-x-2 fixed lg:sticky z-10">
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            exit={{ x: -250 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="flex flex-col w-[260px] h-screen bg-[#171717]"
          >
            {/* Sidebar content */}
            <div
              className={cn(
                "flex flex-col h-screen px-4 py-4",
                "transition duration-300"
              )}
            >
              <div className="flex flex-col space-y-2 h-full">
                <div className="flex flex-row items-center justify-between hover:bg-secondary/40 px-1.5 py-1.5 rounded-xl cursor-pointer">
                  <div className="flex flex-row space-x-2 items-center">
                    <Logo />
                    <span className="text-[14px]">ChatGPT</span>
                  </div>
                  <BiEdit className="w-[18px] h-[18px]" />
                </div>
                <div className="flex flex-row items-center justify-between hover:bg-secondary/40 px-1.5 py-1.5 rounded-xl cursor-pointer">
                  <div className="flex flex-row space-x-2 items-center">
                    <PiSquaresFourLight className="w-7 h-7" />
                    <span className="text-[14px]">Explore GPTs</span>
                  </div>
                </div>
                  <div className="flex flex-col flex-grow py-2 overflow-auto space-y-1">
                        <div className={"text-xs text-muted-foreground"}>Previous 7 days</div>
                      <HistoryItem title={"Placement"} />
                      <HistoryItem title={"Placement"} />
                  </div>

                  <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                          <div
                              className="flex flex-row space-x-2 items-center hover:bg-secondary/40 px-3 py-3 rounded-xl cursor-pointer">
                              <Image src={"/avatar.svg"} width={28} height={28} alt={"profile"}
                                     className="bg-white rounded-full"/>
                              <span className={"text-[14px]"}>Visvesh Khanna</span>
                          </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="px-2 py-2 w-[240px] border-0 mx-1 bg-[#2F2F2F]">
                          <DropdownMenuItem className="flex flex-row items-center space-x-2 px-3 py-3">
                              <RiUserStarLine className="w-5 h-5"/>
                              <p>My Plan</p>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex flex-row items-center space-x-2 px-3 py-3">
                              <BsPersonGear className="w-5 h-5"/>
                              <p>My GPTs</p>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex flex-row items-center space-x-2 px-3 py-3">
                              <LuSettings2 className="w-5 h-5"/>
                              <p>Customize ChatGPT</p>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex flex-row items-center space-x-2 px-3 py-3">
                              <CiSettings className="w-5 h-5"/>
                              <p>Settings</p>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="px-2 py-2">Log out</DropdownMenuItem>
                      </DropdownMenuContent>
                  </DropdownMenu>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
        {isSidebarOpen ? (
            <>
                <FaChevronLeft
                    className={cn(
                        "w-5 h-5 opacity-50",
                        "cursor-pointer hover:opacity-100",
                        "transition duration-500",
              "hidden lg:flex"
            )}
            onClick={collapse}
          />
          <Button
            variant={"ghost"}
            className="w-10 h-10 p-0 m-2 border-muted-foreground/40 border-[1px] lg:hidden"
            onClick={collapse}
          >
            <IoClose className="w-6 h-6" />
          </Button>
        </>
      ) : (
        <FaChevronRight
          className={cn(
            "w-5 h-5 opacity-50 pl-1",
            "cursor-pointer hover:opacity-100",
            "transition duration-500",
            "hidden lg:flex"
          )}
          onClick={collapse}
        />
      )}
    </div>
  );
}
