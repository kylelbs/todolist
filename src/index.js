const divContent = document.getElementById('content');
const addButton = document.createElement('button');
addButton.innerText = 'Add Task';
divContent.append(addButton);

addButton.addEventListener('click', () => {
    const newTask = document.createElement('input');
    newTask.setAttribute('type', 'text');
    newTask.setAttribute('placeholder', 'Add new task');
    divContent.append(newTask);
    newTask.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const newTaskList = document.createElement('li');
            newTaskList.innerText = newTask.value;
            divContent.append(newTaskList);
        }
    });
});



class newDo {
    constructor(task) {
        this.task = task;
    }
};

let do1 = new newDo('lunch');
let do2 = new newDo('dinner');

console.log(do1.task);
console.log(do2.task);