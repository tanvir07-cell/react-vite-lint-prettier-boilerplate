import React, { createContext, useContext, useReducer } from "react";
import { TASKS } from "../utils/data";

const TaskContext = createContext({
  state: { tasks: [] },
  dispatch: () => {},
});

const Taskreducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case "SEARCH_TASK":
      if (action.payload.trim() === "") {
        return {
          ...state,
          tasks: [...TASKS],
        };
      }

      // Otherwise, filter tasks based on the search input
      return {
        ...state,
        tasks: state.tasks.filter((task) =>
          task.title.toLowerCase().includes(action.payload)
        ),
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "DELETE_ALL_TASKS":
      return {
        ...state,
        tasks: [],
      };

    default:
      return state;
  }
};

const TaskController = ({ children }) => {
  const [state, dispatch] = useReducer(Taskreducer, { tasks: [...TASKS] });
  const value = { state, dispatch };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTaskContext = () => useContext(TaskContext);

export default TaskController;
