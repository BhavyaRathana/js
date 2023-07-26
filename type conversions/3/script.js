const object={
    Name:"bhavya",
    age:20,
    year:3
}
function objectToJsonString(object){
    return JSON.stringify(object)
}
const jsonString = objectToJsonString(object);
console.log(jsonString);