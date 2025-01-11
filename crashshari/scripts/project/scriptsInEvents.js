


const scriptsInEvents = {

	async EventMenu_Event1_Act12(runtime, localVars)
	{
		// Ваша переменная с именем рекламного блока
		const rewardedAdUnitName = 'YOUR_REWARDED_AD_UNIT_NAME'; // Замените на вашу фактическую единицу рекламы
		
		// Проверка, существует ли объект Sonar и вызов показа рекламы
		if (window.Sonar) {
		    window.Sonar.show({ adUnit: rewardedAdUnitName });
		} else {
		    console.error('Объект Sonar не доступен. Убедитесь, что библиотека загружена.');
		}
	},

	async EventMenu_Event2_Act1(runtime, localVars)
	{
		// Ваша переменная с именем рекламного блока
		const rewardedAdUnitName = 'YOUR_REWARDED_AD_UNIT_NAME'; // Замените на вашу фактическую единицу рекламы
		
		// Проверка, существует ли объект Sonar и вызов показа рекламы
		if (window.Sonar) {
		    window.Sonar.show({ adUnit: rewardedAdUnitName });
		} else {
		    console.error('Объект Sonar не доступен. Убедитесь, что библиотека загружена.');
		}
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

