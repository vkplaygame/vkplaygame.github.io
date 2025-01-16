// Замените {APP_ID} на ваш реальный идентификатор приложения
var script = document.createElement('script');
script.src = "https://static.sonartech.io/lib/1.0.0/sonar.js?appId=app_43d206c9&isDebug=false"; 
document.head.appendChild(script);

// Инициализация SDK, когда скрипт загружен
script.onload = function() {
    sonar.init({
        appId: 'app_43d206c9', // Замените YOUR_APP_ID на ваш реальный ID
        isDebug: false
    });

    // Здесь вы можете добавить код для управления рекламой
};


const scriptsInEvents = {

	async Egame_Event17_Act4(runtime, localVars)
	{
		window.Sonar.show({ adUnit: "reward" });
	},

	async Egame_Event217_Act2(runtime, localVars)
	{
		window.Sonar.show({ adUnit: "interstitial" });
	},

	async Egame_Event239_Act8(runtime, localVars)
	{
		window.Sonar.show({ adUnit: "interstitial" });
	},

	async Egame_Event279_Act2(runtime, localVars)
	{
		window.Sonar.show({ adUnit: "interstitial" });
	},

	async Emenu_Event1_Act9(runtime, localVars)
	{
		// Код для показа баннерной рекламы внизу
		if (window.Sonar) {
		    window.Sonar.show({ adUnit: "banner", position: "bottom" });
		} else {
		    console.error("Sonar SDK не инициализирован.");
		}
	},

	async Emenu_Event2_Act1(runtime, localVars)
	{
		window.Sonar.show({ adUnit: "interstitial" });
	},

	async Emenu_Event3_Act1(runtime, localVars)
	{
		window.Sonar.show({ adUnit: "reward" });
	},

	async Eloader_Event1_Act10(runtime, localVars)
	{
		window.onload = function() {
		         sonar.init({
		             appId: '{app_454e73a0}',  // Убедитесь, что {APP_ID} заменен на ваш ID
		             isDebug: false,
		         });
		     };
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

