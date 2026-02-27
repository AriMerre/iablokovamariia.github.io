document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav'); 
        const servicesSection = document.querySelector('.services'); 
        
        if (servicesSection && nav) {
            const sectionTop = servicesSection.getBoundingClientRect().top;
            
            // Если секция дошла до верха (с учетом отступа навигации 40px)
            if (sectionTop <= 60) {
                nav.classList.add('white-nav');
            } else {
                nav.classList.remove('white-nav');
            }
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    // Находим все элементы для анимации
    const revealTexts = document.querySelectorAll('.reveal-text');

    // Функция запуска
    const triggerReveal = () => {
        revealTexts.forEach((text, index) => {
            // Добавляем небольшую задержку для каждого следующего элемента
            setTimeout(() => {
                text.classList.add('active');
            }, index * 200); 
        });
    };

    // Запускаем через мгновение после загрузки
    setTimeout(triggerReveal, 300);
});
