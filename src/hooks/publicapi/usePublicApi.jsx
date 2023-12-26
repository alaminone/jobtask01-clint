import axios from 'axios';

const publicApi = axios.create({
  baseURL: 'https://jobtask-project-sarver.vercel.app',
});

const usePublicApi = () => {
  return publicApi;
};

export default usePublicApi;
