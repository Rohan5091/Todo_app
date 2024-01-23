import { useContext } from "react";
import ToDo from "../ToDo/ToDo.jsx";
import Todocontext from "../context/context.jsx";
import "./ToDolist.css";
import TodoDispatchContext from "../context/TodoDispatchContext.jsx";

function ToDolist() {
  const { list } = useContext(Todocontext);
  const { dispatch } = useContext(TodoDispatchContext);

  return (
    <div className="todolist">
      {list.length &&
        list.map((todo) => (
          <ToDo
            key={todo.id}
            tododata={todo.tododata}
            isfinished={todo.finished}
            changedlist={(changedTodo) => {
              dispatch({
                type: "change_finished",
                payload: { todo: todo, finished: changedTodo },
              });
            }}
            onDelete={() => {
              dispatch({ 
               type: "delete_todo", 
               payload: { todo: todo } 
              });
            }}
            onEdit={(tododata) => {
              dispatch({
                type: "edit_todo",
                payload: { todo: todo, todoText: tododata },
              });
            }}
          />
        ))}
    </div>
  );
}
export default ToDolist;
