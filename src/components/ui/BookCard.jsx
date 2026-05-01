import React from "react";
import Image from "next/image";
import { Card } from "@heroui/react";

const BookCard = ({ book }) => {
  console.log(book);
  const { title, description, available_quantity, image_url, author } = book;
  return (
    <Card className=" rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden p-3">
      <div className=" relative w-full aspect-3/4 rounded-xl overflow-hidden border border-red-500">
        <Image
          src={image_url}
          alt=""
          fill
          className="object-cover hover:scale-105 transition duration-300"
        />
        <span className=" absolute top-2 left-2 px-2 text-xs font-medium rounded-full bg-green-50 text-green-400 ">
          Abilable
        </span>
      </div>
      <div className="mt-3 space-y-1">
        <h1 className="text-lg font-semibold line-clamp-1">{title}</h1>
        <p className="text-sm text-gray-500 font-medium">{author}</p>
        <p className="text-[#6B7280] text-base">{description}</p>
      </div>
    </Card>
  );
};

export default BookCard;
