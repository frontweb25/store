
const tabsBtn = document.querySelectorAll('.btn');
const tabsBlock = document.querySelector('.tabs');

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
            }
        });
    }
});



hideTabContent();
showTabContent();
