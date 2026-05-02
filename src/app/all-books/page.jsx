import BookCard from "@/components/ui/BookCard";
import { Description, FieldError, Label, SearchField } from "@heroui/react";
import { FaAngleUp, FaStar } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";

const AllBooksPage = async () => {
  const res = await fetch("https://book-swap-gilt-tau.vercel.app/data.json");
  const data = await res.json();
  return (
    <div className="max-w-7xl w-full mx-auto grid grid-cols-4 gap-5 py-12">
      <div className="filter-box  col-span-1 flex flex-col  px-5 bg-white rounded-2xl shadow-sm p-5 space-y-7 h-fit text-gray-800">
        <div className="flex items-center justify-between max-h-fit">
          {" "}
          <p className="text-2xl font-bold">Filters</p>{" "}
          <IoFilterSharp size={25} />
        </div>
        <div>
          <div className="flex flex-col max-h-fit space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-xl text-gray-800">
                All Categories
              </h4>
              <FaAngleUp size={20} />{" "}
            </div>
            <div className="flex flex-col space-y-3 text-gray-800">
              <label className="label flex items-center justify-between text-gray-800">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="checkbox" />
                  <p>Story</p>
                </div>
                <p className="text-sm text-gray-500">(9)</p>
              </label>
              <label className="label flex items-center justify-between text-gray-800">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="checkbox" />
                  <p>Tech</p>
                </div>
                <p className="text-sm text-gray-500">(12)</p>
              </label>
              <label className="label flex items-center justify-between text-gray-800">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="checkbox" />
                  <p>Science</p>
                </div>
                <p className="text-sm text-gray-500">(8)</p>
              </label>
              <label className="label flex items-center justify-between text-gray-800">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="checkbox" />
                  <p>Self Help</p>
                </div>
                <p className="text-sm text-gray-500">(3)</p>
              </label>
              <label className="label flex items-center justify-between text-gray-800">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="checkbox" />
                  <p>Business</p>
                </div>
                <p className="text-sm text-gray-500">(2)</p>
              </label>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200"></div>
        <div>
          <div className="flex flex-col max-h-fit space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-xl text-gray-800">Rating</h4>
              <FaAngleUp size={20} />{" "}
            </div>
            <div className="flex flex-col space-y-3">
              <label className="label flex items-center justify-between text-gray-800">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="ratings"
                    defaultChecked
                    className="radio"
                  />
                  <p>All Ratings</p>
                </div>
                <p className="text-sm text-gray-500">(24)</p>
              </label>
              <label className="label flex items-center justify-between text-gray-800">
                <div className="flex items-center gap-2">
                  <input type="radio" name="ratings" className="radio" />
                  <p className="flex items-center gap-1">
                    <span className="text-gray-800">5</span>{" "}
                    <FaStar className="text-yellow-400" /> & Up
                  </p>
                </div>
                <p className="text-sm text-gray-500">(19)</p>
              </label>
              <label className="label flex items-center justify-between text-gray-800">
                <div className="flex items-center gap-2">
                  <input type="radio" name="ratings" className="radio" />
                  <p className="flex items-center gap-1">
                    <span className="text-gray-800">4</span>{" "}
                    <FaStar className="text-yellow-400" /> & Up
                  </p>
                </div>
                <p className="text-sm text-gray-500">(5)</p>
              </label>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200"></div>
        <div>
          <div className="flex flex-col max-h-fit space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-xl text-gray-800">Availability</h4>
              <FaAngleUp size={20} />{" "}
            </div>
            <div className="flex flex-col space-y-3">
              <label className="label flex items-center justify-between text-gray-800">
                <div className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  <p>Available</p>
                </div>
                <p className="text-sm text-gray-500">(24)</p>
              </label>
              <label className="label flex items-center justify-between text-gray-800">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="checkbox" />
                  <p>Not Available</p>
                </div>
                <p className="text-sm text-gray-500">(0)</p>
              </label>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200"></div>
        <div className="filter-btn flex flex-col gap-3">
          <button className="btn btn-primary bg-[#2563EB] hover:bg-[#1c58db]">
            Apply Filters
          </button>
          <button className="btn btn-primary btn-outline border-[#2563EB] hover:bg-[#1c58db] text-[#1c58db] hover:text-white">
            Clear All
          </button>
        </div>
      </div>
      <div className="con-box  col-span-3">
        <nav className="flex justify-between items-center">
          <div>
            {" "}
            <h2 className="text-2xl font-bold text-gray-800 space-y-1">
              All Books
            </h2>
            <p className="text-xs text-gray-500">
              Browse and discover your next favorite book from our collection.
            </p>
          </div>
          <div className="flex items-center gap-6 ">
            <div className="h-10">
              <SearchField className="h-full">
                <SearchField.Group className="h-10">
                  <SearchField.SearchIcon />
                  <SearchField.Input
                    className="h-full"
                    placeholder="Search Books"
                  />
                  <SearchField.ClearButton />
                </SearchField.Group>

                <FieldError />
              </SearchField>
            </div>
            <div>
              <select
                defaultValue="Small"
                className="select w-40 flex items-center justify-center text-sm font-medium text-gray-400 rounded-xl border-none bg-white shadow-sm"
              >
                <option disabled={true}>Small</option>
                <option>Small Apple</option>
                <option>Small Orange</option>
                <option>Small Tomato</option>
              </select>
            </div>
          </div>
        </nav>

        <div className="mt-5">
          <h4 className="text-base font-semibold text-gray-500">
            Total 23 books
          </h4>
          <div className="grid grid-cols-3 gap-6">
            {data.map((book) => (
              <BookCard key={book.id} book={book}></BookCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooksPage;
