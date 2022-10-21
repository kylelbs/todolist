class newDo {
    constructor(task) {
        this.task = task;
    }
};

let do1 = new newDo('lunch');
let do2 = new newDo('dinner');

console.log(do1.task);
console.log(do2.task);