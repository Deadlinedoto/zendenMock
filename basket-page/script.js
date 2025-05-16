document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('.num-form__input');
    const minusButton = document.querySelector('.num-form__button');
    const minusSvg = minusButton.querySelector('.num-form__svg');

    function updateMinusButtonColor() {
        const val = parseInt(input.value, 10);
        minusSvg.style.color = (val <= 1) ? '#c7c7c7' : '#303030';
    }

    // Инициализация при загрузке
    updateMinusButtonColor();

    // Обновляем при изменении инпута (например, если input не readonly)
    input.addEventListener('change', updateMinusButtonColor);
});
