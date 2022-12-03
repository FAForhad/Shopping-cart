function updateCaseNumber(isIncrease) {
    const csaeNumberField = document.getElementById('csae-number-field');
    const csaeNumberFieldString = csaeNumberField.value;
    const previousCaseNumber = parseInt(csaeNumberFieldString);
    if (isIncrease) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }

    csaeNumberField.value = newCaseNumber;
    
    return newCaseNumber;
}

function updateCaseTotalNumber (newCaseNumber){
    const caseTotalprice = newCaseNumber * 59;
    const caseprice = document.getElementById('case-price');
    caseprice.innerText = caseTotalprice;
}


document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalNumber(newCaseNumber);
    casePhoneTotal();
})
document.getElementById('btn-case-minuis').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false)
    updateCaseTotalNumber(newCaseNumber);
    casePhoneTotal();
})