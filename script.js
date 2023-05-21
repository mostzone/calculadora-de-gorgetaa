function calcularGorjeta() {
  var total = document.getElementById("total").value;
  var percent = document.getElementById("percent").value;

  var gorjeta = total * (percent / 100);
  var totalPagar = parseFloat(total) + gorjeta;

  document.getElementById("valorGorjeta").textContent = gorjeta.toFixed(2) + " (R$)";
  document.getElementById("totalPagar").textContent = totalPagar.toFixed(2) + " (R$)";
}
