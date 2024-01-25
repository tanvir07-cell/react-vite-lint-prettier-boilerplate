import React from "react";
import TaskListItem from "./TaskListItem";
import { TASKS } from "../../utils/data";
import { useTaskContext } from "../../context/TaskController";

const TaskLists = () => {
  const { state } = useTaskContext();
  console.log(state);

  return (
    <div className=" overflow-auto">
      {state.tasks.length === 0 ? (
        <h1 className="text-center">No task found</h1>
      ) : (
        <table className="table-fixed overflow-auto xl:w-full">
          <thead>
            <tr>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
                {" "}
                Title{" "}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
                {" "}
                Description{" "}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
                {" "}
                Tags{" "}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                {" "}
                Priority{" "}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                {" "}
                Options{" "}
              </th>
            </tr>
          </thead>

          <tbody>
            {state.tasks.map((task) => (
              <TaskListItem
                key={task.id}
                title={task.title}
                description={task.description}
                isFavourite={task.isFavourite}
                priority={task.priority}
                tags={task.tags}
                id={task.id}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TaskLists;
