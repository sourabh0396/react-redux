import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";

const initialState={
    todos:[{id:1, text:"Hello World"}]
}

function sayHello(){
    console.log("Hello World");
}

// export const todoSlice = createSlice({
//     name:'todo',
//     initialState,
//     reducers:{
//         addTodo:(state, action)=>{
//             const todo={
//                 id:nanoid(),
//                 text: action.payload
//             }
//             state.todos.push(todo)
//         },
//         removeTodo:(state, action)=>{
//             state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
//         },
//     }
// })
const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
      addTodo: (state, action) => {
        state.push(action.payload);
      }
    }
  });
    
export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer