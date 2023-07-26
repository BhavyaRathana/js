const string= "1,2,3,4,5";
function stringToNumberArray(string){
    return string.split(",").map(Number);
}
const numberArray = stringToNumberArray(string);
console.log(numberArray);