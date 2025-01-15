// Загрузка SDK
var script = document.createElement('script');
script.src = "https://cdn.tmads.xyz/tmadsSdk.js";
script.onload = function() {
    // Инициализация SDK после его загрузки
    if (typeof tmadsSdk !== 'undefined') {
        tmadsSdk.setDebugMode(true); // Включение режима отладки
        tmadsSdk.init('622548a8faf2006904215d24894a9fbc'); // Ваш API ключ
        console.log("SDK успешно инициализирован");

        // Показ рекламы после инициализации, например внизу экрана
        
    } else {
        console.error("Не удалось загрузить SDK");
    }
};
document.head.appendChild(script);


const scriptsInEvents = {

	async Emenu_Event1_Act9(runtime, localVars)
	{
		TMAds.init('string 622548a8faf2006904215d24894a9fbc');
		
	},

	async Emenu_Event2_Act1(runtime, localVars)
	{
		// Проверка предварительной загрузки интерстициальной рекламы TMAds
		tmadsSdk.checkInterstitialAd()
		  .then(() => {
		    // Интерактивная реклама предварительно загружена, показываем её
		    tmadsSdk.show('interstitial');
		  })
		  .catch(() => {
		    // Ошибка предварительной загрузки рекламы
		    console.error("Не удалось предварительно загрузить интерстициальную рекламу (нет заполнения, проблемы с сетью и т.д.)");
		  });
	},

	async Emenu_Event2_Act3(runtime, localVars)
	{
		tmadsSdk.show('interstitial');
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

