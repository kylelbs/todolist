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

eval("const divContent = document.getElementById('content');\nconst addButton = document.createElement('button');\naddButton.innerText = 'Add Task';\ndivContent.append(addButton);\n\naddButton.addEventListener('click', () => {\n    const newTask = document.createElement('input');\n    newTask.setAttribute('type', 'text');\n    newTask.setAttribute('placeholder', 'Add new task');\n    divContent.append(newTask);\n    newTask.addEventListener('keypress', (e) => {\n        if (e.key === 'Enter') {\n            const newTaskList = document.createElement('li');\n            newTaskList.innerText = newTask.value;\n            divContent.append(newTaskList);\n        }\n    });\n});\n\n\n\nclass newDo {\n    constructor(task) {\n        this.task = task;\n    }\n};\n\nlet do1 = new newDo('lunch');\nlet do2 = new newDo('dinner');\n\nconsole.log(do1.task);\nconsole.log(do2.task);\n\n//# sourceURL=webpack://todolist/./src/index.js?");

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