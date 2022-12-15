export default class View {
    constructor() {
        // Get DOM elements
        this.projectsList = this.getElement('.projects-list');
        this.projectBtn = this.getElement('button');
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

    // Display New Project
    displayNewProject(title, tag, className='') {
        let project = this.createElement(tag, className);
        project.innerText = title;
        this.projectsList.appendChild(project);
    };
};