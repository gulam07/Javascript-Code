setInterval(showTime, 1000);
function showTime(){
var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();

AJ = mm+'-'+dd+'-'+yyyy;
console.log(AJ);
document.getElementById('date').innerHTML=AJ;
var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");
  document.getElementById('day').innerHTML=daylist[day];
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  today = hour+':'+minute+':'+second;
  console.log(today);
  document.getElementById('time').innerHTML=today;
}
showTime();