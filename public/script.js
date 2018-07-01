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
*          REMOVE DUPLICATES
*********************************************/




















$('#encript').click(() => {
    let str = $('#input-string').val();
    let secret = $('#secret-code').val();

    let encripted = '<p>Encripted String: ' + secretCipher(str, secret) + '</p>';
    $('#encripted-string').append(encripted);
});
// $('.books').on('click', '.book-details', displaySelectedBook);
// $(document).ajaxStart(function() {
//     $(".busy-indicator").show();
// });
// $(document).ajaxStop(function() {
//     $(".busy-indicator").hide();
// });