import Image from "next/image";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({ subsets: ["latin"], weight: ["400"] });

const AboutArrietty = () => {
  return (
    <div className="mt-10">
      <div className="bg-color-border dark:bg-color-hover p-4 rounded-3xl shadow-color-hover shadow-xl dark:shadow-color-primary dark:shadow-md">
        <div className="flex items-center gap-4">
          <div>
            <h1 className={`${dancing.className} text-3xl font-bold mb-2`}>
              Arrietty
            </h1>
          </div>
          <div>
            <Image src={"/love.gif"} width={50} height={50} alt={"intro"} />
          </div>
        </div>
        <div>
          <p className="text-color-hover dark:text-color-text">
            Arrietty, her name is beautiful, according to her face. I liked her
            at first sight. She is as sweet as her behavior, she is funny, she
            is a loving person. Arrietty is beautiful, Arrietty is
            extraordinary.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutArrietty;
