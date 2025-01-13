
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
	
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
	// Code to run every tick
}
const app_454e73a0 = 'ваш_app_id'; // Замените на ваш реальный APP_ID

const script = document.createElement('script');
script.src = `https://static.sonartech.io/lib/1.0.0/sonar.js?appId=${app_454e73a0}&isDebug=true`;
document.head.appendChild(script);

script.onload = function() {
    // Инициализация SDK после успешной загрузки
    console.log("SDK успешно загружен");
    // Здесь добавьте вашу логику инициализации
};


const scriptsInEvents = {

	async Gamesheet_Event2_Act3(runtime, localVars)
	{
const app_454e73a0 = 'ваш_app_id'; // Замените на ваш реальный APP_ID

const script = document.createElement('script');
script.src = `https://static.sonartech.io/lib/1.0.0/sonar.js?appId=${app_454e73a0}&isDebug=true`;
document.head.appendChild(script);

script.onload = function() {
    // Инициализация SDK после успешной загрузки
    console.log("SDK успешно загружен");
    // Здесь добавьте вашу логику инициализации
};
	},

	async Gamesheet_Event3_Act3(runtime, localVars)
	{
		function showInterstitialAd() {
		    if (typeof AdSonar !== 'undefined' && typeof AdSonar.showInterstitial === 'function') {
		        AdSonar.showInterstitial();
		        console.log("Показ межстраничной рекламы");
		    } else {
		        console.error("AdSonar SDK не инициализирован или метод showInterstitial не доступен.");
		    }
		}
		
		// Вызов инициализации при загрузке
		window.addEventListener('load', initAdSonar);
		
		// Пример вызова показа рекламы, когда это необходимо
		document.getElementById('showAdButton').addEventListener('click', function() {
		    showInterstitialAd();
		});
	},

	async Gamesheet_Event4_Act3(runtime, localVars)
	{
		// Предположим, что вы добавляете этот код в событие JavaScript в Construct 3
		
		// Проверка, загружен ли скрипт
		if (typeof SonarTech !== 'undefined' && typeof SonarTech.init === 'function') {
		    SonarTech.init(); // Инициализация SDK
		    console.log("SDK успешно инициализирован"); // Подтверждение инициализации
		
		    // Здесь можно добавлять дополнительные действия с SDK
		    // Например:
		    // SonarTech.someOtherMethod();
		} else {
		    console.error("SDK не загружен или метод init не существует.");
		}
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

