// // // const rambo = {
// // //     animal: "dog",
// // //     age: 1,
// // //     breed: "bull",
// // //     bark: function() {
// // //         console.log("woof");
// // //     }
// // // };

// // // const fruits = ["apple", "pear", "strawberry"];
// // // fruitsLength = fruits.length;
// // // // console.log(fruits[0]);
// // // // console.log(fruitsLength);

// // // // console.log(rambo.animal, rambo.breed);
// // // console.log(rambo["age"]);
// // // console.log(rambo["bark"]());

// // // const teacher = {
// // //     firstName: "Ashley",
// // //     lastName: "Boucher",
// // //     printName: function() {
// // //         console.log(this.firstName + this.lastName);
// // //     }
// // // };

// // // rambo.age = 3;
// // // rambo["breed"] = "bull dog";
// // // console.log(rambo.breed);
// // // rambo.color = "black";
// // // console.log(rambo);
// // const myString = {
// //     string: "Programming with Treehouse is fun!",
// //     countWords: function() {
// //         const wordArray = this.string.split(" ");
// //         return wordArray.length;
// //     }
// // };
// // myString.string = "I love full stack javaScript";
// // myString.characters = myString.string.length;

// // var numWords = myString.countWords();

// // //Create an empty method called stringGPA() and add it to the Student class

// // class Student {
// //     constructor(gpa, courses) {
// //         this.gpa = gpa;
// //         this.courses = courses;
// //     }

// //     printGPA() {
// //         console.log(this.gpa);
// //     }

// //     addCourse(course) {
// //         this.courses.push(course);
// //     }
// // }

// // const ashley = new Student(3.9);
// // const birthday = new Date();
// // const day1 = birthday.getDay();
// // // Sunday - Saturday : 0 - 6

// // console.log(day1);
// // // expected output: 2
// class Student {
//     constructor(gpa, credits) {
//         this.gpa = gpa;
//         this.credits = credits;
//     }

//     stringGPA() {
//         return this.gpa.toString();
//     }
//     get level() {
//         const credits = this.credits;
//         if (credits > 90) {
//             return "Senior";
//         } else if (credits >= 61 && credits <= 90) {
//             return "Junior";
//         } else if (credits >= 31 && credits <= 60) {
//             return "Sophomore";
//         } else {
//             return "Freshman";
//         }
//     }

// }

// const student = new Student(3.9, 65);
// console.log(student.level);

class CalcNumbers {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    get sumValue() {
        console.log(`${this.a} + ${this.b}`);
        return this.a + this.b;
    }
    multiValue() {
        console.log(`${this.a} x ${this.b}`);
        return this.a * this.b;
    }
    set newValue(val) {
        this.a = val;
    }
}

const numb = new CalcNumbers(10, 5);

console.log(numb.sumValue, numb.multiValue());

numb.newValue(4);
console.log(numb.sumValue, numb.multiValue());
