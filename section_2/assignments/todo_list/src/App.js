import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Todo from './Todo';
import TodoForm from './TodoForm';

function App() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const addTodo = (todoData) => {
    dispatch({type:"ADD_TODO", todo:todoData})
  }
  const deleteTodo = (todoId) => {
    dispatch({type:"REMOVE_TODO", id:todoId})
  }

  const todoList = todos.map(todo => (
    <Todo key={todo.id} todoItem = {todo.todoItem} deleteTodo={ () => deleteTodo(todo.id)}/>
  ))
  return (
    <div className="App">
      <header className="App-header">
        {/* <Meme topText ="React redux is so fun" bottomText="I cant think of a meme" imgUrl="https://upload.wikimedia.org/wikipedia/en/2/2b/Bad_Luck_Brian.jpg" deleteMeme={deleteMeme}/> */}
      <TodoForm addTodo={addTodo}/>
      <ul>
      {todoList}
      </ul>
      
      </header>
    </div>
  );
}

export default App;
