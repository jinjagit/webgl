/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/glRender.js":
/*!*************************!*\
  !*** ./src/glRender.js ***!
  \*************************/
/*! exports provided: glRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glRender", function() { return glRender; });
const glRender = () => {
  const debug = () => {
    var debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    var vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
    var renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);

    let vendorText = document.getElementById('vendorText');
    vendorText.innerHTML = `${vendor}`;
    let rendererText = document.getElementById('rendererText');
    rendererText.innerHTML = `${renderer}`;
  };
  const randCol = () => {
    gl.clearColor(Math.random(), Math.random(), Math.random(), 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
  };


  const canvas = document.querySelector("#glcanvas");
  // Initialize the GL context
  const gl = canvas.getContext("webgl");
  // Only continue if WebGL is available and working
  if (!gl) {
    alert("Unable to initialize WebGL. Your browser or machine may not support it.");
    return;
  }


  // Set clear color to black, fully opaque
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Clear the color buffer with specified clear color
  gl.clear(gl.COLOR_BUFFER_BIT);

  debug();

  // bind randCol() to elements
  let randBtn = document.getElementById('rand');
  rand.addEventListener("click", randCol);

};




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ "./src/layout.js");
/* harmony import */ var _glRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glRender */ "./src/glRender.js");



const onResize = () => {
  const redrawIfInactive = () => {
    let now = getTime();
    if (now - lastResize > 995) {
      render();
      console.log("redraw");
    };
  };
  lastResize = getTime();
  // prevent multiple (re)renders when mutliple resizes, with 1 sec delay
  setTimeout(redrawIfInactive, 1000);
};

const render = () => {
  Object(_layout__WEBPACK_IMPORTED_MODULE_0__["drawLayout"])();
  Object(_glRender__WEBPACK_IMPORTED_MODULE_1__["glRender"])();
};

window.onresize = onResize;

const getTime = typeof performance === 'function' ? performance.now : Date.now;
let lastResize = 0;

render();


/***/ }),

/***/ "./src/layout.js":
/*!***********************!*\
  !*** ./src/layout.js ***!
  \***********************/
/*! exports provided: drawLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawLayout", function() { return drawLayout; });
const drawLayout = () => {
  const winHeight = window.innerHeight;
  const winWidth = window.innerWidth;
  const canvasSide = winWidth * 9 / 16.01;
  const panelW = (winWidth - canvasSide) / 2.1;

  let glcanvas = document.getElementById('glcanvas');

  glcanvas.style.width = `${canvasSide}px`;
  glcanvas.style.height = `${canvasSide}px`;
  glcanvas.style.left = `${panelW}px`;

  let panels = document.getElementsByClassName("panel");

  for (let i = 0; i < panels.length; i++) {
    panels[i].style.width = `${panelW * 0.98}px`;
    panels[i].style.height = `${canvasSide * 0.991}px`;
    panels[i].style.left = `${(panelW * 0.01) + ((canvasSide + panelW) * i)}px`;
    panels[i].style.top = `${canvasSide * 0.0035}px`;
  };

  // add elements to left panel, and style
  let infoBox = document.getElementById('info');
  let vendorText = document.createElement('p');

  vendorText.id = 'vendorText';
  infoBox.appendChild(vendorText);

  let rendererText = document.createElement('p');

  rendererText.id = 'rendererText';
  infoBox.appendChild(rendererText);
};




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsUmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsT0FBTztBQUNyQztBQUNBLGdDQUFnQyxTQUFTO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVtQjs7Ozs7Ozs7Ozs7OztBQ3pDbkI7QUFBQTtBQUFBO0FBQXFDO0FBQ0E7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsMERBQVU7QUFDWixFQUFFLDBEQUFRO0FBQ1Y7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIsV0FBVztBQUN2Qyw2QkFBNkIsV0FBVztBQUN4QywyQkFBMkIsT0FBTzs7QUFFbEM7O0FBRUEsaUJBQWlCLG1CQUFtQjtBQUNwQywrQkFBK0IsY0FBYztBQUM3QyxnQ0FBZ0MsbUJBQW1CO0FBQ25ELDhCQUE4Qiw4Q0FBOEM7QUFDNUUsNkJBQTZCLG9CQUFvQjtBQUNqRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRXFCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNvbnN0IGdsUmVuZGVyID0gKCkgPT4ge1xuICBjb25zdCBkZWJ1ZyA9ICgpID0+IHtcbiAgICB2YXIgZGVidWdJbmZvID0gZ2wuZ2V0RXh0ZW5zaW9uKCdXRUJHTF9kZWJ1Z19yZW5kZXJlcl9pbmZvJyk7XG4gICAgdmFyIHZlbmRvciA9IGdsLmdldFBhcmFtZXRlcihkZWJ1Z0luZm8uVU5NQVNLRURfVkVORE9SX1dFQkdMKTtcbiAgICB2YXIgcmVuZGVyZXIgPSBnbC5nZXRQYXJhbWV0ZXIoZGVidWdJbmZvLlVOTUFTS0VEX1JFTkRFUkVSX1dFQkdMKTtcblxuICAgIGxldCB2ZW5kb3JUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZlbmRvclRleHQnKTtcbiAgICB2ZW5kb3JUZXh0LmlubmVySFRNTCA9IGAke3ZlbmRvcn1gO1xuICAgIGxldCByZW5kZXJlclRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVuZGVyZXJUZXh0Jyk7XG4gICAgcmVuZGVyZXJUZXh0LmlubmVySFRNTCA9IGAke3JlbmRlcmVyfWA7XG4gIH07XG4gIGNvbnN0IHJhbmRDb2wgPSAoKSA9PiB7XG4gICAgZ2wuY2xlYXJDb2xvcihNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpLCAxLjApO1xuICAgIC8vIENsZWFyIHRoZSBjb2xvciBidWZmZXIgd2l0aCBzcGVjaWZpZWQgY2xlYXIgY29sb3JcbiAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUKTtcbiAgfTtcblxuXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2xjYW52YXNcIik7XG4gIC8vIEluaXRpYWxpemUgdGhlIEdMIGNvbnRleHRcbiAgY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xuICAvLyBPbmx5IGNvbnRpbnVlIGlmIFdlYkdMIGlzIGF2YWlsYWJsZSBhbmQgd29ya2luZ1xuICBpZiAoIWdsKSB7XG4gICAgYWxlcnQoXCJVbmFibGUgdG8gaW5pdGlhbGl6ZSBXZWJHTC4gWW91ciBicm93c2VyIG9yIG1hY2hpbmUgbWF5IG5vdCBzdXBwb3J0IGl0LlwiKTtcbiAgICByZXR1cm47XG4gIH1cblxuXG4gIC8vIFNldCBjbGVhciBjb2xvciB0byBibGFjaywgZnVsbHkgb3BhcXVlXG4gIGdsLmNsZWFyQ29sb3IoMC4wLCAwLjAsIDAuMCwgMS4wKTtcbiAgLy8gQ2xlYXIgdGhlIGNvbG9yIGJ1ZmZlciB3aXRoIHNwZWNpZmllZCBjbGVhciBjb2xvclxuICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUKTtcblxuICBkZWJ1ZygpO1xuXG4gIC8vIGJpbmQgcmFuZENvbCgpIHRvIGVsZW1lbnRzXG4gIGxldCByYW5kQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmQnKTtcbiAgcmFuZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmFuZENvbCk7XG5cbn07XG5cbmV4cG9ydCB7IGdsUmVuZGVyIH1cbiIsImltcG9ydCB7IGRyYXdMYXlvdXQgfSBmcm9tICcuL2xheW91dCdcbmltcG9ydCB7IGdsUmVuZGVyIH0gZnJvbSAnLi9nbFJlbmRlcidcblxuY29uc3Qgb25SZXNpemUgPSAoKSA9PiB7XG4gIGNvbnN0IHJlZHJhd0lmSW5hY3RpdmUgPSAoKSA9PiB7XG4gICAgbGV0IG5vdyA9IGdldFRpbWUoKTtcbiAgICBpZiAobm93IC0gbGFzdFJlc2l6ZSA+IDk5NSkge1xuICAgICAgcmVuZGVyKCk7XG4gICAgICBjb25zb2xlLmxvZyhcInJlZHJhd1wiKTtcbiAgICB9O1xuICB9O1xuICBsYXN0UmVzaXplID0gZ2V0VGltZSgpO1xuICAvLyBwcmV2ZW50IG11bHRpcGxlIChyZSlyZW5kZXJzIHdoZW4gbXV0bGlwbGUgcmVzaXplcywgd2l0aCAxIHNlYyBkZWxheVxuICBzZXRUaW1lb3V0KHJlZHJhd0lmSW5hY3RpdmUsIDEwMDApO1xufTtcblxuY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICBkcmF3TGF5b3V0KCk7XG4gIGdsUmVuZGVyKCk7XG59O1xuXG53aW5kb3cub25yZXNpemUgPSBvblJlc2l6ZTtcblxuY29uc3QgZ2V0VGltZSA9IHR5cGVvZiBwZXJmb3JtYW5jZSA9PT0gJ2Z1bmN0aW9uJyA/IHBlcmZvcm1hbmNlLm5vdyA6IERhdGUubm93O1xubGV0IGxhc3RSZXNpemUgPSAwO1xuXG5yZW5kZXIoKTtcbiIsImNvbnN0IGRyYXdMYXlvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IHdpbkhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgY29uc3Qgd2luV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgY29uc3QgY2FudmFzU2lkZSA9IHdpbldpZHRoICogOSAvIDE2LjAxO1xuICBjb25zdCBwYW5lbFcgPSAod2luV2lkdGggLSBjYW52YXNTaWRlKSAvIDIuMTtcblxuICBsZXQgZ2xjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2xjYW52YXMnKTtcblxuICBnbGNhbnZhcy5zdHlsZS53aWR0aCA9IGAke2NhbnZhc1NpZGV9cHhgO1xuICBnbGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBgJHtjYW52YXNTaWRlfXB4YDtcbiAgZ2xjYW52YXMuc3R5bGUubGVmdCA9IGAke3BhbmVsV31weGA7XG5cbiAgbGV0IHBhbmVscyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwYW5lbFwiKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhbmVscy5sZW5ndGg7IGkrKykge1xuICAgIHBhbmVsc1tpXS5zdHlsZS53aWR0aCA9IGAke3BhbmVsVyAqIDAuOTh9cHhgO1xuICAgIHBhbmVsc1tpXS5zdHlsZS5oZWlnaHQgPSBgJHtjYW52YXNTaWRlICogMC45OTF9cHhgO1xuICAgIHBhbmVsc1tpXS5zdHlsZS5sZWZ0ID0gYCR7KHBhbmVsVyAqIDAuMDEpICsgKChjYW52YXNTaWRlICsgcGFuZWxXKSAqIGkpfXB4YDtcbiAgICBwYW5lbHNbaV0uc3R5bGUudG9wID0gYCR7Y2FudmFzU2lkZSAqIDAuMDAzNX1weGA7XG4gIH07XG5cbiAgLy8gYWRkIGVsZW1lbnRzIHRvIGxlZnQgcGFuZWwsIGFuZCBzdHlsZVxuICBsZXQgaW5mb0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvJyk7XG4gIGxldCB2ZW5kb3JUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIHZlbmRvclRleHQuaWQgPSAndmVuZG9yVGV4dCc7XG4gIGluZm9Cb3guYXBwZW5kQ2hpbGQodmVuZG9yVGV4dCk7XG5cbiAgbGV0IHJlbmRlcmVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICByZW5kZXJlclRleHQuaWQgPSAncmVuZGVyZXJUZXh0JztcbiAgaW5mb0JveC5hcHBlbmRDaGlsZChyZW5kZXJlclRleHQpO1xufTtcblxuZXhwb3J0IHsgZHJhd0xheW91dCB9XG4iXSwic291cmNlUm9vdCI6IiJ9