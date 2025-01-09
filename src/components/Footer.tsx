const Footer: React.FC = () => {
    return (
      <footer className="w-full bg-gray-800 text-white p-4 sm:p-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} API Explorer. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Built with ❤️ by{" "}
          <a
            href="https://github.com/MYousuf-Codes"
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Muhammad Yousaf
          </a>
        </p>
      </footer>
    );
  };
  
  export default Footer;
  