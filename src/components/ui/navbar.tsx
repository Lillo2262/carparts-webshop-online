
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="bg-white border-b sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl text-[#8B5CF6]">
          CarParts
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-[#8B5CF6]">
            Home
          </Link>
          <a href="#" className="text-gray-700 hover:text-[#8B5CF6]">
            Shop
          </a>
          <a href="#" className="text-gray-700 hover:text-[#8B5CF6]">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-[#8B5CF6]">
            Contact
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="p-1.5 text-gray-700 hover:text-[#8B5CF6]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
