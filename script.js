window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav-container');
    const servicesSection = document.querySelector('.services-section'); // Убедитесь, что у черной секции такой класс
    
    // Получаем координаты черной секции
    const sectionTop = servicesSection.offsetTop;
    const sectionHeight = servicesSection.offsetHeight;
    const scrollPosition = window.scrollY;

    // Если мы прокрутили до черной секции, но еще не вышли из нее
    if (scrollPosition >= sectionTop - 50 && scrollPosition < (sectionTop + sectionHeight - 50)) {
        nav.classList.add('white-nav');
    } else {
        nav.classList.remove('white-nav');
    }
});
