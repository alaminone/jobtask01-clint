import { useQuery } from '@tanstack/react-query';

import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import usePublicApi from '../../hooks/publicapi/usePublicApi';
import useAppContext from '../../hooks/AppContext/useAppContext';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const EditTask = () => {
  const { user } = useAppContext();
  const publicApi = usePublicApi();

  const { data: allTodo = [], refetch } = useQuery({
    queryKey: [user?.email, 'todos'],
    queryFn: async () => {
      const response = await publicApi.get(`/tasks/${user.email}`);
      return response.data;
    },
  });

  const deleteTodo = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        publicApi
          .delete(`/tasks/${id}`)
          .then((response) => {
            console.log(response);
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            refetch();
          })
          .catch((error) => console.log(error));
      }
    });
  };

  return (
    <div>
      <SectionTitle
        heading="Manage Todos"
        subHeading="All todo added from you"
      />

      <div>
        {allTodo.map((item) => {
          const { _id, title, description, deadline, priority, status } = item;
          return (
            <div
              key={_id}
              className="bg-lightTwo p-12 flex flex-col gap-8 rounded-lg my-8"
            >
              <h1 className="text-3xl font-lora font-semibold">
                Title : {title}
              </h1>
              <h1 className="text-3xl font-lora font-semibold">
                Description : {description}
              </h1>
              <h1 className="text-3xl font-lora font-semibold">
                Expire Deadline : {deadline}
              </h1>
              <h1 className="text-3xl font-lora font-semibold">
                Work priority : {priority}
              </h1>
              <h1 className="text-3xl font-lora font-semibold">
                Current status : {status}
              </h1>
              <FaTrashAlt
                onClick={() => deleteTodo(_id)}
                size={50}
                className="cursor-pointer"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EditTask;
