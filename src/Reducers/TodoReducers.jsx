
 export default function TodoReducer(state,action) {
  if (action.type=="add_todo") {
    const todoText=action.payload.todoText
    const id=action.payload.id
    return[...state,{id:id,tododata:todoText,finished:false}]
  } 
  else if (action.type=="delete_todo") {
    let todo=action.payload.todo
    let updatedList=state.filter(t=>t.id !=todo.id)
     return updatedList
  } 
  else if  (action.type=="edit_todo") {
    let todoText=action.payload.todoText
    let todo=action.payload.todo
    const changedlist=state.map((t)=>{
      if (t.id==todo.id) {
         todo.tododata=todoText
      } 
      return t
   })
   return changedlist
  } 
  else if (action.type=="change_finished") {
    let todo=action.payload.todo
    let finished=action.payload.finished
    const changedlist=state.map((t)=>{
      if (t.id==todo.id) {
         todo.finished=finished
      } 
      return t
   })
   return changedlist;
  } 
  else {
    return state
  }
}