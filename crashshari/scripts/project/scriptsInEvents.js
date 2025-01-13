var adsonarScript = document.createElement('script');
adsonarScript.src = 'https://static.sonartech.io/lib/1.0.0/sonar.js?appId={app_454e73a0}&isDebug=true'; // Замените на URL SDK Adsonar
document.head.appendChild(adsonarScript);


const scriptsInEvents = {

	async EventMenu_Event1_Act13(runtime, localVars)
	{
		var adsonarScript = document.createElement('script');
		adsonarScript.src = 'https://static.sonartech.io/lib/1.0.0/sonar.js?appId={app_454e73a0}&isDebug=true'; // Замените на URL SDK Adsonar
		document.head.appendChild(adsonarScript);
	},

	async EventMenu_Event1_Act14(runtime, localVars)
	{
		adsonarScript.onload = function() {
		    Adsonar.init({
		        appId: 'app_454e73a0', // Замените на ваш App ID
		        testMode: true // Включите тестовый режим
		    });
		};
	},

	async EventMenu_Event2_Act1(runtime, localVars)
	{
		function showInterstitial() {
		    Adsonar.showInterstitial({
		        adUnitId: 'interstitial', // Замените на ваш Ad Unit ID
		        onAdClosed: function() {
		            // Действия после закрытия рекламы
		        }
		    });
		}
	},

	async EventMenu_Event2_Act4(runtime, localVars)
	{
		showInterstitial();
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

