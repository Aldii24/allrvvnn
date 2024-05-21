import Image from "next/image";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({ subsets: ["latin"], weight: ["400"] });

const images = [
  "/film-1.jpeg",
  "/film-2.jpeg",
  "/film-3.jpeg",
  "/film-4.jpeg",
  "/film-5.jpeg",
  "/film-6.jpeg",
  "/film-7.jpeg",
  "/film-8.jpeg",
  "/film-9.jpeg",
  "/film-10.jpeg",
  "/film-11.jpeg",
  "/film-12.jpeg",
  "/film-13.jpeg",
  "/film-14.jpeg",
  "/film-15.jpeg",
];

const Movie = () => {
  return (
    <div className="mt-20 md:mt-0">
      <div className="mb-5">
        <div className="flex items-center">
          <h1 className={`${dancing.className} text-5xl font-bold mb-2`}>
            Hi, There
          </h1>
          <Image src={"/fav12.gif"} width={80} height={80} alt={"intro"} />
        </div>
        <div>
          <p className="text-color-background dark:text-color-text">
            I Also like to watch Anime, especially the Anime from Ghibli Studio
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-3 gap-4">
        {images.map((image, index) => (
          <Image
            src={image}
            width={250}
            height={250}
            alt={"intro"}
            key={index}
            className="rounded-xl shadow-color-hover shadow-xl dark:shadow-color-primary dark:shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default Movie;
