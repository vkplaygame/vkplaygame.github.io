


const scriptsInEvents = {

	async EventMenu_Event1_Act12(runtime, localVars)
	{
		// Инициализация Sonar
		window.onload = function() {
		    if (typeof sonar !== 'undefined') {
		        sonar.init({
		            appId: 'app_454e73a0',
		            isDebug: true
		        });
		        console.log("SDK Adsonar инициализирован");
		    } else {
		        console.error("Ошибка инициализации SDK Adsonar");
		    }
		};
	},

	async EventMenu_Event1_Act14(runtime, localVars)
	{
		window.showInterstitialAd = function() {
		    if (typeof sonar !== 'undefined') {
		        if (sonar.isAdReady('interstitial')) {
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
		};
	},

	async EventMenu_Event2_Act3(runtime, localVars)
	{
		function showInterstitialAd() {
		    if (typeof sonar !== 'undefined') {
		        if (sonar.isAdReady('interstitial')) {
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
		
		// Вызов функции для показа интерстициальной рекламы
		showInterstitialAd();
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

