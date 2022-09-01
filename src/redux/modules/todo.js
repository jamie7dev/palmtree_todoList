import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  title: "",
  content: ""
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {},
  reducer: {
    addTodo: (state, action) => {
      
    },

    // removeTodo:

    // updateTodo:


  },
})

export const { addTodo } = todoSlice.action
export default todoSlice;