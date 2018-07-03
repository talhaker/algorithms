"use strict";

/********************************************* 
*          FINAL EXERCISE
*********************************************/
// createBoxHTML naintains an array with box sizes,
// to be used for sorting/shuffling
let boxSizes = [];
const $boxes = $("#boxes");

let $boxTemplate = $('#box-template').html();
let template = Handlebars.compile($boxTemplate);

let createBoxHTML = (size) => {
    let boxHtml = template({boxSize: size});
    console.log(boxHtml);

    boxSizes.push(parseInt(size));

    return boxHtml;
}



/********************************************* 
*          SHUFFLE BOXES
*********************************************/

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


/********************************************* 
*          SORT BOXES
*********************************************/

// I chose to implement the merge-sort
// algirithm, which runs at O(n*Log(n))


// let myArray = ["red", "indigo", "white", "teal", "yellow", "bread", "cheese", "cucumber"];
// let myArray = [10, 17, 2, 5, 70, 15, 4, 8];
// console.log(mergeSort(myArray));

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

let handleSortBoxes = () => {
    let sortedArray = mergeSort(boxSizes);
    boxSizes = sortedArray;
    $boxes.empty();

    for (let i = 0; i < boxSizes.length; i++) {
        let boxHtml = template({boxSize: boxSizes[i]});
        $boxes.append(boxHtml);
    }
}












$('#add-box').click(() => {
    let boxSize = $('#box-size').val();
    handleAddBox(boxSize);
});

$('#sort-boxes').click(() => {
    handleSortBoxes();
});



//