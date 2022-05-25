
//табы ===================

const tabsBtn = document.querySelectorAll('.btn');
const tabsBlock = document.querySelector('.tabs');
const cartProduct = document.querySelector('.product-items');
const cartCotzina = document.querySelector('.cart-items');
const blockProduct = document.querySelector('.product-cards');



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
                    hideBlock(blockProduct);
                    
                    // blockProduct.remove(html);
                } else if(item.classList.contains('tab-tovar')) {
                    showBlock(blockProduct);
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


function renderGoods(){
    const div = document.createElement('div');
    div.classList.add('product-items');

    GOODS.forEach(item => {
        
        div.insertAdjacentHTML('beforeend', `
        <div class="product-item">
        <img src="${item.imgSrc}" />
        <div class="product-list">
          <h3>${item.name}</h3>
          <p class="price">${item.price}</p>
          <button class='button' data-add-in-cart="true">В корзину</button>
        </div>
        </div>
        `);
    });
    
    return div;
}

const html = renderGoods();
blockProduct.append(html);





//добавление элементов в корзину ======================

const goodsInCart = [];
const tabWithCounter = document.querySelector('button[data-goods-count]'); //получаем блок с количесвтом элементов в к/з
const addInCartButtons = document.querySelectorAll('button[data-add-in-cart="true"]');
clickEventListener(addInCartButtons, addInCartHandler);


function createProduct() {
    return {
        name: 'Уроки по HTML',
        price: 300
    };
}


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