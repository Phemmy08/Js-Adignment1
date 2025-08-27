
// Question 1
function reverseString(str) {
    var reversed = ""; 

    for (var i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i]; 
    }

    return reversed; 
}

var myName = "Femi"; 
var myResult = reverseString(myName);

console.log("The reversed word of " + myName + " is 👉 " + myResult);


// Question 2
function findMaxNumber(arr) {
    var max = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i] 
        }
    }

    return max
}
var myNumbers = [4, 5, 9, 15, 9]
var myResult = findMaxNumber(myNumbers)

console.log("Among this numbers, " + myNumbers + " the highest is " + myResult)



// Question 3

function countVowels(str) {
    var vowels = "aeiou"; 
    var count = 0; 

   
    for (var i = 0; i < str.length; i++) {
        var letter = str[i].toLowerCase(); 
        
        if (vowels.includes(letter)) {
            count = count + 1; 
        }
    }

    return count; 
}


var myName = "Femi";
var myResult = countVowels(myName);

console.log("Inside the word '" + myName + "' we see " + myResult + " vowels letters");




// Question 4
function isPalindrome(str) {
    var reversed = ""; 

    
    for (var i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }

   
    if (str === reversed) {
        return true;  
    } else {
        return false; 
    }
}


var myWord = "madam"; 
var myResult = isPalindrome(myWord);

console.log("The word '" + myWord + "' is a palindrome? " + myResult);
var myWord = "femi"; 
var myResult = isPalindrome(myWord);

console.log("The word '" + myWord + "' is a palindrome? " + myResult);



// Question 5
let theNumber = 10;


for (var i = 1; i <= 50; i++) {
    
   
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz"); 
    }
    else if (i % 3 === 0) {
        console.log("Fizz"); 
    }
    else if (i % 5 === 0) {
        console.log("Buzz"); 
    }
    else {
        console.log(i); 
    }

}




// Question 6
function sumOfDigits(num) {
    var total = 0;

    var numStr = num.toString();

    for (var i = 0; i < numStr.length; i++) {
        total = total + parseInt(numStr[i]);
    }

    return total;
}

var myNumber = 12345;
var myResult = sumOfDigits(myNumber);

console.log("The sum of digits in " + myNumber + " is  " + myResult);


// Question 7
function findDuplicates(arr) {
    var duplicates = [];

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] = arr[j]) { 
                duplicates.push(arr[i]);
            }
        }
    }

    return duplicates;
}

var myNumbers = [1, 2, 3, 2, 4, 5, 1];
var myResult = findDuplicates(myNumbers);

console.log("Duplicate detected " + myResult);





// Question 10
function calculator(num1, num2, operator) {
    var result;

    if (operator === "+") {
        result = num1 + num2;
    } 
    else if (operator === "-") {
        result = num1 - num2;
    } 
    else if (operator === "*") {
        result = num1 * num2;
    } 
    else if (operator === "/") {
        result = num1 / num2;
    } 
    else {
        result = "The result is not correct";
    }

    return result;
}

var myResult = calculator(10, 5, "");
console.log("The answer is " + myResult);