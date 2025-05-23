document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('.num-form__input');
    const numButton = document.querySelector('.num-form__button');
    const minusSvg = numButton.querySelector('.num-form__svg-minus');




    const minusButton = document.querySelector('.button-minus')
    const plusButton = document.querySelector('.button-plus')



    minusButton.addEventListener('click', function () {
        input.stepDown();
        updateMinusColor();
    });

    plusButton.addEventListener('click', function () {
        input.stepUp();
        updateMinusColor();
    });

    function updateMinusColor() {
        if (Number(input.value) > 1) {
            minusSvg.style.color = '#303030'
            console.log("Черный")
        }
        else {
            minusSvg.style.color = '#c7c7c7'
            console.log("Серый")
        }
    }


    updateMinusColor();





});
