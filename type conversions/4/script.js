const date=new Date()
function dateToString(date){
    return date.toDateString(date)
}
const DateString = dateToString(date);
console.log(DateString);