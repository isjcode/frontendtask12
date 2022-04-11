document.getElementById("calculate").addEventListener("click", () => {
    let amount = document.getElementById("amount").value;
    let percentage = document.getElementById("percentage").value;
    let months = document.getElementById("months").value;
    let output = document.getElementById("output");

    output.innerHTML = "";
    [amount, percentage, months].forEach(element => {
        console.log(element);
        if (isNaN(element) || element.trim().length == 0 || element < 1) {
            output.innerHTML = "Wrong!";
            return;
        }
    });

    let result = (((((amount * percentage) / 100) * months) / 12) + amount) / months;   

    output.innerHTML = result;
});