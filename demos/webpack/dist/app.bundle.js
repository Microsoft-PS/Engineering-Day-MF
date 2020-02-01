webpackJsonp(["app"],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("BaningApplication/./app/app.js");


/***/ }),

/***/ "BaningApplication/./app/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calculator__ = __webpack_require__("BaningApplication/./app/calculator.js");


var calculator = new __WEBPACK_IMPORTED_MODULE_0__calculator__["a" /* Calculator */]();

console.log("Sum of numbers 5, 5 is : " + calculator.add(5, 5));

/***/ }),

/***/ "BaningApplication/./app/calculator.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util__);

class Calculator {
    add(num1, num2) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNumber"])(num1) && Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNumber"])(num2)) {
            return num1 + num2;
        }
        return;
    }

    substract(num1, num2) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNumber"])(num1) && Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNumber"])(num2)) {
            return num1 - num2;
        }

    }

    multiply(num1, num2) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNumber"])(num1) && Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNumber"])(num2)) {
            return num1 * num2;
        }
    }

    divide(num1, num2) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNumber"])(num1) && Object(__WEBPACK_IMPORTED_MODULE_0_util__["isNumber"])(num2)) {
            return num1 / num2;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Calculator;


/***/ })

},[0]);