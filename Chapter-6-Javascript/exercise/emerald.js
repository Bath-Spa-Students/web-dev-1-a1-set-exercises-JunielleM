function calculateCost() {
    var distance = parseFloat(document.getElementById('distance').value);
    var efficiency = parseFloat(document.getElementById('efficiency').value);
    var price = parseFloat(document.getElementById('price').value);

    if (isNaN(distance) || isNaN(efficiency) || isNaN(price)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    var totalCost = (distance / efficiency) * price;
    document.getElementById('result').innerText = "Total cost of the journey: $" + totalCost.toFixed(2);
}
