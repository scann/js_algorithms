function printArray(array) {
    console.log(array.join(' '))
}

//Insertion sort

//Uses nested loops
//Assumes a sorted list of length 1
//Compares the next item and inserts it before
//or after depending on the comparison

function insertionSort(array) {
    let i;
    let j;
    for (i = 1; i < array.length; i++) {
        for(j = 0; j < i; j++) {
            printArray(array);

            if (array[i] < array[j]) {
                const [item] = array.splice(i,1);
                array.splice(j, 0, item);
            }
        }
    }
    printArray(array);
    return array;
}

const numbers = [10, 5, 2, 3, 8, 6, 7, 9, 1, 4];
insertionSort(numbers);