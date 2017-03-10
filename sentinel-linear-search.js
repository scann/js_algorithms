/**
 * Created by Anna on 3/6/2017.
 */
var array = [23, 45, 34, 0, 10, 97, 52, 31, 20, 39];
var x = 45;

function doSentinelLinearSearch(array, arraySize, searchedElement) {
    var defaultAnswer = "NOT_FOUND";
    var lastElement = array[array.length]; /*remember last element of array*/
    array.pop();
    array.push(searchedElement);
    var i = 0;
    while (array[i] !== searchedElement) {
        i++;
    }
    array.pop();
    array.push(lastElement);
    if ((i < arraySize) || (array[array.length] === searchedElement)) {
        console.log("Index of searched element is " + (i + 1));
    } else {
        console.log("Index of searched element is " + defaultAnswer);
    }
}
doSentinelLinearSearch(array, array.length, x);
