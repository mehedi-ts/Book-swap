import Image from "next/image";
import { BookOpen, House, Person, Target } from "@gravity-ui/icons";
import { GoDotFill } from "react-icons/go";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <div className=" relative w-full h-screen  md:h-160 overflow-hidden bg-white">
        <div className="absolute hidden md:flex inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),rgba(59,130,246,0.1),transparent_60%)]"></div>
        <div className="absolute hidden md:flex bottom-0 left-0 w-full h-40 bg-linear-to-t from-white to-transparent"></div>
        {/* banner content */}
        <div className="banner-main-con  grid grid-cols-1 md:grid-cols-2 items-center w-full h-full gap-5">
          <div className="banner-con flex flex-col gap-5 px-4 md:pl-10 md:px-0 items-center md:items-start text-center md:text-left bg-white/60 backdrop-blur-md p-6 rounded-2xl max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <p className="leading-none">Read More, Achieve More</p>
            </div>
            <h1 className="text-[#111827] font-bold text-5xl sm:text-5xl md:text-6xl lg:text-7xl">
              Find Your <br /> <span className="text-[#2563EB]">Next Read</span>
            </h1>
            <p className="text-[#6B7280] max-w-full md:max-w-80 text-base flex items-center gap-1.5">
              <span>
                Explore thousands of books, borrow easily, and fuel your
                learning journey.
              </span>
            </p>
            <button className="btn bg-linear-to-r from-[#2563EB] to-[#3B82F6] text-[#FFFFFF] font-semibold max-w-fit ">
              Browse Now →
            </button>
            <div className="stats-section hidden sm:flex sm:flex-row items-center gap-5 md:gap-8 mt-10">
              <div className="stats-box1 flex gap-5 items-center">
                <div className="  w-10 h-10 flex items-center justify-center rounded-full bg-[#E0F2FE]">
                  <BookOpen
                    width={20}
                    height={20}
                    fill="#3B82F6"
                    style={{ color: "#3B82F6" }}
                  ></BookOpen>
                </div>
                <div>
                  <h4 className="text-xl text-[#111827] font-bold">10K+</h4>
                  <p className="text-sm text-[#6B7280]">Books Available</p>
                </div>
              </div>
              <div className="stats-box2 flex gap-5 items-center">
                <div className="  w-10 h-10 flex items-center justify-center rounded-full bg-[#DCFCE7]">
                  <Person
                    width={20}
                    height={20}
                    // fill="#22C55E"
                    style={{ color: "#22C55E" }}
                  />
                </div>
                <div>
                  <h4 className="text-xl text-[#111827] font-bold">5K+</h4>
                  <p className="text-sm text-[#6B7280]">Happy Students</p>
                </div>
              </div>
              <div className="stats-box3 flex gap-5 items-center">
                <div className=" w-10 h-10 flex items-center justify-center rounded-full bg-[#EDE9FE]">
                  <House
                    width={20}
                    height={20}
                    fill="#6366F1 "
                    style={{ color: "#6366F1" }}
                  ></House>
                </div>
                <div>
                  <h4 className="text-xl text-[#111827] font-bold">50+</h4>
                  <p className="text-sm text-[#6B7280]">Campus Libraries</p>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-img relative  w-full  h-[250px] sm:h-[350px] md:h-full">
            <Image
              src="https://i.ibb.co.com/B2BFjnRM/0703edc5-f321-4372-bbc6-4e0ceae9a109-removebg-preview.png"
              alt="books"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
