const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Text,
		C3.Behaviors.lunarray_LiteTween,
		C3.Behaviors.Fade,
		C3.Plugins.Spritefont2,
		C3.Plugins.Sprite,
		C3.Behaviors.Sin,
		C3.Plugins.Button,
		C3.Behaviors.scrollto,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Plugins.Arr,
		C3.Behaviors.Anchor,
		C3.Plugins.Touch,
		C3.Behaviors.Pin,
		C3.Plugins.Audio,
		C3.Plugins.Function,
		C3.Plugins.Particles,
		C3.Plugins.TiledBg,
		C3.Plugins.Browser,
		C3.Plugins.LocalStorage,
		C3.Plugins.Keyboard,
		C3.Plugins.Eponesh_GameScore,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Spritefont2.Acts.SetVisible,
		C3.Plugins.Browser.Acts.ExecJs,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.choose,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.SetGroupActive,
		C3.Behaviors.Pin.Acts.Pin,
		C3.Plugins.LocalStorage.Acts.CheckItemExists,
		C3.Plugins.System.Cnds.For,
		C3.Plugins.Arr.Cnds.ArrForEach,
		C3.Plugins.Arr.Acts.SetX,
		C3.Plugins.Arr.Exps.CurX,
		C3.Plugins.System.Exps.int,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Arr.Exps.At,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Sprite.Cnds.CompareFrame,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.LocalStorage.Cnds.OnItemExists,
		C3.Plugins.LocalStorage.Exps.ItemValue,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.Audio.Acts.FadeVolume,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Audio.Acts.SetPaused,
		C3.Plugins.System.Cnds.IsNaN,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Exps.Opacity,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.Particles.Acts.SetAngle,
		C3.Behaviors.lunarray_LiteTween.Acts.Start,
		C3.Behaviors.Fade.Acts.StartFade,
		C3.Plugins.Sprite.Exps.AnimationFrame,
		C3.Plugins.Particles.Acts.SetDefaultColor,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.System.Cnds.IsMobile,
		C3.Plugins.Sprite.Cnds.IsOverlappingOffset,
		C3.Plugins.Touch.Cnds.OnTouchStart,
		C3.Plugins.Touch.Exps.X,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetX,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Acts.SetY,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Acts.SetTimescale,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Eponesh_GameScore.Acts.AdsShowRewarded,
		C3.Plugins.Eponesh_GameScore.Cnds.OnAdsRewardedReward,
		C3.Plugins.System.Acts.AddVar,
		C3.Behaviors.Platform.Acts.SetEnabled,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Particles.Acts.Destroy,
		C3.Behaviors.lunarray_LiteTween.Acts.SetTarget,
		C3.Behaviors.Fade.Acts.SetFadeOutTime,
		C3.Plugins.Eponesh_GameScore.Acts.AdsShowFullscreen,
		C3.ScriptsInEvents.EventGame_Event61_Act11,
		C3.Plugins.Spritefont2.Cnds.CompareInstanceVar,
		C3.Plugins.LocalStorage.Acts.SetItem,
		C3.Plugins.Eponesh_GameScore.Acts.PlayerSetScore,
		C3.Plugins.Eponesh_GameScore.Exps.PlayerName,
		C3.Plugins.Eponesh_GameScore.Acts.PlayerSetName,
		C3.Plugins.Eponesh_GameScore.Acts.PlayerSync,
		C3.Plugins.Eponesh_GameScore.Acts.LeaderboardFetch,
		C3.Plugins.LocalStorage.Cnds.OnItemMissing,
		C3.Plugins.Eponesh_GameScore.Cnds.OnLeaderboardFetch,
		C3.Plugins.Spritefont2.Acts.SetText,
		C3.Plugins.Eponesh_GameScore.Cnds.LeaderboardEachPlayer,
		C3.Plugins.Spritefont2.Acts.AppendText,
		C3.Plugins.Eponesh_GameScore.Exps.LeaderboardCurPlayerPosition,
		C3.Plugins.Eponesh_GameScore.Exps.LeaderboardCurPlayerName,
		C3.Plugins.Eponesh_GameScore.Exps.LeaderboardCurPlayerScore,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Acts.SetCollisions,
		C3.Plugins.Spritefont2.Acts.SetScale,
		C3.Plugins.Spritefont2.Acts.SetCharacterSpacing,
		C3.Plugins.Text.Acts.SetFontSize,
		C3.Plugins.Text.Acts.SetFontColor,
		C3.Plugins.Sprite.Cnds.CompareOpacity,
		C3.Behaviors.solid.Acts.SetEnabled,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Function.Acts.CallFunction,
		C3.Plugins.Function.Cnds.OnFunction,
		C3.Plugins.TiledBg.Acts.SetWidth,
		C3.Plugins.TiledBg.Cnds.CompareWidth,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Eponesh_GameScore.Acts.LeaderboardOpen,
		C3.Plugins.Keyboard.Cnds.OnAnyKey,
		C3.Plugins.Button.Acts.SetCSSStyle,
		C3.Plugins.Button.Acts.SetPos,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.ScriptsInEvents.EventMenu_Event2_Act1,
		C3.Plugins.Audio.Acts.SetSilent,
		C3.Plugins.System.Acts.GoToLayoutByName,
		C3.Plugins.Sprite.Cnds.OnCreated,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Sprite.Exps.Height,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.Eponesh_GameScore.Acts.SocialsShare,
		C3.Plugins.Browser.Acts.GoToURLWindow
	];
};
self.C3_JsPropNameTable = [
	{ID: 0},
	{Y_lerp: 0},
	{LiteTween: 0},
	{Text2: 0},
	{Fade: 0},
	{Text4: 0},
	{Text6: 0},
	{reit: 0},
	{w: 0},
	{h: 0},
	{home: 0},
	{audioo: 0},
	{soundButton: 0},
	{pause: 0},
	{Угасание: 0},
	{Угасание2: 0},
	{Синусоид: 0},
	{restart: 0},
	{social: 0},
	{logogame: 0},
	{бан: 0},
	{вид: 0},
	{ScrollTo: 0},
	{Sprite: 0},
	{Block_destroy: 0},
	{Solid: 0},
	{Block: 0},
	{Position: 0},
	{Platform: 0},
	{Hero: 0},
	{Gen: 0},
	{Sprite2: 0},
	{Anchor: 0},
	{Black_ugly: 0},
	{Touch: 0},
	{Block_spawn: 0},
	{SpriteFont: 0},
	{Pin: 0},
	{SpriteFont2: 0},
	{pointer: 0},
	{Audio: 0},
	{Sprite3: 0},
	{SpriteFont3: 0},
	{Sprite4: 0},
	{Block_back: 0},
	{logo: 0},
	{highscore: 0},
	{score: 0},
	{touch2: 0},
	{strelka: 0},
	{Record: 0},
	{Function: 0},
	{Particles: 0},
	{Particles2: 0},
	{TiledBackground: 0},
	{TiledBackground2: 0},
	{Particles3: 0},
	{FireWork: 0},
	{FireWork2: 0},
	{amazing: 0},
	{Particles4: 0},
	{Browser: 0},
	{tap: 0},
	{ЛокальноеХранилище: 0},
	{Клавиатура: 0},
	{start: 0},
	{fon: 0},
	{Particles5: 0},
	{Particles6: 0},
	{Particles7: 0},
	{i: 0},
	{GamePush: 0},
	{vse: 0},
	{board: 0},
	{line: 0},
	{Ресурс: 0},
	{image: 0},
	{image2: 0},
	{Спрайт: 0},
	{ро: 0},
	{yes: 0},
	{no: 0},
	{LiteTween2: 0},
	{FButtons: 0},
	{wkala: 0},
	{over: 0},
	{Random_next: 0},
	{best: 0},
	{Game_sys: 0},
	{Y_des: 0},
	{Score: 0},
	{Score_smen: 0},
	{ID_old: 0},
	{ID_old_znac: 0},
	{Gen_visota: 0},
	{audio: 0},
	{A: 0},
	{sound: 0}
];

self.InstanceType = {
	Text2: class extends self.ITextInstance {},
	Text4: class extends self.ITextInstance {},
	Text6: class extends self.ITextInstance {},
	reit: class extends self.ISpriteFontInstance {},
	home: class extends self.ISpriteInstance {},
	audioo: class extends self.ISpriteInstance {},
	soundButton: class extends self.ISpriteInstance {},
	pause: class extends self.ISpriteInstance {},
	restart: class extends self.ISpriteInstance {},
	social: class extends self.ISpriteInstance {},
	logogame: class extends self.ISpriteInstance {},
	бан: class extends self.IButtonInstance {},
	вид: class extends self.IButtonInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Block: class extends self.ISpriteInstance {},
	Hero: class extends self.ISpriteInstance {},
	Gen: class extends self.IArrayInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Black_ugly: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	Block_spawn: class extends self.ISpriteInstance {},
	SpriteFont: class extends self.ISpriteFontInstance {},
	SpriteFont2: class extends self.ISpriteFontInstance {},
	pointer: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	SpriteFont3: class extends self.ISpriteFontInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Block_back: class extends self.ISpriteInstance {},
	logo: class extends self.ISpriteInstance {},
	highscore: class extends self.ISpriteInstance {},
	score: class extends self.ISpriteInstance {},
	touch2: class extends self.ISpriteInstance {},
	strelka: class extends self.ISpriteInstance {},
	Record: class extends self.ISpriteInstance {},
	Function: class extends self.IInstance {},
	Particles: class extends self.IParticlesInstance {},
	Particles2: class extends self.IParticlesInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	Particles3: class extends self.IParticlesInstance {},
	FireWork: class extends self.IParticlesInstance {},
	FireWork2: class extends self.IParticlesInstance {},
	amazing: class extends self.ISpriteInstance {},
	Particles4: class extends self.IParticlesInstance {},
	Browser: class extends self.IInstance {},
	tap: class extends self.ISpriteInstance {},
	ЛокальноеХранилище: class extends self.IInstance {},
	Клавиатура: class extends self.IInstance {},
	start: class extends self.ISpriteInstance {},
	fon: class extends self.ISpriteInstance {},
	Particles5: class extends self.IParticlesInstance {},
	Particles6: class extends self.IParticlesInstance {},
	Particles7: class extends self.IParticlesInstance {},
	i: class extends self.ISpriteInstance {},
	GamePush: class extends self.IInstance {},
	vse: class extends self.ISpriteInstance {},
	board: class extends self.ISpriteInstance {},
	line: class extends self.ISpriteInstance {},
	Ресурс: class extends self.ISpriteInstance {},
	image: class extends self.ISpriteInstance {},
	image2: class extends self.ISpriteInstance {},
	Спрайт: class extends self.ISpriteInstance {},
	ро: class extends self.ISpriteInstance {},
	yes: class extends self.ISpriteInstance {},
	no: class extends self.ISpriteInstance {},
	FButtons: class extends self.ISpriteInstance {}
}