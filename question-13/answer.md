Arrow functions and normal functions are both used in JavaScript to define functions, but there are some differences between them.

Syntax: Arrow functions have a shorter and more concise syntax than normal functions. They use the => operator to separate the function parameters from the function body. Normal functions use the function keyword, followed by the function name, the parameter list in parentheses, and the function body in curly braces.

this binding: Arrow functions do not have their own this binding. Instead, they use the this value of the surrounding context. In other words, this in an arrow function refers to the this value of the enclosing lexical scope. Normal functions, on the other hand, have their own this binding, which can be set using the bind, call, or apply methods.

Return value: Arrow functions have an implied return statement. If the function body is a single expression, the value of that expression is automatically returned. Normal functions require an explicit return statement to return a value.

Function object: Arrow functions are always anonymous and cannot be used as constructors. Normal functions can be named or anonymous, and can be used as constructors to create new objects.

Example of an arrow function and a normal function that do the same thing:

```javascript
// Arrow function
const square = (x) => x * x;

// Normal function
function square(x) {
  return x * x;
}

```

In this example, both the arrow function and the normal function take a parameter x and return its square. The arrow function has a more concise syntax and an implied return statement, while the normal function has a longer syntax and requires an explicit return statement.

In summary, arrow functions and normal functions are both used to define functions in JavaScript, but they have some differences in syntax, this binding, return value, and function object. Arrow functions are more concise and use the this value of the surrounding context, while normal functions have a longer syntax and have their own this binding. The choice between arrow functions and normal functions depends on the specific use case and personal preference.

Example that demonstrates the difference in this binding between arrow functions and normal functions:

```javascript

const person = {
  name: 'John',
  age: 30,
  sayHello: function() {
    console.log(`Hello, my name is ${this.name}`);
  },
  sayHelloArrow: () => {
    console.log(`Hello, my name is ${this.name}`);
  }
};


person.sayHello(); // Output: Hello, my name is John
person.sayHelloArrow(); // Output: Hello, my name is undefined
```

In this example, person is an object that has two methods, sayHello and sayHelloArrow. sayHello is a normal function that uses this to refer to the person object and access its name property. sayHelloArrow is an arrow function that also tries to access the name property using this.

When person.sayHello() is called, it outputs "Hello, my name is John". This is because this inside the sayHello function refers to the person object, which has a name property of "John".

When person.sayHelloArrow() is called, it outputs "Hello, my name is undefined". This is because arrow functions do not have their own this binding and use the this value of the surrounding context. In this case, the surrounding context is the globalobject, which does not have a name property. Therefore, this.name inside the sayHelloArrow function is undefined.

This example shows how arrow functions and normal functions can behave differently with respect to this binding. Arrow functions use the this value of the surrounding context, while normal functions have their own this binding that can be set using bind, call, or apply. In this case, the normal function sayHello is able to access the name property of the person object using this, while the arrow function sayHelloArrow is not.

Example for argument
```javascript
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

const sumArrow = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};

console.log(sum(1, 2, 3)); // Output: 6
console.log(sumArrow(1, 2, 3)); // Output: 6
```

In this example, sum is a normal function that takes any number of arguments and returns their sum. It uses the arguments object to access the arguments passed to the function. sumArrow is an arrow function that does the same thing, but uses the rest parameter syntax (...args) to capture all the arguments in an array.

When sum is called with arguments 1, 2, and 3, it returns 6, which is the sum of the three arguments. Similarly, when sumArrow is called with the same arguments, it also returns 6.

The difference between the two functions is in how they handle the arguments object. Normal functions have their own arguments object that is an array-like object containing all the arguments passed to the function. Arrow functions, on the other hand, do not have their own arguments object and cannot access it directly.

In the example above, the arrow function sumArrow uses the rest parameter syntax (...args) to capture all the arguments passed to the function in an array. This allows the function to access the arguments in a more concise and consistent way, without having to deal with the arguments object.