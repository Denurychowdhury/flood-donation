const blogBtn =getId('blog-btn')
blogBtn.addEventListener('click', function () {
    window.location.href = './blog.html';
})
// card-1
getId('input-btn').addEventListener('click', function () {
    const inputValue = GetValueById('input-value');
    const ammountValue = GetAmountId('money-input');
    const availableValue = GetAmountId('total-amounts');
    const inputs = getId('input-value').value;
    if (availableValue<inputValue||isNaN(inputValue) || inputValue <= 0 ||isNaN(inputs)){
        alert('Please input Correct Amount !');
        return;
    }
    getId('money-input').innerText = addAmount(ammountValue, inputValue);
    getId('total-amounts').innerText = getTotalamount(availableValue,inputValue);
    const donatePlace = GetTextId('donation-place');
    const historyDetails =getId('history');
    const historyCard = createElement(inputValue, donatePlace);
    historyDetails.insertBefore(historyCard, historyDetails.firstChild);
    removeInput('input-value')
    my_modal_1.showModal()
})
// card-2
getId('btn-two').addEventListener('click', function () {
    const inputValue = GetValueById('input-value-two');
    const ammountValue = GetAmountId('money-input-two');
    const availableValue = GetAmountId('total-amounts');
    const inputs =getId('input-value-two').value;
    if (availableValue<inputValue||isNaN(inputValue) || inputValue <= 0||isNaN(inputs)) {
        alert('Please input Correct Amount !');
        return;
    }
    getId('money-input-two').innerText = addAmount(ammountValue, inputValue);
    getId('total-amounts').innerText= getTotalamount(availableValue,inputValue);
    const donatePlace = GetTextId('donation-place-two');
    const historyDetails =getId('history');
    const historyCard = createElement(inputValue, donatePlace);
    historyDetails.insertBefore(historyCard, historyDetails.firstChild);
    removeInput('input-value-two')
    my_modal_1.showModal()
})
// card-3
getId('third-input-button').addEventListener('click', function () {
    const inputValue = GetValueById('input-value-three');
    const ammountValue = GetAmountId('money-input-three');
    const availableValue = GetAmountId('total-amounts');
     const inputs = getId('input-value-three').value;
    if (availableValue<inputValue||isNaN(inputValue) || inputValue <= 0||isNaN(inputs)) {
        alert('please input Correct Amount !');
        return;
    }
    getId('money-input-three').innerText = addAmount(ammountValue,inputValue);
    getId('total-amounts').innerText = getTotalamount(availableValue,inputValue);
    const donatePlace = GetTextId('donation-place-three');
    const historyDetails =getId('history');
    const historyCard = createElement(inputValue, donatePlace);
    historyDetails.insertBefore(historyCard, historyDetails.firstChild);
    removeInput('input-value-three');
    my_modal_1.showModal()
})

// history btn
const historyBtn =getId('history-btn')
historyBtn.addEventListener('click', function () {
    addHidden('donation-page')
    const donationBtn =getId('donation-btn')
    donationBtn.classList.remove('bg-primary');
    removHidden('history')
    historyBtn.classList.add('bg-primary')
})
// donaton Btn
const donationBtn = getId('donation-btn')
donationBtn.addEventListener('click', function (){
    removHidden('donation-page')
    donationBtn.classList.add('bg-primary');
    const historyBtn = getId('history-btn');
    historyBtn.classList.remove('bg-primary');
    addHidden('history')
})
