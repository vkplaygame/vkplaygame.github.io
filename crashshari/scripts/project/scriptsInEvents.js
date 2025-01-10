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


const scriptsInEvents = {

	async EventMenu_Event1_Act12(runtime, localVars)
	{
		// Ваша переменная с именем рекламного блока
		const rewardedAdUnitName = 'YOUR_REWARDED_AD_UNIT_NAME'; // Замените на вашу фактическую единицу рекламы
		
		// Проверка, существует ли объект Sonar и вызов показа рекламы
		if (window.Sonar) {
		    window.Sonar.show({ adUnit: rewardedAdUnitName });
		} else {
		    console.error('Объект Sonar не доступен. Убедитесь, что библиотека загружена.');
		}
	},

	async EventMenu_Event2_Act1(runtime, localVars)
	{
		// Ваша переменная с именем рекламного блока
		const rewardedAdUnitName = 'YOUR_REWARDED_AD_UNIT_NAME'; // Замените на вашу фактическую единицу рекламы
		
		// Проверка, существует ли объект Sonar и вызов показа рекламы
		if (window.Sonar) {
		    window.Sonar.show({ adUnit: rewardedAdUnitName });
		} else {
		    console.error('Объект Sonar не доступен. Убедитесь, что библиотека загружена.');
		}
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

