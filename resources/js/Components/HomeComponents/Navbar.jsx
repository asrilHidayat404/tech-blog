import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null); // Menyimpan status dropdown yang aktif
  const dropdownRef = useRef(null); // Referensi untuk menangani klik di luar dropdown

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (menu) => {
    // Menutup dropdown yang aktif atau membuka dropdown baru
    if (dropdownOpen === menu) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(menu);
    }
  };

  // Menutup dropdown jika klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(null); // Tutup dropdown
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-900 text-white shadow-lg max-w-full w-full text-sm fixed z-10">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold px-10 lg:p-0">
          <a href="/" className="text-teal-400">
            TechBlog
          </a>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="/" className="hover:text-teal-400 transition">Home</a>
          </li>
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => toggleDropdown('categories')}
              className="flex items-center hover:text-teal-400 transition focus:outline-none"
            >
              Categories
              <svg
                className="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Dropdown */}
            {dropdownOpen === 'categories' && (
              <ul className="absolute left-0 mt-2 w-40 bg-gray-800 rounded shadow-lg z-10">
                <li>
                  <a href="/categories/web-development" className="block px-4 py-2 hover:bg-gray-700">Web Development</a>
                </li>
                <li>
                  <a href="/categories/mobile-development" className="block px-4 py-2 hover:bg-gray-700">Mobile Development</a>
                </li>
                <li>
                  <a href="/categories/data-science" className="block px-4 py-2 hover:bg-gray-700">Data Science</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="/latest" className="hover:text-teal-400 transition">Latest Posts</a>
          </li>
          <li>
            <a href="/popular" className="hover:text-teal-400 transition">Popular</a>
          </li>
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => toggleDropdown('about')}
              className="flex items-center hover:text-teal-400 transition focus:outline-none"
            >
              About Us
              <svg
                className="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Dropdown */}
            {dropdownOpen === 'about' && (
              <ul className="absolute left-0 mt-2 w-40 bg-gray-800 rounded shadow-lg z-10">
                <li>
                  <a href="/about/team" className="block px-4 py-2 hover:bg-gray-700">Our Team</a>
                </li>
                <li>
                  <a href="/about/careers" className="block px-4 py-2 hover:bg-gray-700">Careers</a>
                </li>
                <li>
                  <a href="/about/contact" className="block px-4 py-2 hover:bg-gray-700">Contact Us</a>
                </li>
              </ul>
            )}
          </li>
        </ul>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center px-10 lg:p-0">
          <button onClick={toggleMenu} className="mobile-menu-button focus:outline-none">
            <svg className="w-6 h-6 text-teal-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-800`}>
        <ul className="space-y-4 px-2 py-4">
          <li>
            <a href="/" className="block text-teal-400 hover:bg-gray-700 p-2">Home</a>
          </li>
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => toggleDropdown('mobileCategories')}
              className="block text-teal-400 hover:bg-gray-700 w-full text-left p-2 flex items-center justify-between"
            >
              Categories
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Dropdown */}
            {dropdownOpen === 'mobileCategories' && (
              <ul className="absolute left-0 mt-2 w-full bg-gray-800 rounded shadow-lg z-10">
                <li>
                  <a href="/categories/web-development" className="block px-4 py-2 hover:bg-gray-700">Web Development</a>
                </li>
                <li>
                  <a href="/categories/mobile-development" className="block px-4 py-2 hover:bg-gray-700">Mobile Development</a>
                </li>
                <li>
                  <a href="/categories/data-science" className="block px-4 py-2 hover:bg-gray-700">Data Science</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="/latest" className="block text-teal-400 hover:bg-gray-700 p-2">Latest Posts</a>
          </li>
          <li>
            <a href="/popular" className="block text-teal-400 hover:bg-gray-700 p-2">Popular</a>
          </li>
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => toggleDropdown('mobileAbout')}
              className="block text-teal-400 hover:bg-gray-700 w-full text-left p-2 flex items-center justify-between"
            >
              About Us
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Dropdown */}
            {dropdownOpen === 'mobileAbout' && (
              <ul className="absolute left-0 mt-2 w-full bg-gray-800 rounded shadow-lg z-10">
                <li>
                  <a href="/about/team" className="block px-4 py-2 hover:bg-gray-700">Our Team</a>
                </li>
                <li>
                  <a href="/about/careers" className="block px-4 py-2 hover:bg-gray-700">Careers</a>
                </li>
                <li>
                  <a href="/about/contact" className="block px-4 py-2 hover:bg-gray-700">Contact Us</a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
