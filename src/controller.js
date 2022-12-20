import Project from "./projects";

export default class Controller {
    constructor(view) {
        this.view = view;
        this.time = 'all';
        this.projectsLocal = JSON.parse(localStorage.getItem('projects')) || [];

        this.projects = this.retrieveLocalObjects();

        // Display all saved projects in local storage and their todos
        this.refresh();
        
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
            let todos = project.getTodos();
            this.view.clearProjectInput();
            this.view.displayTodos(this.getFilteredTodoDates(todos, this.time));
            localStorage.setItem('projects', JSON.stringify(this.projects));
        });

        // Delete currently displayed project when delete project button clicked
        this.view.deleteProjectBtn.addEventListener('click', () => {
            let projectTitle = this.view.getElement('select').value;
            if (projectTitle === '') return;
            let classProjectTitle = projectTitle.replace(/\s+/g, '-');
            this.view.deleteElement(`option.${CSS.escape(classProjectTitle)}`);
            this.projects = this.projects.filter(project => project.title !== projectTitle);
            localStorage.setItem('projects', JSON.stringify(this.projects));
            projectTitle = this.view.getElement('select').value;
            if (projectTitle === '') return;
            let project = this.getProject(projectTitle);
            let todos = project.getTodos();
            todos.sort((a,b) => (a.dueDate > b.dueDate) ? 1 : (b.dueDate > a.dueDate) ? -1: 0);
            this.view.displayTodos(this.getFilteredTodoDates(todos, this.time));
        });

        // Display form to create new todo
        this.view.addTaskBtn.addEventListener('click', () => {
            let projectTitle = this.view.getElement('select').value;
            if (projectTitle === '') {
                alert('Must have a project selected!');
                return;
            }
            this.view.displayNewModal();
        });

        // Close todo form
        this.view.closeBtn.addEventListener('click', () => {
            this.view.hideModal();
        });

        // Create new todo item or edit exising todo item
        this.view.submitBtn.addEventListener('click', (event) => {
            let todoData = this.view.getTodo();
            if (todoData[0] === '' || todoData[2] === '') return;
            let projectTitle = this.view.getElement('select').value;
            let project = this.getProject(projectTitle);
            // Create new todo in currently displayed project
            if (event.target.className === 'new-task-submit') {
                // Create new todo
                if (todoData[3]) {
                    project.addTodo(todoData[0], todoData[1], todoData[2], 'low', todoData[6]);
                } else if (todoData[4]) {
                    project.addTodo(todoData[0], todoData[1], todoData[2], 'medium', todoData[6]);
                } else if (todoData[5]) {
                    project.addTodo(todoData[0], todoData[1], todoData[2], 'high', todoData[6]);
                }
                localStorage.setItem('projects', JSON.stringify(this.projects));
            // Edit existing todo item
            } else if (event.target.className === 'edit-task-submit') {
                if (todoData[3]) {
                    project.editTodo(todoData[7], todoData[0], todoData[1], todoData[2], 'low', todoData[6]);
                } else if (todoData[4]) {
                    project.editTodo(todoData[7], todoData[0], todoData[1], todoData[2], 'medium', todoData[6]);
                } else if (todoData[5]) {
                    project.editTodo(todoData[7], todoData[0], todoData[1], todoData[2], 'high', todoData[6]);
                }
                localStorage.setItem('projects', JSON.stringify(this.projects));
            }
            this.view.hideModal();
            // Get list of todos for currently displayed project and sort them by date
            let todos = project.getTodos();
            todos.sort((a,b) => (a.dueDate > b.dueDate) ? 1 : (b.dueDate > a.dueDate) ? -1: 0);
            this.view.displayTodos(this.getFilteredTodoDates(todos, this.time));
            event.preventDefault(); // Prevent form from submitting
        });

        // Set to show all todos when Show All button is clicked
        this.view.showAllBtn.addEventListener('click', () => {
            this.time = 'all';
            let projectTitle = this.view.getElement('select').value;
            if (projectTitle === '') return;
            let project = this.getProject(projectTitle);
            let todos = project.getTodos();
            this.view.toggleDateButton(this.time);
            todos.sort((a,b) => (a.dueDate > b.dueDate) ? 1 : (b.dueDate > a.dueDate) ? -1: 0);
            this.view.displayTodos(this.getFilteredTodoDates(todos, this.time)); 
        });

        // Set to show todos due this week when Show This Week button is clicked
        this.view.showWeekBtn.addEventListener('click', () => {
            this.time = 'week';
            let projectTitle = this.view.getElement('select').value;
            if (projectTitle === '') return;
            let project = this.getProject(projectTitle);
            let todos = project.getTodos();
            this.view.toggleDateButton(this.time);
            todos.sort((a,b) => (a.dueDate > b.dueDate) ? 1 : (b.dueDate > a.dueDate) ? -1: 0);
            this.view.displayTodos(this.getFilteredTodoDates(todos, this.time)); 
        });

        // Set to show todos due this month when Show This Month button is clicked
        this.view.showMonthBtn.addEventListener('click', () => {
            this.time = 'month';
            let projectTitle = this.view.getElement('select').value;
            if (projectTitle === '') return;
            let project = this.getProject(projectTitle);
            let todos = project.getTodos();
            this.view.toggleDateButton(this.time);
            todos.sort((a,b) => (a.dueDate > b.dueDate) ? 1 : (b.dueDate > a.dueDate) ? -1: 0);
            this.view.displayTodos(this.getFilteredTodoDates(todos, this.time)); 
        });

        // Set to show todos due this week when Show This Year button is clicked
        this.view.showYearBtn.addEventListener('click', () => {
            this.time = 'year';
            let projectTitle = this.view.getElement('select').value;
            if (projectTitle === '') return;
            let project = this.getProject(projectTitle);
            let todos = project.getTodos();
            this.view.toggleDateButton(this.time);
            todos.sort((a,b) => (a.dueDate > b.dueDate) ? 1 : (b.dueDate > a.dueDate) ? -1: 0);
            this.view.displayTodos(this.getFilteredTodoDates(todos, this.time)); 
        });

        // Refresh todo list when the show completed tasks checkbox is clicked
        this.view.showCompletedCheckbox.addEventListener('click', () => {
            let projectTitle = this.view.getElement('select').value;
            let project = this.getProject(projectTitle);
            let todos = project.getTodos();
            todos.sort((a,b) => (a.dueDate > b.dueDate) ? 1 : (b.dueDate > a.dueDate) ? -1: 0);
            this.view.displayTodos(this.getFilteredTodoDates(todos, this.time)); 
        });

        // Event listener for dynamic elements
        document.addEventListener('click', (event) => {
            let target = event.target;
            // Display todo list for selected project
            if (target.tagName === 'SELECT') {
                let projectTitle = this.view.getElement('select').value;
                if (projectTitle === '') return;
                let project = this.getProject(projectTitle);
                let todos = project.getTodos();
                this.view.displayTodos(this.getFilteredTodoDates(todos, this.time));
            // Display form to edit todo
            } else if (target.className === 'edit-task') {
                let todoId = target.parentNode.getAttribute('todo-id');
                let projectTitle = this.view.getElement('select').value;
                let project = this.getProject(projectTitle);
                let todo = project.getTodo(todoId);
                this.view.displayEditModal(todo);
            // Toggle completed of todo
            } else if (target.className === 'complete-task') {
                let todoId = target.parentNode.getAttribute('todo-id');
                let projectTitle = this.view.getElement('select').value;
                let project = this.getProject(projectTitle);
                project.completeTodo(todoId);
                localStorage.setItem('projects', JSON.stringify(this.projects));
                let todos = project.getTodos();
                todos.sort((a,b) => (a.dueDate > b.dueDate) ? 1 : (b.dueDate > a.dueDate) ? -1: 0);
                this.view.displayTodos(this.getFilteredTodoDates(todos, this.time));
            // Delete todo
            } else if (target.className === 'delete-task') {
                let todoId = target.parentNode.getAttribute('todo-id');
                let projectTitle = this.view.getElement('select').value;
                let project = this.getProject(projectTitle);
                project.deleteTodo(todoId);
                localStorage.setItem('projects', JSON.stringify(this.projects));
                let todos = project.getTodos();
                todos.sort((a,b) => (a.dueDate > b.dueDate) ? 1 : (b.dueDate > a.dueDate) ? -1: 0);
                this.view.displayTodos(this.getFilteredTodoDates(todos, this.time));
            // Go back to list view from todo details view
            } else if (target.className === 'back-btn') {
                let projectTitle = this.view.getElement('select').value;
                let project = this.getProject(projectTitle);
                let todos = project.getTodos();
                todos.sort((a,b) => (a.dueDate > b.dueDate) ? 1 : (b.dueDate > a.dueDate) ? -1: 0);
                this.view.displayTodos(this.getFilteredTodoDates(todos, this.time));
            // Display full details of todo when clicked on
            } else if (target.parentNode.className === 'item' || target.className === 'item') {
                let todoId;
                if (target.parentNode.className === 'item') {
                    todoId = target.parentNode.getAttribute('todo-id');
                } else {
                    todoId = target.getAttribute('todo-id');
                }
                let projectTitle = this.view.getElement('select').value;
                let project = this.getProject(projectTitle);
                let todo = project.getTodo(todoId);
                this.view.displayFullTodo(todo)
            }
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
    };

    // Returns list of todos filtered by time frame (week, month, or year)
    getFilteredTodoDates(todos,time) {
        if (time === 'all') {
            return todos;
        }
        let today = new Date();
        today.setHours(0,0,0,0);
        let end = new Date();
        end.setHours(0,0,0,0);
        if (time === 'week') {
            end.setDate(today.getDate() + 7);
        } else if (time === 'month') {
            end.setDate(today.getDate() + 30);
        } else if (time === 'year') {
            end.setDate(today.getDate() + 365);
        }
        today = today.toISOString().substring(0,10);
        end = end.toISOString().substring(0,10);
        return todos.filter(todo => todo.dueDate >= today && todo.dueDate <= end);
    };

    // Re create all the objects in local storage so that they have their methods
    retrieveLocalObjects() {
        let projects = [];
        for (let i = 0; i < this.projectsLocal.length; i++) {
            let project = new Project(this.projectsLocal[i].title, this.projectsLocal[i].currentId);
            for (let j = 0; j < this.projectsLocal[i].todos.length; j++) {
                project.addTodo(this.projectsLocal[i].todos[j].title,
                                this.projectsLocal[i].todos[j].description,
                                this.projectsLocal[i].todos[j].dueDate,
                                this.projectsLocal[i].todos[j].priority,
                                this.projectsLocal[i].todos[j].notes,
                                this.projectsLocal[i].todos[j].completed);
            }
            projects.push(project);
        }
        return projects;
    };

    // Display all saved projects in local storage and their todos
    refresh() {
        this.view.displayAllProjects(this.projects, 'option');
        let projectTitle = this.view.getElement('select').value;
        if (projectTitle === '') return;
        let project = this.getProject(projectTitle);
        let todos = project.getTodos();
        this.view.displayTodos(this.getFilteredTodoDates(todos, this.time));
    };  

};