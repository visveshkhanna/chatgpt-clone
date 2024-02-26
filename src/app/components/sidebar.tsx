"use client";
import { cn } from "@/lib/utils";
import { PiSquaresFourLight } from "react-icons/pi";
import { useEffect, useRef, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Logo } from "./logo";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
export function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const collapse = () => setSidebarOpen(!isSidebarOpen);
  return (
    <div className="flex-row items-center hidden lg:flex space-x-1">
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
        <FaChevronLeft
          className={cn(
            "w-5 h-5 opacity-50",
            "cursor-pointer hover:opacity-100",
            "transition duration-500"
          )}
          onClick={collapse}
        />
      ) : (
        <FaChevronRight
          className={cn(
            "w-5 h-5 opacity-50",
            "cursor-pointer hover:opacity-100",
            "transition duration-500"
          )}
          onClick={collapse}
        />
      )}
    </div>
  );
}
