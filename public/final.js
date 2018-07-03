"use strict";

/********************************************* 
*          FINAL EXERCISE
*********************************************/
// createBoxHTML naintains an array with box sizes,
// to be used for sorting/shuffling
const boxSizes = [];
const $boxes = $("#boxes");

let $boxTemplate = $('#box-template').html();
let template = Handlebars.compile($boxTemplate);

/********************************************* 
*          ADD BOX
*********************************************/

let createBoxHTML = (size) => {
    let boxHtml = template({boxSize: size});
    console.log(boxHtml);

    boxSizes.push(parseInt(size));

    return boxHtml;
}

let handleAddBox = (size) => {
    if (isNaN(parseInt(size))) {
        alert('Box size must be an integer! Please enter new value');
    }
    else {
        let boxHtml = createBoxHTML(size);

        // $('#boxes').append(boxHtml);
        $boxes.append(boxHtml);
    }
}


/********************************************* 
*          SORT BOXES
*********************************************/

// I use the same merge-sort algirithm, implemented
// in the first part of the exercise

let handleSortBoxes = () => {
    let sortedArray = mergeSort(boxSizes);
    // No need to update boxSizes array
    // boxSizes = sortedArray;
    $boxes.empty();

    for (let i = 0; i < boxSizes.length; i++) {
        let boxHtml = template({boxSize: sortedArray[i]});
        $boxes.append(boxHtml);
    }
}



/********************************************* 
*          SHUFFLE BOXES
*********************************************/

let shuffle = () => {
    // Insert each element in the boxSizes array
    // into a random position in the jumbled array
    let jumbleLength = 1;
    let jumbledArr = [];

    jumbledArr.push(boxSizes[0]);
    for (let ix = 1; ix < boxSizes.length; ix++, jumbleLength++) {
        // Determine where to insert the next element:
        // Get a random index between 0 and the number of 
        // elements, already in the array
        let jumbleIx = getRandomIndex(jumbleLength + 1);
        if (jumbleIx === jumbleLength) {
            jumbledArr.push(boxSizes[ix]);
        }
        else {
            jumbledArr.splice(jumbleIx, 0, boxSizes[ix]);
        }
    }

    return jumbledArr
}

let handleShuffleBoxes = () => {
    let shuffledArray = shuffle();
    // No need to update boxSizes array
    // boxSizes = shuffledArray;
    $boxes.empty();

    for (let i = 0; i < boxSizes.length; i++) {
        let boxHtml = template({boxSize: shuffledArray[i]});
        $boxes.append(boxHtml);
    }
}


/********************************************* 
*          ON-CLICK
*********************************************/

$('#add-box').click(() => {
    let boxSize = $('#box-size').val();
    handleAddBox(boxSize);
});

$('#sort-boxes').click(() => {
    handleSortBoxes();
});

$('#shuffle-boxes').click(() => {
    handleShuffleBoxes();
});



//