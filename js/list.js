var sum = 0;

function render() {
  var element = document.getElementById('itemsList');
  var finalStatement = document.getElementById('finalAmount');

  for (let i = 0; i < localStorage.length / 4; i++) {
    const item = localStorage.getItem('item-' + i);
    const quantity = localStorage.getItem('quantity-' + i);
    const amount = localStorage.getItem('amount-' + i);
    const cost = localStorage.getItem('costs-' + i);
    if (quantity != 0) {
      element.innerHTML += `
        <tr>
            <th id="secondPage" class="name">${item}</th>
            <th id="secondPage" class="name">:</th>
            <th id="secondPage" class="price">${cost} x ${quantity}</th>
            <th id="secondPage" class="price">${amount}</th>
        </tr>
        `;
      sum += parseInt(amount);
    }
  }

  finalStatement.innerHTML += `
  <table>
    <td class="name">Totak Amount</td>
    <td class="name">=</td>
    <td class="price">${parseInt(sum)}</td>
  </table>
  `;

  if (parseInt(sum) == 0) {
    alert('Order kar pehle');
  }
}
