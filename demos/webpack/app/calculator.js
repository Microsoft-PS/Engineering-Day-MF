import { isNumber } from 'util';
export class Calculator {
    add(num1, num2) {
        if (isNumber(num1) && isNumber(num2)) {
            return num1 + num2;
        }
        return;
    }

    substract(num1, num2) {
        if (isNumber(num1) && isNumber(num2)) {
            return num1 - num2;
        }

    }

    multiply(num1, num2) {
        if (isNumber(num1) && isNumber(num2)) {
            return num1 * num2;
        }
    }

    divide(num1, num2) {
        if (isNumber(num1) && isNumber(num2)) {
            return num1 / num2;
        }
    }
}