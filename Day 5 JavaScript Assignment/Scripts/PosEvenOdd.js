var posNumArr = [];
var posNumber = window.prompt('Enter a Positive Number: ');
for (var i = 1; i <= posNumber; i++) {
    posNumArr.push(window.prompt("Enter the " + i + " number of " + posNumber)); // push the value into the array
    console.log("The numbers in the array " + posNumArr);
}


var oddNumArr = []
posNumArr.filter((element, index, posNumArr) => {

    if (element % 2 === 1) {

        oddNumArr.push(element ** 3)
    }
})
console.log("Cube of Odd Number is : " + oddNumArr)