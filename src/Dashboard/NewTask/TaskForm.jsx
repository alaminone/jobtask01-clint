import SectionTitle from "../../components/SectionTitle/SectionTitle";
import AddTaskForm from "./AddTaskForm";


const TaskForm = () => {
  const closeModal = () => {
    document.getElementById('my_modal_1').close();
  };
  return (
    <div>
      <SectionTitle
        heading="add todo here"
        subHeading="make todo complete and ongoing"
      />

      <div>
        <button
          className="bg-darkOne px-12 py-4 text-lightOne text-sm md:text-xl lg:text-2xl font-lora font-bold tracking-wide rounded-lg border-2 border-lightOne hover:border-darkOne duration-200 hover:bg-transparent hover:scale-105 hover:text-darkThree capitalize"
          onClick={() => document.getElementById('my_modal_1').showModal()}
        >
          open modal
        </button>
        <dialog id="my_modal_1" className="modal ">
          <div className="modal-box bg-lightOne">
            {/* Here are all added */}
            <div>
              <AddTaskForm closeModal={closeModal} />
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="bg-darkOne px-12 py-4 text-lightOne text-sm font-lora font-bold tracking-wide rounded-lg border-2 border-lightOne hover:border-darkOne duration-200 hover:bg-transparent hover:scale-105 hover:text-darkThree capitalize">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default TaskForm;
