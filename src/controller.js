export default class Controller {
    projects = [];
    
    constructor(view) {
        this.view = view;
        
        // Create new project when new project button is clicked
        this.view.projectBtn.addEventListener('click', () => {
            let projectName = this.view.getElement('input').value;
            if (projectName === '') return;
            this.view.displayNewProject(projectName, 'p');
        });
    };
};