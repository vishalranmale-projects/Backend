// 1)Factory Function
// let String = "Vishal";
// console.log(String.prototype);
// String.prototype;

// function personMaker(name, age, gender, marks) {
//   let obj = {
//     name: name,
//     age: age,
//     gender: gender,
//     marks: marks,
//   };
//   return obj;
// }
//ii)Constructors
// function Personmaker(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let obj1 = new Personmaker("Vishal", 25);
// let obj2 = new Personmaker("Mayur", 23);
// console.log(obj2);

// 3)Classes
// class Persons {
//   name;
//   age;

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   printnm() {
//     console.log(this.name);
//   }
// }

// let p1 = new Persons("vishal", 19);
// console.log(p1.printnm());

// 4)Inheritance

class Teacher {
  name;
  age;
  gender;
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  printnm() {
    console.log(this.name);
  }
}

class student extends Teacher {}

let s1 = new student("Vishal", 19);
console.log(s1);
