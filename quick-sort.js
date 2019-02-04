function printArray(array) {
    console.log(array.join(' '))
}

//Quick sort

//Recursive
//We receive an array and pick a "pivot"
//Items are compared to the pivot
//If an item is less than the pivot, put in the 'left' array,
//else into the right 'array'
//Return the array resulting from quickSort called on the left,
//the pivot, and quickSort on the 'right'

function quickSort(array) {
    printArray(array);

    if(array.length < 2) {
        return array;
    }

    const pivotIndex = array.length - 1;
    const pivot = array[pivotIndex];
    const left = [];
    const right = [];

    for (let i = 0; i < pivotIndex; i++) {
        const currentItem = array[i];
        currentItem < pivot ? left.push(currentItem) : right.push(currentItem);
    }

    const result = [...quickSort(left), pivot, ...quickSort(right)];

    printArray(result);

    return result;
}

const numbers = [10, 6, 3, 2, 7, 9, 1, 8, 5, 4];

quickSort(numbers);