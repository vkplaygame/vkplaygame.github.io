// Загрузка SDK
var script = document.createElement('script');
script.src = "https://cdn.tmads.xyz/tmadsSdk.js";
script.onload = function() {
    // Инициализация SDK после его загрузки
    if (typeof tmadsSdk !== 'undefined') {
        tmadsSdk.init({
            // Здесь вы можете указать параметры инициализации, если они необходимы
            apiKey: '622548a8faf2006904215d24894a9fbc' // Замените 'ваш_ключ_здесь' на ваш реальный ключ приложения
        });
        console.log("SDK успешно инициализирован");
    } else {
        console.error("Не удалось загрузить SDK");
    }
};
document.head.appendChild(script);


const scriptsInEvents = {

	async Emenu_Event1_Act9(runtime, localVars)
	{
		TMAds.checkInterstitialAd()
		  .then(()=>{
		    //interstitial ad preloaded
		  })
		  .catch(()=>{
		    //interstitial ad failed to preload (no fill, network issues etc)
		  });
	},

	async Emenu_Event2_Act1(runtime, localVars)
	{
		tmadsSdk.show('bottom');
	},

	async Emenu_Event2_Act2(runtime, localVars)
	{
		TMAds.showInterstitialAd()
		  .then(()=>{
		    //interstitial ad has been successfully shown and closed
		  })
		  .catch(()=>{
		    //interstitial ad failed to show (likely due to the network issues)
		  });
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

