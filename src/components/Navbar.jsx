import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide">
       LocalInsight
      </div>

      {/* Links */}
      <ul className="flex space-x-10 text-xl font-medium text-gray-700">
        <li>
          <Link to="/" className="hover:text-red-500 transition-colors duration-200">
            Home
          </Link>
        </li>
        <li>
          <Link to="/map" className="hover:text-red-500 transition-colors duration-200">
            Map
          </Link>
        </li>
        <li>
          <Link to="/form" className="hover:text-red-500 transition-colors duration-200">
            Form
          </Link>
        </li>
      </ul>

      {/* Login Button */}
      <div>
        <button className="bg-red-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-200">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
