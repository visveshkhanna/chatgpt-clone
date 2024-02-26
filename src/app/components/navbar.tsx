"use strict";

import { LuUpload } from "react-icons/lu";
import { BiEdit } from "react-icons/bi";

import { Button } from "@/components/ui/button";
import { sidebarCollapsed } from "../atom";
import { useAtom } from "jotai";
import { SelectModel } from "./model";

export function NavBar() {
  const [isSidebarOpen, setSidebarOpen] = useAtom(sidebarCollapsed);
  return (
    <div className="hidden lg:flex flex-row w-full py-4 pr-4 justify-between items-center">
      <div className="flex flex-row space-x-2 items-center px-2 lg:px-0">
        {!isSidebarOpen && (
          <Button
            variant={"ghost"}
            className="w-10 h-10 p-0 m-0 border-muted-foreground/40 border-[1px]"
          >
            <BiEdit className="w-4 h-4" />
          </Button>
        )}
        <SelectModel />
      </div>
      <Button
        variant={"ghost"}
        className="w-10 h-10 p-0 m-0 border-muted-foreground/40 border-[1px]"
      >
        <LuUpload className="w-4 h-4" />
      </Button>
    </div>
  );
}
