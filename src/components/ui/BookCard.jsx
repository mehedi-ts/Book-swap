import React from "react";
import Image from "next/image";
import { Button, Card } from "@heroui/react";
import { Star } from "@gravity-ui/icons";

const BookCard = ({ book }) => {
  console.log(book);
  const {
    title,
    description,
    available_quantity,
    image_url,
    author,
    rating,
    total_reviews,
  } = book;
  return (
    <Card className=" rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden p-3 border-2 border-gray-200  ">
      <div className=" relative w-full aspect-3/4 rounded-xl overflow-hidden backdrop-blur-sm bg-white/90  ">
        <Image
          src={image_url}
          alt=""
          fill
          className="object-cover hover:scale-105 transition duration-300"
        />
        <span className=" absolute top-2 left-2 px-3 py-1 text-xs font-medium rounded-full bg-green-500/90 text-white shadow ">
          Available
        </span>
      </div>
      <div className="mt-4 space-y-2">
        <h1 className="text-lg font-semibold line-clamp-1 leading-snug">
          {title}
        </h1>
        <p className="text-sm text-gray-500 font-medium">{author}</p>
        <div className="text-sm flex items-center gap-1">
          <span className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500"></Star>
            {rating}
          </span>
          <span>{`(${total_reviews})`}</span>
        </div>
        {/* <p className="text-[#434750] text-base line-clamp-2">{description}</p> */}
        <div className="flex items-center justify-end mt-4">
          <Button className="bg-[#2563EB] hover:bg-[#1c58db] w-full rounded-lg font-semibold text-white">
            Details
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default BookCard;
