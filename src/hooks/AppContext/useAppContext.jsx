import { useContext } from 'react';
import { AppContext } from '../../Authprovider/Authprovider';


const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};

export default useAppContext;
