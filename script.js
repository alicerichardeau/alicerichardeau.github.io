
const square = document.querySelector('.square');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const val = scrolled * 0.5;
    square.style.transform = `translateX(${val * 0.45}%)`
});
