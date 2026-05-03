"use client";
import { Button, Drawer, Input, Label, TextField } from "@heroui/react";
import { IoFilterSharp } from "react-icons/io5";
import { FaAngleUp, FaStar } from "react-icons/fa";

const Filter = () => {
  return (
    <Drawer>
      {/* 🔥 Trigger Button (Mobile Only) */}
      <Button className="md:hidden bg-[#2563EB] text-white flex items-center gap-2">
        <IoFilterSharp />
        Filters
      </Button>

      <Drawer.Backdrop>
        <Drawer.Content placement="right">
          <Drawer.Dialog>
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
                    <h4 className="font-bold text-xl text-gray-800">
                      Availability
                    </h4>
                    <FaAngleUp size={20} />{" "}
                  </div>
                  <div className="flex flex-col space-y-3">
                    <label className="label flex items-center justify-between text-gray-800">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="checkbox"
                        />
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
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
};

export default Filter;
