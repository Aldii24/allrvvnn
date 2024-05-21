"use client";

import { CaretLeft, CaretRight, Circle } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  "/hero1.gif",
  "/hero2.jpeg",
  "/hero2.gif",
  "/hero3.jpeg",
  "/hero3.gif",
  "/hero4.jpeg",
  "/hero4.gif",
  "/hero5.jpeg",
  "/hero5.gif",
  "/hero6.jpeg",
  "/hero6.gif",
  "/hero7.gif",
  "/hero8.gif",
  "/hero9.gif",
];

const Caraousel = ({ autoPlay }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const handlePrev = () => {
    const isFirstSlide = currentImage === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentImage - 1;
    setCurrentImage(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentImage === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentImage + 1;
    setCurrentImage(newIndex);
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
  }, [currentImage, autoPlay]);

  return (
    <div id="hero" className="relative">
      <div>
        <Image
          src={slides[currentImage]}
          alt="hero"
          width={1920}
          height={1080}
          className="rounded-3xl shadow-color-hover shadow-xl"
        />
      </div>
      <div className="absolute inset-x-4 top-1/2 flex justify-between">
        <button
          className="bg-color-text rounded-full md:p-2"
          onClick={handlePrev}
        >
          <CaretLeft size={25} className="text-color-background p-1" />
        </button>
        <button
          className="bg-color-text rounded-full md:p-2"
          onClick={handleNext}
        >
          <CaretRight size={25} className="text-color-background p-1" />
        </button>
      </div>
      <div className="flex absolute gap-1 bottom-4 inset-x-0 justify-center">
        {slides.map((_, index) => (
          <div key={index}>
            <button onClick={() => setCurrentImage(index)}>
              <Circle
                size={10}
                className={`text-color-text ${
                  currentImage === index ? "bg-color-text rounded-full p-1" : ""
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Caraousel;
