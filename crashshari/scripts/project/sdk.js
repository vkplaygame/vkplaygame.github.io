// Пример JavaScript-кода для вставки в Construct 3
const appId = 'YOUR_APP_ID'; // Замените 'YOUR_APP_ID' на ваш реальный идентификатор приложения

// Подключение внешнего скрипта
const script = document.createElement('script');
script.src = `https://static.sonartech.io/lib/1.0.0/sonar.js?appId=${appId}`;
document.head.appendChild(script);

// Ваш дополнительный код, который будет выполняться после загрузки скрипта
script.onload = function() {
    console.log('Скрипт загружен и готов к использованию');
    // Дополнительная логика после загрузки
};