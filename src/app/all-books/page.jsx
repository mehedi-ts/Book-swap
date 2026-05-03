"use client";
import Filter from "@/components/allBooks/Filter";
import BookCard from "@/components/ui/BookCard";
import { Description, FieldError, Label, SearchField } from "@heroui/react";
import { useEffect, useState } from "react";
import { FaAngleUp, FaStar } from "react-icons/fa";
import { IoFilterSharp, IoSearch } from "react-icons/io5";

const AllBooksPage = () => {
  const [booksData, setBooksData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [appliedCategories, setAppliedCategories] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://book-swap-gilt-tau.vercel.app/data.json",
        { cache: "no-store" },
      );
      const result = await res.json();
      setBooksData(result);
    };

    fetchData();
  }, []);

  const handleCategories = (cat) => {
    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };
  const applyFilter = () => {
    setAppliedCategories(selectedCategories);
  };
  const filteredBooks = booksData.filter((book) => {
    const matchCat =
      appliedCategories.length === 0 ||
      appliedCategories.includes(book.category);
    const matchSearch = book.title
      .toLowerCase()
      .includes(searchText.toLocaleLowerCase());
    return matchCat && matchSearch;
  });
  const handleClear = () => {
    setSelectedCategories([]);
    setAppliedCategories([]);
  };
  const catCount = booksData.reduce((acc, Book) => {
    const cat = Book.category;
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="max-w-7xl w-full mx-auto grid-cols-1 grid md:grid-cols-4 gap-5 py-3 md:py-5 lg:py-10">
      <div className="filter-box sticky hidden md:flex top-5 col-span-1 flex-col  px-5 bg-white rounded-2xl shadow-sm p-5 space-y-7 h-fit text-gray-800">
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
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={selectedCategories.includes("Story")}
                    onChange={() => handleCategories("Story")}
                  />
                  <p>Story</p>
                </div>
                <p className="text-sm text-gray-500">
                  ({catCount["Story"] || 0})
                </p>
              </label>
              <label className="label flex items-center justify-between text-gray-800">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={selectedCategories.includes("Tech")}
                    onChange={() => handleCategories("Tech")}
                  />
                  <p>Tech</p>
                </div>
                <p className="text-sm text-gray-500">
                  ({catCount["Tech"] || 0})
                </p>
              </label>
              <label className="label flex items-center justify-between text-gray-800">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={selectedCategories.includes("Science")}
                    onChange={() => handleCategories("Science")}
                  />
                  <p>Science</p>
                </div>
                <p className="text-sm text-gray-500">
                  ({catCount["Science"] || 0})
                </p>
              </label>
              <label className="label flex items-center justify-between text-gray-800">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={selectedCategories.includes("Self Help")}
                    onChange={() => handleCategories("Self Help")}
                  />
                  <p>Self Help</p>
                </div>
                <p className="text-sm text-gray-500">
                  ({catCount["Self Help"] || 0})
                </p>
              </label>
              <label className="label flex items-center justify-between text-gray-800">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={selectedCategories.includes("Business")}
                    onChange={() => handleCategories("Business")}
                  />
                  <p>Business</p>
                </div>
                <p className="text-sm text-gray-500">
                  ({catCount["Business"] || 0})
                </p>
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
                    disabled
                  />
                  <p>All Ratings</p>
                </div>
                <p className="text-sm text-gray-500">(0)</p>
              </label>
              <label className="label flex items-center justify-between text-gray-800">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="ratings"
                    className="radio"
                    disabled
                  />
                  <p className="flex items-center gap-1">
                    <span className="text-gray-800">5</span>{" "}
                    <FaStar className="text-yellow-400" /> & Up
                  </p>
                </div>
                <p className="text-sm text-gray-500">(0)</p>
              </label>
              <label className="label flex items-center justify-between text-gray-800">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="ratings"
                    className="radio"
                    disabled
                  />
                  <p className="flex items-center gap-1">
                    <span className="text-gray-800">4</span>{" "}
                    <FaStar className="text-yellow-400" /> & Up
                  </p>
                </div>
                <p className="text-sm text-gray-500">(0)</p>
              </label>
              <label className="label flex items-center justify-between text-gray-800">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="ratings"
                    className="radio"
                    disabled
                  />
                  <p className="flex items-center gap-1">
                    <span className="text-gray-800">3</span>{" "}
                    <FaStar className="text-yellow-400" /> & Up
                  </p>
                </div>
                <p className="text-sm text-gray-500">(0)</p>
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
          <button
            onClick={applyFilter}
            className="btn btn-primary bg-[#2563EB] hover:bg-[#1c58db]"
          >
            Apply Filters
          </button>
          <button
            onClick={handleClear}
            className="btn btn-primary btn-outline border-[#2563EB] hover:bg-[#1c58db] text-[#1c58db] hover:text-white"
          >
            Clear All
          </button>
        </div>
      </div>
      <div className="con-box  col-span-3">
        <nav className="flex flex-col md:flex-row md:justify-between gap-6 justify-center items-center ">
          <div>
            {" "}
            <h2 className="text-3xl font-bold text-gray-800 space-y-1">
              All Books ({filteredBooks.length})
            </h2>
          </div>

          <div className="h-10 md:w-[50%] w-[90%]">
            <div className="join w-full h-11  border-2 border-gray-300 ">
              <input
                type="text"
                placeholder="Search by book title"
                className="input input-bordered join-item flex-1 focus:outline-none h-full border-none focus:ring-0 focus:shadow-none text-lg"
                onChange={(e) => setSearchText(e.target.value)}
              />

              <button className="btn bg-[#2563EB] hover:bg-[#1c58db]  h-full border-none text-white">
                <IoSearch size={22} />
              </button>
            </div>
          </div>
          <select
            className="select  text-xl text-gray-600 focus:outline-none flex items-center justify-center  select-bordered md:hidden w-[90%]"
            onChange={(e) => {
              const value = e.target.value;

              if (value === "all") {
                setSelectedCategories([]);
                setAppliedCategories([]);
              } else {
                setSelectedCategories([value]);
                setAppliedCategories([value]);
              }
            }}
          >
            <option value="all">All Categories</option>
            <option value="Story">Story ({catCount["Story"] || 0})</option>
            <option value="Tech">Tech ({catCount["Tech"] || 0})</option>
            <option value="Science">
              Science ({catCount["Science"] || 0})
            </option>
            <option value="Self Help">
              Self Help ({catCount["Self Help"] || 0})
            </option>
            <option value="Business">
              Business ({catCount["Business"] || 0})
            </option>
          </select>
        </nav>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book}></BookCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooksPage;
