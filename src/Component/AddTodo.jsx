import {useContext, useState} from 'react';
import Button from '@mui/material/Button';
import AddCommentIcon from '@mui/icons-material/AddComment';
import './AddTodo.css';
import { TodoItemContext } from '../store/TodoItemStore';

function AddTodo() {

  const {addTodo} = useContext(TodoItemContext)


  let [newTodo, setNewTodo] = useState('');
  let [newDate, setNewDate] = useState('');

  let handlOnChangeTodo = (event) =>{
         setNewTodo(event.target.value)
  }
  
  let handlOnChangeDate = (event) =>{
       setNewDate(event.target.value)
  }
  let AddTodo = () =>{
    
    addTodo(newTodo, newDate)

    setNewTodo('');
    setNewDate('');
      
  }
  return (
    <>
    <h1 style={{margin: '2rem 0rem'}}>Todo-App</h1>
    <div className="container text-center" style={{width: '40%'}}>
      <div className="row">
        <div className="col-6">
          <input type="text" placeholder='Enter todo here....' value={newTodo} className='textInput' onChange={handlOnChangeTodo}/>
        </div>
        <div className="col-4">
          <input type="date"  value={newDate} className='dateInput' onChange={handlOnChangeDate}/>
        </div>
        <div className="col-2">
        <Button variant="outlined" className='addBtn' startIcon={<AddCommentIcon />} onClick={AddTodo}>
        Add
      </Button>
        </div>
      </div>
    </div>
    </>
  );
}
export default AddTodo;