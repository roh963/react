// 03 creating a slice and nano id create unique id  
import { createSlice ,nanoid} from "@reduxjs/toolkit";


//04 deefine the state 
const   initialState ={
    todos:[{id:1,text:"hello world"}]
}

//05  creating a slice define the function also  create slice also take the object 
export const todoslice = createSlice({
    //01 name of slice
    name:'todo',
    //02 define the state
    initialState,
    //03 define the reduncer
    //state , action are used to reducer functionality  state are define the  current state and action the perform of  data that replicate what he do
    //payload is object 
    reducers:{
        addTodo :(state,action)=>{
            const todo ={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
           state.todos= state.todos.filter((todo)=>todo.id !== action.payload)
        },
        // updateTodo:(state,action)=>{
        //     state.todos.map((todo)=>{ if(todo.id===action.payload){
        //         console.log(todo.id);
        //           text:action.payload.text
        //     }}
        //         )
        // }
    }

})

export const {addTodo,removeTodo} = todoslice.actions

export default todoslice.reducer;