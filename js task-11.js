var b=prompt("enter your month");
var date1=new Date(b);
var month=date1.getMonth();
if (month<=4){
	document.write("the month is spring");
}
else if(month<=8){
	document.write("the month is summer");
}
else  if(month<12){
	document.write("the month is winter");
}
else{
	document.write("none");
	
}