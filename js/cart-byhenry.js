const qtyPlusBtn = document.querySelectorAll('.cart-section__table-row--qty--plus-btn');
const qtyMinusBtn = document.querySelectorAll('.cart-section__table-row--qty--minus-btn');
const qty = document.getElementsByClassName('cart-section__table-row--qty--number');
const price = document.getElementsByClassName('cart-section__table-row--price');
const unitPrice = document.getElementsByClassName('cart-section__table-row--unit-price');
const tableSubTotal = document.getElementsByClassName('cart-section__bottom__total-table--subtotal')[0].lastElementChild;
const tableShipFee = document.getElementsByClassName('cart-section__bottom__total-table--shipping-fee')[0].lastElementChild;
const tableTotal = document.getElementsByClassName('cart-section__bottom__total-table--total')[0].lastElementChild;

//localStorage.removeItem("cartLS"); 
var cartObj = {};

if(localStorage.getItem("cartLS") === null){
    cartObj = {
        0:{
            qty : qty[0].textContent
        },
        1:{
            qty : 3
        }
    };
    qty[0].textContent = cartObj[0].qty;
    qty[1].textContent = cartObj[1].qty;
    localStorage.setItem('cartLS', JSON.stringify(cartObj));
    computeSubTotal();
} else if (cartObj[1] === undefined) {
    cartObj = JSON.parse(localStorage.getItem("cartLS"));
    cartObj[1].qty = 3;
    qty[0].textContent = cartObj[0].qty;
    qty[1].textContent = cartObj[1].qty;
    localStorage.setItem('cartLS', JSON.stringify(cartObj));
    computeSubTotal();
} else {
    cartObj = JSON.parse(localStorage.getItem("cartLS"));
    qty[0].textContent = cartObj[0].qty;
    qty[1].textContent = cartObj[1].qty;
    computeSubTotal();
}
console.log(cartObj);


qtyPlusBtn.forEach( function(element, index) {
    element.addEventListener("click", function(){
        let currentQty = parseInt(qty[index].textContent) + 1;
        
        if(currentQty>50){
            alert('Not enough Stocks');
        } else {
            qty[index].textContent = currentQty;
            cartObj[index].qty = currentQty;
            localStorage.setItem('cartLS', JSON.stringify(cartObj));
            computeSubTotal();
        }
    });
});

qtyMinusBtn.forEach( function(element, index) {
    element.addEventListener("click", function(){
        let currentQty = parseInt(qty[index].textContent) - 1;
        if(currentQty==0){
            alert('Quantity cannot be 0. Click delete to cancel order');
        } else {
            qty[index].textContent = currentQty;
            cartObj[index].qty = currentQty;
            localStorage.setItem('cartLS', JSON.stringify(cartObj));
            computeSubTotal();
        }
    });
});

function computeSubTotal(){
    let varSubTotal = 0;
    let varTotal;
    let currentQty
    for(let i = 0 ; i < price.length ; i++){
        currentQty = parseInt(qty[i].textContent);
        qty[i].textContent = currentQty;
        price[i].textContent = "$" + (parseFloat(unitPrice[i].textContent.match(/(\d+)(\.\d+)?/g)) * currentQty);
        varSubTotal += parseFloat(price[i].textContent.match(/(\d+)(\.\d+)?/g));
    };
    tableSubTotal.textContent = "$ " + varSubTotal;
    varTotal = parseFloat(tableShipFee.textContent.match(/(\d+)(\.\d+)?/g)) + varSubTotal;
    tableTotal.textContent = "$ " + varTotal;
}





