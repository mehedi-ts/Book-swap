import Image from "next/image";
import React from "react";
import { FaRegHeart, FaRegUser, FaStar } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import { MdDateRange } from "react-icons/md";
import { SiPagekit } from "react-icons/si";
import { Description } from "@heroui/react";
import { BsShareFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://book-swap-gilt-tau.vercel.app/data.json");
  const bookData = await res.json();

  const book = bookData.find((b) => b.id === Number(id));

  if (!book) {
    return <h1>no book data</h1>;
  }
  const {
    total_reviews,
    title,
    description,
    image_url,
    rating,
    author,
    pages,
    published_year,
    language,
  } = book;

  // const {
  //   title,
  //   description,
  //   available_quantity,
  //   image_url,
  //   author,
  //   rating,
  //   total_reviews,
  // } = book;
  return (
    <div className="max-w-7xl w-full mx-auto">
      <div className="details-main py-16">
        <div className="main1 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="main1-imgs md:col-span-1">
            <div className="main-img border-2 border-gray-200 p-3 rounded-2xl overflow-hidden ">
              <div className="relative h-120 w-full overflow-hidden rounded-xl">
                <Image src={image_url} alt={title} fill />
              </div>
            </div>
          </div>
          <div className=" main1-con md:col-span-2  px-3 space-y-10 rounded-xl flex flex-col h-full pb-10">
            <div className="text space-y-4 flex flex-col h-full">
              <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
              <p className="font-medium text-gray-500">
                by <span className="text-[#2563EB]">{author}</span>
              </p>
              <p className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <span>{rating}</span>
                {`(${total_reviews} Reviews)`}
              </p>
              <p className="max-w-lg text-sm text-gray-500  flex-1">
                {description}
              </p>
            </div>
            <div className="book-stats grid grid-cols-2 md:grid-cols-4 gap-5">
              <div className="box1 p-2 rounded-lg bg-white shadow-sm flex items-center gap-2 ">
                <div className="p-3 bg-[#f1efef] rounded-lg flex items-center justify-center ">
                  <FaRegUser size={20} />
                </div>
                <div className="text-gray-500 font-semibold text-sm ">
                  <h4>Author</h4>
                  <p className="text-gray-800">{author}</p>
                </div>
              </div>
              <div className="box1 p-2 rounded-lg bg-white shadow-sm flex items-center gap-2 ">
                <div className="p-3 bg-[#f1efef] rounded-lg flex items-center justify-center ">
                  <MdDateRange size={20} />
                </div>
                <div className="text-gray-500 font-semibold text-sm ">
                  <h4>Published</h4>
                  <p className="text-gray-800">{published_year}</p>
                </div>
              </div>
              <div className="box1 p-2 rounded-lg bg-white shadow-sm flex items-center gap-2 ">
                <div className="p-3 bg-[#f1efef] rounded-lg flex items-center justify-center ">
                  <SiPagekit size={20} />
                </div>
                <div className="text-gray-500 font-semibold text-sm ">
                  <h4>Pages</h4>
                  <p className="text-gray-800">{pages}</p>
                </div>
              </div>
              <div className="box1 p-2 rounded-lg bg-white shadow-sm flex items-center gap-2 ">
                <div className="p-3 bg-[#f1efef] rounded-lg flex items-center justify-center ">
                  <GrLanguage size={20} />
                </div>
                <div className="text-gray-500 font-semibold text-sm ">
                  <h4>Language</h4>
                  <p className="text-gray-800">{language}</p>
                </div>
              </div>
            </div>
            <div className="action-btn-details flex items-center gap-5">
              <button className="btn bg-[#2563EB] hover:bg-[#1c58db] text-white">
                {" "}
                Borrow Book <FaArrowRightLong size={20} />
              </button>
              <button className="btn btn-outline border-[#2563EB] hover:bg-[#1c58db] text-[#1c58db] hover:text-white">
                {" "}
                Add to Wishlist <FaRegHeart />
              </button>
              <button className="btn text-[#1c58db]">
                {" "}
                <BsShareFill size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="main2"></div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
