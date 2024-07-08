// Immediately Invoked Function Expressions (IIFE)


(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
}) (); // to write 2 IIFE together dont forget the semicolon

( (name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
}) ("Vinay")