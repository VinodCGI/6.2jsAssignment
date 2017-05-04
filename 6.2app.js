var x=88;
var y=49;
var z=34;

//To reduce the use of console.log and finally this function prints the greatest number
var greatestNum =function(param){
 console.log("Greatest Number is:" + param)
}

 //Once it finds the greatest number,function call will pass that number
if(x>y && x>z){
	greatestNum(x);	   
}else if(y>x && y>z){
	greatestNum(y);
}else{
	greatestNum(z);
}
