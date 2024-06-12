import { useContext } from "react";
import { TodoItemContext } from "../store/TodoItemStore";

function Noitem(){
  let {todo} = useContext(TodoItemContext)
    return(
        <div>
          {todo.length === 0 ? <h2 style={{margin: '5rem 0rem'}}>No Item in Todo...</h2> : null} 
        </div>
       
    )
}

export default Noitem;