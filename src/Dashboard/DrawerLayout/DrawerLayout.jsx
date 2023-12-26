import { Outlet } from 'react-router-dom';
import DashBroadLayout from '../DashBroadLayout/DashBroadLayout';


const DrawerLayout = () => {
  return (
    <div>
      <div className="flex">
        <DashBroadLayout></DashBroadLayout>
        <div className="flex-1 p-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DrawerLayout;
