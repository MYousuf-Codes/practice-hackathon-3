import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md p-4 sm:p-6 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">
        <Link href="/">API Explorer</Link>
      </div>
      <nav className="hidden sm:flex gap-6">
        <Link href="#about" className="text-gray-600 hover:text-blue-600">
          About
        </Link>
        <Link href="#endpoints" className="text-gray-600 hover:text-blue-600">
          Endpoints
        </Link>
        <Link href="#instructions" className="text-gray-600 hover:text-blue-600">
          Instructions
        </Link>
      </nav>
      <button className="sm:hidden p-2 text-gray-600 hover:text-blue-600">
        {/* Hamburger Menu Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </header>
  );
};

export default Header;
