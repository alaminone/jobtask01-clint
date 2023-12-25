import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import useAppContext from '../../hooks/AppContext/useAppContext';
import Swal from 'sweetalert2';

const Navbar = () => {
  const authentication = useAppContext();
  const { user, logOut } = authentication;
  const username = user?.displayName;
  const photoUrl = user?.photoURL;

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
        Swal.fire({
          icon: 'success',
          text: 'Sign Out Successfully',
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-blue-500 p-4">
      <div className="flex justify-between items-center container mx-auto">
        <div className="flex items-center space-x-4">
          <div className="lg:hidden">
            <FaBars size={30} className="text-white" />
          </div>
          <Link to="/" className="text-white text-2xl font-bold">
            Task Management
          </Link>
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          <NavLink to="/" activeClassName="text-indigo-200" className="text-white">
            Home
          </NavLink>
          <NavLink to="/contact" activeClassName="text-indigo-200" className="text-white">
            Contact
          </NavLink>
          <NavLink to="/about" activeClassName="text-indigo-200" className="text-white">
            About
          </NavLink>
          <NavLink to="/feature" activeClassName="text-indigo-200" className="text-white">
            Feature
          </NavLink>
        </div>

        <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-4">
              <div className="text-white">{username}</div>
              <img
                src={photoUrl}
                alt="User Avatar"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <button onClick={handleSignOut} className="text-white">
                Sign Out
              </button>
            </div>
          ) : (
            <Link to="/login" className="text-white">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
