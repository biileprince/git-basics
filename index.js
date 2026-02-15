"use strict"

for (let i = 0; i <= 100; i++) {
    console.log(i);
}



//using while loop to print numbers from 0 to 49
let j = 0;
while (j < 50) {
    console.log(j);
    j++;
}

do {
    console.log("This will run at least once");
} while (2 > 5);



//strings
const nickName = 'Doe';

let firstName = 'Prince';

let lastName = `Biile ${nickName}`;
console.log(lastName.charAt(4));



function printName() {
    alert("My name is Prince Biile");
    document.write("my name is Prince Biile");
}



// printName();


// function printMyName(name) {
//     alert("My name is " + name);
// }


// printMyName("ama");
// printMyName("john");


function addNumbers(num1, num2) {
    let sum;
    sum = num1 + num2;
    return sum;
}


let resultsm = addNumbers(5, 10);
let result2 = addNumbers(20, 10);
console.log(resultsm);
console.log(result2);



const division = function (a, b, c) {
    return (a / b) / c;
};


let divResult = division(100, 5, 2);
console.log(divResult);


const add = (a, b) => {
    return a + b;
};


console.log(add(15, 25));


// addind three parameters and printing the result

// function addThreeNumbers(a, b, c) {
//     let sum = a + b + c;
//     console.log("The sum  of " + a + ", " + b + ", and " + c + " is: " + sum);
// }

// addThreeNumbers(5, 10, 15);




const arrayProgramLan = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 1, true];

// console.log(arrayProgramLan);

// console.log(arrayProgramLan[2]);
// console.log(arrayProgramLan.at(3));


// console.log(arrayProgramLan.length);
// console.log(arrayProgramLan.toString());

console.log(arrayProgramLan.pop());
console.log(arrayProgramLan);

arrayProgramLan.push('GoLang')
console.log(arrayProgramLan);


for (let i = 0; i < arrayProgramLan.length; i++) {
    console.log(arrayProgramLan[i]);
}




const numbers = [45, 4, 9, 16, 25];

numbers.forEach(function (value) {
    console.log("value " + " : " + value);
});



const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(function (value) {
    return value * 2;
});

console.log(numbers2);

const person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

console.log(person.firstName);

const person2 = {};


person2.firstName = "Jane";
console.log(person2);



x = 3.14;


const DateTime = new Date();





const numbers6 = [45, 4, 9, 16, 25]
const newNumbers = [...numbers6, 36, 49, 64];
console.log(newNumbers);


function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);

}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15


//aray destructuring
const [first, second, , four] = numbers6;
console.log(first, second, four);


const user = {
    id: 42,
    isVerified: true,
    name: "John Doe"
};

const { id, isVerified, name } = user;
console.log(id, isVerified, name);