export default class Todo {
    constructor(title, description, dueDate, priority, notes) {
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#notes = notes;
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