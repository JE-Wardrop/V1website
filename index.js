function addNumbers(a, b){
    return a + b;
}

const result = addNumbers(5, 3);
console.log(result);


setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

console.log("end")