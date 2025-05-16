function changeColor(element) {
    const hotNameElements = document.querySelectorAll('.hot-name');
    hotNameElements.forEach(el => el.classList.remove('active'));
    element.classList.add('active');
}