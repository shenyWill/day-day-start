function Person(name, age) {
  this.name = name;
  this.age = age;
};

Person.prototype.say = function() {
  console.log(this.name);
}

function create(Con, ...args) {
  const obj = {};
  const result = Con.apply(obj, args);
  Object.setPrototypeOf(obj, Person.prototype);
  return result instanceof Object ? result : obj;
};

const person = create(Person, 'zhangsan', 26);

console.log(person);

person.say();