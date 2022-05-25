
//табы ===================

const tabsBtn = document.querySelectorAll('.btn');
const tabsBlock = document.querySelector('.tabs');
const cartProduct = document.querySelector('.product-items');
const cartCotzina = document.querySelector('.cart-items');


function hideTabContent() { 
    tabsBtn.forEach(item => {
        item.classList.remove('active');
    });
}

function showTabContent(i = 0){
    tabsBtn[i].classList.add('active');
    
}


tabsBlock.addEventListener('click', (event) => {
    const target = event.target;
    if(target && target.classList.contains('btn')){
        tabsBtn.forEach((item, i) => { 
            if(target === item) {
                hideTabContent();
                showTabContent(i);
                if(item.classList.contains('tab-corzina')) {
                    showBlock(cartCotzina);
                    hideBlock(cartProduct);
                } else if(item.classList.contains('tab-tovar')) {
                    showBlock(cartProduct);
                    hideBlock(cartCotzina);
                }
            }
        });
    }
});


function showBlock($el){
    $el.classList.remove('hide');
}

function hideBlock($el) {
    $el.classList.add('hide');
}

hideTabContent();
showTabContent();



//добавление элементов в корзину ======================

const goodsInCart = [];
const tabWithCounter = document.querySelector('button[data-goods-count]'); //получаем блок с количесвтом элементов в к/з


function createProduct() {
    return {
        name: 'Уроки по HTML',
        price: 300
    };
}

const addInCartButtons = document.querySelectorAll('button[data-add-in-cart="true"]');
clickEventListener(addInCartButtons, addInCartHandler);


function clickEventListener(element, callback) {
    element.forEach(item => {  
        item.addEventListener('click', callback); 
    });
}


function addInCartHandler() {
    const product = createProduct(); // делаем ссылку на обьект
    goodsInCart.push(product); // добавляем в массив наш обьект

    tabWithCounter.dataset.goodsCount = goodsInCart.length;  // добавляем в корзину кол. элементов в массиве
}