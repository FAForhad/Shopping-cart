function casePhoneTotal() {
    const casePrice = document.getElementById('case-price').innerText;
    const casePriceTotal = parseInt(casePrice);

    const phonePrice = document.getElementById('phone-price').innerText;
    const phonePriceTotal = parseInt(phonePrice);

    const subTotalprice = casePriceTotal + phonePriceTotal;

    const subTotalElement = document.getElementById('sub-total')
    subTotalElement.innerText = subTotalprice;
    
    const tex = subTotalprice * 0.1;
    const texfixedstring = tex.toFixed(2);
    const texfixed = parseFloat(texfixedstring)
    const texTotal = document.getElementById('tex');
    texTotal.innerText = texfixed;

    const total = subTotalprice + texfixed;
    const finalTotal = document.getElementById('total');
    finalTotal.innerText = total;
}