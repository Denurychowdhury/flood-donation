// get element value and parse float
function GetValueById(id) {
    const InputValue = parseFloat(document.getElementById(id).value);
    return InputValue;
}
// innertext with parse
function GetAmountId(id) {
    const ammountValue =parseFloat(document.getElementById(id).innerText);
    return ammountValue;
}

// get innertext
function GetTextId(id) {
    const ammountValue =document.getElementById(id).innerText;
    return ammountValue;
}

// add card amount
function addAmount(ammountValue,inputValue) {
    const amount = ammountValue + inputValue;
    return amount;
}
// calculate total amount
function getTotalamount(availableValu,inputValu) {
    const total = availableValu - inputValu;
    return total;
}
// get element by id
function getId(id) {
    const identity = document.getElementById(id);
    return identity;
}

// add hidden class for button
function addHidden(id) {
    const donation = document.getElementById(id)
    donation.classList.add('hidden');
    return;
}
// remove hidden class from button
function removHidden(id) {
    const donation = document.getElementById(id)
    donation.classList.remove('hidden');
    return;
}

// remove value from input field after show modal

function removeInput(id) {
    const remove = document.getElementById(id).value = '';
    return remove;
}