import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemContext } from "../store/TodoItemStore";

function Todolist({handlDeleteItem}){
    let {todo} = useContext(TodoItemContext)
    return (
        <div>
         {todo.map((item) =>
            <TodoItem name={item.name} dueDate={item.dueDate} key={item.name}/>
        )}</div>
    )
}

export default Todolist;