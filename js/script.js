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
        document.getElementById('totalBalance').innerText = total;
    } else if (total > 0) {
        makePurchaseButton.removeAttribute('disabled')
        document.getElementById('totalBalance').innerText = total;
    }
    else {
        applyButton.setAttribute('disabled', true)
        makePurchaseButton.setAttribute('disabled', true)
    }
}

document.getElementById('couponBox').addEventListener('keyup', function (event) {
    const text = event.target.value;
    if (total >= 200 && text === 'SELL200') {
        applyButton.removeAttribute('disabled');
        applyButton.addEventListener('click', function (e) {
            const discountPrice = parseFloat(total*20/100);
            document.getElementById('discountPrice').innerText = discountPrice.toFixed(2);
            const totalBalance = total - discountPrice ;
            document.getElementById('totalBalance').innerText = totalBalance.toFixed(2);
            console.log(total, discountPrice, totalBalance);
        })
    }
});

function refresh() {
    location.reload(location.href = "#");
};

// Calling Function On click ........................
function card1() {
    const name = getName('card1Name');
    const price = getPrice('card1Price');
    setName(name);
    addToTotalPrice(price);
}