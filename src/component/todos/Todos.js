import {useEffect, useState} from "react";

import {Service} from "../../services";
import Todo from "../todo/Todo";


const Todos = () => {

    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        Service.getTodos().then(value => setTodos(value.data))
    },[])
    return (
        <div>
            {
                todos.map(todo=> <Todo key ={todo.id} todo={todo}/>)
            }

        </div>
    );
};

export default Todos;