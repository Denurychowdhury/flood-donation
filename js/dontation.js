const blogBtn = document.getElementById('blog-btn')
blogBtn.addEventListener('click', function () {
    window.location.href = './blog.html';
})
document.getElementById('input-btn').addEventListener('click', function () {
    const inputValue = GetValueById('input-value');
    const ammountValue = GetAmountId('money-input');
    const availableValue = GetAmountId('total-amounts');
    if (availableValue<inputValue||isNaN(inputValue) || inputValue <= 0) {
        alert('please input Correct Amount!');
        return;
    }
    document.getElementById('money-input').innerText = ammountValue + inputValue;
    document.getElementById('total-amounts').innerText = availableValue - inputValue;
    // console.log(inputValue)
    // console.log(ammountValue)
    // console.log(availableValue)
    const donatePlace = GetTextId('donation-place');
    const historyDetails = document.getElementById('history');
    const historyCard = document.createElement('div')
    historyCard.classList.add('p-4','border','border-gray-200','rounded-xl')
    historyCard.innerHTML = `
    <div class="p-4 border border-gray-200 rounded-xl">
                    <h1 class="font-extrabold"><span>${inputValue}</span> ${donatePlace}, Bangladesh
                    </h1>
                    <p class="font-light text-base">Date : ${new Date().toLocaleDateString()}  (Bangladesh Standard Time)
                    </p>
    </div>
    
    `;
    historyDetails.appendChild(historyCard)
    my_modal_1.showModal()
})
document.getElementById('btn-two').addEventListener('click', function () {
    const inputValue = GetValueById('input-value-two');
    const ammountValue = GetAmountId('money-input-two');
    const availableValue = GetAmountId('total-amounts');
    if (availableValue<inputValue||isNaN(inputValue) || inputValue <= 0) {
        alert('please input Correct Amount');
        return;
    }
    document.getElementById('money-input-two').innerText = ammountValue + inputValue;
    document.getElementById('total-amounts').innerText = availableValue - inputValue;
    // console.log(inputValue)
    // console.log(ammountValue)
    // console.log(availableValue)
    const donatePlace = document.getElementById('donation-place-two').innerText;
    const historyDetails = document.getElementById('history');
    const historyCard = document.createElement('div')
    historyCard.classList.add('p-4','border','border-gray-200','rounded-xl')
    historyCard.innerHTML = `
    <div class="p-4 border border-gray-200 rounded-xl">
                    <h1 class="font-extrabold"><span>${inputValue}</span> ${donatePlace}, Bangladesh
                    </h1>
                    <p class="font-light text-base">Date : ${new Date().toLocaleDateString()}  (Bangladesh Standard Time)
                    </p>
    </div>
    
    `;
    historyDetails.appendChild(historyCard)
    my_modal_1.showModal()
})
document.getElementById('third-input-button').addEventListener('click', function () {
    const inputValue = GetValueById('input-value-three');
    const ammountValue = GetAmountId('money-input-two');
    const availableValue = GetAmountId('total-amounts');
    if (availableValue<inputValue||isNaN(inputValue) || inputValue <= 0) {
        alert('please input Correct Amount');
        return;
    }
    document.getElementById('money-input-three').innerText = ammountValue + inputValue;
    document.getElementById('total-amounts').innerText = availableValue - inputValue;
    // console.log(inputValue)
    // console.log(ammountValue)
    // console.log(availableValue)
    const donatePlace = document.getElementById('donation-place-three').innerText;
    const historyDetails = document.getElementById('history');
    const historyCard = document.createElement('div')
    historyCard.classList.add('p-4','border','border-gray-200','rounded-xl')
    historyCard.innerHTML = `
    <div class="p-4 border border-gray-200 rounded-xl">
                    <h1 class="font-extrabold"><span>${inputValue}</span> ${donatePlace}, Bangladesh
                    </h1>
                    <p class="font-light text-base">Date : ${new Date().toLocaleDateString()}  (Bangladesh Standard Time)
                    </p>
    </div>
    
    `;
    historyDetails.appendChild(historyCard)
    my_modal_1.showModal()
})
const historyBtn = document.getElementById('history-btn')
historyBtn.addEventListener('click', function () {
    const donationPage = document.getElementById('donation-page');
    donationPage.classList.add('hidden');
    const donationBtn = document.getElementById('donation-btn')
    donationBtn.classList.remove('bg-primary');
    const historyPage = document.getElementById('history');
    historyPage.classList.remove('hidden')
    historyBtn.classList.add('bg-primary')
    historyBtn.classList.remove('bg-transparent','border-2', 'border-gray-500')
})

const donationBtn = document.getElementById('donation-btn')
donationBtn.addEventListener('click', function (){
    const donationPage = document.getElementById('donation-page');
    donationPage.classList.remove('hidden');
    donationBtn.classList.add('bg-primary');
    const historyBtn = document.getElementById('history-btn')
    historyBtn.classList.add('bg-transparent');
    const historyPage = document.getElementById('history');
    historyPage.classList.add('hidden')
})
