import Image from "next/image";
import gif from "@/public/icons/rightupnext.gif"; // Importing the GIF

export default function Gifs() {
  return (
    <div className="flex justify-center items-center min-h-[100px] min-w-full bg-black">
      <Image 
        src={gif}
        alt="Animated GIF"
        width={3000}
        height={300}
        unoptimized // Disables Next.js optimization (needed for GIFs)
        backgroundColor="black"
        
      />
    </div>
  );
}
