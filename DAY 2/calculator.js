function calculator(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case '*':
            return a * b;
            break;
        case '/':
            return a / b;
        case '%':
            return a % b;
            break; 
        default:
            return 'Error: Invalid operator';
    }
}
const a = 10;
const b = 5;
result = calculator(10,5,"+");
console.log(result);
result = calculator(10,5,"-");
console.log(result);
result = calculator(10,5,"*");
console.log(result);
result = calculator(10,5,"/");
console.log(result);
result = calculator(10,5,"%");
console.log(result);