"use client";

import { useTheme } from "@/app/context/themeContext";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({ subsets: ["latin"], weight: ["400"] });

const Favorites = () => {
  const { theme } = useTheme();

  return (
    <div className="relative mt-10">
      <div className="absolute top-0 right-0 left-0">
        {theme === "light" ? (
          <Image
            src={"/fav3.gif"}
            width={1280}
            height={100}
            alt={"intro"}
            className="rounded-3xl shadow-color-hover shadow-xl"
          />
        ) : (
          <Image
            src={"/fav6.gif"}
            width={1280}
            height={100}
            alt={"intro"}
            className="rounded-3xl shadow-color-primary shadow-lg"
          />
        )}
      </div>
      <div className="flex relative">
        <div>
          <Image
            src={"/fav1.gif"}
            width={720}
            height={720}
            alt={"intro"}
            className="md:my-56 my-5"
          />
        </div>
        <div className="absolute md:right-28 md:top-24 right-0 top-0">
          <Image
            src={"/fav2.gif"}
            width={100}
            height={100}
            alt={"intro"}
            className=" md:h-80 md:w-80"
          />
        </div>
      </div>
      <div className="mt-5 flex justify-center">
        <h3 className={`${dancing.className}`}>Kalo ini namanya Haku, dari anime Spirited Away</h3>
      </div>
    </div>
  );
};

export default Favorites;
