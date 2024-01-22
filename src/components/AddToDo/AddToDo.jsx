import { useState } from "react";
import "./AddToDo.css"

function AddToDo({updatetodo}) {

  let [inputvalue,setInputvalue]=useState("")
  

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
        updatetodo(inputvalue)
           setInputvalue("")
      } }>Add</button>
   </div>
 )
 }
export default AddToDo;