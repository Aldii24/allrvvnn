import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const NavSocials = () => {
  const facebook = "https://www.facebook.com/aldi.irawan.311493/";
  const whatsapp = "https://wa.me/6281372648563";
  const instagram = "https://www.instagram.com/allrvvnn/";

  return (
    <div>
      <div className="flex md:gap-4 gap-1 mt-2">
        <Link href={facebook}>
          <FacebookLogo
            size={25}
            className="text-gray-800 hover:bg-color-hover dark:text-white rounded-full hover:text-color-text transition-all"
          />
        </Link>
        <Link href={instagram}>
          <InstagramLogo
            size={25}
            className="text-gray-800 hover:bg-color-hover dark:text-white rounded-full hover:text-color-text transition-all"
          />
        </Link>
        <Link href={whatsapp}>
          <WhatsappLogo
            size={25}
            className="text-gray-800 dark:text-white hover:bg-color-hover rounded-full hover:text-color-text transition-all"
          />
        </Link>
      </div>
    </div>
  );
};

export default NavSocials;
