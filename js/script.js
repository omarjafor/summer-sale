const applyButton = document.getElementById('applyButton');
const makePurchaseButton = document.getElementById('makePurchase-btn');

// Reusable Funtion .....................................
function getName(elementId) {
    const nameArea = document.getElementById(elementId);
    const name = nameArea.innerText;
    return name;
}
function getPrice(priceId) {
    const priceText = document.getElementById(priceId);
    const price = parseFloat(priceText.innerText);
    return price;
}
function setName(name) {
    const entrylist = document.getElementById('entrylist');
    const li = document.createElement('li');
    li.innerText = name;
    entrylist.appendChild(li);
}

let total = 0;
function addToTotalPrice(price) {
    total = total + price;
    document.getElementById('totalPrice').innerText = total.toFixed(2);
    if (total >= 200) {
        applyButton.removeAttribute('disabled');
        makePurchaseButton.removeAttribute('disabled')
        document.getElementById('totalBalance').innerText = total.toFixed(2);
    } else if (total > 0) {
        makePurchaseButton.removeAttribute('disabled')
        document.getElementById('totalBalance').innerText = total.toFixed(2);
    }
    else {
        applyButton.setAttribute('disabled', true)
        makePurchaseButton.setAttribute('disabled', true)
    }
}

applyButton.addEventListener('click', function () {
    const text = document.getElementById('couponBox').value;
    if (text === 'SELL200') {
        const discountPrice = parseFloat(total * 20 / 100);
        document.getElementById('discountPrice').innerText = discountPrice.toFixed(2);
        const totalBalance = total - discountPrice;
        document.getElementById('totalBalance').innerText = totalBalance.toFixed(2);
    }
});

function refresh() {
    document.getElementById('couponBox').value = '';
    document.getElementById('entrylist').childNodes.remove();
    document.getElementById('totalPrice').innerText = '00.00';
    document.getElementById('totalBalance').innerText = '00.00';
    document.getElementById('discountPrice').innerText = '00.00';
};

// Calling Function On click ........................
function card1() {
    const name = getName('card1Name');
    const price = getPrice('card1Price');
    setName(name);
    addToTotalPrice(price);
}

function card2() {
    const name = getName('card2Name');
    const price = getPrice('card2Price');
    setName(name);
    addToTotalPrice(price);
}

function card3() {
    const name = getName('card3Name');
    const price = getPrice('card3Price');
    setName(name);
    addToTotalPrice(price);
}

function card4() {
    const name = getName('card4Name');
    const price = getPrice('card4Price');
    setName(name);
    addToTotalPrice(price);
}

function card5() {
    const name = getName('card5Name');
    const price = getPrice('card5Price');
    setName(name);
    addToTotalPrice(price);
}

function card6() {
    const name = getName('card6Name');
    const price = getPrice('card6Price');
    setName(name);
    addToTotalPrice(price);
}

function card7() {
    const name = getName('card7Name');
    const price = getPrice('card7Price');
    setName(name);
    addToTotalPrice(price);
}

function card8() {
    const name = getName('card8Name');
    const price = getPrice('card8Price');
    setName(name);
    addToTotalPrice(price);
}

function card9() {
    const name = getName('card9Name');
    const price = getPrice('card9Price');
    setName(name);
    addToTotalPrice(price);
}