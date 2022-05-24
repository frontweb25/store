
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
