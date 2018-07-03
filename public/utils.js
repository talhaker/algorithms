"use strict";

/********************************************* 
*          UTILITY FUNCTIONS
*********************************************/

let getRandomIndex = (maxNumber) => {
    return Math.floor(Math.random() * maxNumber);
}


/********************************************* 
*          ARRAY SORTING
*********************************************/

// I chose to implement the merge-sort
// algirithm, which runs at O(n*Log(n))

let merge = (array1, array2) => {
    if (array1.length === 0) {
        return array2;
    }
    if (array2.length === 0) {
        return array1;
    }

    let ix1 = 0;
    let ix2 = 0;
    let merged = [];

    do {
        if (array1[ix1] < array2[ix2]) {
            merged.push(array1[ix1]);
            ix1++;
        }
        else {
            merged.push(array2[ix2]);
            ix2++;
        }
    } while ((ix1 < array1.length) && (ix2 < array2.length));

    if (ix1 === array1.length) {
        return merged.concat(array2.splice(ix2));
    }

    return merged.concat(array1.splice(ix1));
}

let mergeSort = (array) => {
    if (array.length <= 1) {
        return array;
    }

    let midIx = Math.floor(array.length / 2);
    return merge(mergeSort(array.slice(0, midIx)), mergeSort(array.slice(midIx, array.length)));
}




//