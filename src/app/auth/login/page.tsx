import { Button } from "@/components/ui/button";

export default function AuthPage() {
  return (
    <div className="flex flex-row min-h-full w-screen bg-[#]">
      <div className="hidden flex-1 lg:flex px-5 py-8 flex-col justify-center h-screen items-center">
        Test
      </div>
      <div className="flex items-center flex-grow px-5 py-8 flex-col justify-center h-screen space-y-2">
        <p className="font-bold text-3xl">Get started</p>
        <div className="flex flex-row space-x-2">
          <Button className="bg-[#3C46FF] hover:bg-[#0000FF] text-white">
            Log in
          </Button>
          <Button className="bg-[#3C46FF] hover:bg-[#0000FF] text-white">
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
}
