document.addEventListener("DOMContentLoaded", () => {
    let doc = document.getElementById("incrementBtn");
    let p = document.getElementById("counter");
    let counter = 0;

    doc.addEventListener("click", () => {
        alert(counter);
        counter++;
        p.innerHTML = counter;
    });
});
