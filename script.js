//your JS code here. If required.
let count=0;
let button=document.getElementById("incrementBtn");
let ele=document.getElementById("counter");
ele.textContent=count;


button.addEventListener("click",function () {
	alert(count);
	count+=1;
	ele.textContent=count;
});