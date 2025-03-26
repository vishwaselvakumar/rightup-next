"use client"; // Ensure client-side execution

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Animation = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    import("@/public/work/Animation.json").then((data) => setAnimationData(data.default));
  }, []);

  if (!animationData) return <p>Loading animation...</p>;

  return (
    <div className="flex justify-center items-center h-screen">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default Animation;
