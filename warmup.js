// 1. Find the Largest no. in the array
//
const getLargest = (arr) =>{
    let largest = -Infinity;

    for(let i=0;i<arr.length; i++){
        if(arr[i]> largest ){
            largest = arr[i];
        }
    }

    return largest;
}

// console.log(getLargest([1,10,3,4,5,6]));


// 2. Find the second largest number in the array

// corner cases:
// Array is empty
// Array have duplicates
// array have infinite numbers
// array have negative numbers

const getSecondLargest = (arr) => {
    if(arr.length< 2) return null
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for(let i=0; i<arr.length; i++){
        if(arr[i]> firstLargest){
            secondLargest = firstLargest;
            firstLargest = arr[i]
        } else if(arr[i]> secondLargest && arr[i] !== firstLargest){
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

// console.log(getSecondLargest([1,10,10,3,4,5,6]));


// Loop in Loop concepts(star patterns)

// const squarePattern = (num) => {
//     for(let i=0; i<num; i++){
//         let pattern = "";
//         for(let j=0; j<num; j++){
//             pattern += "*";
//         }
//         console.log(pattern)
//     }
// }
// squarePattern(4);

//
// const leftAlignTriangle =(num) => {
//
//     for(let i=0; i < num; i++){
//         let row = "";
//         for(let j=0; j< i+1; j++){
//             row = row + (j+1);
//         }
//         console.log(row)
//     }
// }
//
// leftAlignTriangle(5)

// const triangle =(num) => {
//
//     for(let i=0; i < num; i++){
//         let row = "";
//         for(let j=0; j < num-i; j++){
//             row = row + (j+1);
//         }
//         console.log(row)
//     }
// }
//
// triangle(5)
//
// const triangle =(num) => {
//
//     for(let i=0; i < num; i++){
//         let row = "";
//         for(let j=0; j < num-i; j++){
//             row = row + "*";
//         }
//         console.log(row)
//     }
// }
//
// triangle(5)

// const triangle = (num) => {
//
//     for (let i = 0; i < num; i++) {
//         let row = "";
//         for (let j = 0; j < num - (i + 1); j++) {
//             row = row + " ";
//         }
//
//         for (let k = 0; k < i + 1; k++) {
//             row = row + "*";
//         }
//         console.log(row)
//     }
// }
//
// triangle(5)


const triangle =(num) => {
    let toggle = 1;
    for(let i=0; i < num; i++){
        let row = "";


        for(let j=0; j < i+1; j++){
            row = row + toggle;
            if(toggle === 1) {
                toggle = 0;
            } else {
                toggle = 1;
            }
        }
        console.log(row)
    }
}

triangle(5)











