import { createContext } from "react";
import { useState, useReducer } from "react";

export const TodoItemContext = createContext({
  todo: [],
  addTodo: () => {},
  deleteTodo: () => {},
});

let dispatchFunction = (currTodo, action) => {
  let newTodoitem = currTodo;
  if (action.type === "Add-item") {
    newTodoitem = [
      ...currTodo,
      { name: action.payload.newTodo, dueDate: action.payload.newDate },
    ];
  } else if (action.type === "Delete-item") {
    newTodoitem = currTodo.filter((item) => item.name !== action.payload.name);
  }

  return newTodoitem;
};

const TodoItemReducerContext = ({ children }) => {
  // let  [todo, setTodo] = useState([]);
  let [todo, dispatchTodo] = useReducer(dispatchFunction, []);

  let addTodo = (newTodo, newDate) => {
    let addItemAction = {
      type: "Add-item",
      payload: {
        newTodo,
        newDate,
      },
    };
    dispatchTodo(addItemAction);
    // console.log(`todo name is ${newTodo} and TodoDate is ${newDate}`)
    // setTodo((currTodo) => [...currTodo, {name: newTodo, dueDate:  newDate}])
  };

  let deleteTodo = (itemName) => {
    let deleteItem = {
      type: "Delete-item",
      payload: {
        name: itemName,
      },
    };
    dispatchTodo(deleteItem);
    // let deleteTodo = todo.filter((item) => item.name !== itemName);
    // setTodo(deleteTodo)
  };

  return (
    <TodoItemContext.Provider value={{ todo, addTodo, deleteTodo }}>
      {children}
    </TodoItemContext.Provider>
  );
};

export default TodoItemReducerContext;
