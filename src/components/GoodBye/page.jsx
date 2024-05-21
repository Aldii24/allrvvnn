import { Dancing_Script } from "next/font/google";
import Image from "next/image";

const dancing = Dancing_Script({ subsets: ["latin"], weight: ["400"] });

const GoodBye = () => {
  return (
    <div className="mt-10">
      <div>
        <div className="flex justify-center items-center">
          <Image src={"/goodbye.gif"} width={200} height={150} alt={"intro"} />
        </div>
        <div>
          <Image
            src={"/cat.gif"}
            width={1280}
            height={720}
            alt={"cat"}
            className="rounded-3xl  shadow-color-hover shadow-xl dark:shadow-color-primary dark:shadow-md mt-5"
          />
        </div>
        <div className="bg-color-border dark:bg-color-hover p-4 rounded-3xl shadow-color-hover shadow-xl dark:shadow-color-primary dark:shadow-md mt-10">
          <div>
            <h1
              className={`${dancing.className} text-3xl text-center font-bold`}
            >
              Time to say Goodbye
            </h1>
          </div>
          <div className="mt-2">
            <p className="text-[15px] text-center">
              I wanna say thank u for visiting my ugly website. I hope you had a
              nice day, sweet smile, nice heart.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodBye;
