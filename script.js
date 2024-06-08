// Получаем элементы по их ID
const button = document.getElementById('myButton');
const display = document.getElementById('clickCount');

// Функция для загрузки сохраненного количества кликов
function loadClicks() {
    let savedClicks = localStorage.getItem('clickCount');
    if (savedClicks !== null) {
        return parseInt(savedClicks, 10);
    } else {
        return 0;
    }
}

// Инициализация счетчика кликов
let count = loadClicks();
display.textContent = count;

// Обработчик события клика по кнопке
button.addEventListener('click', function() { 
    count++; 
    display.textContent = count; 
    localStorage.setItem('clickCount', count);
});