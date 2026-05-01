import React from "react";
import BookCard from "../ui/BookCard";

const FeaturedBooks = async () => {
  const res = await fetch("https://book-swap-gilt-tau.vercel.app/data.json");
  const bookData = await res.json();

  return (
    <div>
      <h2>Feature Books</h2>
      <div className="grid grid-cols-4 gap-5">
        {bookData.map((book) => (
          <BookCard book={book} key={book.id}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
