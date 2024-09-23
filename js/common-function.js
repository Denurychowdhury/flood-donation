
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
