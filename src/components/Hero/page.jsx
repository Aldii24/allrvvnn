import AboutArrietty from "../AboutArrietty/page";
import Arrietty from "../Arrietty/page";
import ButtonSong from "../ButtonSong/page";
import Caraousel from "../Caraousel/page";
import Favorites from "../Favorites/page";
import Footer from "../Footer/page";
import Galerry from "../Gallery/page";
import GoodBye from "../GoodBye/page";
import Introduction from "../Introduction/page";
import Movie from "../Movie/page";
import OutScene from "../OutScene/page";
import Things from "../Things/page";

const HeroSection = () => {
  return (
    <>
      <div className="md:pt-36 pt-28 md:px-[2%] px-[5%] h-screen">
        <Caraousel autoPlay={true} />
        <ButtonSong />
        <Introduction />
        <Favorites />
        <Things />
        <Movie />
        <Galerry autoPlay={true} />
        <OutScene />
        <AboutArrietty />
        <Arrietty autoPlay={true} />
        <GoodBye />
        <Footer />
      </div>
    </>
  );
};

export default HeroSection;
