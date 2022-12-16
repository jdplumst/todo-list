import Todo from "./todo";

export default class Project {
    constructor(title) {
        this.title = title;
        this.todos = [];
    };

    addTodo(title, description, dueDate, priority, notes) {
        let task = new Todo(title, description, dueDate, priority, notes);
        this.todos.push(task);
    };

    getTodos() {
        return this.todos;
    };
};