import './styles.css';
import Todo from './todo';
import Controller from './controller';
import View from './view';

let app = new Controller(new View());
app.addTodo('Coding Project');
app.displayTodos();