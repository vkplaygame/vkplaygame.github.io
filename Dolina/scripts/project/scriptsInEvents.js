// Замените {APP_ID} на ваш реальный идентификатор приложения
var script = document.createElement('script');
script.src = "https://static.sonartech.io/lib/1.0.0/sonar.js?appId=app_43d206c9&isDebug=true"; 
document.head.appendChild(script);

// Инициализация SDK, когда скрипт загружен
script.onload = function() {
    sonar.init({
        appId: 'app_43d206c9', // Замените YOUR_APP_ID на ваш реальный ID
        isDebug: true
    });

    // Здесь вы можете добавить код для управления рекламой
};


const scriptsInEvents = {

	async Egame_Event17_Act4(runtime, localVars)
	{
		window.Sonar.show({ adUnit: "reward" });
	},

	async Egame_Event18(runtime, localVars)
	{
		// Код для обработки успешного получения вознаграждения
		if (window.Sonar) {
		    function onRewardSuccess() {
		        // Устанавливаем глобальную переменную "rew" в значение 1
		        window.rew = 1;
		        console.log("Вознаграждение успешно получено.");
		    }
		
		    // Ваша функция для обработки вознаграждения
		    const onReward = () => {
		        // Обработайте выдачу вознаграждения пользователю (например, разблокировка контента или внутриигровой валюты)
		        onRewardSuccess(); // Вызов функции для обработки вознаграждения
		    };
		
		    // Здесь вы можете вызвать onReward() в нужный момент, когда вознаграждение успешно получено
		} else {
		    console.error("Sonar SDK не инициализирован.");
		}
	},

	async Egame_Event218_Act2(runtime, localVars)
	{
		window.Sonar.show({ adUnit: "interstitial" });
	},

	async Egame_Event240_Act8(runtime, localVars)
	{
		window.Sonar.show({ adUnit: "interstitial" });
	},

	async Egame_Event280_Act2(runtime, localVars)
	{
		window.Sonar.show({ adUnit: "interstitial" });
	},

	async Emenu_Event1_Act7(runtime, localVars)
	{
		// Код для показа баннерной рекламы внизу
		if (window.Sonar) {
		    window.Sonar.show({ adUnit: "banner", position: "bottom" });
		} else {
		    console.error("Sonar SDK не инициализирован.");
		}
	},

	async Eloader_Event1_Act10(runtime, localVars)
	{
		window.onload = function() {
		         sonar.init({
		             appId: '{app_454e73a0}',  // Убедитесь, что {APP_ID} заменен на ваш ID
		             isDebug: true,
		         });
		     };
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

