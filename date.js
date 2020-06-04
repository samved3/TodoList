
module.exports.getDate=getDate;
function getDate(){
let options= {
  weekday:"long",
  day:"numeric",
  month:"long",
}
let date = new Date();
let day = date.toLocaleDateString("en-us",options);
return day;
}
module.exports.getDay=getDay;
function getDay(){
let options= {
  weekday:"long",

}
let date = new Date();
let day = date.toLocaleDateString("en-us",options);
return day;
}
