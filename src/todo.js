export default class Todo {
    constructor(title, description, dueDate, priority, notes) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._notes = notes;
    };
};