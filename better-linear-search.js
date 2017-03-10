/**
 * Created by Anna on 3/6/2017.
 */
var array = [];
var x = 44; /*number we search for*/

function doBetterLinearSearch(array, arraySize, searchedElement) {
    var defaultAnswer = "NOT_FOUND";
    for (var i = 0; i < arraySize; i++) {
        array[i] = Math.floor((Math.random() * 100) + 1); /* 10 random numbers from 1 to 100*/
        console.log(array[i]);
        if (array[i] === searchedElement) break;
    }
    i < arraySize ? console.log("Index of searched element is " + (i+1)) : console.log("Index of searched element is " + defaultAnswer);
}
doBetterLinearSearch(array, 10, x);


