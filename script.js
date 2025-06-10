//TODO Basics

//Practise Qs1
console.log("HEllo Sai!");


//Practise Qs2
let age = 16;
if (age >= 18) {
    console.log("You are eligible to vote.");
}

//Practise Qs3 (if-else)
let color;
let mode = "dark";

if(mode === "dark") {
    color = "black";
} else {
    color = "white";
}
console.log("The color is: " + color);

//ternery operator
//Practise question 1
let r = age>=18 ? "adult" : "not adult";
console.log(r);

//Practise question 2 (if- else-if - else)
let n = prompt("Enter a number: ");
console.log(n%5 === 0?"multiple of 5" : "not a multiple of 5");
let grade;
let marks = prompt("Enter your marks: ");
if(marks >= 90 && marks <= 100) {
    grade = "A";
} else if (marks >= 70 && marks <= 89) {
    grade = "B";
} else if (marks >= 60 && marks <= 69) {
    grade = "C";
}else if (marks >= 50 && marks <= 59) {
    grade = "D";
}else if (marks >= 0 && marks <= 49) {
    grade = "F";
}
console.log(grade + " grade");


//Practise question 3 (for-of loop)
let s = "pranathi";
for(let i of s) {
    console.log(i);
}

//Practise question 4 (for-in loop)
let person = {
    name: "Pranathi",
    age: 20,
    city: "MTM"
};
for (let key in person) {
    console.log(key + ": " + person[key]);
}

//Practise question 5 (for loop)
str= "mays";
console.log(str[3]);
let c = 0;
for(let i = 0; i < str.length; i++) {
    c++
    console.log(str[i]);
}
console.log("Length of the string(using length attribute): " + str.length);
console.log("Length of the string (using loop): " + c);


//Practise question 6 (while loop)
let i = 0;          
while(i < 5) {   //*?condition
    console.log("Hello World");
    i++;        //*? increment
}


//Practise question 7 (do-while loop)
let j = 0;            //*?initialization
do {
    console.log("Hello World");
    j++;              //*?increment
}while(j < 5);        //*?condition

//Practise question 8 (break and continue)
let k = 0;            //*?initialization
while(k < 5) {
    if(k === 2) {
        k++;            //*?increment
        continue; //skip the rest of the loop
    }
    console.log("Hello World");
    k++;            //*?increment
}


//practise question 9
//**Template literals 
let sentence = `This is a template`;
console.log(sentence);
console.log(typeof sentence);

//*? its usecase..
let obj = {
    item : "telescope",
    price: 4789,
};
console.log(obj)
console.log("the cost of", obj.item, "is", obj.price, "rupees");

let output = `the cost of ${obj.item} is ${obj.price} rupees`      //*? single string hoo gaya!
console.log(output);

//! STRING INTERPOLATION
let specialstring = `This is a template literal ${33+39}`;
console.log(specialstring);

// *?escape characters
let w = "Pranathi\tJaanuu";
console.log(`Length of ${w} is ${w.length}.`);
/* we think, it is i6, but it is actually 15. 
because, the escape character "\t" is considered as a single character.*/