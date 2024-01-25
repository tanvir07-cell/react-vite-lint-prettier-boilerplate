import { useState } from "react";
import { useTaskContext } from "../../context/TaskController";
import Modal from "../Modal";

const EditTaskModal = ({
  onCloseModal,
  id,
  description,
  tags,
  priority,
  title,
}) => {
  const { dispatch } = useTaskContext();
  const [editDone, setEditDone] = useState(false);

  return (
    <Modal>
      {editDone && <p className="text-9xl bg-red-500">Edit done</p>}
      <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black/60 backdrop-blur-sm"></div>{" "}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onCloseModal();
          setEditDone(true);
        }}
        className="absolute top-[90%] left-[50%] transform -translate-x-1/2 
       z-10 mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11"
      >
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          Edit New Task
        </h2>

        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              required
              value={title}
              onChange={(e) => {
                dispatch({
                  type: "UPDATE_TASK",
                  payload: {
                    id,
                    title: e.target.value,
                    description,
                    tags,
                    priority,
                  },
                });
              }}
            />
          </div>
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              required
              value={description}
              onChange={(e) => {
                dispatch({
                  type: "UPDATE_TASK",
                  payload: {
                    id,
                    title,
                    description: e.target.value,
                    tags,
                    priority,
                  },
                });
              }}
            ></textarea>
          </div>
          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                required
                value={tags}
                onChange={(e) => {
                  dispatch({
                    type: "UPDATE_TASK",
                    payload: {
                      id,
                      title: title,
                      description,
                      tags: e.target.value.split(","),
                      priority,
                    },
                  });
                }}
              />
            </div>
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                required
                value={priority}
                onChange={(e) => {
                  dispatch({
                    type: "UPDATE_TASK",
                    payload: {
                      id,
                      title,
                      description,
                      tags,
                      priority: e.target.value,
                    },
                  });
                }}
              >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-16 flex justify-center lg:mt-20 gap-9">
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Edit Task
          </button>

          <button
            type="submit"
            className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
            onClick={onCloseModal}
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditTaskModal;
