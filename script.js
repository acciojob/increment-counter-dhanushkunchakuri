//your JS code here. If required.
let counter=0;
// let main=document.getElementById("body");
let ele=document.getElementById("counter");


function incrementbtn() {
	alert(counter);
	counter+=1;
	ele.textContent=counter;
}