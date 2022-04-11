let counter = document.getElementById("counter");

document.getElementById("decrease").addEventListener("click", () => {
    if (counter.innerHTML > 1) {
        counter.innerHTML = counter.innerHTML - 1;
    }
});

document.getElementById("increase").addEventListener("click", () => {
    counter.innerHTML = Number(counter.innerHTML) + 1;
});

document.getElementById("reset").addEventListener("click", () => {
    counter.innerHTML = 1;
});


