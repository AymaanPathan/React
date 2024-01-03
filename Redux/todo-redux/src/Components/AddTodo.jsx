import  {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../Features/Todo/TodoSlices' 

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
      e.preventDefault()
      if(!input) return
        
        dispatch(addTodo(input))
        e.preventDefault()
        setInput('')
        
    }

  return (
    <form onSubmit={addTodoHandler} className="mt-12">
      <input
        type="text"
        className="bg-indigo-50-800 rounded-l-lg border border-blue-300   text-base outline-none text-black py-2 px-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500  py-2  px-6 focus:outline-none hover:bg-indigo-600 rounded-r-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo