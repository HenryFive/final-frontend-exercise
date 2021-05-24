var productBigImg = document.getElementsByClassName('main__product--image--big');

function selectWhite(){
    productBigImg[0].src = "images/beats__2.png";
}

function selectRed(){
    productBigImg[0].src = "images/beat-red.png";
}

function selectPink(){
    productBigImg[0].src = "images/beats__4.png";
}

function selectBlack(){
    productBigImg[0].src = "images/black_hero_retina_1800x1800_V2.png";
}

function selectCopper(){
    productBigImg[0].src = "images/beats__1.png";
}

var qtyDiv = document.getElementsByClassName('cart-section__table-row--qty--number');

if(localStorage.getItem("cartLS") === null){
    cartObj = {
        0:{
            qty : 2
        },
    };
    qtyDiv[0].textContent = cartObj[0].qty;
    localStorage.setItem('cartLS', JSON.stringify(cartObj));
} else {
    cartObj = JSON.parse(localStorage.getItem("cartLS"));
    qtyDiv[0].textContent = cartObj[0].qty;
    
}


var incBtn = document.getElementById('qty-plus-btn');
    incBtn.addEventListener('click', function() {
        let qtyDivVal = parseInt(qtyDiv[0].textContent) + 1;
        if(qtyDivVal>50){
            alert('Not enough stocks');
        } else {
            qtyDiv[0].textContent = qtyDivVal;
            cartObj[0].qty = qtyDivVal;
            localStorage.setItem('cartLS', JSON.stringify(cartObj));
        }
    }
    );

var decBtn = document.getElementById('qty-minus-btn');
    decBtn.addEventListener('click', function() {
        let qtyDivVal = parseInt(qtyDiv[0].textContent) - 1;
        if(qtyDivVal>0){
            qtyDiv[0].textContent = qtyDivVal;
            cartObj[0].qty = qtyDivVal;
            localStorage.setItem('cartLS', JSON.stringify(cartObj));
        }
    }
    );
    