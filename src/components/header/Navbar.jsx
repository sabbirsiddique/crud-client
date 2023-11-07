// import { useContext } from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
// import { AuthContext } from "../../pages/providers/AuthProvider";
// import Swal from "sweetalert2";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
      logOut()
        // eslint-disable-next-line no-unused-vars
        .then((res) => {
          Swal.fire("Good job!", "You are logged out!", "success");
        })
        .catch();
    };

  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-[2px] text-white rounded text-lg font-bold"
                    : ""
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/allfooditem"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-[2px] text-white rounded text-lg font-bold"
                    : ""
                }
              >
                All Food Item
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-[2px] text-white rounded text-lg font-bold"
                    : ""
                }
              >
                Blog
              </NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-4xl font-bold">
            <span className="text-[#0c0c0c]">Eatery</span>
            <span className="text-[#82807b]">Evo</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-10">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-gray p-[2px] border-0 text-black rounded text-lg font-bold"
                  : ""
              }
            >
              <div className="flex flex-col items-center space-y-2">
                <img src="https://i.ibb.co/tmXJDtB/Home-1.jpg" alt="" />
                <p>Home</p>
              </div>
            </NavLink>
            <NavLink
              to="/allfooditem"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-gray p-[2px] border-0 text-black rounded text-lg font-bold"
                  : ""
              }
            >
              <div className="flex flex-col items-center space-y-2">
                <img
                  className="font-extraboldbold"
                  src="https://i.ibb.co/1dhMxdS/Cutlery.jpg"
                  alt=""
                />
                <p>All Food Item</p>
              </div>
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-gray p-[2px] border-0 text-black rounded text-lg font-bold"
                  : ""
              }
            >
              <div className="flex flex-col items-center space-y-2">
                <img
                  className="font-bold"
                  src="https://i.ibb.co/PMkMQ0S/Blogger.jpg"
                  alt=""
                />
                <p>Blog</p>
              </div>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          {/* split('@')[0].replace(/\d/g, '').toUpperCase() */}
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://i.ibb.co/g7Vwd0R/user-1.png" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
          {user && (
            <span className="mr-2">
              {user.email.split("@")[0].replace(/\d/g, "").toUpperCase()}
            </span>
          )}
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn text-black font-bold"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="btn text-black font-bold">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
