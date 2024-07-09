//JavaScript Object Notation (JSON)

//stringify() convert object into a string
var myObj = { "name":"John", "age":31, "city":"New York" };
var myJSON = JSON.stringify(myObj);
console.log(myJSON);

//parse() convert string into a object
var obj = JSON.parse('{"firstName":"John", "lastName":"Doe"}');
console.log(obj);