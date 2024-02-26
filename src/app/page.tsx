import Image from "next/image";
import { Sidebar } from "./components/sidebar";

export default function Home() {
  return (
    <div className="flex flex-row bg-[#212121] h-screen">
      <Sidebar />
    </div>
  );
}
