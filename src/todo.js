export default class Todo {
    constructor(id, title, description, dueDate, priority, notes) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.completed = false;
    };

    getTodo() {
        return this;
    }
};