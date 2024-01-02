/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:'todo title',
            completed:false,
        },
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    removeTodo:(id)=>{},
    toggleTodo:(id)=>{}
}) 

export const TodoProvider  = TodoContext.Provider;

export const UseTodo =()=>{
    return useContext(TodoContext)
}