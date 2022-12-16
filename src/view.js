import Pencil from './img/pencil.svg';
import Check from './img/check-bold.svg';

export default class View {
    constructor() {
        // Get DOM elements
        this.projectsDropdown = this.getElement('select');
        this.addProjectBtn = this.getElement('.add-project');
        this.deleteProjectBtn = this.getElement('.delete-project');
        this.addTaskBtn = this.getElement('.add-task');
        this.modal = this.getElement('.modal');
        this.modalContent = this.getElement('.modal-content');
        this.newTaskBtn = this.getElement('.new-task');
        this.tasksList = this.getElement('.tasks-list');

        this.titleField = this.getElement('#title');
        this.descriptionField = this.getElement('#description');
        this.dueDateField = this.getElement('#dueDate');
        this.lowPriorityField = this.getElement('#low');
        this.mediumPriorityField = this.getElement('#medium');
        this.highPriorityField = this.getElement('#high');
        this.notesField = this.getElement('#notes');

        this.editTaskBtn = new Image();
        this.editTaskBtn.src = Pencil;
        this.editTaskBtn.classList.add('edit-task');
        this.completeTaskBtn = new Image();
        this.completeTaskBtn.src = Check;
        this.completeTaskBtn.classList.add('complete-task');
    };

    // Get an element from DOM
    getElement(selector) {
        const element = document.querySelector(selector);
        return element;
    };

    // Create an element in DOM
    createElement(tag, className='') {
        const element = document.createElement(tag);
        if (className !== '') {
            element.classList.add(className);
        }
        return element;
    };

    // Delete an element in DOM
    deleteElement(selector) {
        const element = document.querySelector(selector);
        element.remove();
    }

    // Display New Project
    displayNewProject(title, tag, className='') {
        let project = this.createElement(tag, className);
        project.innerText = title;
        project.value = title;
        title = title.replace(/\s+/g, '-');
        project.classList.add(title);
        this.projectsDropdown.appendChild(project);
        project.selected = true;
    };

    // Displays modal for todo
    displayModal() {
        this.modal.style.display = 'block';
    };

    // Hides todo modal
    hideModal() {
        this.modal.style.display = 'none';
    }

    // Retrieves data from todo form
    getTodo() {
        let todoData = [this.titleField.value, 
            this.descriptionField.value, 
            this.dueDateField.value,
            this.lowPriorityField.checked, 
            this.mediumPriorityField.checked, 
            this.highPriorityField.checked,
            this.notesField.value];
        return todoData;
    }

    // Displays todos in grid
    displayTodos(todos) {
        this.tasksList.innerHTML = '';
        todos.forEach(todo => {
            let todoItem = this.createElement('div', 'item');
            todoItem.setAttribute('todo-id', todo.id);
            let todoItemTitle = this.createElement('h2');
            todoItemTitle.innerText = todo.title;
            todoItem.appendChild(todoItemTitle);
            let todoItemDueDate = this.createElement('p');
            todoItemDueDate.innerText = todo.dueDate;
            todoItem.appendChild(todoItemDueDate);
            todoItem.appendChild(this.editTaskBtn);
            todoItem.appendChild(this.completeTaskBtn);
            this.tasksList.appendChild(todoItem);
        });
    }
};