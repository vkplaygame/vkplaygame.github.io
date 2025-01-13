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

	async EventGame_Event1_Act18(runtime, localVars)
	{
		window.Sonar.show({ adUnit: "interstitial" });
	},

	async EventGame_Event54_Act12(runtime, localVars)
	{
		window.Sonar.show({ adUnit: "interstitial" });
	},

	async EventMenu_Event1_Act11(runtime, localVars)
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

