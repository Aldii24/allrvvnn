import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const NavSocials = () => {
  return (
    <div>
      <div className="flex md:gap-4 gap-1 mt-2">
        <Link href={"/"}>
          <FacebookLogo
            size={25}
            className="text-gray-800 hover:bg-color-hover dark:text-white rounded-full hover:text-color-text transition-all"
          />
        </Link>
        <Link href={"/"}>
          <InstagramLogo
            size={25}
            className="text-gray-800 hover:bg-color-hover dark:text-white rounded-full hover:text-color-text transition-all"
          />
        </Link>
        <Link href={"/"}>
          <WhatsappLogo size={25} className="text-gray-800 dark:text-white hover:bg-color-hover rounded-full hover:text-color-text transition-all" />
        </Link>
      </div>
    </div>
  );
};

export default NavSocials;
