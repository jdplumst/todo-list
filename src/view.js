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
        this.newTaskBtn = this.getElement('.new-task-submit');
        this.editTaskBtn = this.getElement('.edit-task-submit');
        this.tasksList = this.getElement('.tasks-list');

        this.titleField = this.getElement('#title');
        this.descriptionField = this.getElement('#description');
        this.dueDateField = this.getElement('#dueDate');
        this.lowPriorityField = this.getElement('#low');
        this.mediumPriorityField = this.getElement('#medium');
        this.highPriorityField = this.getElement('#high');
        this.notesField = this.getElement('#notes');
        this.idField = this.getElement('#todo-id');
        this.submitBtn = this.getElement('input[type=submit]');
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
    };

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

    // Displays modal for todo to add
    displayNewModal() {
        this.modal.style.display = 'block';
        this.submitBtn.classList.remove('edit-task-submit');
        this.submitBtn.classList.add('new-task-submit');
        this.titleField.value = '';
        this.descriptionField.value = '';
        this.dueDateField.value = '';
        this.lowPriorityField.checked = true;
        this.mediumPriorityField.checked = false;
        this.highPriorityField.checked = false;
        this.notesField.value = '';
        this.idField.value = '';
    };

    // Hides todo modal
    hideModal() {
        this.modal.style.display = 'none';
    };

    // Displays modal for todo to edit
    displayEditModal(todo) {
        this.modal.style.display = 'block';
        this.submitBtn.classList.add('edit-task-submit');
        this.submitBtn.classList.remove('new-task-submit');
        this.titleField.value = todo.title;
        this.descriptionField.value = todo.description;
        this.dueDateField.value = todo.dueDate;
        if (todo.priority === 'low') {
            this.lowPriorityField.checked = true;
        } else if (todo.priority === 'medium') {
            this.mediumPriorityField.checked = true;
        } else if (todo.priority === 'high') {
            this.highPriorityField.checked = true;
        }
        this.notesField.value = todo.notes;
        this.idField.value = todo.id;
    };

    // Retrieves data from todo form
    getTodo() {
        let todoData = [this.titleField.value, 
            this.descriptionField.value, 
            this.dueDateField.value,
            this.lowPriorityField.checked, 
            this.mediumPriorityField.checked, 
            this.highPriorityField.checked,
            this.notesField.value,
            this.idField.value];
        return todoData;
    };

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
            this.editTaskBtn = new Image();
            this.editTaskBtn.src = Pencil;
            this.editTaskBtn.classList.add('edit-task');
            todoItem.appendChild(this.editTaskBtn);
            this.completeTaskBtn = new Image();
            this.completeTaskBtn.src = Check;
            this.completeTaskBtn.classList.add('complete-task');
            todoItem.appendChild(this.completeTaskBtn);
            if (todo.priority === 'low') {
                todoItem.style.backgroundColor = '#22c55e';
            } else if (todo.priority === 'medium') {
                todoItem.style.backgroundColor = '#f97316';
            } else if (todo.priority === 'high') {
                todoItem.style.backgroundColor = '#ef4444';
            }
            this.tasksList.appendChild(todoItem);
        });
    };
};