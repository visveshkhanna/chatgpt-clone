"use client";
import { cn } from "@/lib/utils";
import { PiSquaresFourLight } from "react-icons/pi";
import { useEffect, useRef, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Logo } from "./logo";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import { sidebarCollapsed } from "../atom";
import { Button } from "@/components/ui/button";
export function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useAtom(sidebarCollapsed);
  const collapse = () => setSidebarOpen(!isSidebarOpen);
  return (
    <div className="flex-row lg:items-center flex space-x-1 fixed lg:sticky ">
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ x: -260 }}
            animate={{ x: 0 }}
            exit={{ x: -260 }}
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
              <div className="flex flex-col space-y-1">
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
            "w-5 h-5 opacity-50",
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
