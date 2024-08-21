import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <div className="text-2xl font-semibold">
        <NavLink to={"/"} className="text-black cursor-pointer">
          Food Recipe
        </NavLink>
      </div>
      <form action="">
        <input
          type="text"
          name="search"
          placeholder="Search Recipe..."
          className="bg-white/75 px-8 py-3 rounded-full outline-none lg:w-96 shadow-lg shadow-gray-200 focus:shadow-gray-300"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 duration-200 cursor-pointer"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className="text-black hover:text-gray-700 duration-200 cursor-pointer"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
