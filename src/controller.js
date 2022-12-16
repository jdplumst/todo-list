import Project from "./projects";

export default class Controller {
    constructor(view) {
        this.view = view;
        this.projects = [];
        
        // Create new project when new project button is clicked
        this.view.addProjectBtn.addEventListener('click', () => {
            let projectTitle = this.view.getElement('input').value;
            if (projectTitle === '') return;
            if (this.projectExists(projectTitle)) {
                alert('That project title already exists!');
                return;
            }
            this.view.displayNewProject(projectTitle, 'option');
            let project = new Project(projectTitle);
            this.projects.push(project);
        });

        // Delete currently displayed project when delete project button clicked
        this.view.deleteProjectBtn.addEventListener('click', () => {
            let projectTitle = this.view.getElement('select').value;
            if (projectTitle === '') return;
            let classProjectTitle = projectTitle.replace(/\s+/g, '-');
            this.view.deleteElement(`option.${CSS.escape(classProjectTitle)}`);
            this.projects = this.projects.filter(project => project.title !== projectTitle);
        });

        // Display form to create new todo
        this.view.addTaskBtn.addEventListener('click', () => {
            this.view.displayModal();
        });

        // Create new todo in currently displayed project
        this.view.newTaskBtn.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent form from submitting
            let todoData = this.view.getTodo();
            let projectTitle = this.view.getElement('select').value;
            let project = this.getProject(projectTitle);
            // Create new todo
            if (todoData[3]) {
                project.addTodo(todoData[0], todoData[1], todoData[2], 'low', todoData[6]);
            } else if (todoData[4]) {
                project.addTodo(todoData[0], todoData[1], todoData[2], 'medium', todoData[6]);
            } else if (todoData[5]) {
                project.addTodo(todoData[0], todoData[1], todoData[2], 'high', todoData[6]);
            }
            this.view.hideModal();
            // Get list of todos for currently displayed project and sort them by date
            let todos = project.getTodos();
            todos.sort((a,b) => (a.dueDate > b.dueDate) ? 1 : (b.dueDate > a.dueDate) ? -1: 0);
            console.log(todos);
            this.view.displayTodos(todos);
        });
    };

    // Returns true if there exists a project with projectTitle as its title
    projectExists(projectTitle) {
        for (let i = 0; i < this.projects.length; i++) {
            if (this.projects[i].title === projectTitle) return true;
        }
        return false;
    };

    // Returns the project with projectTitle as its title
    getProject(projectTitle) {
        for (let i = 0; i < this.projects.length; i++) {
            if (this.projects[i].title === projectTitle) return this.projects[i];
        }
        return false;
    }
};