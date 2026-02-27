window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav'); // У вас в CSS просто nav
    const services = document.querySelector('.services'); // Проверьте класс вашей черной секции!
    
    if (services) {
        const top = services.getBoundingClientRect().top;
        // Если верх черной секции дошел до верха экрана
        if (top <= 60) { 
            nav.classList.add('white-nav');
        } else {
            nav.classList.remove('white-nav');
        }
    }
});
