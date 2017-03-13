/**
 * Created by Anna on 3/13/2017.
 */
var array = [23, 45, 34, 0, 10, 97, 52, 31, 20, 39];
var x = 20; /*number we search for*/

function doRecursiveLinearSearch(array, arraySize, i, searchedElement) {
    var defaultAnswer = "NOT_FOUND";
    if (i > arraySize) {
        console.log(defaultAnswer);
    } else if ((i <= arraySize) && (array[i] == searchedElement)) {
        console.log("Index of searched element is " + (i+1));
    } else if ((i <= arraySize) && (array[i] !== searchedElement)) {
        return doRecursiveLinearSearch(array, arraySize, i+1, searchedElement);
    }
}
doRecursiveLinearSearch(array, array.length, 0, x);
