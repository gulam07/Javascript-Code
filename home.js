// console.log("hello gulam")
// alert("warning, u are learnimg java script")
// var a= "Azeem";
// console.log(a)
// var JsAge= prompt("What is the your age")
// document.getElementById("fromIndex").innerHTML=JsAge;

prompt("Enter your name for checking intelligence score");
var Score = Math.random()*100;
Score = Math.floor(Score);
// console.log(Score);
if(Score===100){
    alert("you are Einstien " + Score +"%");
}
else if(30 < Score <100){
    alert("you are Elon Musk " + Score +"%");
}
else if(Score<=30){
    alert("you are Mr. Bean " + Score +"%");
}