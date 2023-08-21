
document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('title');
    title.style.opacity = '0';
    title.style.transform = 'translateX(-200%)';

    setTimeout(() => {
        title.style.opacity = '1';
        title.style.transform = 'translateX(0)';
    }, 100);
});

document.addEventListener('DOMContentLoaded', () => {
    const move = document.getElementById('move');
    move.style.opacity = '0';
    move.style.transform = 'translateY(200%)';

    setTimeout(() => {
        move.style.opacity = '1';
        move.style.transform = 'translateY(0)';
    }, 100);
});

document.addEventListener('DOMContentLoaded', () => {
    const slide = document.getElementById('slide');
    slide.style.opacity = '0';
    slide.style.transform = 'translateX(200%)';

    setTimeout(() => {
        slide.style.opacity = '1';
        slide.style.transform = 'translateX(0)';
    }, 100);
});


