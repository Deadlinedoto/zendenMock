document.addEventListener('DOMContentLoaded', function () {
    const thumbnails = document.querySelectorAll('.gallery-thumbnails img');
    const mainImg = document.querySelector('.gallery-main img');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function () {
            mainImg.src = this.src;
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const sizeButtons = document.querySelectorAll('.sizes-choose button');
    sizeButtons.forEach(button => {
        button.addEventListener('click', function () {
            sizeButtons.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    const deliveryButtons = document.querySelectorAll('.delivery-info__list button');
    deliveryButtons.forEach(button => {
        if (button.textContent.includes('недоступно')) {
            button.style.color = '#a3a3a3';
        }
    });

    const aboutButtons = document.querySelectorAll('.about-menu__list a, .about-menu__list a span');
    aboutButtons.forEach(button => {
        button.addEventListener('click', function () {
            aboutButtons.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
        })
    })
    // const aboutButtonsCircle = document.querySelectorAll('.about-menu__list a span');
    // aboutButtonsCircle.forEach(button => {
    //     button.addEventListener('click', function () {
    //         aboutButtonsCircle.forEach(btn => btn.classList.remove('selected'));
    //         this.classList.add('selected');
    //     })
    // })
});
    