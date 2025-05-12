//your JS code here. If required.
let counter=0;
let main=document.getElementById("incrementBtn");
let ele=document.getElementById("counter");


function incrementbtn() {
	alert(counter);
	counter+=1;
	ele.textContent=counter;
}