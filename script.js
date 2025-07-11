// Мобильное меню
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Плавная прокрутка для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Скрываем мобильное меню при клике на ссылку
            mobileMenu.classList.add('hidden');
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Кнопка "Наверх"
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
    } else {
        backToTopButton.classList.remove('opacity-100', 'visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Анимация пузырьков
const bubbles = document.querySelectorAll('.bubble');

bubbles.forEach((bubble, index) => {
    // Устанавливаем случайные задержки для анимации
    bubble.style.animationDelay = `${index * 1000}ms`;
    
    // Случайное позиционирование для мобильных устройств
    if (window.innerWidth < 768) {
        bubble.style.left = `${Math.random() * 80}%`;
        bubble.style.top = `${Math.random() * 80}%`;
    }
});

// Анимация при наведении на кнопки "В корзину"
const addToCartButtons = document.querySelectorAll('.product-card button');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Анимация добавления в корзину
        this.innerHTML = '<i class="fas fa-check mr-2"></i>Добавлено';
        this.classList.remove('bg-fanta-orange', 'hover:bg-orange-600');
        this.classList.add('bg-green-500', 'hover:bg-green-600');
        
        // Возвращаем исходное состояние через 2 секунды
        setTimeout(() => {
            this.innerHTML = 'В корзину';
            this.classList.remove('bg-green-500', 'hover:bg-green-600');
            this.classList.add('bg-fanta-orange', 'hover:bg-orange-600');
        }, 2000);
    });
});