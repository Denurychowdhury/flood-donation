
// get element value and parse float
function GetValueById(id) {
    const InputValue = parseFloat(document.getElementById(id).value);
    return InputValue;
}
function GetAmountId(id) {
    const ammountValue =parseFloat(document.getElementById(id).innerText);
    return ammountValue;
}
function GetTextId(id) {
    const ammountValue =document.getElementById(id).innerText;
    return ammountValue;
}
function addAmount(ammountValue,inputValue) {
    const amount = ammountValue + inputValue;
    return amount;
}
function getTotalamount(availableValu,inputValu) {
    const total = availableValu - inputValu;
    return total;
}

function getId(id) {
    const identity = document.getElementById(id);
    return identity;
}

// const donationPage =getId('donation-page');
// donationPage.classList.add('hidden');

function addHidden(id) {
    const donation = document.getElementById(id)
    donation.classList.add('hidden');
    return;
}
function removHidden(id) {
    const donation = document.getElementById(id)
    donation.classList.remove('hidden');
    return;
}
function removeInput(id) {
    const remove = document.getElementById(id).value = '';
    return remove;
}