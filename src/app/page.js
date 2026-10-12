import Image from "next/image";
import Home from "@/components/Home/Home";

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <Home />
    </div>
  );
}
