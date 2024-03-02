import { BsThreeDots } from "react-icons/bs";
import { RiArchive2Line } from "react-icons/ri";

export function HistoryItem(
    {title} : {title: string}
) {
    return <div className={"group flex flex-row items-center justify-between overflow-hidden w-full py-3 text-sm whitespace-nowrap px-2 hover:bg-accent-foreground/5 cursor-pointer rounded-xl"}>
        <span>{title}</span>
        <div className={"sticky flex-row space-x-1 hidden group-hover:flex items-center"}>
            <BsThreeDots className="w-4 h-4 hover:opacity-50" />
            <RiArchive2Line className="w-4 h-4 hover:opacity-50" />
        </div>
    </div>
}