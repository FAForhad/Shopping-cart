function updatePhonenumber(isIncrease) {
    const phoneField = document.getElementById('phone-field');
    const phoneFieldString = phoneField.value;
    const previousPhoneField = parseInt(phoneFieldString);
    if (isIncrease) {
        newPhoneNumber = previousPhoneField + 1;
    }
    else {
        newPhoneNumber = previousPhoneField - 1;
    }
    phoneField.value = newPhoneNumber;
    return newPhoneNumber;
}
function UpdatephonePrice(newPhoneNumber) {
    const phoneTotalprice = newPhoneNumber * 1219;
    const phonePrice = document.getElementById('phone-price');
    phonePrice.innerText = phoneTotalprice;
}

document.getElementById('btn-phone-plus').addEventListener('click', function () {
    updatePhonenumber(true);
    UpdatephonePrice(newPhoneNumber);
    casePhoneTotal();


})
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    updatePhonenumber(false);
    UpdatephonePrice(newPhoneNumber);
    casePhoneTotal();
})