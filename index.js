function addNumbers(a, b){
    return a + b;
}

const result = addNumbers(5, 3);
console.log(result);


setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

console.log("end")

const body = document.getElementsByTagName("body")[0]

function setColor(name) {
    body.style.backgroundColor = name;
}

function randomColor() {
    const red = Math.round(Math.random() * 255) 
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)
    
    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;
}