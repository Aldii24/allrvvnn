"use client";

import { useTheme } from "@/app/context/themeContext";
import Image from "next/image";

const OutScene = () => {
  const { theme } = useTheme();

  return (
    <div className="mt-20">
      <div className="relative">
        <div className="flex justify-end">
          <Image
            src={"/fav10.gif"}
            width={250}
            height={250}
            alt={"totoro"}
            className="transform -scale-x-100 md:w-[750px]"
          />
        </div>
        {theme === "light" ? (
          <div className="">
            <div className="absolute top-0 left-10">
              <Image src={"/fav9.gif"} width={100} height={100} alt="sun" className="md:w-[300px]" />
            </div>
            <div className="absolute top-12">
              <Image
                src={"/grass.gif"}
                width={1280}
                height={720}
                alt={"grass"}
              />
            </div>
          </div>
        ) : (
          <div className="absolute top-0">
            <Image src={"/fav5.gif"} width={150} height={100} alt={"grass"} className="md:w-[300px]"/>
          </div>
        )}
      </div>
    </div>
  );
};

export default OutScene;
