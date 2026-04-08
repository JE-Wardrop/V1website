const checkPalbut = document.getElementById("inputPalindrome");
checkPalbut.addEventListener("click", checkPalindrome);

const checkSepCipherbut = document.getElementById("inputSepCipher");
checkSepCipherbut.addEventListener("click", checkSepChipher);

function reverseString(str) {
    return str.split("").reverse().join("");
}

function checkPalindrome(){
    // const text = inputPalindrome.value;
    // const reversed = reverseString(text);

    // if (text === reversed) {
    //     document.getElementById("displayPali").innerHTML = "It is a palindrome!";
    // } else {
    //     document.getElementById("displayPali").innerHTML = "Not a palindrome.";
    // }

    document.getElementById("displayPali").innerHTML = "Not working function yet";
}


function checkSepChipher(){

}

