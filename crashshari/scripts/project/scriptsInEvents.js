var adsonarScript = document.createElement('script');
adsonarScript.src = 'https://static.sonartech.io/lib/1.0.0/sonar.js?appId={APP_ID}&isDebug=true'; // Замените на URL SDK Adsonar
document.head.appendChild(adsonarScript);


const scriptsInEvents = {

	async EventMenu_Event1_Act12(runtime, localVars)
	{
		var adsonarScript = document.createElement('script');
		adsonarScript.src = 'https://static.sonartech.io/lib/1.0.0/sonar.js?appId={APP_ID}&isDebug=true'; // Замените на URL SDK Adsonar
		document.head.appendChild(adsonarScript);
	},

	async EventMenu_Event1_Act13(runtime, localVars)
	{
		adsonarScript.onload = function() {
		    Adsonar.init({
		        appId: 'YOUR_APP_ID', // Замените на ваш App ID
		        testMode: true // Включите тестовый режим
		    });
		};
	},

	async EventMenu_Event2_Act1(runtime, localVars)
	{
		function showInterstitial() {
		    Adsonar.showInterstitial({
		        adUnitId: 'YOUR_AD_UNIT_ID', // Замените на ваш Ad Unit ID
		        onAdClosed: function() {
		            // Действия после закрытия рекламы
		        }
		    });
		}
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

