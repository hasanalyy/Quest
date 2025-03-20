import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white shadow-md z-50">
      <div className="max-w-[2000px] mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold">
              새세상만들기
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-black hover:text-gray-600">
              소개
            </a>
            <a href="#" className="text-black hover:text-gray-600">
              5:00 AM
            </a>
            <a href="#" className="text-black hover:text-gray-600">
              활동
            </a>
            <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
              로그인
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2"
            >
              {!isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg">
          <div className="px-4 py-2 space-y-2">
            <a href="#" className="block text-black hover:text-gray-600">
              소개
            </a>
            <a href="#" className="block text-black hover:text-gray-600">
              5:00 AM
            </a>
            <a href="#" className="block text-black hover:text-gray-600">
              활동
            </a>
            <button className="w-full bg-black text-white px-4 py-2 rounded-full text-sm">
              로그인
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
