// Скрипт для смены цвета навигации
window.addEventListener('scroll', () => {
    // 1. Находим саму навигацию
    const nav = document.querySelector('nav'); 
    
    // 2. Находим черную секцию по классу .services
    const servicesSection = document.querySelector('.services'); 
    
    // Если черная секция существует на странице
    if (servicesSection) {
        // Получаем позицию верхней границы черной секции относительно экрана
        const sectionTop = servicesSection.getBoundingClientRect().top;
        
        // Когда верхняя граница секции оказывается выше 60px от верха экрана
        // (настройте это число под высоту вашего маргина навигации)
        if (sectionTop <= 60) {
            // Добавляем класс white-nav, который делает текст белым
            nav.classList.add('white-nav');
        } else {
            // Убираем класс, если мы выше черной секции
            nav.classList.remove('white-nav');
        }
    }
});
