import React from "react";
import BookCard from "../ui/BookCard";

const Tranding = async () => {
  const res = await fetch("https://book-swap-gilt-tau.vercel.app/data.json");
  const bookData = await res.json();
  const futuredBooks = bookData.slice(5, 9);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="py-7">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Trending Now</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {futuredBooks.map((book) => (
            <BookCard book={book} key={book.id}></BookCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tranding;
