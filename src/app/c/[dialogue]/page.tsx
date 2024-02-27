import { cn } from "@/lib/utils";

export default function ChatPage({ params }: { params: { dialogue: string } }) {
  return (
    <div className={cn("flex flex-col h-[100dvh]")}>
      <div className="flex bg-red-100">Header</div>
      <div className="flex flex-1 bg-gray-100">Body</div>
      <div className="flex bg-blue-100">Footer</div>
    </div>
  );
}
