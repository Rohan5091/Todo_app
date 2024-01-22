
import { useContext, useEffect, useState } from "react"
import Todocontext from "../context/context.jsx"
import "./Tododone.css"
 export default function Tododone() {

  const {list,setList}=useContext(Todocontext)
  const [taskcompleted,SetTaskcompleted]=useState("")

  function completedTask() {
    let value=0
    list.map((todo)=>{
       if (todo.finished==true) {
          value+=1
       }
    })
    SetTaskcompleted(value)
  }
  
  useEffect(()=>{
     completedTask()
  },[list])
  

   return(
       <div className="tododoneWrapper">
            <div className="message">
               <h1>TODO DONE</h1>
               <p>keep it up</p>
            </div>
            <div className="circle">
                  <span>{taskcompleted}/{list.length}</span>
            </div>
       </div>
   )
}