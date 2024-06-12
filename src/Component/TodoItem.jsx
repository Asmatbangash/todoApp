import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import './TodoItem.css'
import { useContext } from 'react';
import { TodoItemContext } from '../store/TodoItemStore';

function TodoItem({name, dueDate, onDeleteItem}){
  const {deleteTodo} = useContext(TodoItemContext)
    return(
        <div className="container text-center" style={{width: '40%', margin: '7px 0px'}}>
        <div className="row">
          <div className="col-6 textAlign text">
         {name}
          </div>
          <div className="col-4 textAlign date">
        {dueDate}
          </div>
          <div className="col-2">
          <Button variant="outlined" startIcon={<DeleteIcon />} onClick={()=>deleteTodo(name)}>
        Delete
      </Button>
          </div>
        </div>
      </div>
    )
}

export default TodoItem;