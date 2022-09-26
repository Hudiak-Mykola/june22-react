
import '../style.css'
const Todo = ({todo}) => {
    return (
        <div className={'todo'}>
            {todo.id} -  {todo.title}
        </div>
    );
};

export default Todo;