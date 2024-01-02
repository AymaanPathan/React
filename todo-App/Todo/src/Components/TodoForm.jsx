import { useState } from "react";
import { UseTodo } from "../Context/Context";

function TodoForm() {
    const [todo,setTodo] = useState('')
   const {addTodo} = UseTodo()

   const add =(e)=>{
    e.preventDefault()
    if(!todo) return
    addTodo({todo,completed:false})
    setTodo('')
   }
    return (
        <form onSubmit={add}  className="flex">
            <input
                onChange={(e)=>setTodo(e.target.value)}
                value={todo}
                type="text"
                placeholder="Add Todo item..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-md px-4 py-1 bg-blue-400 text-white font-medium shrink-0 hover:bg-blue-500 transition-all duration-150 ease-in">
                Add
            </button>
        </form>
    );
}

export default TodoForm