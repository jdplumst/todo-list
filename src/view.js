export default class View {
    constructor() {
        // Get DOM elements
        this.projectsDropdown = this.getElement('select');
        this.addProjectBtn = this.getElement('.add-project');
        this.deleteProjectBtn = this.getElement('.delete-project');
        this.addTaskBtn = this.getElement('.add-task');
        this.modalNew = this.getElement('.modal-new');
        this.modalContent = this.getElement('.modal-content');
        this.newTaskBtn = this.getElement('.new-task');
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

    // Displays modal for new todo
    displayNewModal() {
        this.modalNew.style.display = 'block';
    };
};