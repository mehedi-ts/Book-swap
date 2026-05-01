import Image from "next/image";
import { BookOpen, House, Person, Target } from "@gravity-ui/icons";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative w-full h-160  overflow-hidden">
        <Image
          src="/images/banner.png"
          alt="banner"
          className=" object-cover"
          fill
        />

        {/* banner content */}
        <div className="banner-main-con absolute grid grid-cols-2 items-center w-full h-full gap-5">
          <div className="banner-con  flex flex-col gap-5 pl-10">
            <div className="small-tagline w-fit bg-[#dce8fc] px-1.5 py-2 text-sm text-[#3B82F6] rounded-2xl flex items-center gap-1 ">
              <Target width={20} fill="green" />
              <p>Read More, Achieve More</p>
            </div>
            <h1 className="text-[#111827] font-bold text-7xl">
              Find Your <br /> <span className="text-[#2563EB]">Next Read</span>
            </h1>
            <p className="text-[#6B7280] max-w-80 text-base flex items-center gap-1.5">
              <span>
                Explore thousands of books, borrow easily, and fuel your
                learning journey.
              </span>
            </p>
            <button className="btn bg-linear-to-r from-[#2563EB] to-[#3B82F6] text-[#FFFFFF] font-semibold max-w-fit ">
              Browse Now →
            </button>
            <div className="stats-section flex items-center gap-8 mt-10">
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
          <div className="banner-img relative  w-full h-140">
            <Image src="/images/books_banner.png" alt="books" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
