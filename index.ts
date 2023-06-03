/**
 * This is a TypeScript program that takes user input for two numbers and an operator, validates the
 * input, and performs the corresponding arithmetic operation.
 */
import { question } from "readline-sync";

type Operator = '+' | '-' | '*' | '/';

function main(): void {
    const firstStr: string = question('Enter first number: \n');
    const operator: string = question('Enter Operator: \n');
    const secondStr: string = question('Enter second number: \n');

    const validInput: boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if (validInput) {
        console.log('is valid');

        const firstNum: number = parseFloat(firstStr);
        const secondNum: number = parseFloat(secondStr);
        const result = calculate(firstNum, operator as Operator, secondNum);
        console.log(result);

    }
    else {
        console.log('\ninvalid input\n');
        main();
    }
}

function calculate(firstNum: number, operator: Operator, secondNum: number) {
    switch (operator) {
        case "+":
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "*":
            return firstNum * secondNum;
        case "/":
            return firstNum / secondNum;
    }
}

function isOperator(operator: string): boolean {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default: return false;
    }
}

function isNumber(str: string): boolean {
    const maybeNum = parseInt(str)
    const isNum: boolean = !isNaN(maybeNum);
    return isNum;
}
main();
