
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

    for(let i = 0; i < GOODS.length; i++) {
        const product = createProduct(GOODS[i]);
            //создали карточку
            const productBlock  = document.createElement('div');
            productBlock.className = 'product-item';
            productBlock.innerHTML = `
            <img src="${product.imgSrc}" />
            <div class="product-list">
            <h3>${product.name}</h3>
            <p class="price">₽ ${product.price}</p>
            `;
            //создали кнопку
            const button = document.createElement('button');
            button.className = 'button';
            button.innerHTML = 'В корзину';
            button.addEventListener('click', addInCartHandler(product));
            div.append(productBlock);
            productBlock.querySelector('.product-list').append(button);
    }

   
    
  
    return div;
}

const html = renderGoods(); //записали сформированные карточки в переменную
blockProduct.append(html); //добавили в блок карточки





//добавление элементов в корзину ======================

const goodsInCart = [];
const tabWithCounter = document.querySelector('button[data-goods-count]'); //получаем блок с количесвтом элементов в к/з


function createProduct(product) {
    return {
        name: product.name ? product.name: 'Имя не найдено',
        price: product.price ? product.price: 0,
        imgSrc: product.imgSrc ? product.imgSrc : ''
    };
}



function addInCartHandler(product) {
   return () => {
    goodsInCart.push(product); // добавляем в массив наш обьект

    tabWithCounter.dataset.goodsCount = goodsInCart.length;  // добавляем в корзину кол. элементов в массиве
    console.log(goodsInCart);
   };
 
}