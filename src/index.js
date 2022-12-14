import './styles.css';
import Todo from './todo';
import Controller from './controller';

let app = new Controller();
app.addTodo('Coding Project');
console.log(app._todos);