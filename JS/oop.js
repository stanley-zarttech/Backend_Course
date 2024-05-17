class Student {
  firstName;
  lastName;
  age;
  department;
  studentId;

  constructor(firstName, lastName, age, department, studentId) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.department = department;
    this.studentId = studentId;
  }

  joinClass(course, studentId) {
    console.log("Student with id: ", studentId, " has class for ", course);
  }
}

const student1 = new Student("Ada", "James", 25, "Computer Science", 1);
student1.joinClass("Backend Engineering", 1);

const student2 = new Student("Peter", "Moritz", 25, "Business Accounting", 2);
student2.joinClass("Financial Auditing", 2);
console.log("student 2: ", student2);

// inheritance
// Polymophism
// Abstraction
// Encapsulation

// setter
// getter

class Animal {
  name;
  age;
  skinColor;
  _size = 21;
  constructor(name, age, skinColor) {
    this.name = name;
    this.age = age;
    this.skinColor = skinColor;
  }
  move() {
    console.log(this.name, " is now moving!");
  }
  getSize() {
    return this._size;
  }
}

class Dog extends Animal {
  constructor(name, age, skinColor, tailColor) {
    super(age, name, skinColor);
    this.tailColor = tailColor;
    this.name = name;
    this.age = age;
    this.skinColor = skinColor;
  }

  set setName(name) {
    this.name = name;
  }
  get getName() {
    return this.name;
  }
  bark() {
    console.log(this.name, " is backing!");
  }
/**This method makes the dog run */
  static run(duration){
  console.log(this.name ,' will run for ', duration ,' minutes')
  }
}
const dog1 = new Dog("Bingo", 3, "black", "white");

dog1.move();
console.log("size: ", dog1.getSize());
dog1.bark();
// dog1.setName('Jack')
Dog.run(5)
