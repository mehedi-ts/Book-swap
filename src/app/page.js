import Banner from "@/components/homeUi/Banner";
import Choose from "@/components/homeUi/Choose";
import FeaturedBooks from "@/components/homeUi/FeaturedBooks";
import Marquee from "@/components/homeUi/Marquee";
import Testimonial from "@/components/homeUi/Testimonial";
import Tranding from "@/components/homeUi/Tranding";

export default function Home() {
  return (
    <div className="  ">
      <div className="px-2 md:px-1.5 lg:px-0 bg-[#eff1ff78] py-4">
        <Banner></Banner>
        <Marquee></Marquee>
        <FeaturedBooks></FeaturedBooks>
        <Tranding></Tranding>
        <Choose></Choose>
        <Testimonial></Testimonial>
      </div>
    </div>
  );
}
