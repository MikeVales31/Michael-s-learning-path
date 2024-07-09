/*
Value types == Primitives{
    1)Number
    2)String
    3)Boolean
    4)Symbol
    5)Undefined
    6)null
}

Reference Types{
    1)Object
    2)Function
    3)Array
}

*/

// Primitives are copied by value
let x = 10;
let y = x;

x = 20;
console.log(y);

// Reference are copied by their reference
let a = {value: 10};
let b = a;

a.value = 20;

console.log(b);