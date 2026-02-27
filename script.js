document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector('nav');
    const servicesSection = document.querySelector('.services');
    const revealTexts = document.querySelectorAll('.reveal-text');

    // --- 1. АНИМАЦИЯ ПОЯВЛЕНИЯ ТЕКСТА ---
    const triggerReveal = () => {
        revealTexts.forEach((text, index) => {
            setTimeout(() => {
                text.classList.add('active');
            }, index * 250); // Задержка между строчками
        });
    };
    
    // Запускаем через полсекунды после загрузки
    setTimeout(triggerReveal, 500);

    // --- 2. СМЕНА ЦВЕТА НАВИГАЦИИ ПРИ СКРОЛЛЕ ---
    window.addEventListener('scroll', () => {
        if (servicesSection && nav) {
            const rect = servicesSection.getBoundingClientRect();
            
            // Если верх черной секции коснулся верха экрана
            if (rect.top <= 50) { 
                nav.classList.add('white-nav');
            } else {
                nav.classList.remove('white-nav');
            }
        }
    });
});
