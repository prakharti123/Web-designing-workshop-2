 function calculateSum() {
    const n = parseInt(document.getElementById("number").value);
    let sum = 0;
    for (let i = 2; i <= n; i += 2) {
        sum += i;
    }
    document.getElementById("result").innerText = "The sum of even numbers from 1 to " + n + " is: " + sum;
}