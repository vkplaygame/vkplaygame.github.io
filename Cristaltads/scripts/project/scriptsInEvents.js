


const scriptsInEvents = {

	async Egame_Event217_Act2(runtime, localVars)
	{
		// Попробуем инициировать и показать баннер
		try {
		    // Инициализация Adsgram и показ баннера
		    await window.Adsgram.init({ blockId: "int-7184" }).show();
		} catch (error) {
		    // Обработка ошибок: ничего не делаем или выполняем другие действия
		    console.error("Ошибка при показе рекламы:", error);
		}
	},

	async Egame_Event239_Act8(runtime, localVars)
	{
		// Попробуем инициировать и показать баннер
		try {
		    // Инициализация Adsgram и показ баннера
		    await window.Adsgram.init({ blockId: "int-7184" }).show();
		} catch (error) {
		    // Обработка ошибок: ничего не делаем или выполняем другие действия
		    console.error("Ошибка при показе рекламы:", error);
		}
	},

	async Egame_Event279_Act2(runtime, localVars)
	{
		// Попробуем инициировать и показать баннер
		try {
		    // Инициализация Adsgram и показ баннера
		    await window.Adsgram.init({ blockId: "int-7184" }).show();
		} catch (error) {
		    // Обработка ошибок: ничего не делаем или выполняем другие действия
		    console.error("Ошибка при показе рекламы:", error);
		}
	},

	async Emenu_Event1_Act12(runtime, localVars)
	{
		var script = document.createElement('script');
		script.src = "https://w.tads.me/widget.js";
		script.async = true;
		document.head.appendChild(script);
	},

	async Emenu_Event1_Act13(runtime, localVars)
	{
		// Вставьте div для рекламы
		const adContainer = document.createElement('div');
		adContainer.id = 'tads-container-308'; // Замените YOUR_WIDGET_ID на ваш ID
		document.body.appendChild(adContainer);
	},

	async Emenu_Event2_Act1(runtime, localVars)
	{
		document.addEventListener("DOMContentLoaded", function() {
		    const initTadsWidget = (id, debug, onShowReward, onClickReward, onAdsNotFound) => {
		        const adController = window.tads.init({ widgetId: id, debug: debug, onShowReward, onClickReward, onAdsNotFound });
		        adController.loadAd()
		            .then(() => adController.showAd())
		            .catch((result) => {
		                console.log(result);
		            });
		    };
		
		    // Callbacks
		    const onShowRewardCallback = (result) => {
		        console.log('Show ads, reward user:', result);
		    };
		
		    const onClickRewardCallback = (result) => {
		        console.log('Click on ad, reward user:', result);
		    };
		
		    const onAdsNotFound = () => {
		        console.log('Callback which calls if no ads found to show');
		    };
		
		    // Init widget by Widget ID
		    initTadsWidget('308', true, onShowRewardCallback, onClickRewardCallback, onAdsNotFound);
		});
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

