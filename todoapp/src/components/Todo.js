import { useState } from "react";
// import 
function Todo(){
    const [todos,setTodos] = useState([]);
    const [task, setTask] = useState("");

    function add(){
        if(task.trim() === "") return;
        setTodos([...todos,{
            text: task,
            completed: false
        }]);
        setTask("");
    }
    function deleteTask(index){
        setTodos(todos.filter((item, i) => i!==index));
    }
    function finishTask(index){
        setTodos(todos.map((item,i) => i===index ? {...item, completed: !item.completed} : item));
    }
    function renderList(){
        return todos.map((item,index) => (
            <li>
                <div className="task">
                    <input type="checkbox" checked={item.completed} onChange={() => finishTask(index)}/>
                    <span style={
                        {textDecoration: item.completed ? "line-through": "none"}
                    }>{item.text}</span>
                    <button onClick={() => deleteTask(index)}>❌</button>
                </div>
            </li>
        ));
    }

    return (
        <div className="todo">
            <h2>Todo-List</h2>
            <div className="input">
                <input type="text" value={task} onChange={(e) => setTask(e.target.value)}/>
                <button onClick={add}>Add (+)</button>
            </div>
            <ul>
                {renderList()}
            </ul>
        </div>
    );
}
export default Todo