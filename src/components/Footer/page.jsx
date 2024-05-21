import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

const Footer = () => {
  return (
    <div className="mt-10 p-4">
      <div className="flex flex-col items-center mb-5">
        <h1 className={`${pacifico.className} text-5xl`}>THANK</h1>
        <h1 className={`${pacifico.className} text-5xl`}>YOU ♡</h1>
      </div>
      <hr />
      <div className="flex mt-2 justify-center items-center">
        <p>Made with ❤️ by AL</p>
      </div>
    </div>
  );
};

export default Footer;
