
function sayMyName() {
    console.log("V");
    console.log("I");
    console.log("N");
    console.log("A");
    console.log("Y");
}

//sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);

// }

function addTwoNumbers(number1, number2) {
    
    // let result = number1 + number2
    // return result

    return number1 + number2
    // console.log("Vinay");

}

const result = addTwoNumbers(3, 5)

// console.log("Result:", result);


function loginUserMessage(username = "sam") {
    // if(!username){}
    if(username === undefined) {
        console.log("Please Enter a Username");
        return

    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Vinay"));
console.log(loginUserMessage());