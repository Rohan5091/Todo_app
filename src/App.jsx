import { useReducer, useState } from 'react'
import './App.css'
import ToDolist from './components/ToDolist/ToDolist.jsx'
import AddToDo from './components/AddToDo/AddToDo.jsx'
import Todocontext from "./components/context/context.jsx"
import Tododone from './components/Tododone/Tododone.jsx'
import TodoReducer from './Reducers/TodoReducers.jsx'
import TodoDispatchContext from "./components/context/TodoDispatchContext.jsx";

function App() {

// let [list,setList]=useState([
//   {
//   id:1,tododata:"todo1",finished:false
//   },
//   {
//   id:2,tododata:"todo2",finished:false
//   }
// ])

const [list,dispatch]=useReducer(TodoReducer,[])

  return (
    <Todocontext.Provider  value={{list}}> 
     <TodoDispatchContext.Provider value={{dispatch}}>
        <div className='main'>
            <Tododone/>
            <AddToDo />
            <ToDolist />
        </div>  
      </TodoDispatchContext.Provider>
    </Todocontext.Provider>
  )
}

export default App
