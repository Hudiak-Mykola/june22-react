import {useEffect, useState} from "react";

import {Service} from "../../services";
import Todo from "../todo/Todo";
import '../style.css'

const Todos = () => {

    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        Service.getTodos().then(value => setTodos(value.data))
    },[])
    return (
        <div className={'todos'}>
            {
                todos.map(todo=> <Todo key ={todo.id} todo={todo}/>)
            }

        </div>
    );
};

export default Todos;