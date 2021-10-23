var guestList =["Azeem","Gulam","Afzal"];
var guestName = prompt("What is Your Name:");
if(guestList.includes(guestName)){
    alert("Welcome"+ guestName);
}
else{
    alert("Sorry not allowed");
}
console.log(guestName);