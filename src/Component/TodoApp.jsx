import AddTodo from "./AddTodo";
import Todolist from "./Todolist";

import Noitem from './Noitem'
import TodoItemReducerContext, { TodoItemContext } from "../store/TodoItemStore";

function TodoApp() {
  return (
      <TodoItemReducerContext>
      <AddTodo/>
      <Todolist/>
      <Noitem/>
      </TodoItemReducerContext>
  );
}

export default TodoApp;
