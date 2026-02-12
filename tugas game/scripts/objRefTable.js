const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Physics,
		C3.Plugins.Keyboard,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Behaviors.Bullet,
		C3.Plugins.shadowlight,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.JavaScriptInEvents.EventSheet1_Event1_Act1,
		C3.Plugins.TiledBg.Acts.SetImageOffsetX,
		C3.Plugins.System.Exps.tickcount,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.JavaScriptInEvents.EventSheet1_Event2_Act1,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.SetTimescale,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Exps.X
	];
};
self.C3_JsPropNameTable = [
	{Physics: 0},
	{Sprite: 0},
	{Keyboard: 0},
	{TiledBackground: 0},
	{Solid: 0},
	{TiledBackground2: 0},
	{TiledBackground3: 0},
	{Sprite2: 0},
	{Bullet: 0},
	{bawah: 0},
	{atas: 0},
	{ShadowLight: 0},
	{Sprite3: 0},
	{Text: 0},
	{amba: 0},
	{score: 0},
	{error: 0},
	{posisi: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	TiledBackground3: class extends self.ITiledBackgroundInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	bawah: class extends self.ISpriteInstance {},
	atas: class extends self.ISpriteInstance {},
	ShadowLight: class extends self.IShadowLightInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {}
}