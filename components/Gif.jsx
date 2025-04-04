import Image from "next/image";
import gif from "@/public/icons/prolens.gif"; // Importing the GIF

export default function Gif() {
  return (
    <div className="flex justify-center items-center min-h-[100px] min-w-full bg-black mt-10">
      <Image 
        src={gif}
        alt="Animated GIF"
        width={3000}
        height={600}
        unoptimized // Disables Next.js optimization (needed for GIFs)
        backgroundColor="black"
        
      />
    </div>
  );
}
