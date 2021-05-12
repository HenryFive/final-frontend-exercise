const qtyPlusBtn = document.querySelectorAll('.cart-section__table-row--qty--plus-btn');
const qtyMinusBtn = document.querySelectorAll('.cart-section__table-row--qty--minus-btn');
const qty = document.getElementsByClassName('cart-section__table-row--qty--number');
const subTotal = document.getElementsByClassName('cart-section__table-row--price');
const unitPrice = document.getElementsByClassName('cart-section__table-row--unit-price');
const tableSubTotal = document.getElementsByClassName('cart-section__bottom__total-table--subtotal')[0].lastElementChild;
const tableShipFee = document.getElementsByClassName('cart-section__bottom__total-table--shipping-fee')[0].lastElementChild;
const tableTotal = document.getElementsByClassName('cart-section__bottom__total-table--total')[0].lastElementChild;

qtyPlusBtn.forEach( function(element, index) {
    element.addEventListener("click", function(){
        let currentQty = parseInt(qty[index].textContent) + 1;
        
        if(currentQty>50){
            alert('Not enough Stocks');
        } else {
            qty[index].textContent = currentQty;
            subTotal[index].textContent = "$" + (parseFloat(unitPrice[index].textContent.match(/(\d+)(\.\d+)?/g)) * currentQty);
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
            subTotal[index].textContent = "$" + (parseFloat(unitPrice[index].textContent.match(/(\d+)(\.\d+)?/g)) * currentQty);
            computeSubTotal();
        }
    });
});

function computeSubTotal(){
    let varSubTotal = 0;
    let varTotal;
    for(let i = 0 ; i < subTotal.length ; i++){
        varSubTotal += parseFloat(subTotal[i].textContent.match(/(\d+)(\.\d+)?/g));
    };
    tableSubTotal.textContent = "$ " + varSubTotal;
    varTotal = parseFloat(tableShipFee.textContent.match(/(\d+)(\.\d+)?/g)) + varSubTotal;
    tableTotal.textContent = "$ " + varTotal;
}



