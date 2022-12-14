export default class Todo {
    constructor(title, description, dueDate, priority, notes) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._notes = notes;
    };

    getTodo() {
        return this;
    }

    
    // Only need for special purposes
    // get title() {
    //     return this._title;
    // };

    // set title(title) {
    //     this._title = title;
    // };
};