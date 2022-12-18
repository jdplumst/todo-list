import Todo from "./todo";

export default class Project {
    constructor(title) {
        this.title = title;
        this.todos = [];
        this.currentId = 0; // Current id value to be given to new todo
    };

    // Add new todo to project
    addTodo(title, description, dueDate, priority, notes) {
        let task = new Todo(this.currentId, title, description, dueDate, priority, notes);
        this.todos.push(task);
        this.currentId++;
    };

    // Return array of todos for project
    getTodos() {
        return this.todos;
    };

    // Return single todo with specific id
    getTodo(id) {
        for(let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id == id) {
                return this.todos[i];
            }
        }
        return false;
    };

    // Edit todo with specific id
    editTodo(id, title, description, dueDate, priority, notes) {
        let todo = this.getTodo(id);
        todo.title = title;
        todo.description = description;
        todo.dueDate = dueDate;
        todo.priority = priority;
        todo.notes = notes;
    };

    // Delete todo with specific id
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id);
    };

    // Set todo with specific id to have completed property switched
    completeTodo(id) {
        let todo = this.getTodo(id);
        if (todo.completed === true) {
            todo.completed = false;
        } else {
            todo.completed = true;
        }
    };
};