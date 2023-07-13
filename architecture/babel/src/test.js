class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`Hello, ${this.name}!`);
  }
}

const person = new Person('Alice');
person.sayHello();

const result = 1 + 2;
