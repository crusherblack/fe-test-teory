// In JavaScript, there are several methods of achieving inheritance, including:

// Prototype-based inheritance
// Constructor-based inheritance
// Class-based inheritance (introduced in ES6

// example

// Define the base class Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }
}

// Define the subclass Student that extends Person
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  sayHello() {
    console.log(
      `Hello, my name is ${this.name}, I'm ${this.age} years old and I'm in grade ${this.grade}.`
    );
  }

  study() {
    console.log(`${this.name} is studying hard.`);
  }
}

// Create a new Person object
const person = new Person("John", 30);
person.sayHello(); // Output: "Hello, my name is John and I'm 30 years old."

// Create a new Student object
const student = new Student("Alice", 15, 10);
student.sayHello(); // Output: "Hello, my name is Alice, I'm 15 years old and I'm in grade 10."
student.study(); // Output: "Alice is studying hard."
