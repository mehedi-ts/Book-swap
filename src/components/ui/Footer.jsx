import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { ExclamationShapeFill, LocationArrow } from "@gravity-ui/icons";
import {
  MdOutgoingMail,
  MdOutlineAlternateEmail,
  MdOutlineEmail,
} from "react-icons/md";
import { FaFacebook, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-base-200 w-full">
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 max-w-7xl mx-auto">
        <aside>
          <Logo></Logo>
          <p className="max-w-60">
            A community-driven platform to exchange, borrow, and explore books
            with ease.
          </p>
          <div className="flex items-center gap-5">
            <div className="w-8 h-8 bg-[#d1e0f8] p-1 flex items-center rounded-full justify-center cursor-pointer">
              <div>
                <FaFacebook className="text-xl" />
              </div>
            </div>
            <div className="w-8 h-8 bg-[#d1e0f8] p-1 flex items-center rounded-full justify-center cursor-pointer">
              <div>
                <FaXTwitter className="text-xl" />
              </div>
            </div>
            <div className="w-8 h-8 bg-[#d1e0f8] p-1 flex items-center rounded-full justify-center cursor-pointer">
              <div>
                <IoLogoInstagram className="text-xl" />
              </div>
            </div>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <Link className="link link-hover" href="/">
            Home
          </Link>
          <Link className="link link-hover" href="/">
            All Books
          </Link>
          <Link className="link link-hover" href="/">
            Profile
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Categories</h6>
          <Link className="link link-hover" href="/">
            Story
          </Link>
          <Link className="link link-hover" href="/">
            Tech
          </Link>
          <Link className="link link-hover" href="/">
            Science
          </Link>
          <Link className="link link-hover" href="/">
            Self Development
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title"> Contact Us</h6>
          <a className="link link-hover items-center gap-2">
            <FaMapMarkerAlt className="text-[20px]" />
            <span> Dhaka, Bangladesh</span>
          </a>
          <a className="link link-hover items-center gap-2">
            <MdOutlineEmail className="text-[20px]" />{" "}
            <span>support@bookswap.com</span>
          </a>
          <a className="link link-hover flex items-center gap-2">
            {" "}
            <IoIosCall className="text-[20px]" /> <span>+880 1234-567890</span>
          </a>
        </nav>
      </footer>
      <footer className="footer items-center justify-center bg-base-200 text-base-content py-4 max-w-7xl mx-auto ">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Book
            swap
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
