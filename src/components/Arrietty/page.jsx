"use client";

import { Circle } from "@phosphor-icons/react/dist/ssr";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";

const dancing = Dancing_Script({ subsets: ["latin"], weight: ["400"] });

const arrietty = [
  "/arrietty1.gif",
  "/arrietty2.gif",
  "/arrietty6.gif",
  "/arrietty7.gif",
];

const Arrietty = ({ autoPlay }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    const isLastSlide = currentImage === arrietty.length - 1;
    const newIndex = isLastSlide ? 0 : currentImage + 1;
    setCurrentImage(newIndex);
  };

  useEffect(() => {
    let intervalId = null;

    if (autoPlay) {
      intervalId = setInterval(handleNext, 2000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  });

  return (
    <div className="mt-10">
      <div className="flex justify-center">
        <Image src={"/bird.gif"} width={150} height={100} alt={"bird"} />
      </div>
      <div className="relative">
        <div>
          <Image
            src={arrietty[currentImage]}
            width={1280}
            height={720}
            alt={"arrietty"}
            className="rounded-3xl shadow-color-hover shadow-xl dark:shadow-color-primary dark:shadow-md"
          />
        </div>
        <div className="flex absolute bottom-16 justify-center inset-x-0 gap-1">
          {arrietty.map((_, index) => (
            <div key={index}>
              <button onClick={() => setCurrentImage(index)}>
                <Circle
                  size={10}
                  className={`text-color-text rounded-full ${
                    currentImage === index ? "bg-color-primary" : ""
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
        <div className="mt-5 flex justify-center">
          <p className={`${dancing.className} text-xl font-bold mb-2`}>
            Ini Arrietty, Cantik kannn
          </p>
        </div>
      </div>
    </div>
  );
};

export default Arrietty;
