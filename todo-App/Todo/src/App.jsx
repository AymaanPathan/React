/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import TodoForm from "./Components/TodoForm";
import { TodoProvider} from "./Context/Context";
import TodoItem from "./Components/TodoItem";

export default function App() {
    const [todos,setTodos] = useState([]);

   const addTodo = (todo)=>{
    setTodos(prevTodo=>[...prevTodo,{id:Date.now(),...todo}])
   }

   const updateTodo = (id,todo)=>{
    setTodos((prevTodo)=>prevTodo.map((prevTodo)=>prevTodo.id===id?todo:prevTodo))
   }

   const removeTodo=(id)=>{
    setTodos((prevTodo)=>prevTodo.filter((prev)=>prev.id!==id))
   }

   const toggleTodo = (id)=>{
    setTodos((prevTodo)=>prevTodo.map((prev)=>prev.id===id?{...prev,completed: !prev.completed}:prev))
   }
    //Local-Storage

    useEffect(()=>{
      const todos =  JSON.parse(localStorage.getItem('todos'))
       if(todos.length>0) {
         setTodos(todos)
       }
     },[])
   
     useEffect(()=>{
      localStorage.setItem('todos',JSON.stringify(todos))
     },[todos])



  return (
<TodoProvider value={{todos,addTodo,updateTodo,toggleTodo,removeTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center font-mono mb-8 mt-2 text-blue-300">Your Todos List...</h1>
        <div className="mb-4">
            {/* Todo form goes here */} 
            <TodoForm/>
        </div>
        <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
              todos.map((todo)=>(
                 <div className="w-full" key={todo.id}>
                  <TodoItem todo={todo}/>
                </div>
              ))
              }
        </div>
    </div>
</div>
</TodoProvider>
  )
}