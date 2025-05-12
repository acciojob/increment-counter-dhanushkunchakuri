let counter = 0;
let ele = document.getElementById("counter");
let button = document.getElementById("incrementBtn");

button.addEventListener("click", function() {
	alert(counter);
	counter += 1;
	ele.textContent = counter;
});
