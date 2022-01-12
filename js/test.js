// Functions



// Expressions vs Statments vs Arrow

// Expression
console.log(foo())
let foo = function() { 
    return 5; 
}

// Declaration
// function foo() {
//     return 5; 
// }






arrow
const foo  = () => {
    return 5;
}
















// Higher order functions closures and memoizations, 
// const function1 = (function2) => {
//     // use function2
//     return function function3() {

//     };
// }

// // Rest operators
// function fun(...args) {
//     console.log(Array.isArray(args))
// }

// fun(1, 2, 3);