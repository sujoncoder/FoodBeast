import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-white py-6">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-slate-700">
              Food<span className="text-red-500">Beast</span>
            </h3>
            <p className="text-sm text-slate-700">© 2024 All rights reserved</p>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0 text-slate-600">
            <a href="#" className="hover:text-gray-400">
              Home
            </a>
            <a href="#" className="hover:text-gray-400">
              Menu
            </a>
            <a href="#" className="hover:text-gray-400">
              Order
            </a>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </div>
          <div className="flex space-x-4 text-slate-700">
            <a href="#" className="hover:text-gray-400">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-gray-600">
          <p>123 Food St, Delicious City, Magura Bangladesh.</p>
          <p>Call Us: +88 01999-86919</p>
          <p>Email: support@foodbeast.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
