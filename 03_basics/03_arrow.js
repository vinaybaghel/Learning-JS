const user = {
    username: "Vinay",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to the Website`);

        console.log(this);
        
    }
   
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai()
// {
//     let username = "Vinay"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "Vinay"
//     console.log(this.username)
// }

const chai = () => {
    let username = "Vinay"
    console.log(this)
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2

// }

// const addTwo = (num1, num2) => num1 + num2
//implicit return


// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Vinay"})

console.log(addTwo(4, 5));

const myArray = [3, 3, 5, 3, 7]

// myArray.forEach()