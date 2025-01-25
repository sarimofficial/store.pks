"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiShoppingCart, FiUser, FiMenu, FiX, FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";
import { RootState } from "../redux/Store"; // Replace with the actual path to your store's RootState type
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const item = useSelector((state: RootState) => state.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      router.push(`/search?query=${searchTerm}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b text-gray-900 backdrop-blur flex items-center justify-between px-4 h-14">
      <div className="flex items-center space-x-4">
        <button
          className="text-2xl md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className="font-bold text-xl tracking-wide">
          <a href="/" rel="noopener noreferrer">
            Store.pk
          </a>
        </div>
      </div>
      <ul
        className={`${
          isMenuOpen
            ? "absolute left-0 top-16 w-full bg-[#FFFBF0] shadow-lg"
            : "hidden"
        } md:flex md:static md:w-auto space-y-2 md:space-y-0 md:space-x-8 text-base font-medium`}
      >
        <Link href="/">
          <li className="px-4 py-2 md:p-0 text-center md:text-left hover:text-gray-500">
            Home
          </li>
        </Link>
        <Link href="/products">
          <li className="px-4 py-2 md:p-0 text-center md:text-left hover:text-gray-500">
            Products
          </li>
        </Link>
        <Link href="/contact">
          <li className="px-4 py-2 md:p-0 text-center md:text-left hover:text-gray-500">
            Contact
          </li>
        </Link>
      </ul>

      <div className="flex items-center space-x-4">
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center bg-[#F7EDE4] rounded-full px-4 py-2 w-[400px] mr-12"
        >
          <FiSearch className="text-gray-900 text-lg mr-2" />
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent focus:outline-none text-sm placeholder-gray-900"
          />
        </form>
        <Link href="/cart">
          <FiShoppingCart className="text-2xl cursor-pointer mr-2" />
        </Link>
        {item.length}
        <FiUser className="text-2xl cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
