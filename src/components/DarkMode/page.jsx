"use client";

import { useTheme } from "@/app/context/themeContext";
import {
  Moon,
  Sun,
  ToggleLeft,
  ToggleRight,
} from "@phosphor-icons/react/dist/ssr";

const DarkMode = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-4 flex">
      <button
        className="flex md:flex-col flex-row items-center gap-1"
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <div className="flex items-center gap-2">
            <ToggleLeft size={32} className="text-color-text" />
            <Sun size={20} />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <ToggleRight size={32} className="text-color-text" />
            <Moon size={20} />
          </div>
        )}
      </button>
    </div>
  );
};

export default DarkMode;
