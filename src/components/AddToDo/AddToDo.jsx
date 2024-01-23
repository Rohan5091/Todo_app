import { useContext, useState } from "react";
import "./AddToDo.css"
import TodoDispatchContext from "../context/TodoDispatchContext";


function AddToDo({updatetodo}) {
   
  let [inputvalue,setInputvalue]=useState("")
  let [id,setId]=useState(0)
  const {dispatch}=useContext(TodoDispatchContext)

 return(
   <div className="AddtodoWrapper">
     <input 
     onChange={(e)=>{ setInputvalue(e.target.value)}} 
     type="text"
     value={inputvalue}
     placeholder="Add your next todo...." 
     />
     <button disabled={(!inputvalue)?true:false} onClick={
      ()=>{
           setId(id+1)
           dispatch({type:"add_todo",payload:{id:id,todoText:inputvalue}})
           setInputvalue("")
      } }>Add</button>
   </div>
 )
 }
export default AddToDo;