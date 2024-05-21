"use client";

import { useTheme } from "@/app/context/themeContext";
import Image from "next/image";

const Things = () => {
  const { theme } = useTheme();

  return (
    <div id="favorites" className="md:mt-0 mt-24">
      <div className="flex flex-col gap-4">
        <div className="bg-color-border dark:bg-color-hover p-4 rounded-3xl shadow-color-hover shadow-xl dark:shadow-color-primary dark:shadow-md">
          <div>
            <div className="flex items-center">
              <h1 className="md:text-5xl text-2xl font-bold mb-2">
                THE THINGS
              </h1>
              <Image
                src={"/fav11.gif"}
                width={70}
                height={70}
                alt={"intro"}
                className=""
              />
            </div>
            <p className="text-color-hover dark:text-color-text">
              Honestly, i'm a simple person who likes to learn new things. I like
              to be a quite person cz i feel like i'm not that good. Im not
              scared of being alone, i'm scared if i lost my Mom.
            </p>
          </div>
        </div>
        <div className="flex relative mt-10">
          <Image src={"/fav10.gif"} width={250} height={250} alt={"intro"} />
          {theme === "light" ? (
            <Image
              src={"/fav9.gif"}
              width={80}
              height={80}
              alt={"intro"}
              className="absolute top-0 right-20"
            />
          ) : (
            <Image
              src={"/fav14.gif"}
              width={80}
              height={80}
              alt={"intro"}
              className="absolute top-0 right-20 rounded-full"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Things;
