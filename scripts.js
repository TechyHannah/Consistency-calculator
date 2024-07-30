function calculate() {
    const totalProfits = parseFloat(document.getElementById('total-profits').value);
    const largestProfit = parseFloat(document.getElementById('largest-profit').value);

    const newTotalProfitsNeeded = largestProfit / 0.4;
    const additionalProfitsNeeded = newTotalProfitsNeeded - totalProfits;

    document.getElementById('result').innerHTML = 
        `New Total Profits Needed: ${newTotalProfitsNeeded.toFixed(2)}<br>
        Additional Profits Needed: ${additionalProfitsNeeded.toFixed(2)}`;
}
