let accItem = document.querySelectorAll('.accordion-item');
let accHd = document.querySelectorAll('.accordion-heading');
console.log(accHd);

for(i = 0; i < accHd.length; i++) {
    accHd[i].addEventListener('click', toggleItem, false);
    // console.log('test');
}

function toggleItem() {
    let itemClass = this.parentNode.className;
    console.log(itemClass);
    
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordion-item close';
        let icon = accItem[i].querySelector('.icon-minus');
        if (icon) {
            icon.className = 'icon-plus';
        }
    }
    if (itemClass == 'accordion-item close') {
        this.parentNode.className = 'accordion-item open';
        this.querySelector('.icon-plus').className = 'icon-minus';
        if (icon) {
            icon.className = 'icon-minus';
        }
    }
}