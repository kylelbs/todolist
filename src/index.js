const divContent = document.getElementById('content');
const addButton = document.createElement('button');
addButton.innerText = 'Add Task';
divContent.append(addButton);

const taskBlock = document.createElement('ul');
divContent.append(taskBlock);


addButton.addEventListener('click', () => {

    addButton.disabled = true;

    function appendList () {
        const taskList = document.createElement('li');
        taskList.innerText = newTask.value;
        taskBlock.append(taskList);
    
        newTask.remove();
        addTask.remove();
        cancelTask.remove();
    }

    const newTask = document.createElement('input');
    // write code to do the following thing: while the newTask is not validated (enter key), the addButton is disabled
    // and when the newTask is validated, the addButton is enabled

    const addTask = document.createElement('button');
    addTask.innerText = 'Add';

    const cancelTask = document.createElement('button');
    cancelTask.innerText = 'Cancel';

    //divContent.append(newTask, addTask, cancelTask);
    // append newTask, addTask, and cancelTask under addButton
    addButton.after(newTask, addTask, cancelTask);


    newTask.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addButton.disabled = false;
            appendList();
        } else {
            addButton.disabled = true;
        }
    });

    addTask.addEventListener('click', () => {
        // write code to do the following thing: when the addTask is clicked, the newTask is added to the list
        // and the newTask, addTask, and cancelTask are removed from the divContent
        appendList();
        addButton.disabled = false;
    });


    cancelTask.addEventListener('click', () => {
        // write code to do the following thing: when the cancelTask is clicked, the newTask, addTask, and cancelTask are removed from the divContent
        newTask.remove();
        addTask.remove();
        cancelTask.remove();

        addButton.disabled = false;
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