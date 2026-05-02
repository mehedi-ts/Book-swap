import Banner from "@/components/homeUi/Banner";
import FeaturedBooks from "@/components/homeUi/FeaturedBooks";
import Marquee from "@/components/homeUi/Marquee";

export default function Home() {
  return (
    <div className="  ">
      <div className=" ">
        <Banner></Banner>
        <Marquee></Marquee>
        <FeaturedBooks></FeaturedBooks>
      </div>
    </div>
  );
}
