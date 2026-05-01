import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { ExclamationShapeFill, LocationArrow } from "@gravity-ui/icons";
import {
  MdOutgoingMail,
  MdOutlineAlternateEmail,
  MdOutlineEmail,
} from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

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
          <h6 className="footer-title"> Contact Info</h6>
          <a className="link link-hover">
            <FaMapMarkerAlt />
            Dhaka, Bangladesh
          </a>
          <a className="link link-hover">
            <MdOutlineEmail /> support@bookswap.com
          </a>
          <a className="link link-hover">
            {" "}
            <IoIosCall /> +880 1234-567890
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
