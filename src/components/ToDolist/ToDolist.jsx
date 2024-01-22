import { useContext } from "react"
import ToDo from "../ToDo/ToDo.jsx"
import Todocontext from "../context/context.jsx"
import "./ToDolist.css"

function ToDolist() {
  const {list,setList}=useContext(Todocontext)
  
  return(
     <div className="todolist">
        {list.length && 
        list.map(todo=>
        <ToDo key={todo.id} 
                           tododata={todo.tododata}
                           isfinished={todo.finished} 
                           changedlist={(changed)=>{
                             const changedlist=list.map((t)=>{
                                if (t.id==todo.id) {
                                   todo.finished=changed
                                } 
                                return t
                             })
                             setList(changedlist)
                           }
                        }
                        onDelete={()=>{
                           const updatelist=list.filter(t=>t.id !=todo.id)
                           setList(updatelist)
                        }}
                        onEdit={(inutText)=>{
                           const changedlist=list.map((t)=>{
                              if (t.id==todo.id) {
                                 todo.tododata=inutText
                              } 
                              return t
                           })
                           setList(changedlist)
                         }
                      }
                           
        />)} 
     </div>
  )
}
export default ToDolist;