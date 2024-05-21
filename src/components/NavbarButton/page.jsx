"use client";

import { TextAlignLeft, X } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useState } from "react";
import DarkMode from "../DarkMode/page";

const NavbarButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setIsActive(item);
  };

  return (
    <div className="flex">
      <div>
        <button
          className="text-gray-800 dark:bg-gray-800 mt-3 p-2 rounded-full hover:bg-color-hover hover:text-color-text transition-all"
          onClick={handleClick}
        >
          {isOpen ? <X size={25} /> : <TextAlignLeft size={25} />}
        </button>
      </div>
      <div>
        <div
          className={`flex flex-col justify-between absolute md:left-[-1000px] left-0 md:rounded-none rounded-3xl top-[-1000px] w-40 md:p-8 p-4 bg-color-background md:h-screen h-[30rem] text-color-text gap-2 ${
            isOpen ? "md:left-[-20px] md:top-[-20px] top-[80px]" : ""
          }`}
        >
          <div className="md:mt-10 mt-5 flex items-center absolute top-0 right-4">
            <button
              className="text-color-background rounded p-1  bg-color-primary dark:bg-color-text dark:text-color-background"
              onClick={handleClick}
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex flex-col md:mt-14 md:p-0 p-2 mt-10 gap-4">
            <Link
              href={"#hero"}
              className={`hover:bg-color-text hover:text-color-background p-2 rounded transition-all ${
                isActive === "hero" ? "bg-color-text text-color-background" : ""
              }`}
              onClick={() => handleItemClick("hero")}
            >
              Home
            </Link>
            <Link
              href={"#intro"}
              className={`hover:bg-color-text hover:text-color-background  p-2 rounded transition-all ${
                isActive === "intro"
                  ? "bg-color-text text-color-background"
                  : ""
              }`}
              onClick={() => handleItemClick("intro")}
            >
              About
            </Link>
            <Link
              href={"#favorites"}
              className={`hover:bg-color-text hover:text-color-background  p-2 rounded transition-all ${
                isActive === "favorites"
                  ? "bg-color-text text-color-background"
                  : ""
              }`}
              onClick={() => handleItemClick("favorites")}
            >
              Favorites
            </Link>
            <Link
              href={"#contact"}
              className={`hover:bg-color-text hover:text-color-background  p-2 rounded transition-all ${
                isActive === "contact"
                  ? "bg-color-text text-color-background"
                  : ""
              }`}
              onClick={() => handleItemClick("contact")}
            >
              Contact
            </Link>
          </div>
          <div>
            <DarkMode />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarButton;
