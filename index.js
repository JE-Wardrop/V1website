const input = document.getElementById("input")

function reverseString(str) {
    return str.split("").reverse().join("")
}

function checkPalindrome() {
    var str = document.getElementById('Input').value;    
    document.getElementById('Input').setText(str + digit);
    const value = input.value 
    const reverse = reverseString(value)
    
    if (value === reverse) {
        alert("P A L I N D R O M E")
    } else {
        alert("Not today!")
    }

    input.value = ""
}