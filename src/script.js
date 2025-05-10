function calculateInterest() {
    // Get the values of Principal, Rate, and Time
    var principal = parseFloat(document.getElementById('principal').value);
    var rate = parseFloat(document.getElementById('rate').value);
    var time = parseFloat(document.getElementById('time').value);

    // Check if any field is empty
    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
        alert("Please enter valid values for all fields.");
        return;
    }

    // Calculate Simple Interest
    var simpleInterest = (principal * rate * time) / 100;

    // Calculate Total Amount (Principal + Interest)
    var totalAmount = principal + simpleInterest;

    // Display the result
    document.getElementById('simpleInterest').textContent = simpleInterest.toFixed(2);
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);

    // Show the result section
    document.getElementById('result').style.display = 'block';
}
