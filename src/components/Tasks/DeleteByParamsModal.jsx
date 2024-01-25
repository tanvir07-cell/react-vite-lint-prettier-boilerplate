import React from "react";
import Modal from "../Modal";
import { useTaskContext } from "../../context/TaskController";

const DeleteByParamsModal = ({ onCloseModal, title, id }) => {
  const { dispatch } = useTaskContext();
  return (
    <Modal>
      <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black/60 backdrop-blur-sm"></div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: "DELETE_TASK",
            payload: id,
          });
          onCloseModal();
        }}
        className="absolute bottom-[-100%] left-[50%] transform -translate-x-1/2
       z-10 mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11"
      >
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          Do you want to Delete {title} task?
        </h2>

        <div className="mt-16 flex justify-center lg:mt-20 gap-9">
          <button
            type="submit"
            className="rounded bg-green-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Yes
          </button>
          <button
            type="submit"
            className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
            onClick={onCloseModal}
          >
            No
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default DeleteByParamsModal;
