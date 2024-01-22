import { useState } from 'react'
import './App.css'
import ToDolist from './components/ToDolist/ToDolist.jsx'
import AddToDo from './components/AddToDo/AddToDo.jsx'
import Todocontext from "./components/context/context.jsx"
import Tododone from './components/Tododone/Tododone.jsx'

function App() {
let [id,setId]=useState(3)
let [list,setList]=useState([
  {
  id:1,tododata:"todo1",finished:false
  },
  {
  id:2,tododata:"todo2",finished:false
  }
])

  return (
    <Todocontext.Provider  value={{list,setList}}> 
       <div className='main'>
            <Tododone/>
            <AddToDo  updatetodo={(value)=>{
              setId(id+1)
              setList([...list,{id:id,tododata:value,finished:false}])
              }}/>
            <ToDolist />
        </div>  
       
    </Todocontext.Provider>
  )
}

export default App
