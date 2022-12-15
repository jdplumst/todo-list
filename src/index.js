import './styles.css';
import Todo from './todo';
import Controller from './controller';
import View from './view';

let app = new Controller(new View());
app.addProject('Coding Project');
app.displayProjects();