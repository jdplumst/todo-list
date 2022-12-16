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
            console.log(this.projects);
        });

        // Delete currently displayed project when delete project button clicked
        this.view.deleteProjectBtn.addEventListener('click', () => {
            let projectTitle = this.view.getElement('select').value;
            if (projectTitle === '') return;
            let classProjectTitle = projectTitle.replace(/\s+/g, '-');
            this.view.deleteElement(`option.${CSS.escape(classProjectTitle)}`);
            this.projects = this.projects.filter(project => project.title !== projectTitle);
        });
    };

    // Returns true if there already exists a project with a specific title
    projectExists(projectTitle) {
        for (let i = 0; i < this.projects.length; i++) {
            if (this.projects[i].title === projectTitle) return true;
        }
        return false;
    };
};