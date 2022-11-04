/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const divContent = document.getElementById('content');\nconst addButton = document.createElement('button');\naddButton.innerText = 'Add Task';\ndivContent.append(addButton);\n\nconst taskBlock = document.createElement('ul');\ndivContent.append(taskBlock);\n\n\naddButton.addEventListener('click', () => {\n\n    addButton.disabled = true;\n\n    function appendList () {\n        const taskList = document.createElement('li');\n        taskList.innerText = newTask.value;\n        taskBlock.append(taskList);\n    \n        newTask.remove();\n        addTask.remove();\n        cancelTask.remove();\n    }\n\n    const newTask = document.createElement('input');\n    // write code to do the following thing: while the newTask is not validated (enter key), the addButton is disabled\n    // and when the newTask is validated, the addButton is enabled\n\n    const addTask = document.createElement('button');\n    addTask.innerText = 'Add';\n\n    const cancelTask = document.createElement('button');\n    cancelTask.innerText = 'Cancel';\n\n    //divContent.append(newTask, addTask, cancelTask);\n    // append newTask, addTask, and cancelTask under addButton\n    addButton.after(newTask, addTask, cancelTask);\n\n\n    newTask.addEventListener('keydown', (event) => {\n        if (event.key === 'Enter') {\n            addButton.disabled = false;\n            appendList();\n        } else {\n            addButton.disabled = true;\n        }\n    });\n\n    addTask.addEventListener('click', () => {\n        // write code to do the following thing: when the addTask is clicked, the newTask is added to the list\n        // and the newTask, addTask, and cancelTask are removed from the divContent\n        appendList();\n        addButton.disabled = false;\n    });\n\n\n    cancelTask.addEventListener('click', () => {\n        // write code to do the following thing: when the cancelTask is clicked, the newTask, addTask, and cancelTask are removed from the divContent\n        newTask.remove();\n        addTask.remove();\n        cancelTask.remove();\n\n        addButton.disabled = false;\n    });\n});\n\n\n\nclass newDo {\n    constructor(task) {\n        this.task = task;\n    }\n};\n\nlet do1 = new newDo('lunch');\nlet do2 = new newDo('dinner');\n\nconsole.log(do1.task);\nconsole.log(do2.task);\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;