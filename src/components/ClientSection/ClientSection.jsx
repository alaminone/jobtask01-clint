import { useQuery } from '@tanstack/react-query';
import Marquee from 'react-fast-marquee';


const ClientSection = () => {
  const publicApi = usePublicApi();
  const { data: clientData = [] } = useQuery({
    queryKey: 'client',
    queryFn: async () => {
      const response = await publicApi.get('/users');
      console.log(response);
      return response.data;
    },
  });

  return (
    <div>
      <div className="pb-5 m-12">
        <div className=" gap-3 mb-3 mt-5 px-1 lg:px-0 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-darkOne font-lora uppercase">
            Our users
          </h1>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-darkTwo capitalize font-lora">
            Based on category
          </h1>
        </div>
        <Marquee className="p-8 border-2 border-lightOne rounded-lg" speed={50}>
          <div className="flex gap-[10rem]">
            {clientData.map((item) => {
              const { occupation } = item;
              return (
                <div key={item.id}>
                  <h1 className="text-3xl font-lora capitalize">
                    {occupation}
                  </h1>
                </div>
              );
            })}
          </div>
        </Marquee>
        <hr className="w-[400px] mx-auto mt-20 border-2 border-lightTwo" />
      </div>
    </div>
  );
};

export default ClientSection;
