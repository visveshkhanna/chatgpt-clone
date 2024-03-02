import { BsThreeDots } from "react-icons/bs";
import { RiArchive2Line } from "react-icons/ri";

export function HistoryItem(
    {title} : {title: string}
) {
    return <div className={"group flex flex-row items-center overflow-hidden w-full py-3 text-sm whitespace-nowrap px-2 hover:bg-accent-foreground/5 cursor-pointer rounded-xl"}>
        <span>{title}</span>
        <div className={"flex-row space-x-1 absolute right-12 hidden group-hover:flex py-4 items-center"}>
            <BsThreeDots className="w-4 h-4 hover:opacity-50" />
            <RiArchive2Line className="w-4 h-4 hover:opacity-50" />
        </div>
    </div>
}