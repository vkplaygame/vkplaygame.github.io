// Замените {APP_ID} на ваш реальный идентификатор приложения
var script = document.createElement('script');
script.src = "https://static.sonartech.io/lib/1.0.0/sonar.js?appId=app_454e73a0&isDebug=true"; 
document.head.appendChild(script);

// Инициализация SDK, когда скрипт загружен
script.onload = function() {
    sonar.init({
        appId: 'app_454e73a0', // Замените YOUR_APP_ID на ваш реальный ID
        isDebug: true
    });

    // Здесь вы можете добавить код для управления рекламой
};


const scriptsInEvents = {

	async Gamesheet_Event2_Act5(runtime, localVars)
	{
		window.onload = function() {
		         sonar.init({
		             appId: '{app_454e73a0}',  // Убедитесь, что {APP_ID} заменен на ваш ID
		             isDebug: true,
		         });
		     };
	},

	async Gamesheet_Event3_Act6(runtime, localVars)
	{
		window.Sonar.show({ adUnit: "interstitial" });
	},

	async Gamesheet_Event4_Act2(runtime, localVars)
	{
		window.Sonar.show({ adUnit: "reward" });
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

