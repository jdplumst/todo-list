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

        this.titleField = this.getElement('#title');
        this.descriptionField = this.getElement('#description');
        this.dueDateField = this.getElement('#dueDate');
        this.lowPriorityField = this.getElement('#low');
        this.mediumPriorityField = this.getElement('#medium');
        this.highPriorityField = this.getElement('#high');
        this.notesField = this.getElement('#notes');
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
};