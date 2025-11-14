import { createSlice, nanoid } from "@reduxjs/toolkit";

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

interface TaskState {
  items: Task[];
  filters: string;
}

const TaskSlice = createSlice({
  name: "task",
  initialState: {
    items: [],
    filters: "all",
  } as TaskState,

  reducers: {
    AddTask: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },

      prepare: (text: string) => {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false,
          },
          meta: undefined,
          error: undefined,
        };
      },
    },
    toggleTask: (state, action) => {
      const task = state.items.find((t) => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },

    deleteTask: (state, action) => {
      state.items = state.items.filter((t) => t.id !== action.payload);
    },
  },
});

export const { AddTask, toggleTask, deleteTask} = TaskSlice.actions;
export default TaskSlice.reducer;
