/**
 * Created by Anna on 3/13/2017.
 */
function findFactorial(number) {
    if (number < 0) {
        console.log("Number is less than 0");
        return "error!";
    }
    else if (number >= 0) {
        return (number > 0) ? number * findFactorial(number - 1) : 1;
    }
}
console.log(findFactorial(1));
