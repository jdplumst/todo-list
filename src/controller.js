import Todo from "./todo";

export default class Controller {
    _todos = [];

    addTodo(title) {
        let x = new Todo(title);
        this._todos.push(x);
    };
};