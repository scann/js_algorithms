function printArray(array) {
    console.log(array.join(' '))
}

//Bubble Sort

//Loop through the array
//If this item > next, swap them
//Indicate a swap occurred
//If a swap occurred, loop through the array again
//Continue looping until no swap occur

function bubbleSort(array) {
    let swapped = false;

    do {
        swapped = false;
        array.forEach((item, index) => {
            printArray(array);
            if(item > array[index + 1]) {
                const temporary = item;

                array[index] = array[index +1];
                array[index + 1] = temporary;
                swapped = true;
            }
        })
    } while (swapped);
    return array;
}
const numbers = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1];

bubbleSort(numbers);