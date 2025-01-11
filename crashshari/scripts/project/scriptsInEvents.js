


const scriptsInEvents = {

	async EventMenu_Event2_Act1(runtime, localVars)
	{
		if (typeof sonar !== 'undefined') {
		    // Пример вызова определенных функций SDK
		    sonar.initialize();
		    
		    // Опционально: добавьте обработчик события для загрузки рекламы
		    sonar.onLoaded(function() {
		        console.log("Реклама загружена");
		    });
		
		    sonar.onError(function(error) {
		        console.error("Ошибка при загрузке рекламы:", error);
		    });
		}
	},

	async EventMenu_Event2_Act3(runtime, localVars)
	{
		function showAd() {
		    if (typeof sonar !== 'undefined') {
		        sonar.showAd();
		    } else {
		        console.error("SDK Adsonar не загружен.");
		    }
		}
		
		// Пример: показать рекламу после завершения уровня
		levelCompleteEvent.on(function() {
		    showAd();
		});
	},

	async EventMenu_Event2_Act5(runtime, localVars)
	{
		// Функция для показа интерстициальной рекламы
		function showInterstitialAd() {
		    if (typeof sonar !== 'undefined') {
		        if (sonar.isAdReady('interstitial')) {  // Проверяем, готова ли реклама
		            sonar.showAd('interstitial', function() {
		                console.log("Интерстициальная реклама показана");
		            }, function(error) {
		                console.error("Ошибка при показе рекламы:", error);
		            });
		        } else {
		            console.log("Интерстициальная реклама не готова к показу");
		        }
		    } else {
		        console.error("SDK Adsonar не загружен");
		    }
		}
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

