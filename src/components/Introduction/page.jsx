import { Lilita_One } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";

const dancing = Dancing_Script({ subsets: ["latin"], weight: ["400"] });
const lilita = Lilita_One({ subsets: ["latin"], weight: ["400"] });

const Introduction = () => {
  return (
    <div id="intro" className="pt-10">
      <div className=" flex flex-col md:items-center">
        <h1
          className={`${lilita.className} font-bold md:text-6xl text-3xl text-color-hover dark:text-color-primary [text-shadow:_1px_4px_4px_#222] dark:[text-shadow:_1px_4px_4px_#fff]`}
        >
          Hi, Im AL
        </h1>
        <p className="mt-3 text-color-background dark:text-color-text mb-5">
          Hello I'm Al, I'm a Programmer. Actually i'm just bored with all this
          stuff. I just can express myself with my code. Honestly, i'm not good
          at writing my personality. This website i make not just for me, but...
        </p>
        <Image
          src={"/intro.gif"}
          width={1280}
          height={720}
          alt={"intro"}
          className="rounded-3xl  shadow-color-hover shadow-xl dark:shadow-color-primary dark:shadow-md mb-5"
        />
        <div className="flex relative justify-center items-center flex-col mt-10 mb-10">
          <Image
            src={"/fav7.gif"}
            width={70}
            height={50}
            alt={"intro"}
            className="absolute top-0"
          />

          <Image src={"/fav8.gif"} width={250} height={250} alt={"intro"} />
          <h3 className={`${dancing.className} text-xl`}>
            Ini namanya Totorooo, Lucuu kann
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
