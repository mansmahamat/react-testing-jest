import './App.css';
import Button from './components/Button';
import Checkbox from './components/Checkbox';
import Input from './components/Input';
import Todo from './components/Todo';

function App() {

  const todos = [
    {id: 1, title: "Go to supermarket", completed: false},
    {id: 2, title: "Make dinner", completed: true},
    {id: 2, title: "Go to sport", completed: true},
    {id: 2, title: "take a nap", completed: false},
    {id: 2, title: "Paint the wall", completed: false},
  ]

  return (
    <div className="App">
      {todos.map(todo => {
        return (<Todo todo={todo} />)
      })}
      <Button label="Click me" />
      <Input />
      <Checkbox />
    </div>
  );
}

export default App;
