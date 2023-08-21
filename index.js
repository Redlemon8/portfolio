const mousemove = document.querySelector(".mousemove");



window.addEventListener("mousemove", (e) => {
     mousemove.style.left = e.pageX + "px";
     mousemove.style.top = e.pageY + "px";
});

document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('title');
    title.style.opacity = '0';
    title.style.transform = 'translateX(-150%)';

    setTimeout(() => {
        title.style.opacity = '1';
        title.style.transform = 'translateX(0)';
    }, 100);
});

document.addEventListener('DOMContentLoaded', () => {
    const move = document.getElementById('move');
    move.style.opacity = '0';
    move.style.transform = 'translateY(150%)';

    setTimeout(() => {
        move.style.opacity = '1';
        move.style.transform = 'translateY(0)';
    }, 100);
});

document.addEventListener('DOMContentLoaded', () => {
    const slide = document.getElementById('slide');
    slide.style.opacity = '0';
    slide.style.transform = 'translateX(150%)';

    setTimeout(() => {
        slide.style.opacity = '1';
        slide.style.transform = 'translateX(0)';
    }, 100);
});


