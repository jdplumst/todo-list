import Todo from "./todo";
import Project from "./projects";
import View from "./view";

export default class Controller {
    projects = [];
    
    constructor(view) {
        this.view = view;
    };

    addProject(title) {
        let x = new Project(title);
        this.projects.push(x);
    };

    displayProjects() {
        this.view.displayProjects(this.projects);
    };
};