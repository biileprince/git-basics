var Myname = "Biile";
let age = 21;
const isStudent = true;
console.log("my name is " + Myname + ", I am " + age + " years old, Student: " + isStudent);

console.log(3 / 2);
console.log("10" - "20");
// age = age + 10
age += 10;
console.log(age);

let x = 5;
let result = x != 8;
console.log(result);


const ageJohn = 9;

if (ageJohn >= 18) {
    console.log("You can vote in Ghana");
}
else {
    console.log("You are not eligible to vote");
}


const surname = "Adjei";




if (surname === "Adjei" && surname === "Prince") {
    console.log("Your surname is Adjei");
} else if (surname === "Mensah") {
    console.log("Your surname is Mensah");
} else if (surname === "Owusu") {
    console.log("Your surname is Owusu");
} else {
    console.log("Surname not found");
}


if (10 === "10") {
    console.log("it is equal");
} else {
    console.log("it is not equal");
}

switch (surname) {
    case "Adjei":
        console.log("Your surname is Adjei");
        break;

    case "Mensah":
        console.log("Your surname is Mensah");
        break;
    case "Owusu":
        console.log("Your surname is Owusu");
        break;

    default:
        console.log("Surname not found");

}



const GetName = surname === "Adjei" ? "Your surname is Adjei" : "Surname not found";
console.log(GetName);