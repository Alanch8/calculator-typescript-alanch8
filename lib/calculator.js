"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.subs = function (a, b) {
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    Calculator.prototype.div = function (a, b) {
        if (a !== 0) {
            return a / b;
        }
        else {
            throw new Error('Math error');
        }
    };
    return Calculator;
}());
exports.Calculator = Calculator;
