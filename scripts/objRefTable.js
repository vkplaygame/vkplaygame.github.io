const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Browser,
		C3.Plugins.Touch,
		C3.Plugins.Sprite,
		C3.Behaviors.Sin,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Sprite.Cnds.CompareFrame,
		C3.Plugins.Sprite.Acts.StartAnim,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Browser.Acts.Close,
		C3.Plugins.Browser.Acts.GoToURLWindow
	];
};
self.C3_JsPropNameTable = [
	{Browser: 0},
	{Touch: 0},
	{Active: 0},
	{Width_Size: 0},
	{Height_Size: 0},
	{Button_Exit: 0},
	{Button_Fullscreen: 0},
	{Button_Twitter: 0},
	{Button_Up: 0},
	{Синусоида: 0},
	{PlayCVET: 0},
	{PlayDOL: 0},
	{chad_3b71654f3ad6485bb17a78023ebde3ae: 0},
	{Спрайт: 0},
	{Спрайт2: 0},
	{sdf: 0},
	{image: 0},
	{Спрайт3: 0},
	{image2: 0},
	{image3: 0},
	{image4: 0},
	{PrivacyCvetnoiBoom: 0},
	{PrivacyDolina: 0},
	{Buttons: 0}
];

self.InstanceType = {
	Browser: class extends self.IInstance {},
	Touch: class extends self.IInstance {},
	Button_Exit: class extends self.ISpriteInstance {},
	Button_Fullscreen: class extends self.ISpriteInstance {},
	Button_Twitter: class extends self.ISpriteInstance {},
	Button_Up: class extends self.ISpriteInstance {},
	PlayCVET: class extends self.ISpriteInstance {},
	PlayDOL: class extends self.ISpriteInstance {},
	chad_3b71654f3ad6485bb17a78023ebde3ae: class extends self.ISpriteInstance {},
	Спрайт: class extends self.ISpriteInstance {},
	Спрайт2: class extends self.ISpriteInstance {},
	sdf: class extends self.ISpriteInstance {},
	image: class extends self.ISpriteInstance {},
	Спрайт3: class extends self.ISpriteInstance {},
	image2: class extends self.ISpriteInstance {},
	image3: class extends self.ISpriteInstance {},
	image4: class extends self.ISpriteInstance {},
	PrivacyCvetnoiBoom: class extends self.ITextInstance {},
	PrivacyDolina: class extends self.ITextInstance {},
	Buttons: class extends self.ISpriteInstance {}
}