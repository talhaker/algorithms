"use strict";

/********************************************* 
*          HARDER CIPHER
*********************************************/
// Helper function to calculate a single character
// Assumptions (requirements not well defined):
// 1. Lower-case char tranformend into lower-case
// 2. Upper-case char tranformend into upper-case
// 3. Both a-z and A-Z mapped to 1-26)
let cipherChar = (input, shift) => {
    // calculate shift val
    let shiftVal = shift.charCodeAt(0) - 64;
    if (shiftVal > 26) {
        // lowercase
        shiftVal -= 32;
    }

    let inputVal = input.charCodeAt(0);
    let cipherVal = inputVal;
    if ((inputVal >= 97) && (inputVal <= 122)) {
        // lowercase
        cipherVal += shiftVal;
        if (cipherVal > 122) {
            cipherVal -= 26;
        }
    }
    else
    if ((inputVal >= 65) && (inputVal <= 90)) {
        // uppercase
        cipherVal += shiftVal;
        if (cipherVal > 90) {
            cipherVal -= 26;
        }
    }

    let encriptedChar = String.fromCharCode(cipherVal);
    return encriptedChar;
}

// Cipher function -
// calls helper function for each character
// and accumulates result
function secretCipher(str, secret) {
    if (secret === "") {
        return str;
    }

    let encript = "";
    for (let i = 0 , j= 0; i < str.length ; i++, j = (j + 1) % secret.length) {
        encript += cipherChar(str[i], secret[j]);
    }

    console.log(encript);
    return encript;
}


/********************************************* 
*          JUMBLED
*********************************************/

// let colors = ["red", "indigo", "white", "teal", "yellow"];
// let foods = ["bread", "cheese", "cucumber"];

let getRandomIndex = (maxNumber) => {
    return Math.floor(Math.random() * maxNumber);
}

let jumble = (arr1, arr2) => {
    // To simplifay, concatenate the two arrays,
    // and pick the next element serially.
    // Than insert it into a random position
    // in the jumbled array
    let concatArr = arr1.concat(arr2);
    let jumbleLength = 1;
    let jumbledArr = [];

    jumbledArr.push(concatArr[0]);
    for (let ix = 1; ix < concatArr.length; ix++, jumbleLength++) {
        // Determine where to insert the next element:
        // Get a random index between 0 and the number of 
        // elements, already in the array
        let jumbleIx = getRandomIndex(jumbleLength + 1);
        if (jumbleIx === jumbleLength) {
            jumbledArr.push(concatArr[ix]);
        }
        else {
            jumbledArr.splice(jumbleIx, 0, concatArr[ix]);
        }
    }

    return jumbledArr
}

//console.log(jumble(colors, foods));



















$('#encript').click(() => {
    let str = $('#input-string').val();
    let secret = $('#secret-code').val();

    let encripted = '<p>Encripted String: ' + secretCipher(str, secret) + '</p>';
    $('#encripted-string').append(encripted);
});

$('#jumble').click(() => {
    let array1 = $('#array-one').val();
    let array2 = $('#array-two').val();

    let jumbledArray = jumble(array1.split(" "), array2.split(" "));
    let jumbled = '<p>Jumbled Array: ';
    if (jumbledArray.length === 0) {
        jumbled += '[]';
    }
    else {
        jumbled += jumbledArray[0];
        for (let ix = 1; ix < jumbledArray.length; ix++) {
            jumbled += ', ' + jumbledArray[ix];
        }
    }


    $('#jumbled-array').append(jumbled);
});
