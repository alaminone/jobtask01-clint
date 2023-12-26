import { NavLink, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
import useAppContext from '../../hooks/AppContext/useAppContext';

const DashBroadLayout = () => {
  const { user, logOut } = useAppContext();
  const navigate = useNavigate();
  const loginUserName = user?.displayName;
  const photoUrl = user?.photoURL;

  const handleLogout = () => {
    logOut()
      .then((result) => {
        console.log(result);
        Swal.fire({
          icon: 'success',
          text: 'Sign Out Successfully',
        });
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="w-64 min-h-screen bg-lightOne">
        <div className="px-8 py-12">
          <h1 className="font-lora font-[900] text-[23px] text-darkOne uppercase">
            {loginUserName}
          </h1>
          <img
            src={photoUrl}
            width={100}
            height={100}
            className="rounded-lg border-2 border-darkTwo"
            alt=""
          />
        </div>
        <ul className="px-8">
          <div className="flex flex-col gap-8">
            <li>
              <NavLink
                to="/dashBroad/newTask"
                className={({ isActive }) =>
                  isActive
                    ? 'text-lightTwo bg-darkOne px-4 py-2 rounded-lg text-xl font-semibold font-lora'
                    : 'text-xl text-lightThree font-semibold font-lora'
                }
              >
                New Task
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashBroad/editTask"
                className={({ isActive }) =>
                  isActive
                    ? 'text-lightTwo bg-darkOne px-4 py-2 rounded-lg text-xl font-semibold font-lora'
                    : 'text-xl text-lightThree font-semibold font-lora'
                }
              >
                Edit task
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashBroad/profile"
                className={({ isActive }) =>
                  isActive
                    ? 'text-lightTwo bg-darkOne px-4 py-2 rounded-lg text-xl font-semibold font-lora'
                    : 'text-xl text-lightThree font-semibold font-lora'
                }
              >
                Profile Details
              </NavLink>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="text-lightTwo bg-darkOne px-4 py-2 rounded-lg text-xl font-semibold font-lora"
              >
                Log Out
              </button>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashBroadLayout;
