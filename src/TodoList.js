import { useState } from "react";
import "./TodoList.css"


    const TodoList = ()=>{
        const [inputValue , setInputValue] = useState('');
        const [todos , setToDos] = useState([]);
        const [currentindex , setCurrentIndex] = useState(null);
        const [isediting , setIsEditing] = useState(false);


        function handleChange(e){
            setInputValue(e.target.value)
        }
        function handleSubmit(e){
            e.preventDefault()
            if(inputValue==""){
                return
            }
            if(isediting){
                const updateTodo = [...todos];
                updateTodo[currentindex] = inputValue;
                setToDos(updateTodo);
                setIsEditing(false);
                setCurrentIndex(null);
            }
            else{
                setToDos([...todos,inputValue])
            }
        
            
            setInputValue('')
        }
        function handleDelete(index){
            const newtodos = [...todos];
            newtodos.splice(index,1);
            setToDos(newtodos)
        }
        function handleEdit(index){
            setInputValue(todos[index]);
            setIsEditing(true);
            setCurrentIndex(index);
        }
    
   
    return(
        <>
        <center>
            <h1>
                ToDo List
            </h1>
            <form onSubmit={handleSubmit }>
                <input type="text" value={inputValue} onChange={handleChange}>
                </input>
            </form>
             <button onClick={handleSubmit} id="AT">{isediting ? 'Update Task' : 'Add Task' }</button>
            
                {todos.map((todos,index)=>(
                    <h3 key={index}>{todos}
                     <button onClick={()=> handleDelete(index)}> DELETE

                     </button>
                     <button onClick={()=> handleEdit(index)}> EDIT

</button>

                    </h3>
                    
                ))}
               
            
        </center>
        </>
    )

}
export default TodoList;