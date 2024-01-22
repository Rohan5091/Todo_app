
import { useState } from "react";
import "./ToDo.css"
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { FaRegSave } from "react-icons/fa";

function ToDo({tododata,changedlist,isfinished,onDelete,onEdit}) {
   const [checked,setChecked]=useState(isfinished)
   const [inputText,setInputText]=useState(tododata)
   const [isEdit,setIsEdit]=useState(true)
    return(
      <div className="todowrapper">
        <input className="checkbox" type="checkbox" 
                          checked={checked} 
                          onChange={  
                            (e)=>{
                              changedlist(e.target.checked)
                              setChecked(e.target.checked)
                            }
                          }  
                          name="todoChebox" id="todoChebox" />
         {(isEdit)?tododata:<input value={inputText} onChange={(e)=>setInputText(e.target.value)}/>}
        <p className="btn"  onClick={()=>{
          setIsEdit(!isEdit)
          onEdit(inputText)
         
          }}>
            {(!isEdit)?<FaRegSave />:<FaRegEdit />}</p>
        <p className="btn" onClick={onDelete}>< RiDeleteBin6Line /></p>
      </div>
    )
}

export default ToDo;