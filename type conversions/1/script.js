function stringToBoolean(string){
switch(string.toLowerCase().trim()){
    case"true":case"yes":case"1":return true;
    case"false":case"no":case"0":return false;
    default:return Boolean(string);
}
}
console.log(stringToBoolean("bhavya"))