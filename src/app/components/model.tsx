"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PiStarFour } from "react-icons/pi";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { BiEdit } from "react-icons/bi";
import { useState } from "react";

export function SelectModel() {
  const [model, setModel] = useState("4");
  return (
    <Select onValueChange={(e) => setModel(e)} defaultValue="4">
      <SelectTrigger className="w-fit px-4 py-3 h-10 focus-visible:ring-0 focus:ring-0 hover:bg-primary/10">
        <SelectValue placeholder="Select a Model">
          <div className="flex flex-row space-x-1 items-center">
            <span className="text-lg font-semibold">ChatGPT</span>
            <span className="text-xl text-muted-foreground font-semibold">
              {model}
            </span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="focus-visible:ring-0 border-0 bg-[#171717]">
        <SelectGroup className="w-[350px]">
          <SelectItem value="4" className="group">
            <div className="flex flex-row w-full items-center py-4 px-2 space-x-4">
              <PiStarFour className="w-5 h-5" />
              <div className="flex flex-col">
                <p>GPT-4</p>
                <p className="text-sm text-muted-foreground">
                  With DALL·E, browsing and analysis
                </p>
                <p className="text-sm text-muted-foreground">
                  Limit 40 messages / 3 hours
                </p>
              </div>
              <div className="flex-row space-x-1 absolute right-3 text-sm top-2 hidden group-hover:flex items-center">
                <BiEdit />
                <p>New Chat</p>
              </div>
            </div>
          </SelectItem>
          <SelectItem value="3.5" className="group">
            <div className="group flex flex-row w-full items-center py-4 px-2 space-x-4">
              <HiOutlineLightningBolt className="w-5 h-5" />
              <div className="flex flex-col">
                <p>GPT-3.5</p>
                <p className="text-sm text-muted-foreground">
                  Great for everyday tasks
                </p>
              </div>
              <div className="flex-row space-x-1 absolute right-3 text-sm top-2 hidden group-hover:flex items-center">
                <BiEdit />
                <p>New Chat</p>
              </div>
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
