"use client";
import { MdOutlineSegment } from "react-icons/md";
import { SelectModel } from "./model";
import { BiEdit } from "react-icons/bi";
import { sidebarCollapsed } from "../atom";
import { useAtom } from "jotai";

export function MobileNavbar() {
  const [isSidebarOpen, setSidebarOpen] = useAtom(sidebarCollapsed);
  const collapse = () => setSidebarOpen(!isSidebarOpen);
  return (
    <div className="sticky lg:hidden flex flex-row w-full py-2 px-2 justify-between items-center">
      <MdOutlineSegment className="w-6 h-6" onClick={collapse} />
      <SelectModel />
      <BiEdit className="w-6 h-6" />
    </div>
  );
}
