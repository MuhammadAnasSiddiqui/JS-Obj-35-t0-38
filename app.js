// JS Assignment chap# 35 to 38

// question no 1

function date() {
    var date = new Date;
    document.write(date + "<br>");
}
date();


// question no 2

// function userName() {
//     var userFirstName = prompt("Enter your first name");
//     var userLastName = prompt("Enter your last name");
//     console.log(userFirstName + " " + userLastName);
// }
// userName();


// question no 3

// function add() {
//     var userNum1 = +prompt("Enter first number");
//     var userNum2 = +prompt("Enter second number");
//     console.log(userNum1 + userNum2);
// }
// add();


// question no 4

// function cal() {
//     var num1 = +prompt("Enter first number");
//     var opt = prompt("Enter operator");
//     var num2 = +prompt("Enter second number");

//     if (opt === "+") {
//         console.log(num1 + num2);
//     }
//     else if (opt === "-") {
//         console.log(num1 - num2);
//     }
//     else if (opt === "*") {
//         console.log(num1 * num2);
//     }
//     else if (opt === "/") {
//         console.log(num1 / num2);
//     }
//     else if (opt === "%") {
//         console.log(num1 % num2);
//     }
// }
// cal();


// question no 5

function square(sqr) {
    console.log(sqr * sqr);
}
square(3);


// question no 6

function factorial(num) {
    if (num < 0) {
        return undefined
    }
    else if (num === 0 || num === 1) {
        return 1;
    }
    else {
        return num * factorial(num - 1)
    }
}

console.log(factorial(5));


// question no 7

// function counting() {
//     var num = +prompt("Enter first number");
//     var num2 = +prompt("Enter second number");

//     for (var i = num; i <= num2; i++) {
//         document.write(i + "<br>")
//     }
// }
// counting();


// question no 8

// skip


// question no 9

var height = 5;

function area(widht, height) {
    var area = widht * height;
    return area;

}
console.log(area(4, height));