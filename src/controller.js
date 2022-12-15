import Todo from "./todo";

export default class Controller {
    constructor(view) {
        this.view = view;
    };
    
    #todos = [];

    addTodo(title) {
        let x = new Todo(title);
        this.#todos.push(x);
    };

    displayTodos() {
        view.displayTodos();
    };
};