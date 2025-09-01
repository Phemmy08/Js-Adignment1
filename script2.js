

function capitalized(sentence) {
    var words = sentence.split(" "); 
    var newSentence = "";

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        var first = word[0].toUpperCase();
        var rest = word.slice(1); 
        newSentence = newSentence + first + rest + " ";
    }

    return newSentence.trim(); 
}

console.log(capitalized("i love jesus"));








function smallest(arr) {
    var min = arr[0]; // assume first guy small

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]; 
            console.log(min);
        }
    }

    return min;
}

console.log(smallest([5, 2, 9, 1, 3]));






function removeSpaces(str) {
    var newStr = "";

    for (var i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            newStr = newStr + str[i];
        }
    }

    return newStr;
}

console.log(removeSpaces("This is Phemmy Expert"));




function primeNumbers(num) {
    if (num < 2) return false;

    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true;
}
console.log(primeNumbers(7)); 






function totalArray(arr) {
    var total = 0;

    for (var i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }


    return totla;
}
console.log(totalArray([20, 3, 9, 42, 8]));







function longestWord(sentence) {
    var words = sentence.split(" ");
    var longest = words[0];

    for (var i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    return longest;
}

console.log(longestWord("Bro Larewnce gave me this assignment"));







function joinArray(arr1, arr2) {
    var merged = arr1.concat(arr2); 
    var result = [];

    for (var i = 0; i < merged.length; i++) {
        if (!result.includes(merged[i])) {
            result.push(merged[i]);
        }
    }

    return result;
} console.log(joinArray([8,2,3], [2,6,4]));





function countChars(str) {
    var obj = {};
    for (var i = 0; i < str.length; i++=) {
        var letter = str[i];
        if (obj[letter]) {
            obj[letter] = obj[letter] + 1;
        } else {
            obj[letter] = 1;
        }
    }
    return obj;
}

console.log(countChars("Jesus Loves me"));






function evenOdd(arr) {
    var evens = [];
    var odds = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evens.push(arr[i]);
        } else {
            odds.push(arr[i]);
        }
    }

    return { evens: evens, odds: odds };
}

console.log(evenOdd([1,2,3,4,5,6]));









function randomBetween(min, max) {
    var rand = Math.floor(Math.random() * (max - min + 1)) + min;
    return rand;
}
console.log(randomBetween(5, 10));