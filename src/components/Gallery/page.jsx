"use client";

import { Circle } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({ subsets: ["latin"], weight: ["400"] });

const slideMoon = [
  "/moon1.jpeg",
  "/moon2.jpeg",
  "/moon3.jpeg",
  "/moon4.jpeg",
  "/moon5.jpeg",
];

const Galerry = ({ autoPlay }) => {
  const [currentMoon, setCurrentMoon] = useState(0);

  const handlePrev = () => {
    const isFirstSlide = currentMoon === 0;
    const newIndex = isFirstSlide ? slideMoon.length - 1 : currentMoon - 1;
    setCurrentMoon(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentMoon === slideMoon.length - 1;
    const newIndex = isLastSlide ? 0 : currentMoon + 1;
    setCurrentMoon(newIndex);
  };

  useEffect(() => {
    let intervalId = null;
    if (autoPlay) {
      intervalId = setInterval(handleNext, 3000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [currentMoon, autoPlay]);

  return (
    <div className="mt-10">
      <div className="relative">
        <div className="absolute">
          <Image src={"/fav4.gif"} width={1280} height={720} />
        </div>
        <div className="pt-24">
          <Image
            src={slideMoon[currentMoon]}
            width={1280}
            height={720}
            alt="moon"
            className="rounded-3xl shadow-color-hover shadow-xl dark:shadow-color-primary dark:shadow-md"
          />
        </div>
        <div className="absolute flex gap-1 md:bottom-24 bottom-14 inset-x-0 justify-center">
          {slideMoon.map((_, index) => (
            <div key={index}>
              <button onClick={() => setCurrentMoon(index)}>
                <Circle
                  size={10}
                  className={`text-color-primary rounded-full ${
                    index === currentMoon ? "bg-color-primary" : ""
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-5">
          <h3 className={`${dancing.className} md:text-5xl text-lg`}>
            As u know, We look at the same moon, right?
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Galerry;
