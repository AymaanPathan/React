import AddTodo from "./Components/AddTodo";
import Todo from "./Components/Todo";
import { Provider } from "react-redux";
import { store } from "./App/Store";

export default function App() {
  return (
    <Provider store={store}>

    <div className="grid items-center justify-center">
    <AddTodo/>
    <Todo/>
    </div>
    </Provider>
  )
}