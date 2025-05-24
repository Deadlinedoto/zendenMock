document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('.num-form__input');
    const numButton = document.querySelector('.num-form__button');
    const minusSvg = numButton.querySelector('.num-form__svg-minus');




    const minusButton = document.querySelector('.button-minus')
    const plusButton = document.querySelector('.button-plus')
    const BasketQuantity = document.querySelector('.productQuantity')

    const productQuantity = document.querySelector('.basket-price__current');
    const priceText = productQuantity.textContent.replace(/\s/g, '').replace('р', '');
    const basePrice = parseInt(priceText, 10);

    const oldPrice = document.querySelector('.basket-price__extras-old');
    const oldPriceText = oldPrice.textContent.replace(/\s/g, '').replace('р', '');
    const oldPriceParse = parseInt(oldPriceText, 10);

    const finalPriceItem = document.querySelector('.finalPrice');
    const finalPriceItemText = finalPriceItem.textContent.replace(/\s/g, '').replace('р', '');
    const finalPriceItemParse = parseInt(finalPriceItemText, 10);

    const finalPrice = document.querySelector('.justify-line__desc');
    const finalPriceText = finalPrice.textContent.replace(/\s/g, '').replace('р', '');
    const finalPriceParse = parseInt(finalPriceText, 10);

    const redPrice = document.querySelector('.red');
    const redPriceText = redPrice.textContent.replace(/\s/g, '').replace('р', '').replace('-', '');
    const redPriceParse = parseInt(redPriceText, 10);












    minusButton.addEventListener('click', function () {
        input.stepDown();
        updateMinusColor();
        updatePrice()

    });

    plusButton.addEventListener('click', function () {
        input.stepUp();
        updateMinusColor();
        updatePrice()

    });

    function updateMinusColor() {
        if (Number(input.value) > 1) {
            minusSvg.style.color = '#303030'
        }
        else {
            minusSvg.style.color = '#c7c7c7'
        }
    }
    function updatePrice() {
        const quantity = Number(input.value);

        const currentTotalPrice = basePrice * quantity;
        productQuantity.textContent = `${currentTotalPrice.toLocaleString('ru-RU')}р`;

        const oldTotalPrice = oldPriceParse * quantity;
        oldPrice.textContent = `${oldTotalPrice.toLocaleString('ru-RU')}р`;

        const finalTotalPriceItem = finalPriceItemParse * quantity;
        finalPriceItem.textContent = `${finalTotalPriceItem.toLocaleString('ru-RU')}р`;

        const finalTotalPrice = finalPriceParse * quantity;
        finalPrice.textContent = `${finalTotalPrice.toLocaleString('ru-RU')}р`;

        const redTotalPrice = redPriceParse * quantity;
        redPrice.textContent = `-${redTotalPrice.toLocaleString('ru-RU')}р`;

        BasketQuantity.textContent = String(quantity);

    }



    updateMinusColor();
    updatePrice();





});
