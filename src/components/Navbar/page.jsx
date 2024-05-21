import NavSocials from "../NavSocials/page";
import NavbarButton from "../NavbarButton/page";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className=" px-[5%] bg-color-primary dark:bg-color-background rounded-full fixed left-5 right-5 top-5 z-50 shadow-color-hover shadow-lg ">
        <div className="flex justify-between items-center mb-4">
          <NavbarButton />
          <div className="flex md:flex-col items-center mt-2">
            <Image
              src={"/logo.png"}
              alt="logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <h3 className="text-gray-800 dark:text-white">AL (SHO)</h3>
          </div>
          <NavSocials />
        </div>
      </div>
    </>
  );
};

export default Navbar;
